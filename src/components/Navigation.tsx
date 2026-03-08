"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { anchor: "#problem", route: "/problem", label: "현실 진단" },
    { anchor: "#vision", route: "/vision", label: "왜 홈페이지인가" },
    { anchor: "#solution", route: "/solution", label: "서비스" },
    { anchor: "#authority", route: "/about", label: "웹쿡 소개" },
    { anchor: "#social-proof", route: "/reviews", label: "고객 후기" },
    { anchor: "#offer", route: "/consultation", label: "무료 상담" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/80 backdrop-blur-lg border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-lg font-bold gradient-text">
          웹쿡
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
            isHome ? (
              <a
                key={link.anchor}
                href={link.anchor}
                className="text-sm text-[#A0A0B0] hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.route}
                href={link.route}
                className={`text-sm transition-colors ${
                  pathname === link.route ? "text-white" : "text-[#A0A0B0] hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        {isHome ? (
          <a
            href="#form"
            className="px-5 py-2 rounded-full bg-[#6B46C1] text-white text-sm font-medium hover:bg-[#553C9A] transition-all"
          >
            제작 문의
          </a>
        ) : (
          <Link
            href="/consultation"
            className="px-5 py-2 rounded-full bg-[#6B46C1] text-white text-sm font-medium hover:bg-[#553C9A] transition-all"
          >
            제작 문의
          </Link>
        )}
      </div>
    </nav>
  );
}
