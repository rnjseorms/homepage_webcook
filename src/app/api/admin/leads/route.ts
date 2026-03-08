import { NextRequest, NextResponse } from "next/server";
import { getLeads } from "@/lib/leads";

export async function GET(request: NextRequest) {
  const authHeader = request.headers.get("authorization");
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return NextResponse.json({ error: "인증이 필요합니다." }, { status: 401 });
  }

  try {
    const leads = getLeads();

    // Calculate stats
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const weekAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
    const monthAgo = new Date(today.getTime() - 30 * 24 * 60 * 60 * 1000);

    const todayCount = leads.filter(
      (l) => new Date(l.timestamp) >= today
    ).length;
    const weekCount = leads.filter(
      (l) => new Date(l.timestamp) >= weekAgo
    ).length;
    const monthCount = leads.filter(
      (l) => new Date(l.timestamp) >= monthAgo
    ).length;

    // Daily counts for last 7 days
    const dailyCounts: { date: string; count: number }[] = [];
    for (let i = 6; i >= 0; i--) {
      const d = new Date(today.getTime() - i * 24 * 60 * 60 * 1000);
      const nextD = new Date(d.getTime() + 24 * 60 * 60 * 1000);
      const label = `${d.getMonth() + 1}/${d.getDate()}`;
      const count = leads.filter((l) => {
        const t = new Date(l.timestamp);
        return t >= d && t < nextD;
      }).length;
      dailyCounts.push({ date: label, count });
    }

    // Source breakdown
    const sourceCounts: Record<string, number> = {};
    leads.forEach((l) => {
      const src = l.source || "direct";
      sourceCounts[src] = (sourceCounts[src] || 0) + 1;
    });

    return NextResponse.json({
      leads,
      stats: {
        total: leads.length,
        today: todayCount,
        week: weekCount,
        month: monthCount,
        dailyCounts,
        sourceCounts,
      },
    });
  } catch {
    return NextResponse.json(
      { error: "데이터를 불러올 수 없습니다." },
      { status: 500 }
    );
  }
}
