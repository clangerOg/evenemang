import authConfig from "@/auth.config";
import { db } from "@/server/db";
import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";

export const {
  auth,
  handlers: { GET, POST },
  handlers,
  signIn,
  signOut,
} = NextAuth({
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
});
