"use client";

import ScrollReveal from "./ScrollReveal";

const visionPoints = [
  {
    icon: "🌙",
    title: "새벽에도 고객을 맞이합니다",
    description:
      "잘 만든 홈페이지는 24시간 영업합니다. 사장님이 잠든 새벽에도 고객이 서비스를 확인하고, 신뢰하고, 문의를 남깁니다.",
  },
  {
    icon: "📩",
    title: "아침에 눈뜨면 문의가 쌓여 있습니다",
    description:
      "전환 구조가 설계된 홈페이지는 방문자를 자동으로 리드로 바꿉니다. 문의 폼, 예약, 상담 신청이 알아서 접수됩니다.",
  },
  {
    icon: "🔄",
    title: "광고 효율이 극대화됩니다",
    description:
      "같은 광고비를 써도 전환율이 다릅니다. 방문자가 행동하도록 설계된 랜딩페이지가 있으면, 광고비 대비 문의 수가 달라집니다.",
  },
  {
    icon: "📈",
    title: "한 번 만들면, 계속 일합니다",
    description:
      "월급도, 퇴사도 없는 최우수 영업사원. 한 번 제대로 만들면 24시간 365일, 추가 비용 없이 계속 영업합니다.",
  },
];

export default function VisionSection() {
  return (
    <section
      id="vision"
      className="py-20 sm:py-32 bg-gradient-to-b from-black via-[#08001a] to-[#0a0015]"
    >
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-[#9B7FE8]/10 text-[#9B7FE8] border border-[#9B7FE8]/20 mb-6">
              이런 홈페이지가 필요합니다
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              제대로 만든 홈페이지는
              <br />
              <span className="gradient-text">
                이렇게 일합니다
              </span>
            </h2>
          </div>
        </ScrollReveal>

        {/* Timeline-style vision cards */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#6B46C1]/50 via-[#9B7FE8]/30 to-transparent hidden sm:block" />

          <div className="space-y-8">
            {visionPoints.map((point, i) => (
              <ScrollReveal key={i} delay={i * 150}>
                <div
                  className={`relative flex items-start gap-6 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Glow dot on timeline */}
                  <div className="hidden sm:flex absolute left-6 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#9B7FE8] shadow-[0_0_12px_rgba(155,127,232,0.6)] z-10 mt-8" />

                  <div
                    className={`flex-1 p-5 sm:p-8 rounded-2xl bg-gradient-to-b from-[#111] to-[#0a0a0a] border border-white/5 hover:border-[#9B7FE8]/30 transition-all duration-300 ${
                      i % 2 === 0 ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"
                    } sm:ml-12 md:ml-0 md:max-w-[calc(50%-24px)]`}
                  >
                    <div className="text-3xl mb-3">{point.icon}</div>
                    <h3 className="text-lg font-bold mb-2">{point.title}</h3>
                    <p className="text-[#A0A0B0] text-sm leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* CTA */}
        <ScrollReveal>
          <div className="text-center mt-16">
            <a
              href="#form"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#6B46C1] text-white font-semibold text-lg hover:bg-[#553C9A] transition-all"
            >
              웹쿡에 제작 문의하기
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
