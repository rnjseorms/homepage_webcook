"use client";

import Link from "next/link";
import ScrollReveal from "./ScrollReveal";
import CountUp from "./CountUp";

const stats = [
  { value: 150, suffix: "+", label: "홈페이지 제작 실적" },
  { value: 97, suffix: "%", label: "고객 만족도" },
  { value: 3, suffix: "배", label: "평균 전환율 개선" },
  { value: 50, suffix: "+", label: "업종별 제작 경험" },
];

const credentials = [
  "전환형 홈페이지·랜딩페이지 전문 제작",
  "150개+ 프로젝트 실전 경험",
  "업종별 맞춤 전환 구조 설계 노하우",
  "광고 연동 & SEO 최적화 전문",
  "고객사 평균 전환율 3배 이상 개선 실적",
];

export default function AuthoritySection() {
  return (
    <section
      id="authority"
      className="py-20 sm:py-32 bg-gradient-to-b from-black to-[#0a0015]"
    >
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-[#6B46C1]/10 text-[#9F7AEA] border border-[#6B46C1]/20 mb-6">
              왜 웹쿡인가
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              결과로 증명하는{" "}
              <span className="gradient-text">전문 에이전시</span>
            </h2>
          </div>
        </ScrollReveal>

        {/* Stats */}
        <ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="text-center p-4 sm:p-6 rounded-2xl bg-[#111] border border-white/5"
              >
                <div className="text-3xl sm:text-4xl font-bold gradient-text">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-sm text-[#A0A0B0] mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Profile + Credentials */}
        <div className="grid md:grid-cols-2 gap-8">
          <ScrollReveal>
            <div className="p-5 sm:p-8 rounded-2xl gradient-border">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-[#6B46C1] to-[#9B7FE8] flex items-center justify-center text-xl font-bold">
                  WC
                </div>
                <div>
                  <h3 className="text-xl font-bold">웹쿡 대표</h3>
                  <p className="text-[#A0A0B0] text-sm">
                    WebCook Agency
                  </p>
                </div>
              </div>
              <p className="text-[#A0A0B0] text-sm leading-relaxed mb-6">
                단순히 예쁜 홈페이지를 만드는 것이 아니라, 사장님 대신
                24시간 영업하는 전환 구조를 설계합니다. 150개 이상의
                프로젝트 경험으로 업종별 최적의 전환 솔루션을 제공합니다.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "전환형 홈페이지",
                  "랜딩페이지",
                  "SEO 최적화",
                  "광고 연동",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs bg-[#6B46C1]/10 text-[#9F7AEA] border border-[#6B46C1]/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div className="p-5 sm:p-8 rounded-2xl gradient-border">
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
          </ScrollReveal>
        </div>

        <ScrollReveal>
          <div className="text-center mt-10">
            <Link
              href="/about"
              className="inline-block text-sm text-[#9F7AEA] hover:text-white transition-colors"
            >
              웹쿡 소개 자세히 보기 →
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
