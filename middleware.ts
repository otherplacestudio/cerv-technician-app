import NextAuth from "next-auth"
import authConfig from "./src/lib/auth.config"

const { auth } = NextAuth(authConfig)

export default auth((req) => {
  const { nextUrl } = req
  const isLoggedIn = !!req.auth
  
  const isAuthRoute = nextUrl.pathname.startsWith("/auth")
  const isPublicRoute = nextUrl.pathname === "/" || nextUrl.pathname.startsWith("/api/auth")
  const isProtectedRoute = !isAuthRoute && !isPublicRoute

  if (isAuthRoute) {
    if (isLoggedIn) {
      return Response.redirect(new URL("/dashboard", nextUrl))
    }
    return null
  }

  if (isProtectedRoute && !isLoggedIn) {
    return Response.redirect(new URL("/auth/login", nextUrl))
  }

  return null
})

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"]
}