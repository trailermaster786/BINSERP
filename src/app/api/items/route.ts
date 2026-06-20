import { NextRequest } from "next/server";
import { verifyAuth, apiError, apiSuccess } from "@/lib/api-utils";
import { prisma } from "@/lib/prisma";

export async function GET(request: NextRequest) {
  const auth = verifyAuth(request);
  if (!auth.authenticated) return apiError("Unauthorized", 401);
  const companyId = (auth.payload as { companyId: string }).companyId;

  const items = await prisma.item.findMany({
    where: { companyId, isActive: true },
    orderBy: { createdAt: "desc" },
  });

  return apiSuccess(items);
}

export async function POST(request: NextRequest) {
  const auth = verifyAuth(request);
  if (!auth.authenticated) return apiError("Unauthorized", 401);
  const companyId = (auth.payload as { companyId: string }).companyId;

  const body = await request.json();
  const { name, code, description, category, type, unitOfMeasure, costPrice, salePrice, taxRate, barcode, reorderLevel } = body;

  if (!name || !unitOfMeasure || costPrice === undefined || salePrice === undefined) {
    return apiError("Name, unitOfMeasure, costPrice, and salePrice are required");
  }

  const item = await prisma.item.create({
    data: {
      companyId, name, code: code || `ITM-${Date.now().toString(36).toUpperCase()}`,
      description, category, type: type || "product", unitOfMeasure,
      costPrice, salePrice, taxRate: taxRate || 0, barcode, reorderLevel,
    },
  });

  return apiSuccess(item, 201);
}

export async function PUT(request: NextRequest) {
  const auth = verifyAuth(request);
  if (!auth.authenticated) return apiError("Unauthorized", 401);

  const body = await request.json();
  const { id, ...data } = body;
  if (!id) return apiError("Item ID is required");

  const item = await prisma.item.update({ where: { id }, data });
  return apiSuccess(item);
}

export async function DELETE(request: NextRequest) {
  const auth = verifyAuth(request);
  if (!auth.authenticated) return apiError("Unauthorized", 401);

  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  if (!id) return apiError("Item ID is required");

  await prisma.item.update({ where: { id }, data: { isActive: false } });
  return apiSuccess({ message: "Item deactivated" });
}
