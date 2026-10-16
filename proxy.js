import { NextResponse } from "next/server";

export function proxy(request) {
  const userIdCookie = request.cookies.get("diag_user_id");
  if (!userIdCookie?.value) {
    return NextResponse.redirect(new URL("/onboarding/step-1", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};