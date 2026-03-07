"use client";

import { useEffect, useState } from "react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/80 backdrop-blur-lg border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#hero" className="text-lg font-bold gradient-text">
          웹쿡
        </a>

        <div className="hidden md:flex items-center gap-8">
          {[
            { href: "#problem", label: "현실 진단" },
            { href: "#vision", label: "왜 홈페이지인가" },
            { href: "#solution", label: "서비스" },
            { href: "#authority", label: "웹쿡 소개" },
            { href: "#social-proof", label: "고객 후기" },
            { href: "#offer", label: "무료 상담" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[#A0A0B0] hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#form"
          className="px-5 py-2 rounded-full bg-[#6B46C1] text-white text-sm font-medium hover:bg-[#553C9A] transition-all"
        >
          제작 문의
        </a>
      </div>
    </nav>
  );
}
