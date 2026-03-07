import { NextRequest, NextResponse } from "next/server";

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

    // Google Apps Script Web App URL (set in .env)
    const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL;

    if (GOOGLE_SCRIPT_URL) {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          timestamp: new Date().toISOString(),
          name: name || "",
          email,
          phone: phone || "",
          source: source || "direct",
        }),
      });
    } else {
      // Fallback: log to console when Google Script URL is not configured
      console.log("New lead submission:", {
        timestamp: new Date().toISOString(),
        name,
        email,
        phone,
        source,
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
