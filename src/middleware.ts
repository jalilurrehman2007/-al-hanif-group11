import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/admin/login") {
    return NextResponse.next();
  }

  const correct = process.env.ADMIN_PASSWORD?.trim();
  const cookie = request.cookies.get("admin_auth")?.value;

  if (!correct || !cookie || cookie !== correct) {
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
