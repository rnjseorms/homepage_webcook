"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import SubPageLayout from "@/components/SubPageLayout";

const formSchema = z.object({
  name: z.string().optional(),
  email: z.string().email("올바른 이메일 주소를 입력해주세요."),
  phone: z.string().optional(),
  business: z.string().optional(),
  message: z.string().optional(),
  privacy: z.literal(true, {
    message: "개인정보처리방침에 동의해주세요.",
  }),
});

type FormData = z.infer<typeof formSchema>;

const benefits = [
  "현재 홈페이지 전환 구조 무료 진단",
  "업종별 맞춤 전환율 개선 전략 제안",
  "경쟁사 대비 차별화 포인트 분석",
  "예상 제작 범위 & 견적 안내",
  "강제 계약 없음 — 부담 없이 상담만",
];

export default function ConsultationPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name || "",
          email: data.email,
          phone: data.phone || "",
          source:
            typeof window !== "undefined"
              ? new URLSearchParams(window.location.search).get("utm_source") || "consultation_page"
              : "consultation_page",
        }),
      });

      if (res.ok) setIsSubmitted(true);
    } catch {
      alert("신청 중 오류가 발생했습니다. 다시 시도해주세요.");
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <SubPageLayout>
        <section className="py-32 text-center">
          <div className="max-w-md mx-auto px-6">
            <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-3">문의가 접수되었습니다!</h2>
            <p className="text-[#A0A0B0]">
              입력하신 이메일로 상담 일정을 안내드립니다.
            </p>
          </div>
        </section>
      </SubPageLayout>
    );
  }

  return (
    <SubPageLayout>
      <section className="py-20 sm:py-32 bg-gradient-to-b from-black to-[#08001a]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-amber-500/10 text-amber-400 border border-amber-500/20 mb-6">
            무료 상담
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            지금 <span className="gradient-text">무료 상담</span> 받아보세요
          </h1>
          <p className="text-lg text-[#A0A0B0] max-w-2xl mx-auto">
            내 홈페이지, 왜 전환이 안 되는지 무료로 진단해 드립니다.
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#08001a]">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          {/* Benefits */}
          <div>
            <h2 className="text-xl font-bold mb-6">무료 상담에서 받을 수 있는 것</h2>
            <div className="space-y-4">
              {benefits.map((b, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#6B46C1] flex items-center justify-center flex-shrink-0">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-[#A0A0B0]">{b}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-5 rounded-2xl bg-amber-500/5 border border-amber-500/10">
              <p className="text-amber-400 text-sm font-medium">
                이번 달 무료 상담 — 잔여 <span className="text-xl font-bold">5건</span>
              </p>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="p-6 sm:p-8 rounded-2xl bg-[#111] border border-white/5 space-y-5"
          >
            <div>
              <label className="block text-sm font-medium mb-2">이름</label>
              <input
                type="text"
                {...register("name")}
                placeholder="홍길동"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-[#A0A0B0]/50 focus:border-[#6B46C1] focus:outline-none focus:ring-1 focus:ring-[#6B46C1] transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                이메일 <span className="text-red-400">*</span>
              </label>
              <input
                type="email"
                {...register("email")}
                placeholder="example@email.com"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-[#A0A0B0]/50 focus:border-[#6B46C1] focus:outline-none focus:ring-1 focus:ring-[#6B46C1] transition-all"
              />
              {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">연락처</label>
              <input
                type="text"
                {...register("phone")}
                placeholder="010-1234-5678"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-[#A0A0B0]/50 focus:border-[#6B46C1] focus:outline-none focus:ring-1 focus:ring-[#6B46C1] transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">업종 / 사업 내용</label>
              <input
                type="text"
                {...register("business")}
                placeholder="예: 인테리어, 학원, 카페 등"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-[#A0A0B0]/50 focus:border-[#6B46C1] focus:outline-none focus:ring-1 focus:ring-[#6B46C1] transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">추가 문의사항</label>
              <textarea
                {...register("message")}
                rows={3}
                placeholder="궁금한 점이 있으시면 자유롭게 작성해주세요."
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-[#A0A0B0]/50 focus:border-[#6B46C1] focus:outline-none focus:ring-1 focus:ring-[#6B46C1] transition-all resize-none"
              />
            </div>
            <div className="flex items-start gap-3">
              <input type="checkbox" {...register("privacy")} id="privacy2" className="mt-1 w-4 h-4 accent-[#6B46C1]" />
              <label htmlFor="privacy2" className="text-sm text-[#A0A0B0]">
                <a href="/privacy" target="_blank" className="underline text-[#9F7AEA]">개인정보처리방침</a>에 동의합니다. <span className="text-red-400">*</span>
              </label>
            </div>
            {errors.privacy && <p className="text-red-400 text-xs">{errors.privacy.message}</p>}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-4 rounded-full bg-[#6B46C1] text-white font-semibold text-lg hover:bg-[#553C9A] transition-all disabled:opacity-50"
            >
              {isLoading ? "접수 중..." : "무료 상담 신청하기"}
            </button>
          </form>
        </div>
      </section>
    </SubPageLayout>
  );
}
