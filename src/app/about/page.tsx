import SubPageLayout from "@/components/SubPageLayout";

const stats = [
  { value: "150+", label: "프로젝트 완료" },
  { value: "97%", label: "고객 만족도" },
  { value: "3배", label: "평균 전환율 개선" },
  { value: "50+", label: "업종 경험" },
];

const credentials = [
  "전환형 홈페이지·랜딩페이지 전문 제작",
  "150개+ 프로젝트 실전 경험",
  "업종별 맞춤 전환 구조 설계 노하우",
  "광고 연동 & SEO 최적화 전문",
  "고객사 평균 전환율 3배 이상 개선 실적",
];

const values = [
  {
    title: "전환 중심 설계",
    description: "예쁜 것보다 중요한 건 결과입니다. 모든 설계는 문의·매출 전환을 목표로 합니다.",
  },
  {
    title: "데이터 기반 개선",
    description: "감이 아닌 데이터로 판단합니다. GA4, 히트맵 분석을 통해 지속적으로 개선합니다.",
  },
  {
    title: "사장님 시간 절약",
    description: "사장님은 사업에 집중하세요. 홈페이지가 24시간 알아서 영업합니다.",
  },
  {
    title: "장기 파트너십",
    description: "만들고 끝이 아닙니다. 월간 리포트와 개선을 통해 함께 성장합니다.",
  },
];

export default function AboutPage() {
  return (
    <SubPageLayout>
      <section className="py-20 sm:py-32 bg-gradient-to-b from-black to-[#0a0015]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-[#6B46C1]/10 text-[#9F7AEA] border border-[#6B46C1]/20 mb-6">
            웹쿡 소개
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            결과로 증명하는
            <br />
            <span className="gradient-text">전환형 홈페이지 전문 에이전시</span>
          </h1>
          <p className="text-lg text-[#A0A0B0] max-w-2xl mx-auto">
            단순히 예쁜 홈페이지를 만드는 것이 아니라,
            사장님 대신 24시간 영업하는 전환 구조를 설계합니다.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-[#0a0015]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <div key={i} className="text-center p-6 rounded-2xl bg-[#111] border border-white/5">
                <p className="text-3xl sm:text-4xl font-bold gradient-text">{stat.value}</p>
                <p className="text-sm text-[#A0A0B0] mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Profile */}
      <section className="py-16 bg-black">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-8">
          <div className="p-6 sm:p-8 rounded-2xl bg-[#111] border border-white/5">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#6B46C1] to-[#9B7FE8] flex items-center justify-center text-xl font-bold">
                WC
              </div>
              <div>
                <h3 className="text-xl font-bold">웹쿡 대표</h3>
                <p className="text-[#A0A0B0] text-sm">WebCook Agency</p>
              </div>
            </div>
            <p className="text-[#A0A0B0] leading-relaxed">
              150개 이상의 프로젝트 경험으로 업종별 최적의 전환 솔루션을 제공합니다.
              광고비는 많이 쓰는데 효과가 없다면, 문제는 홈페이지입니다.
              저희가 그 문제를 해결해 드립니다.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-[#111] border border-white/5">
            <h3 className="text-xl font-bold mb-6">웹쿡의 강점</h3>
            <ul className="space-y-4">
              {credentials.map((cred, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1 w-5 h-5 rounded-full bg-[#6B46C1]/20 flex items-center justify-center flex-shrink-0">
                    <span className="w-2 h-2 rounded-full bg-[#6B46C1]" />
                  </span>
                  <span className="text-[#A0A0B0] text-sm">{cred}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gradient-to-b from-black to-[#08001a]">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">
            웹쿡의 <span className="gradient-text">핵심 가치</span>
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <div key={i} className="p-6 rounded-2xl bg-[#111] border border-white/5">
                <h3 className="text-lg font-bold mb-2">{v.title}</h3>
                <p className="text-sm text-[#A0A0B0] leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#08001a] text-center">
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
