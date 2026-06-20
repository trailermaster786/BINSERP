import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, topic, message } = body;

    if (!name || !email || !topic || !message) {
      return Response.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const submission = await prisma.contactSubmission.create({
      data: { name, email, topic, message },
    });

    return Response.json(
      { message: "Contact form submitted successfully", id: submission.id },
      { status: 201 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return Response.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
