import { env } from "@/env";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Hashes the input password with a secret key from the server. This is used to
 * prevent rainbow table attacks. The secret key is stored in the environment
 * variables. The password is hashed using the SHA-256 algorithm and encoded in
 * hexadecimal.
 *
 * @param input - The password to hash.
 * @returns The hashed password.
 */
export async function digestPassword(input: string): Promise<string> {
  // const peppered = input + env.SECRET_AUTH_KEY;
  // const hashed = await crypto
  //   .createHash("sha256")
  //   .update(peppered)
  //   .digest("hex");

  // return hashed;
  const peppered = input + env.SECRET_AUTH_KEY;

  // Encode the string as a Uint8Array
  const encoder = new TextEncoder();
  const data = encoder.encode(peppered);

  // Hash the data using SHA-256
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);

  // Convert the hash to a hexadecimal string
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashed = hashArray
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");

  return hashed;
}
