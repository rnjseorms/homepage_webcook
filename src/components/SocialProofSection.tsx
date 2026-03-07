"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

const testimonials = [
  {
    name: "김○○",
    role: "카페 운영 / 자영업",
    targetType: "A",
    content:
      "웹쿡에서 홈페이지를 새로 만들고 나서 광고비는 그대로인데 월 문의가 27건으로 늘었습니다. 이전 홈페이지에서는 상상도 못한 수치예요.",
    result: "문의 3건 → 27건/월",
  },
  {
    name: "이○○",
    role: "온라인 강사 / 1인 창업",
    targetType: "B",
    content:
      "SNS만 하다가 웹쿡에서 랜딩페이지를 만들었는데, 자는 동안에도 수강 신청이 들어와요. 진짜 24시간 일하는 영업사원을 고용한 느낌입니다.",
    result: "24시간 자동 수강 접수",
  },
  {
    name: "박○○",
    role: "부동산 컨설팅",
    targetType: "A",
    content:
      "웹쿡에서 리뉴얼한 후 한 달 만에 제작 비용을 회수했습니다. 특히 모바일 전환이 크게 올라서 놀랐어요.",
    result: "제작비 1개월 내 회수",
  },
  {
    name: "최○○",
    role: "쇼핑몰 운영",
    targetType: "A",
    content:
      "기존 홈페이지는 방문자가 그냥 나갔는데, 웹쿡이 만든 사이트는 이탈률이 반 이하로 줄고 매출이 3배 늘었습니다.",
    result: "이탈률 85% → 38%",
  },
  {
    name: "정○○",
    role: "퍼스널 브랜딩 코치",
    targetType: "B",
    content:
      "웹쿡 덕분에 제 서비스를 제대로 보여줄 수 있는 홈페이지가 생겼어요. 이제 쉬는 날에도 상담 예약이 알아서 잡힙니다.",
    result: "주말에도 상담 예약 자동 접수",
  },
  {
    name: "한○○",
    role: "피트니스 스튜디오",
    targetType: "A",
    content:
      "예전 홈페이지로는 월 2건이던 예약이, 웹쿡이 전환형으로 바꿔주니까 주 5건 이상 들어옵니다. 확실히 다릅니다.",
    result: "상담 예약 월 2건 → 주 5건",
  },
];

export default function SocialProofSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount = 3;
  const maxIndex = Math.max(0, testimonials.length - visibleCount);

  return (
    <section id="social-proof" className="py-20 sm:py-32 bg-[#0a0015]">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-[#6B46C1]/10 text-[#9F7AEA] border border-[#6B46C1]/20 mb-6">
              고객 후기
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              웹쿡 고객사의{" "}
              <span className="gradient-text">실제 성과입니다</span>
            </h2>
            <p className="text-[#A0A0B0] text-lg">
              홈페이지 하나 바꿨을 뿐인데, 결과가 달라졌습니다.
            </p>
          </div>
        </ScrollReveal>

        {/* Desktop slider */}
        <div className="hidden md:block">
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials
              .slice(currentIndex, currentIndex + visibleCount)
              .map((t, i) => (
                <ScrollReveal key={currentIndex + i} delay={i * 100}>
                  <div className="h-full p-5 sm:p-8 rounded-2xl bg-gradient-to-b from-[#111] to-[#0a0a0a] border border-white/5">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-[#6B46C1]/20 flex items-center justify-center text-sm font-bold text-[#9F7AEA]">
                        {t.name[0]}
                      </div>
                      <div>
                        <p className="font-semibold text-sm">{t.name}</p>
                        <p className="text-xs text-[#A0A0B0]">{t.role}</p>
                      </div>
                    </div>
                    <p className="text-[#A0A0B0] text-sm leading-relaxed mb-4">
                      &ldquo;{t.content}&rdquo;
                    </p>
                    <div className="pt-4 border-t border-white/5">
                      <p className="text-sm font-bold text-[#9F7AEA]">
                        {t.result}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
          </div>
          {/* Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  i === currentIndex
                    ? "bg-[#6B46C1] w-8"
                    : "bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Mobile cards */}
        <div className="md:hidden space-y-4">
          {testimonials.map((t, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div className="p-6 rounded-2xl bg-gradient-to-b from-[#111] to-[#0a0a0a] border border-white/5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-[#6B46C1]/20 flex items-center justify-center text-sm font-bold text-[#9F7AEA]">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{t.name}</p>
                    <p className="text-xs text-[#A0A0B0]">{t.role}</p>
                  </div>
                </div>
                <p className="text-[#A0A0B0] text-sm leading-relaxed mb-3">
                  &ldquo;{t.content}&rdquo;
                </p>
                <p className="text-sm font-bold text-[#9F7AEA]">
                  {t.result}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
