import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
    const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
    cookieName:
        process.env.NODE_ENV === 'production'
        ? '__Secure-next-auth.session-token'
        : 'next-auth.session-token',
    });
    
    console.log("TOKEN FROM MIDDLEWARE:", token);
    console.log("Onboarded:", token?.onboarded);

    const url = request.nextUrl;

    if (token && token.onboarded && url.pathname === "/onboarding") {
        return NextResponse.redirect(new URL("/dashboard", request.url));
    }
    if (url.pathname !== "/onboarding" && token && token.onboarded === false) {
        return NextResponse.redirect(new URL("/onboarding", request.url));
    }

    if (url.pathname === "/sign-in" && token) {
        return NextResponse.redirect(new URL("/dashboard", request.url));
    }

    if (
        url.pathname === "/dashboard" ||
        url.pathname.startsWith("/profile") ||
        url.pathname === "/onboarding"
    ) {
        if (!token) {
            return NextResponse.redirect(new URL("/", request.url));
        }
        return NextResponse.next();
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/dashboard/:path*", "/onboarding", "/sign-in", "/profile/:path*", "/"],
};
