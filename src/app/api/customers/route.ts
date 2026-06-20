import { NextRequest } from "next/server";
import { verifyAuth, apiError, apiSuccess } from "@/lib/api-utils";
import { prisma } from "@/lib/prisma";

export async function GET(request: NextRequest) {
  const auth = verifyAuth(request);
  if (!auth.authenticated) return apiError("Unauthorized", 401);
  const companyId = (auth.payload as { companyId: string }).companyId;

  const customers = await prisma.customer.findMany({
    where: { companyId, isActive: true },
    orderBy: { createdAt: "desc" },
  });

  return apiSuccess(customers);
}

export async function POST(request: NextRequest) {
  const auth = verifyAuth(request);
  if (!auth.authenticated) return apiError("Unauthorized", 401);
  const companyId = (auth.payload as { companyId: string }).companyId;

  const body = await request.json();
  const { name, email, phone, address, city, country, creditLimit, taxNumber, ntn, openingBalance } = body;

  if (!name) return apiError("Customer name is required");

  const code = `CUS-${Date.now().toString(36).toUpperCase()}`;

  const customer = await prisma.customer.create({
    data: {
      companyId, name, code, email, phone, address, city, country,
      creditLimit, taxNumber, ntn,
      openingBalance: openingBalance || 0,
      currentBalance: openingBalance || 0,
    },
  });

  return apiSuccess(customer, 201);
}

export async function PUT(request: NextRequest) {
  const auth = verifyAuth(request);
  if (!auth.authenticated) return apiError("Unauthorized", 401);

  const body = await request.json();
  const { id, ...data } = body;
  if (!id) return apiError("Customer ID is required");

  const customer = await prisma.customer.update({ where: { id }, data });
  return apiSuccess(customer);
}

export async function DELETE(request: NextRequest) {
  const auth = verifyAuth(request);
  if (!auth.authenticated) return apiError("Unauthorized", 401);

  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  if (!id) return apiError("Customer ID is required");

  await prisma.customer.update({ where: { id }, data: { isActive: false } });
  return apiSuccess({ message: "Customer deactivated" });
}
