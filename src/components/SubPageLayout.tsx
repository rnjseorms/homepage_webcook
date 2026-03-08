"use client";

import Link from "next/link";

export default function SubPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-black">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="text-lg font-bold gradient-text">
            웹쿡
          </Link>
          <div className="hidden md:flex items-center gap-8">
            {[
              { href: "/problem", label: "현실 진단" },
              { href: "/vision", label: "왜 홈페이지인가" },
              { href: "/solution", label: "서비스" },
              { href: "/about", label: "웹쿡 소개" },
              { href: "/reviews", label: "고객 후기" },
              { href: "/consultation", label: "무료 상담" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-[#A0A0B0] hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <Link
            href="/consultation"
            className="px-5 py-2 rounded-full bg-[#6B46C1] text-white text-sm font-medium hover:bg-[#553C9A] transition-all"
          >
            제작 문의
          </Link>
        </div>
      </nav>

      {/* Content */}
      <main className="pt-16">{children}</main>

      {/* Footer */}
      <footer className="py-12 bg-black border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <Link href="/" className="text-lg font-bold gradient-text">
            웹쿡
          </Link>
          <p className="text-sm text-[#A0A0B0] mt-2">
            24시간 영업하는 전환형 홈페이지 전문 제작
          </p>
          <div className="mt-6 text-xs text-[#A0A0B0]">
            &copy; {new Date().getFullYear()} 웹쿡(WebCook). All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
