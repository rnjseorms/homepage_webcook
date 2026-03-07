"use client";

import ScrollReveal from "./ScrollReveal";

const problems = [
  {
    icon: "💸",
    target: "광고비가 새는 사장님",
    title: "광고비는 나가는데, 홈페이지에서 전환이 안 됩니다",
    description:
      "매달 수십만 원을 광고에 쏟아붓지만, 홈페이지가 방문자를 설득하지 못하면 광고비는 그냥 증발합니다. 문제는 광고가 아니라 홈페이지입니다.",
  },
  {
    icon: "🚪",
    target: "홈페이지가 있지만 효과 없는 사장님",
    title: "방문자는 오는데, 문의는 없습니다",
    description:
      "예쁘기만 한 홈페이지는 전시용일 뿐입니다. 방문자가 머물고, 신뢰하고, 행동하게 만드는 전환 구조가 없으면 아무 소용이 없습니다.",
  },
  {
    icon: "📵",
    target: "아직 홈페이지가 없는 사장님",
    title: "SNS에 안 올리면, 내 사업이 사라집니다",
    description:
      "인스타그램, 블로그에 의존하면 내가 쉬는 순간 노출이 끊깁니다. 검색해도 나오지 않는 사업체는 존재하지 않는 것과 같습니다.",
  },
  {
    icon: "🌙",
    target: "모든 사장님 공통",
    title: "새벽 2시에도 고객은 검색합니다",
    description:
      "사장님이 잠든 시간에도, 고객은 네이버와 구글에서 업체를 찾고 있습니다. 그 순간 내 홈페이지가 영업하고 있지 않다면, 고객은 경쟁사로 갑니다.",
  },
];

export default function ProblemSection() {
  return (
    <section id="problem" className="py-20 sm:py-32 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-red-500/10 text-red-400 border border-red-500/20 mb-6">
              현실 진단
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              혹시{" "}
              <span className="text-red-400">이런 상황</span>이신가요?
            </h2>
            <p className="text-[#A0A0B0] text-base sm:text-lg max-w-2xl mx-auto">
              홈페이지 하나로 해결될 문제를,
              <br className="sm:hidden" />
              아직도 사장님이 직접 뛰고 계십니다.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {problems.map((item, i) => (
            <ScrollReveal key={i} delay={i * 120}>
              <div className="relative group h-full p-5 sm:p-8 rounded-2xl bg-gradient-to-b from-[#111] to-[#0a0a0a] border border-white/5 hover:border-[#6B46C1]/30 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{item.icon}</span>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-[#A0A0B0]">
                    {item.target}
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                <p className="text-[#A0A0B0] text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Transition copy */}
        <ScrollReveal>
          <div className="mt-16 text-center">
            <div className="inline-block p-5 sm:p-8 rounded-2xl gradient-border max-w-2xl">
              <p className="text-lg sm:text-2xl font-bold leading-relaxed">
                이 모든 문제의 해답은 하나입니다 —
                <br />
                <span className="gradient-text text-xl sm:text-3xl">
                  제대로 만든 홈페이지,
                  <br className="sm:hidden" />
                  최고의 영업사원
                </span>
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
