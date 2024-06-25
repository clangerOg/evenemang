import { loginSchema } from "@/lib/schema";
import { digestPassword } from "@/lib/utils";
import { getUserByEmail } from "@/server/service/user";
import bcrypt from "bcryptjs";
import { type NextAuthConfig } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default {
  providers: [
    CredentialsProvider({
      name: "credentials",
      async authorize(credentials) {
        const result = loginSchema.safeParse(credentials);

        if (!result.success) {
          return null;
        }

        const { email, password } = result.data;

        const user = await getUserByEmail(email);

        if (!user) {
          console.log("User not found");
          return null;
        }

        if (!user?.password) {
          return null;
        }

        const digestedPassword = await digestPassword(password);

        const passwordsMatch = await bcrypt.compare(
          digestedPassword,
          user.password,
        );

        if (passwordsMatch) {
          console.log("Passwords match");
          return {
            ...user,
            image:
              user.image ??
              "https://avatars.githubusercontent.com/u/135615964?v=4&size=256",
          };
        }

        console.log("Passwords do not match");

        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
