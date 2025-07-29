import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import authConfig from "./auth.config"
import { prisma } from "@/lib/prisma"

// Extend the session user type to include role
declare module "next-auth" {
  interface Session {
    user: {
      id: string
      email: string
      name?: string | null
      role: string
    }
  }
}

export const {
  handlers,
  auth,
  signIn,
  signOut
} = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  ...authConfig,
  callbacks: {
    async session({ token, session }) {
      if (token.sub && session.user) {
        session.user.id = token.sub
      }

      if (token.role && session.user) {
        session.user.role = token.role as string
      }

      return session
    },
    async jwt({ token }) {
      if (!token.sub) return token

      const existingUser = await prisma.user.findUnique({
        where: { id: token.sub }
      })

      if (!existingUser) return token

      token.role = existingUser.role

      return token
    }
  }
})