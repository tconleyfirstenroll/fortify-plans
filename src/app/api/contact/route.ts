import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { first_name, last_name, email, phone, state, product, message } = body as Record<string, string>;

    if (!first_name || !last_name || !email || !phone || !state || !product) {
      return NextResponse.json({ error: "All required fields must be provided." }, { status: 400 });
    }

    // Log to console for now; swap in email / CRM / Supabase later
    console.log("[Contact Form Submission]", {
      first_name,
      last_name,
      email,
      phone,
      state,
      product,
      message: message || "",
      submitted_at: new Date().toISOString(),
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch {
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
