"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 12,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const deadline = new Date();
    deadline.setDate(deadline.getDate() + 3);
    deadline.setHours(23, 59, 59, 0);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = deadline.getTime() - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex gap-3 justify-center">
      {[
        { value: timeLeft.days, label: "일" },
        { value: timeLeft.hours, label: "시간" },
        { value: timeLeft.minutes, label: "분" },
        { value: timeLeft.seconds, label: "초" },
      ].map((item, i) => (
        <div key={i} className="text-center">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-[#6B46C1]/20 border border-[#6B46C1]/30 flex items-center justify-center">
            <span className="text-2xl sm:text-3xl font-bold text-white">
              {String(item.value).padStart(2, "0")}
            </span>
          </div>
          <span className="text-xs text-[#A0A0B0] mt-1 block">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}

const benefits = [
  "현재 홈페이지 전환 구조 무료 진단",
  "업종별 맞춤 전환율 개선 전략 제안",
  "경쟁사 대비 차별화 포인트 분석",
  "예상 제작 범위 & 견적 안내",
  "강제 계약 없음 — 부담 없이 상담만",
];

export default function OfferSection() {
  return (
    <section
      id="offer"
      className="py-20 sm:py-32 bg-gradient-to-b from-[#0a0015] to-[#08001a]"
    >
      <div className="max-w-4xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-amber-500/10 text-amber-400 border border-amber-500/20 mb-6">
              이번 달 한정 혜택
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              지금{" "}
              <span className="gradient-text">무료 상담</span> 받아보세요
            </h2>
            <p className="text-base sm:text-lg text-[#A0A0B0]">
              내 홈페이지, 왜 전환이 안 되는지
              <br className="sm:hidden" />
              무료로 진단해 드립니다.
              <br className="hidden sm:block" />
              전환율을 높이는 구체적인 방법까지 제안합니다.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="p-5 sm:p-12 rounded-2xl gradient-border text-center">
            {/* Countdown */}
            <p className="text-sm text-amber-400 mb-4 font-medium">
              무료 상담 마감까지
            </p>
            <CountdownTimer />

            {/* Benefits */}
            <div className="mt-10 space-y-3 text-left max-w-md mx-auto">
              {benefits.map((b, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#6B46C1] flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <span className="text-[#A0A0B0] text-sm">{b}</span>
                </div>
              ))}
            </div>

            {/* Scarcity */}
            <div className="mt-8 p-4 rounded-xl bg-amber-500/5 border border-amber-500/10">
              <p className="text-amber-400 text-sm font-medium">
                이번 달 무료 상담 — 잔여{" "}
                <span className="text-xl font-bold">5건</span>
              </p>
            </div>

            {/* CTA */}
            <a
              href="#form"
              className="mt-8 inline-flex items-center justify-center px-10 py-4 rounded-full bg-[#6B46C1] text-white font-semibold text-lg hover:bg-[#553C9A] transition-all animate-pulse-glow"
            >
              무료 상담 신청하기
            </a>
            <br />
            <Link
              href="/consultation"
              className="inline-block mt-4 text-sm text-[#9F7AEA] hover:text-white transition-colors"
            >
              상담 페이지 바로가기 →
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
