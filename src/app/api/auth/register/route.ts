import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { signToken } from "@/lib/auth";
import bcrypt from "bcryptjs";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, password, phone, companyName, numberOfUsers } = body;

    if (!name || !email || !password || !companyName) {
      return Response.json(
        { error: "Name, email, password, and company name are required" },
        { status: 400 }
      );
    }

    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return Response.json(
        { error: "User with this email already exists" },
        { status: 409 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const company = await prisma.company.create({
      data: {
        name: companyName,
        subscriptionPlan: "free_trial",
        subscriptionExpiry: new Date(Date.now() + 6 * 24 * 60 * 60 * 1000),
      },
    });

    const role = await prisma.role.create({
      data: {
        companyId: company.id,
        name: "Admin",
        description: "Full access administrator",
      },
    });

    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
        phone,
        companyId: company.id,
        roleId: role.id,
      },
      include: { company: true, role: true },
    });

    const token = signToken({
      userId: user.id,
      email: user.email,
      companyId: user.companyId,
      roleId: user.roleId,
    });

    return Response.json({
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        company: user.company.name,
        role: user.role.name,
      },
    });
  } catch (error) {
    console.error("Registration error:", error);
    return Response.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
