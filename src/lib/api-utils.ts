import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "axonerp-secret-key";

export function getTokenFromRequest(request: NextRequest): string | null {
  const authHeader = request.headers.get("authorization");
  if (authHeader?.startsWith("Bearer ")) {
    return authHeader.split(" ")[1];
  }
  return null;
}

export function verifyAuth(request: NextRequest) {
  const token = getTokenFromRequest(request);
  if (!token) {
    return { authenticated: false, error: "No token provided" };
  }
  try {
    const payload = jwt.verify(token, JWT_SECRET);
    return { authenticated: true, payload };
  } catch {
    return { authenticated: false, error: "Invalid token" };
  }
}

export function apiError(message: string, status: number = 400) {
  return NextResponse.json({ error: message }, { status });
}

export function apiSuccess(data: unknown, status: number = 200) {
  return NextResponse.json(data, { status });
}
