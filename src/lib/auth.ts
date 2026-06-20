import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "axonerp-secret-key";

export interface AuthPayload {
  userId: string;
  email: string;
  companyId: string;
  roleId: string;
}

export function signToken(payload: AuthPayload): string {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: "7d" });
}

export function verifyToken(token: string): AuthPayload {
  return jwt.verify(token, JWT_SECRET) as AuthPayload;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Public API routes that don't need auth
  const publicPaths = [
    "/api/auth/login",
    "/api/auth/register",
    "/api/contact",
  ];

  if (publicPaths.includes(pathname)) {
    return NextResponse.next();
  }

  // Protect all other API routes
  if (pathname.startsWith("/api/")) {
    const authHeader = request.headers.get("authorization");
    if (!authHeader?.startsWith("Bearer ")) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    try {
      const token = authHeader.split(" ")[1];
      verifyToken(token);
      return NextResponse.next();
    } catch {
      return NextResponse.json(
        { error: "Invalid token" },
        { status: 401 }
      );
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/api/:path*"],
};
