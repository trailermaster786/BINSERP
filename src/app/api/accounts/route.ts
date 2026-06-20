import { NextRequest } from "next/server";
import { verifyAuth, apiError, apiSuccess } from "@/lib/api-utils";
import { prisma } from "@/lib/prisma";

export async function GET(request: NextRequest) {
  const auth = verifyAuth(request);
  if (!auth.authenticated) return apiError("Unauthorized", 401);
  const companyId = (auth.payload as { companyId: string }).companyId;

  const accounts = await prisma.chartOfAccount.findMany({
    where: { companyId },
    orderBy: { code: "asc" },
  });

  return apiSuccess(accounts);
}

export async function POST(request: NextRequest) {
  const auth = verifyAuth(request);
  if (!auth.authenticated) return apiError("Unauthorized", 401);
  const companyId = (auth.payload as { companyId: string }).companyId;

  const body = await request.json();
  const { code, name, type, parentAccountId, level, isGroup, openingBalance } = body;

  if (!code || !name || !type) return apiError("Code, name, and type are required");

  const account = await prisma.chartOfAccount.create({
    data: {
      companyId, code, name, type,
      parentAccountId, level: level || 0, isGroup: isGroup || false,
      openingBalance: openingBalance || 0, currentBalance: openingBalance || 0,
    },
  });

  return apiSuccess(account, 201);
}

export async function PUT(request: NextRequest) {
  const auth = verifyAuth(request);
  if (!auth.authenticated) return apiError("Unauthorized", 401);

  const body = await request.json();
  const { id, ...data } = body;
  if (!id) return apiError("Account ID is required");

  const account = await prisma.chartOfAccount.update({ where: { id }, data });
  return apiSuccess(account);
}

export async function DELETE(request: NextRequest) {
  const auth = verifyAuth(request);
  if (!auth.authenticated) return apiError("Unauthorized", 401);

  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  if (!id) return apiError("Account ID is required");

  await prisma.chartOfAccount.update({ where: { id }, data: { isActive: false } });
  return apiSuccess({ message: "Account deactivated" });
}
