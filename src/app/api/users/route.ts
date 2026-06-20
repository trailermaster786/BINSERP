import { NextRequest } from "next/server";
import { verifyAuth, apiError, apiSuccess } from "@/lib/api-utils";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function GET(request: NextRequest) {
  const auth = verifyAuth(request);
  if (!auth.authenticated) return apiError("Unauthorized", 401);

  const { searchParams } = new URL(request.url);
  const roleId = searchParams.get("roleId");

  const where = { companyId: (auth.payload as { companyId: string }).companyId, ...(roleId ? { roleId } : {}) };

  const users = await prisma.user.findMany({
    where,
    select: {
      id: true, name: true, email: true, phone: true, isActive: true,
      lastLogin: true, createdAt: true,
      role: { select: { id: true, name: true } },
    },
    orderBy: { createdAt: "desc" },
  });

  return apiSuccess(users);
}

export async function POST(request: NextRequest) {
  const auth = verifyAuth(request);
  if (!auth.authenticated) return apiError("Unauthorized", 401);

  const body = await request.json();
  const { name, email, password, phone, roleId } = body;

  if (!name || !email || !password || !roleId) {
    return apiError("Name, email, password, and roleId are required");
  }

  const hashedPassword = await bcrypt.hash(password, 12);
  const companyId = (auth.payload as { companyId: string }).companyId;

  const user = await prisma.user.create({
    data: {
      name, email, password: hashedPassword, phone, companyId, roleId,
    },
    select: {
      id: true, name: true, email: true, phone: true, isActive: true, createdAt: true,
      role: { select: { id: true, name: true } },
    },
  });

  return apiSuccess(user, 201);
}

export async function PUT(request: NextRequest) {
  const auth = verifyAuth(request);
  if (!auth.authenticated) return apiError("Unauthorized", 401);

  const body = await request.json();
  const { id, name, email, phone, roleId, isActive } = body;

  if (!id) return apiError("User ID is required");

  const user = await prisma.user.update({
    where: { id },
    data: { name, email, phone, roleId, isActive },
    select: {
      id: true, name: true, email: true, phone: true, isActive: true, createdAt: true,
      role: { select: { id: true, name: true } },
    },
  });

  return apiSuccess(user);
}

export async function DELETE(request: NextRequest) {
  const auth = verifyAuth(request);
  if (!auth.authenticated) return apiError("Unauthorized", 401);

  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  if (!id) return apiError("User ID is required");

  await prisma.user.update({
    where: { id },
    data: { isActive: false },
  });

  return apiSuccess({ message: "User deactivated" });
}
