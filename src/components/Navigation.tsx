"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { route: "/problem", label: "현실 진단" },
    { route: "/vision", label: "왜 홈페이지인가" },
    { route: "/solution", label: "서비스" },
    { route: "/about", label: "웹쿡 소개" },
    { route: "/reviews", label: "고객 후기" },
    { route: "/consultation", label: "무료 상담" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || menuOpen
            ? "bg-black/80 backdrop-blur-lg border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="text-lg font-bold gradient-text">
            웹쿡
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.route}
                href={link.route}
                className={`text-sm transition-colors ${
                  pathname === link.route ? "text-white" : "text-[#A0A0B0] hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {/* CTA button */}
            <Link
              href="/consultation"
              className="hidden sm:inline-block px-5 py-2 rounded-full bg-[#6B46C1] text-white text-sm font-medium hover:bg-[#553C9A] transition-all"
            >
              제작 문의
            </Link>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
              aria-label="메뉴"
            >
              <span
                className={`w-5 h-0.5 bg-white transition-all duration-300 ${
                  menuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`w-5 h-0.5 bg-white transition-all duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`w-5 h-0.5 bg-white transition-all duration-300 ${
                  menuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-lg pt-20 px-6 md:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.route}
                href={link.route}
                onClick={() => setMenuOpen(false)}
                className={`py-4 text-lg font-medium border-b border-white/5 transition-colors ${
                  pathname === link.route ? "text-[#9F7AEA]" : "text-white hover:text-[#9F7AEA]"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/consultation"
              onClick={() => setMenuOpen(false)}
              className="mt-6 py-4 text-center rounded-xl bg-[#6B46C1] text-white font-semibold text-lg hover:bg-[#553C9A] transition-all"
            >
              무료 상담 신청
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
