import { NextRequest } from "next/server";
import { verifyAuth, apiError, apiSuccess } from "@/lib/api-utils";
import { prisma } from "@/lib/prisma";

export async function GET(request: NextRequest) {
  const auth = verifyAuth(request);
  if (!auth.authenticated) return apiError("Unauthorized", 401);
  const companyId = (auth.payload as { companyId: string }).companyId;

  const vendors = await prisma.vendor.findMany({
    where: { companyId, isActive: true },
    orderBy: { createdAt: "desc" },
  });

  return apiSuccess(vendors);
}

export async function POST(request: NextRequest) {
  const auth = verifyAuth(request);
  if (!auth.authenticated) return apiError("Unauthorized", 401);
  const companyId = (auth.payload as { companyId: string }).companyId;

  const body = await request.json();
  const { name, email, phone, address, city, country, taxNumber, ntn, paymentTerms, openingBalance } = body;

  if (!name) return apiError("Vendor name is required");

  const code = `VND-${Date.now().toString(36).toUpperCase()}`;

  const vendor = await prisma.vendor.create({
    data: {
      companyId, name, code, email, phone, address, city, country,
      taxNumber, ntn, paymentTerms,
      openingBalance: openingBalance || 0,
      currentBalance: openingBalance || 0,
    },
  });

  return apiSuccess(vendor, 201);
}

export async function PUT(request: NextRequest) {
  const auth = verifyAuth(request);
  if (!auth.authenticated) return apiError("Unauthorized", 401);

  const body = await request.json();
  const { id, ...data } = body;
  if (!id) return apiError("Vendor ID is required");

  const vendor = await prisma.vendor.update({ where: { id }, data });
  return apiSuccess(vendor);
}

export async function DELETE(request: NextRequest) {
  const auth = verifyAuth(request);
  if (!auth.authenticated) return apiError("Unauthorized", 401);

  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  if (!id) return apiError("Vendor ID is required");

  await prisma.vendor.update({ where: { id }, data: { isActive: false } });
  return apiSuccess({ message: "Vendor deactivated" });
}
