import { db } from "../db";

export async function getUserByEmail(email: string) {
  const existingUser = await db.user.findUnique({
    where: {
      email,
    },
  });

  return existingUser;
}
