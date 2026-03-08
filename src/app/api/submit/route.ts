import { NextRequest, NextResponse } from "next/server";
import { addLead } from "@/lib/leads";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, source } = body;

    if (!email) {
      return NextResponse.json(
        { error: "이메일은 필수입니다." },
        { status: 400 }
      );
    }

    const timestamp = new Date().toISOString();

    // Save to local JSON
    addLead({
      timestamp,
      name: name || "",
      email,
      phone: phone || "",
      source: source || "direct",
    });

    // Also send to Google Apps Script if configured
    const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL;
    if (GOOGLE_SCRIPT_URL) {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          timestamp,
          name: name || "",
          email,
          phone: phone || "",
          source: source || "direct",
        }),
      });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "서버 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
