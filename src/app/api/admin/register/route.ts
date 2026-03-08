import { NextRequest, NextResponse } from "next/server";
import { registerAdmin } from "@/lib/admins";

export async function POST(request: NextRequest) {
  try {
    const { username, password, inviteCode } = await request.json();

    // Invite code required for registration
    const validCode = process.env.ADMIN_INVITE_CODE || "webcook-invite";
    if (inviteCode !== validCode) {
      return NextResponse.json({ error: "초대 코드가 올바르지 않습니다." }, { status: 403 });
    }

    if (!username || !password) {
      return NextResponse.json({ error: "아이디와 비밀번호를 입력하세요." }, { status: 400 });
    }

    if (username.length < 3) {
      return NextResponse.json({ error: "아이디는 3자 이상이어야 합니다." }, { status: 400 });
    }

    if (password.length < 6) {
      return NextResponse.json({ error: "비밀번호는 6자 이상이어야 합니다." }, { status: 400 });
    }

    const result = registerAdmin(username, password);
    if (!result.success) {
      return NextResponse.json({ error: result.error }, { status: 400 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "서버 오류가 발생했습니다." }, { status: 500 });
  }
}
