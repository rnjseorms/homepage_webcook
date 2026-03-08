import SubPageLayout from "@/components/SubPageLayout";

const testimonials = [
  {
    name: "김대표",
    role: "인테리어 업체 대표",
    rating: 5,
    content: "월 30건이던 문의가 100건 넘게 들어옵니다. 홈페이지 하나 바꿨을 뿐인데 매출이 3배 올랐습니다. 진작 할 걸 그랬어요.",
    result: "문의 3배 증가",
  },
  {
    name: "이사장",
    role: "학원 원장",
    rating: 5,
    content: "네이버 광고비를 줄였는데 오히려 문의가 늘었습니다. 랜딩페이지 전환율이 확 달라지니 광고 효율이 극대화됐어요.",
    result: "광고비 40% 절감",
  },
  {
    name: "박원장",
    role: "치과 원장",
    rating: 5,
    content: "예전 홈페이지는 예쁘기만 했는데, 웹쿡에서 리뉴얼한 후 야간 문의가 생기기 시작했습니다. 새벽에도 예약이 들어와요.",
    result: "야간 문의 신규 발생",
  },
  {
    name: "최대표",
    role: "온라인 쇼핑몰 대표",
    rating: 5,
    content: "자체몰 전환율이 0.8%에서 2.4%로 올랐습니다. 페이지 구조를 바꾸니 같은 트래픽에서 매출이 3배 차이나더라구요.",
    result: "전환율 3배 상승",
  },
  {
    name: "정사장",
    role: "카페 사장님",
    rating: 5,
    content: "인스타그램만 하다가 홈페이지를 만들었더니 네이버 지도에서 유입이 확 늘었습니다. 검색으로 오는 신규 고객이 생겼어요.",
    result: "검색 유입 5배 증가",
  },
  {
    name: "한대표",
    role: "법률 사무소 대표",
    rating: 5,
    content: "상담 예약 시스템을 넣었더니 전화 상담 부담이 줄고, 자동으로 리드가 쌓입니다. 업무 효율이 확 좋아졌습니다.",
    result: "자동 리드 수집",
  },
];

export default function ReviewsPage() {
  return (
    <SubPageLayout>
      <section className="py-20 sm:py-32 bg-gradient-to-b from-black to-[#0a0015]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-amber-500/10 text-amber-400 border border-amber-500/20 mb-6">
            고객 후기
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            실제 고객들의
            <br />
            <span className="gradient-text">생생한 후기</span>
          </h1>
          <p className="text-lg text-[#A0A0B0] max-w-2xl mx-auto">
            웹쿡과 함께한 사장님들의 실제 경험담입니다.
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#0a0015]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="p-6 rounded-2xl bg-[#111] border border-white/5 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#6B46C1]/20 flex items-center justify-center text-sm font-bold text-[#9F7AEA]">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{t.name}</p>
                    <p className="text-xs text-[#A0A0B0]">{t.role}</p>
                  </div>
                </div>

                <div className="flex gap-1 mb-3">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <span key={j} className="text-amber-400 text-sm">&#9733;</span>
                  ))}
                </div>

                <p className="text-sm text-[#A0A0B0] leading-relaxed flex-1">
                  &ldquo;{t.content}&rdquo;
                </p>

                <div className="mt-4 pt-4 border-t border-white/5">
                  <span className="text-xs px-3 py-1 rounded-full bg-green-500/10 text-green-400 border border-green-500/20">
                    {t.result}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-black text-center">
        <p className="text-xl font-bold mb-6">
          다음 성공 스토리의 주인공이 되세요
        </p>
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
