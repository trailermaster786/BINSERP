import { NextRequest } from "next/server";
import { verifyAuth, apiError, apiSuccess } from "@/lib/api-utils";
import { prisma } from "@/lib/prisma";

export async function GET(request: NextRequest) {
  const auth = verifyAuth(request);
  if (!auth.authenticated) return apiError("Unauthorized", 401);
  const companyId = (auth.payload as { companyId: string }).companyId;

  const invoices = await prisma.salesInvoice.findMany({
    where: { companyId },
    include: {
      customer: { select: { id: true, name: true } },
      items: true,
    },
    orderBy: { createdAt: "desc" },
  });

  return apiSuccess(invoices);
}

export async function POST(request: NextRequest) {
  const auth = verifyAuth(request);
  if (!auth.authenticated) return apiError("Unauthorized", 401);
  const companyId = (auth.payload as { companyId: string }).companyId;
  const createdBy = (auth.payload as { userId: string }).userId;

  const body = await request.json();
  const { customerId, items, discountAmount, projectId } = body;

  if (!customerId || !items?.length) return apiError("Customer and items are required");

  const invoiceNumber = `INV-${Date.now().toString(36).toUpperCase()}`;

  let subtotal = 0;
  let taxAmount = 0;
  for (const item of items) {
    const amount = item.quantity * item.rate;
    subtotal += amount;
    taxAmount += amount * ((item.taxRate || 0) / 100);
  }

  const totalAmount = subtotal + taxAmount - (discountAmount || 0);

  const invoice = await prisma.salesInvoice.create({
    data: {
      companyId, invoiceNumber, date: new Date(),
      dueDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
      customerId, subtotal, taxAmount, totalAmount,
      discountAmount: discountAmount || 0, projectId, createdBy,
      items: {
        create: items.map((item: { itemId: string; description: string; quantity: number; unit: string; rate: number; taxRate?: number }) => ({
          itemId: item.itemId, description: item.description,
          quantity: item.quantity, unit: item.unit, rate: item.rate,
          amount: item.quantity * item.rate,
          taxRate: item.taxRate || 0,
          taxAmount: item.quantity * item.rate * ((item.taxRate || 0) / 100),
        })),
      },
    },
    include: { items: true, customer: { select: { name: true } } },
  });

  return apiSuccess(invoice, 201);
}

export async function PUT(request: NextRequest) {
  const auth = verifyAuth(request);
  if (!auth.authenticated) return apiError("Unauthorized", 401);

  const body = await request.json();
  const { id, status, paymentStatus, fbrInvoiceNumber, fbrStatus } = body;
  if (!id) return apiError("Invoice ID is required");

  const invoice = await prisma.salesInvoice.update({
    where: { id },
    data: { status, paymentStatus, fbrInvoiceNumber, fbrStatus },
  });

  return apiSuccess(invoice);
}
