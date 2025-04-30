import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import { Session } from "next-auth";
import clientPromise from "../../../../lib/db";
import bcrypt from "bcryptjs";
// app/api/auth/[...nextauth]/route.ts

import { authOptions } from "@/lib/auth";




interface User {
  id: string;
  email?: string | null;
  name?: string | null;
  image?: string | null;
}

// Define authOptions but do not export it

// Export only the handler for Next.js
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
