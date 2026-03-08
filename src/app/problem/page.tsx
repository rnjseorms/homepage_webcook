import SubPageLayout from "@/components/SubPageLayout";

const problems = [
  {
    icon: "💸",
    target: "광고비가 새는 사장님",
    title: "광고비는 나가는데, 전환이 안 됩니다",
    description:
      "매달 수십만 원을 광고에 쏟아붓지만, 홈페이지가 방문자를 설득하지 못하면 광고비는 그냥 증발합니다.",
    details: [
      "네이버·구글 광고 클릭 후 홈페이지에서 이탈하는 비율이 80% 이상",
      "예쁜 디자인만으로는 방문자가 문의를 남기지 않습니다",
      "전환 구조 없는 홈페이지는 광고비를 버리는 것과 같습니다",
      "같은 광고비로 문의 수를 3배 이상 늘릴 수 있습니다",
    ],
  },
  {
    icon: "🚪",
    target: "홈페이지가 있지만 효과 없는 사장님",
    title: "방문자는 오는데, 문의는 없습니다",
    description:
      "예쁘기만 한 홈페이지는 전시용일 뿐입니다. 전환 구조가 없으면 아무 소용이 없습니다.",
    details: [
      "방문자가 평균 10초 내에 이탈하는 홈페이지가 대부분",
      "신뢰를 주는 구조, 행동을 유도하는 CTA가 없으면 문의가 없습니다",
      "모바일에서 제대로 안 보이면 50% 이상의 고객을 놓칩니다",
      "문의 폼이 복잡하거나 찾기 어려우면 전환율이 급감합니다",
    ],
  },
  {
    icon: "📵",
    target: "아직 홈페이지가 없는 사장님",
    title: "SNS에만 의존하면, 사업이 사라집니다",
    description:
      "인스타그램, 블로그에 의존하면 내가 쉬는 순간 노출이 끊깁니다.",
    details: [
      "SNS 알고리즘 변경 한 번에 노출이 80% 감소할 수 있습니다",
      "검색해도 나오지 않는 사업체는 존재하지 않는 것과 같습니다",
      "자체 홈페이지가 있어야 광고, SEO, SNS 모든 채널이 연결됩니다",
      "네이버 지도, 구글 검색에서 홈페이지가 있는 업체가 우선 노출됩니다",
    ],
  },
  {
    icon: "🌙",
    target: "모든 사장님 공통",
    title: "새벽 2시에도 고객은 검색합니다",
    description:
      "사장님이 잠든 시간에도, 고객은 업체를 찾고 있습니다.",
    details: [
      "전체 온라인 검색의 40%는 영업시간 외에 발생합니다",
      "밤 10시~새벽 2시가 서비스 검색 피크타임인 업종이 많습니다",
      "그 시간에 홈페이지가 영업하지 않으면 고객은 경쟁사로 갑니다",
      "자동 문의 수집 시스템이 있으면 잠자는 동안에도 리드가 쌓입니다",
    ],
  },
];

export default function ProblemPage() {
  return (
    <SubPageLayout>
      {/* Hero */}
      <section className="py-20 sm:py-32 bg-gradient-to-b from-black to-[#0a0015]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-red-500/10 text-red-400 border border-red-500/20 mb-6">
            현실 진단
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            사장님, 지금 이 문제를
            <br />
            <span className="text-red-400">겪고 계시지 않나요?</span>
          </h1>
          <p className="text-lg text-[#A0A0B0] max-w-2xl mx-auto">
            대부분의 사장님이 같은 문제를 겪고 있습니다.
            홈페이지 하나로 해결될 문제를 모르고 지나치고 있습니다.
          </p>
        </div>
      </section>

      {/* Problems Detail */}
      <section className="py-16 bg-black">
        <div className="max-w-5xl mx-auto px-6 space-y-16">
          {problems.map((item, i) => (
            <div
              key={i}
              className="grid md:grid-cols-2 gap-8 items-start"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl">{item.icon}</span>
                  <span className="text-xs px-3 py-1 rounded-full bg-white/5 text-[#A0A0B0]">
                    {item.target}
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                  {item.title}
                </h2>
                <p className="text-[#A0A0B0] leading-relaxed">
                  {item.description}
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-[#111] border border-white/5">
                <h3 className="text-sm font-medium text-[#9F7AEA] mb-4">
                  구체적인 상황
                </h3>
                <ul className="space-y-3">
                  {item.details.map((d, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-[#A0A0B0]">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-b from-black to-[#08001a] text-center">
        <div className="max-w-2xl mx-auto px-6">
          <p className="text-xl sm:text-2xl font-bold mb-6">
            이 모든 문제의 해답은 하나입니다 —
            <br />
            <span className="gradient-text text-2xl sm:text-3xl">
              제대로 만든 홈페이지
            </span>
          </p>
          <a
            href="/consultation"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#6B46C1] text-white font-semibold text-lg hover:bg-[#553C9A] transition-all"
          >
            무료 상담 받기
          </a>
        </div>
      </section>
    </SubPageLayout>
  );
}
