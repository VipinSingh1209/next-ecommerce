import { NextResponse } from "next/server"
import { jwtVerify } from "jose"
import { USER_DASHBOARD, WEBSITE_LOGIN } from "./routes/WebsiteRoute"
import { ADMIN_DASHBOARD } from "./routes/AdminPanelRoute"

const PUBLIC_AUTH_ROUTES = ['/auth/login', '/auth/register', '/auth/reset-password']

export async function middleware(request) {
    const pathname = request.nextUrl.pathname

    try {
        const tokenCookie = request.cookies.get('access_token')
        const access_token = tokenCookie?.value

        // If no token and requesting a public auth route, allow it
        if (!access_token && PUBLIC_AUTH_ROUTES.includes(pathname)) {
            return NextResponse.next()
        }

        // If no token and trying to access protected route → redirect to login
        if (!access_token) {
            return NextResponse.redirect(new URL(WEBSITE_LOGIN, request.nextUrl))
        }

        // Verify token
        const { payload } = await jwtVerify(
            access_token,
            new TextEncoder().encode(process.env.SECRET_KEY)
        )

        const role = payload.role

        // If already logged in and trying to access /auth routes → redirect to dashboard
        if (pathname.startsWith('/auth')) {
            return NextResponse.redirect(new URL(role === 'admin' ? ADMIN_DASHBOARD : USER_DASHBOARD, request.nextUrl))
        }

        // Protect admin routes
        if (pathname.startsWith('/admin') && role !== 'admin') {
            return NextResponse.redirect(new URL(WEBSITE_LOGIN, request.nextUrl))
        }

        // Protect user routes
        if (pathname.startsWith('/my-account') && role !== 'user') {
            return NextResponse.redirect(new URL(WEBSITE_LOGIN, request.nextUrl))
        }

        return NextResponse.next()

    } catch (error) {
        console.error("Middleware error:", error)
        return NextResponse.redirect(new URL(WEBSITE_LOGIN, request.nextUrl))
    }
}

export const config = {
  matcher: [
    '/admin/:path*',
    '/my-account/:path*',
    '/auth/:path*'
  ]
}
