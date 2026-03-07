"use client";

import ScrollReveal from "./ScrollReveal";

const services = [
  {
    number: "01",
    title: "전환형 홈페이지 제작",
    description:
      "예쁘기만 한 홈페이지가 아닙니다. 방문자가 신뢰하고, 행동하게 만드는 전환 중심 구조를 설계합니다.",
    features: [
      "고전환 카피라이팅 & 스토리텔링",
      "모바일 퍼스트 반응형 디자인",
      "SEO 최적화 & 검색 노출",
      "Core Web Vitals 성능 최적화",
    ],
  },
  {
    number: "02",
    title: "랜딩페이지 & 광고 연동",
    description:
      "광고 클릭 후 이탈 없이 전환까지 이어지는 랜딩페이지. 광고비 대비 최대 효율을 뽑아냅니다.",
    features: [
      "광고 캠페인별 맞춤 랜딩페이지",
      "A/B 테스트 & 전환율 최적화",
      "UTM 기반 광고 성과 추적",
      "문의·예약 자동 수집 시스템",
    ],
  },
  {
    number: "03",
    title: "유지보수 & 성과 관리",
    description:
      "만들고 끝이 아닙니다. 실제 데이터를 기반으로 지속적으로 개선하여 전환율을 높여갑니다.",
    features: [
      "GA4 전환 분석 대시보드",
      "월간 성과 리포트 & 개선 제안",
      "콘텐츠 업데이트 & 관리",
      "기술 유지보수 & 보안 관리",
    ],
  },
];

export default function SolutionSection() {
  return (
    <section
      id="solution"
      className="py-20 sm:py-32 bg-gradient-to-b from-[#0a0015] to-black"
    >
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-[#6B46C1]/10 text-[#9F7AEA] border border-[#6B46C1]/20 mb-6">
              서비스
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              웹쿡은 이렇게
              <br />
              <span className="gradient-text">
                24시간 일하는 홈페이지를 만듭니다
              </span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6 text-sm text-[#A0A0B0]">
              <span className="px-4 py-2 rounded-full border border-white/5 bg-white/[0.02]">
                신규 제작: 처음부터 전환 구조로 설계합니다
              </span>
              <span className="px-4 py-2 rounded-full border border-white/5 bg-white/[0.02]">
                리뉴얼: 기존 사이트를 전환형으로 탈바꿈합니다
              </span>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ScrollReveal key={i} delay={i * 150}>
              <div className="relative h-full p-8 rounded-2xl bg-gradient-to-b from-[#111] to-[#0a0a0a] border border-white/5 hover:border-[#6B46C1]/30 transition-all duration-300 group">
                <div className="text-5xl font-bold text-[#6B46C1]/20 mb-4">
                  {service.number}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-[#A0A0B0] text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((f, j) => (
                    <li
                      key={j}
                      className="flex items-center gap-2 text-sm text-[#A0A0B0]"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#6B46C1]" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
