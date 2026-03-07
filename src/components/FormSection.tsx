"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import ScrollReveal from "./ScrollReveal";

const formSchema = z.object({
  name: z.string().optional(),
  email: z.string().email("올바른 이메일 주소를 입력해주세요."),
  phone: z.string().optional(),
  privacy: z.literal(true, {
    message: "개인정보처리방침에 동의해주세요.",
  }),
});

type FormData = z.infer<typeof formSchema>;

export default function FormSection() {
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
              ? new URLSearchParams(window.location.search).get("utm_source") ||
                "direct"
              : "direct",
        }),
      });

      if (res.ok) {
        setIsSubmitted(true);
      }
    } catch {
      alert("신청 중 오류가 발생했습니다. 다시 시도해주세요.");
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <section id="form" className="py-20 sm:py-32 bg-[#08001a]">
        <div className="max-w-lg mx-auto px-6 text-center">
          <div className="p-12 rounded-2xl gradient-border">
            <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-8 h-8 text-green-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-3">문의가 접수되었습니다!</h3>
            <p className="text-[#A0A0B0] mb-6">
              입력하신 이메일로 상담 일정을 안내드립니다.
              <br />
              카카오톡 채널을 추가하시면 더 빠른 상담이 가능합니다.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FEE500] text-[#191919] font-semibold hover:bg-[#FDD800] transition-all"
            >
              카카오톡 채널 추가하기
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="form" className="py-20 sm:py-32 bg-[#08001a]">
      <div className="max-w-lg mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              24시간 일하는{" "}
              <span className="gradient-text">최우수 영업사원</span>
              <br />
              지금 바로 고용하세요
            </h2>
            <p className="text-[#A0A0B0]">
              30초만 투자하세요. 무료 상담 & 맞춤 견적을 받아보실 수 있습니다.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="p-5 sm:p-8 rounded-2xl gradient-border space-y-5"
          >
            {/* Name */}
            <div>
              <label className="block text-sm font-medium mb-2">
                이름 <span className="text-[#A0A0B0]">(선택)</span>
              </label>
              <input
                type="text"
                {...register("name")}
                placeholder="홍길동"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-[#A0A0B0]/50 focus:border-[#6B46C1] focus:outline-none focus:ring-1 focus:ring-[#6B46C1] transition-all"
              />
            </div>

            {/* Email */}
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
              {errors.email && (
                <p className="text-red-400 text-xs mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium mb-2">
                연락처 / 카카오톡 ID{" "}
                <span className="text-[#A0A0B0]">(선택)</span>
              </label>
              <input
                type="text"
                {...register("phone")}
                placeholder="010-1234-5678 또는 카카오톡 ID"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-[#A0A0B0]/50 focus:border-[#6B46C1] focus:outline-none focus:ring-1 focus:ring-[#6B46C1] transition-all"
              />
            </div>

            {/* Privacy */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                {...register("privacy")}
                id="privacy"
                className="mt-1 w-4 h-4 accent-[#6B46C1]"
              />
              <label htmlFor="privacy" className="text-sm text-[#A0A0B0]">
                <a
                  href="/privacy"
                  target="_blank"
                  className="underline text-[#9F7AEA] hover:text-[#6B46C1]"
                >
                  개인정보처리방침
                </a>
                에 동의합니다. <span className="text-red-400">*</span>
              </label>
            </div>
            {errors.privacy && (
              <p className="text-red-400 text-xs">{errors.privacy.message}</p>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-4 rounded-full bg-[#6B46C1] text-white font-semibold text-lg hover:bg-[#553C9A] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "접수 중..." : "프로젝트 문의하기"}
            </button>

            <p className="text-xs text-[#A0A0B0] text-center">
              강제 계약이 아닙니다. 부담 없이 상담만 받아보세요.
            </p>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
}
