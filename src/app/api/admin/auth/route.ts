import { NextRequest, NextResponse } from "next/server";
import { verifyAdmin } from "@/lib/admins";

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json();

    // Support legacy simple password login
    if (!username && password) {
      const adminPassword = process.env.ADMIN_PASSWORD || "webcook2024";
      if (password === adminPassword) {
        const token = Buffer.from(`admin:${Date.now()}`).toString("base64");
        return NextResponse.json({ success: true, token });
      }
      return NextResponse.json({ error: "비밀번호가 틀렸습니다." }, { status: 401 });
    }

    // Username + password login
    if (!username || !password) {
      return NextResponse.json({ error: "아이디와 비밀번호를 입력하세요." }, { status: 400 });
    }

    if (verifyAdmin(username, password)) {
      const token = Buffer.from(`${username}:${Date.now()}`).toString("base64");
      return NextResponse.json({ success: true, token, username });
    }

    return NextResponse.json({ error: "아이디 또는 비밀번호가 틀렸습니다." }, { status: 401 });
  } catch {
    return NextResponse.json({ error: "서버 오류가 발생했습니다." }, { status: 500 });
  }
}
