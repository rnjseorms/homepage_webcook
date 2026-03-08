"use client";

import { useState, useEffect, useCallback } from "react";

interface Lead {
  id: string;
  timestamp: string;
  name: string;
  email: string;
  phone: string;
  source: string;
}

interface Stats {
  total: number;
  today: number;
  week: number;
  month: number;
  dailyCounts: { date: string; count: number }[];
  sourceCounts: Record<string, number>;
}

// ── Login Screen ──
function LoginScreen({ onLogin }: { onLogin: (token: string) => void }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/admin/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (res.ok) {
        const data = await res.json();
        onLogin(data.token);
      } else {
        setError("비밀번호가 틀렸습니다.");
      }
    } catch {
      setError("서버 오류가 발생했습니다.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm p-8 rounded-2xl bg-[#111] border border-white/10"
      >
        <h1 className="text-2xl font-bold mb-1 text-center">웹쿡 관리자</h1>
        <p className="text-sm text-[#A0A0B0] text-center mb-8">
          비밀번호를 입력하세요
        </p>

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="비밀번호"
          autoFocus
          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-[#A0A0B0]/50 focus:border-[#6B46C1] focus:outline-none focus:ring-1 focus:ring-[#6B46C1] transition-all mb-4"
        />

        {error && (
          <p className="text-red-400 text-sm mb-4 text-center">{error}</p>
        )}

        <button
          type="submit"
          disabled={loading || !password}
          className="w-full py-3 rounded-xl bg-[#6B46C1] text-white font-semibold hover:bg-[#553C9A] transition-all disabled:opacity-50"
        >
          {loading ? "확인 중..." : "로그인"}
        </button>
      </form>
    </div>
  );
}

// ── Stat Card ──
function StatCard({
  label,
  value,
  accent,
}: {
  label: string;
  value: number;
  accent?: boolean;
}) {
  return (
    <div className="p-5 rounded-2xl bg-[#111] border border-white/5">
      <p className="text-sm text-[#A0A0B0] mb-1">{label}</p>
      <p
        className={`text-3xl font-bold ${accent ? "text-[#9F7AEA]" : "text-white"}`}
      >
        {value}
      </p>
    </div>
  );
}

// ── Bar Chart ──
function BarChart({ data }: { data: { date: string; count: number }[] }) {
  const max = Math.max(...data.map((d) => d.count), 1);

  return (
    <div className="p-5 rounded-2xl bg-[#111] border border-white/5">
      <h3 className="text-sm font-medium text-[#A0A0B0] mb-4">
        최근 7일 문의
      </h3>
      <div className="flex items-end gap-2 h-32">
        {data.map((d, i) => (
          <div key={i} className="flex-1 flex flex-col items-center gap-1">
            <span className="text-xs text-[#A0A0B0]">
              {d.count > 0 ? d.count : ""}
            </span>
            <div
              className="w-full rounded-t bg-[#6B46C1]/60 min-h-[2px] transition-all"
              style={{ height: `${(d.count / max) * 100}%` }}
            />
            <span className="text-[10px] text-[#A0A0B0]">{d.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Source Breakdown ──
function SourceBreakdown({ data }: { data: Record<string, number> }) {
  const total = Object.values(data).reduce((a, b) => a + b, 0) || 1;
  const entries = Object.entries(data).sort((a, b) => b[1] - a[1]);

  const colors = ["#6B46C1", "#9F7AEA", "#D6BCFA", "#E9D5FF"];

  return (
    <div className="p-5 rounded-2xl bg-[#111] border border-white/5">
      <h3 className="text-sm font-medium text-[#A0A0B0] mb-4">유입 경로</h3>
      {entries.length === 0 ? (
        <p className="text-sm text-[#A0A0B0]">데이터 없음</p>
      ) : (
        <div className="space-y-3">
          {entries.map(([source, count], i) => (
            <div key={source}>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-white">{source}</span>
                <span className="text-[#A0A0B0]">
                  {count}건 ({Math.round((count / total) * 100)}%)
                </span>
              </div>
              <div className="h-2 rounded-full bg-white/5">
                <div
                  className="h-full rounded-full transition-all"
                  style={{
                    width: `${(count / total) * 100}%`,
                    backgroundColor: colors[i % colors.length],
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ── Leads Table ──
function LeadsTable({ leads }: { leads: Lead[] }) {
  return (
    <div className="rounded-2xl bg-[#111] border border-white/5 overflow-hidden">
      <div className="px-5 py-4 border-b border-white/5">
        <h3 className="font-medium">문의 내역</h3>
      </div>

      {leads.length === 0 ? (
        <div className="p-12 text-center text-[#A0A0B0]">
          아직 문의가 없습니다.
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/5 text-[#A0A0B0]">
                <th className="text-left px-5 py-3 font-medium">일시</th>
                <th className="text-left px-5 py-3 font-medium">이름</th>
                <th className="text-left px-5 py-3 font-medium">이메일</th>
                <th className="text-left px-5 py-3 font-medium hidden sm:table-cell">
                  연락처
                </th>
                <th className="text-left px-5 py-3 font-medium hidden md:table-cell">
                  유입
                </th>
              </tr>
            </thead>
            <tbody>
              {leads.map((lead) => (
                <tr
                  key={lead.id}
                  className="border-b border-white/5 hover:bg-white/[0.02] transition-colors"
                >
                  <td className="px-5 py-3 text-[#A0A0B0] whitespace-nowrap">
                    {new Date(lead.timestamp).toLocaleDateString("ko-KR", {
                      month: "short",
                      day: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </td>
                  <td className="px-5 py-3">{lead.name || "-"}</td>
                  <td className="px-5 py-3 text-[#9F7AEA]">{lead.email}</td>
                  <td className="px-5 py-3 text-[#A0A0B0] hidden sm:table-cell">
                    {lead.phone || "-"}
                  </td>
                  <td className="px-5 py-3 hidden md:table-cell">
                    <span className="px-2 py-0.5 rounded-full text-xs bg-white/5 text-[#A0A0B0]">
                      {lead.source || "direct"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

// ── Dashboard ──
function Dashboard({ token }: { token: string }) {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(async () => {
    try {
      const res = await fetch("/api/admin/leads", {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (res.ok) {
        const data = await res.json();
        setLeads(data.leads);
        setStats(data.stats);
      }
    } catch {
      console.error("Failed to fetch leads");
    } finally {
      setLoading(false);
    }
  }, [token]);

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 30000); // refresh every 30s
    return () => clearInterval(interval);
  }, [fetchData]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-[#6B46C1] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="border-b border-white/5 bg-black/80 backdrop-blur-lg sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <h1 className="font-bold">
            <span className="text-[#9F7AEA]">웹쿡</span> 관리자
          </h1>
          <button
            onClick={() => window.location.reload()}
            className="text-sm text-[#A0A0B0] hover:text-white transition-colors"
          >
            새로고침
          </button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-8 space-y-6">
        {/* Stat Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard label="전체 문의" value={stats?.total || 0} accent />
          <StatCard label="오늘" value={stats?.today || 0} />
          <StatCard label="이번 주" value={stats?.week || 0} />
          <StatCard label="이번 달" value={stats?.month || 0} />
        </div>

        {/* Charts */}
        <div className="grid md:grid-cols-2 gap-4">
          <BarChart data={stats?.dailyCounts || []} />
          <SourceBreakdown data={stats?.sourceCounts || {}} />
        </div>

        {/* Table */}
        <LeadsTable leads={leads} />
      </main>
    </div>
  );
}

// ── Main Page ──
export default function AdminPage() {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const saved = sessionStorage.getItem("admin_token");
    if (saved) setToken(saved);
  }, []);

  const handleLogin = (newToken: string) => {
    sessionStorage.setItem("admin_token", newToken);
    setToken(newToken);
  };

  if (!token) return <LoginScreen onLogin={handleLogin} />;
  return <Dashboard token={token} />;
}
