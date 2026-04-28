import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const NOTIFY_EMAIL = "rscott.smith@outlook.com";
const FROM_EMAIL = "Fortify Plans <noreply@fortify-plans.com>";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { first_name, last_name, email, phone, state, product, message } = body as Record<string, string>;

    if (!first_name || !last_name || !email || !phone || !state || !product) {
      return NextResponse.json({ error: "All required fields must be provided." }, { status: 400 });
    }

    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: NOTIFY_EMAIL,
      replyTo: email,
      subject: `New Quote Request — ${first_name} ${last_name} (${state})`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#1a1a2e;">
          <div style="background:linear-gradient(135deg,#1b3a6e,#2d5faa);padding:24px 32px;border-radius:8px 8px 0 0;">
            <h1 style="color:#fff;margin:0;font-size:20px;">New Quote Request</h1>
            <p style="color:#c4cfdb;margin:4px 0 0;font-size:14px;">Submitted via fortify-plans.com</p>
          </div>
          <div style="background:#f4f6f9;padding:32px;border-radius:0 0 8px 8px;border:1px solid #e8ecf1;border-top:none;">
            <table style="width:100%;border-collapse:collapse;">
              <tr><td style="padding:8px 0;font-size:14px;color:#6b7f99;width:140px;">Name</td><td style="padding:8px 0;font-size:14px;font-weight:600;">${first_name} ${last_name}</td></tr>
              <tr><td style="padding:8px 0;font-size:14px;color:#6b7f99;">Email</td><td style="padding:8px 0;font-size:14px;"><a href="mailto:${email}" style="color:#2d5faa;">${email}</a></td></tr>
              <tr><td style="padding:8px 0;font-size:14px;color:#6b7f99;">Phone</td><td style="padding:8px 0;font-size:14px;">${phone}</td></tr>
              <tr><td style="padding:8px 0;font-size:14px;color:#6b7f99;">State</td><td style="padding:8px 0;font-size:14px;">${state}</td></tr>
              <tr><td style="padding:8px 0;font-size:14px;color:#6b7f99;">Interest</td><td style="padding:8px 0;font-size:14px;">${product}</td></tr>
              ${message ? `<tr><td style="padding:8px 0;font-size:14px;color:#6b7f99;vertical-align:top;">Notes</td><td style="padding:8px 0;font-size:14px;">${message}</td></tr>` : ""}
            </table>
            <div style="margin-top:24px;padding-top:16px;border-top:1px solid #e8ecf1;">
              <a href="mailto:${email}" style="display:inline-block;background:#1b3a6e;color:#fff;padding:10px 20px;border-radius:6px;text-decoration:none;font-size:14px;font-weight:600;">Reply to ${first_name}</a>
            </div>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("[Resend error]", error);
      return NextResponse.json({ error: "Failed to send notification." }, { status: 500 });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch {
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
