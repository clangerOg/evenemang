"use server";

import { signIn, signOut } from "@/auth";
import { loginSchema, registerSchema } from "@/lib/schema";
import { DEFAULT_LOGIN_REDIRECT } from "@/server/auth/routes";
import bcrypt from "bcryptjs";
import { AuthError } from "next-auth";
import type { z } from "zod";
import { ActionResult } from ".";
import { db } from "../db";
import { getUserByEmail } from "../service/user";

export async function login(
  values: z.infer<typeof loginSchema>,
): Promise<ActionResult<NonNullable<unknown>>> {
  const result = loginSchema.safeParse(values);

  if (!result.success) {
    return {
      success: false,
      error: "Password or email do not satisfy the requirements.",
      message: "Password or email do not satisfy the requirements.",
    };
  }

  const { email, password } = values;

  const existingUser = await getUserByEmail(email);

  if (!existingUser) {
    return {
      success: false,
      error: "No user with this email address could be found.",
      message: "No user with this email address could be found.",
    };
  }

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
    return { success: true, data: {} };
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return {
            success: false,
            error: "Invalid credentials",
            message: "Invalid credentials",
          };
        default:
          return {
            success: false,
            error: "An error occurred",
            // TODO: Add custom error for when invalid credentials are provided
            message: "Password and email do not match. Please try again.",
          };
      }
    }
    throw error;
  }
}

export async function register(
  values: z.infer<typeof registerSchema>,
): Promise<ActionResult<NonNullable<unknown>>> {
  const result = registerSchema.safeParse(values);

  if (!result.success) {
    return {
      success: false,
      error: "Password or email do not satisfy the requirements.",
      message: "Password or email do not satisfy the requirements.",
    };
  }

  const { email, password, name } = values;

  // TODO: Add password pepper with secret server key
  // const digestedPassword = await digestPassword(password);
  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return {
      success: false,
      error: "An existing account already exists with this email address.",
      message: "An existing account already exists with this email address.",
    };
  }

  try {
    await db.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    return { success: true, data: {} };
  } catch (error) {
    return {
      success: false,
      error: "An unexpected error occurred. Please try again.",
      message: "An unexpected error occurred. Please try again.",
    };
  }
}

export async function logout() {
  await signOut();
}
