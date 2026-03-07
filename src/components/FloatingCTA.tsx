"use client";

import { useEffect, useState } from "react";

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 600);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="bg-black/90 backdrop-blur-lg border-t border-white/10 px-4 py-3">
        <a
          href="#form"
          className="flex items-center justify-center w-full py-3.5 rounded-full bg-[#6B46C1] text-white font-semibold hover:bg-[#553C9A] transition-all"
        >
          프로젝트 문의하기
        </a>
      </div>
    </div>
  );
}
