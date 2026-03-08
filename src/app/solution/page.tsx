import SubPageLayout from "@/components/SubPageLayout";

const services = [
  {
    number: "01",
    title: "전환형 홈페이지 제작",
    description: "예쁘기만 한 홈페이지가 아닙니다. 방문자가 신뢰하고, 행동하게 만드는 전환 중심 구조를 설계합니다.",
    features: [
      "고전환 카피라이팅 & 스토리텔링",
      "모바일 퍼스트 반응형 디자인",
      "SEO 최적화 & 검색 노출",
      "Core Web Vitals 성능 최적화",
    ],
    process: ["기획 상담", "와이어프레임", "디자인", "개발", "테스트", "런칭"],
  },
  {
    number: "02",
    title: "랜딩페이지 & 광고 연동",
    description: "광고 클릭 후 이탈 없이 전환까지 이어지는 랜딩페이지. 광고비 대비 최대 효율을 뽑아냅니다.",
    features: [
      "광고 캠페인별 맞춤 랜딩페이지",
      "A/B 테스트 & 전환율 최적화",
      "UTM 기반 광고 성과 추적",
      "문의·예약 자동 수집 시스템",
    ],
    process: ["광고 분석", "LP 기획", "카피라이팅", "디자인/개발", "추적 설정", "최적화"],
  },
  {
    number: "03",
    title: "유지보수 & 성과 관리",
    description: "만들고 끝이 아닙니다. 실제 데이터를 기반으로 지속적으로 개선하여 전환율을 높여갑니다.",
    features: [
      "GA4 전환 분석 대시보드",
      "월간 성과 리포트 & 개선 제안",
      "콘텐츠 업데이트 & 관리",
      "기술 유지보수 & 보안 관리",
    ],
    process: ["데이터 수집", "분석 리포트", "개선안 도출", "A/B 테스트", "적용", "반복"],
  },
];

export default function SolutionPage() {
  return (
    <SubPageLayout>
      <section className="py-20 sm:py-32 bg-gradient-to-b from-black to-[#0a0015]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-[#6B46C1]/10 text-[#9F7AEA] border border-[#6B46C1]/20 mb-6">
            서비스
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            웹쿡은 이렇게
            <br />
            <span className="gradient-text">24시간 일하는 홈페이지를 만듭니다</span>
          </h1>
        </div>
      </section>

      <section className="py-16 bg-[#0a0015]">
        <div className="max-w-5xl mx-auto px-6 space-y-20">
          {services.map((service, i) => (
            <div key={i}>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-5xl font-bold text-[#6B46C1]/30">{service.number}</span>
                <h2 className="text-2xl sm:text-3xl font-bold">{service.title}</h2>
              </div>
              <p className="text-[#A0A0B0] text-lg mb-8 max-w-3xl">{service.description}</p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-[#111] border border-white/5">
                  <h3 className="text-sm font-medium text-[#9F7AEA] mb-4">포함 사항</h3>
                  <ul className="space-y-3">
                    {service.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-3 text-sm text-[#A0A0B0]">
                        <span className="w-5 h-5 rounded-full bg-[#6B46C1]/20 flex items-center justify-center flex-shrink-0">
                          <span className="w-2 h-2 rounded-full bg-[#6B46C1]" />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-6 rounded-2xl bg-[#111] border border-white/5">
                  <h3 className="text-sm font-medium text-[#9F7AEA] mb-4">진행 프로세스</h3>
                  <div className="flex flex-wrap gap-2">
                    {service.process.map((step, j) => (
                      <div key={j} className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-[#6B46C1]/20 flex items-center justify-center text-xs text-[#9F7AEA] font-medium">
                          {j + 1}
                        </span>
                        <span className="text-sm text-[#A0A0B0]">{step}</span>
                        {j < service.process.length - 1 && (
                          <span className="text-[#A0A0B0]/30 mx-1">→</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-black text-center">
        <a
          href="/consultation"
          className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#6B46C1] text-white font-semibold text-lg hover:bg-[#553C9A] transition-all"
        >
          서비스 문의하기
        </a>
      </section>
    </SubPageLayout>
  );
}
