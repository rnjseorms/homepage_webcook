import SubPageLayout from "@/components/SubPageLayout";

const visionPoints = [
  {
    icon: "🌙",
    title: "새벽에도 고객을 맞이합니다",
    description: "잘 만든 홈페이지는 24시간 영업합니다. 사장님이 잠든 새벽에도 고객이 서비스를 확인하고, 신뢰하고, 문의를 남깁니다.",
    stat: "40%",
    statLabel: "영업시간 외 검색 비율",
  },
  {
    icon: "📩",
    title: "아침에 눈뜨면 문의가 쌓여 있습니다",
    description: "전환 구조가 설계된 홈페이지는 방문자를 자동으로 리드로 바꿉니다. 문의 폼, 예약, 상담 신청이 알아서 접수됩니다.",
    stat: "3배",
    statLabel: "전환율 평균 개선",
  },
  {
    icon: "🔄",
    title: "광고 효율이 극대화됩니다",
    description: "같은 광고비를 써도 전환율이 다릅니다. 방문자가 행동하도록 설계된 랜딩페이지가 있으면, 광고비 대비 문의 수가 달라집니다.",
    stat: "50%",
    statLabel: "광고비 절감 효과",
  },
  {
    icon: "📈",
    title: "한 번 만들면, 계속 일합니다",
    description: "월급도, 퇴사도 없는 최우수 영업사원. 한 번 제대로 만들면 24시간 365일, 추가 비용 없이 계속 영업합니다.",
    stat: "365일",
    statLabel: "연중무휴 영업",
  },
];

const comparisons = [
  { before: "SNS만 운영", after: "홈페이지 + SNS 연동", result: "검색 노출 5배 증가" },
  { before: "단순 회사소개 페이지", after: "전환형 랜딩페이지", result: "문의 전환율 3배 상승" },
  { before: "영업시간에만 상담", after: "24시간 자동 문의 수집", result: "리드 수 2배 증가" },
  { before: "광고만 집행", after: "광고 + 전환 최적화 LP", result: "광고 ROI 4배 개선" },
];

export default function VisionPage() {
  return (
    <SubPageLayout>
      <section className="py-20 sm:py-32 bg-gradient-to-b from-black to-[#08001a]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-[#9B7FE8]/10 text-[#9B7FE8] border border-[#9B7FE8]/20 mb-6">
            왜 홈페이지인가
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            제대로 만든 홈페이지는
            <br />
            <span className="gradient-text">이렇게 일합니다</span>
          </h1>
        </div>
      </section>

      {/* Vision Points with Stats */}
      <section className="py-16 bg-[#08001a]">
        <div className="max-w-5xl mx-auto px-6 space-y-12">
          {visionPoints.map((point, i) => (
            <div key={i} className="grid md:grid-cols-3 gap-6 items-center">
              <div className="md:col-span-2 p-6 sm:p-8 rounded-2xl bg-[#111] border border-white/5">
                <div className="text-3xl mb-3">{point.icon}</div>
                <h2 className="text-xl sm:text-2xl font-bold mb-3">{point.title}</h2>
                <p className="text-[#A0A0B0] leading-relaxed">{point.description}</p>
              </div>
              <div className="p-6 rounded-2xl bg-gradient-to-br from-[#6B46C1]/20 to-[#9B7FE8]/10 border border-[#6B46C1]/20 text-center">
                <p className="text-4xl font-bold gradient-text mb-1">{point.stat}</p>
                <p className="text-sm text-[#A0A0B0]">{point.statLabel}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Before / After */}
      <section className="py-20 bg-black">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">
            Before → <span className="gradient-text">After</span>
          </h2>
          <div className="space-y-4">
            {comparisons.map((c, i) => (
              <div key={i} className="grid grid-cols-3 gap-4 p-5 rounded-2xl bg-[#111] border border-white/5 text-sm">
                <div>
                  <p className="text-xs text-red-400 mb-1">Before</p>
                  <p className="text-[#A0A0B0]">{c.before}</p>
                </div>
                <div>
                  <p className="text-xs text-[#9F7AEA] mb-1">After</p>
                  <p className="text-white font-medium">{c.after}</p>
                </div>
                <div>
                  <p className="text-xs text-green-400 mb-1">Result</p>
                  <p className="text-green-400 font-medium">{c.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-black to-[#0a0015] text-center">
        <a
          href="/consultation"
          className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#6B46C1] text-white font-semibold text-lg hover:bg-[#553C9A] transition-all"
        >
          무료 상담 받기
        </a>
      </section>
    </SubPageLayout>
  );
}
