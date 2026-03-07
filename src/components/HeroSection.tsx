"use client";

import { useEffect, useRef, useState, useCallback } from "react";

const FRAME_COUNT = 80;
const FRAME_PATH = "/frames/frame_";
const FRAME_EXT = "jpg";

export default function HeroSection() {
  const desktopCanvasRef = useRef<HTMLCanvasElement>(null);
  const mobileCanvasRef = useRef<HTMLCanvasElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef(-1);
  const rafRef = useRef<number | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const images: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      const frameNum = String(i).padStart(4, "0");
      img.src = `${FRAME_PATH}${frameNum}.${FRAME_EXT}`;
      img.onload = () => {
        loadedCount++;
        setLoadProgress(Math.round((loadedCount / FRAME_COUNT) * 100));
        if (loadedCount === FRAME_COUNT) {
          setIsLoaded(true);
        }
      };
      images.push(img);
    }

    imagesRef.current = images;
  }, []);

  const getActiveCanvas = useCallback(() => {
    const isMobile = window.innerWidth < 768;
    return isMobile ? mobileCanvasRef.current : desktopCanvasRef.current;
  }, []);

  const drawFrame = useCallback((frameIndex: number, force = false) => {
    if (!force && frameIndex === currentFrameRef.current) return;

    const canvas = getActiveCanvas();
    const ctx = canvas?.getContext("2d");
    const img = imagesRef.current[frameIndex];

    if (!canvas || !ctx || !img) return;

    const cw = canvas.width;
    const ch = canvas.height;
    const iw = img.naturalWidth;
    const ih = img.naturalHeight;

    // Mobile: contain (show full frame). Desktop: cover (full bleed)
    const isMobile = window.innerWidth < 768;
    const scale = isMobile
      ? cw / iw // fit to width — video fills width, height scales proportionally
      : Math.max(cw / iw, ch / ih);
    const sw = iw * scale;
    const sh = ih * scale;
    const sx = (cw - sw) / 2;
    const sy = isMobile ? (ch - sh) / 2 : (ch - sh) / 2;

    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, sx, sy, sw, sh);
    currentFrameRef.current = frameIndex;
  }, [getActiveCanvas]);

  useEffect(() => {
    const resizeCanvas = () => {
      const isMobile = window.innerWidth < 768;

      // Resize desktop canvas
      const dc = desktopCanvasRef.current;
      if (dc && !isMobile) {
        dc.width = window.innerWidth;
        dc.height = window.innerHeight;
      }

      // Resize mobile canvas
      const mc = mobileCanvasRef.current;
      if (mc && isMobile) {
        const container = mc.parentElement;
        if (container) {
          mc.width = container.clientWidth;
          mc.height = container.clientHeight;
        }
      }

      if (currentFrameRef.current >= 0) {
        const saved = currentFrameRef.current;
        currentFrameRef.current = -1;
        drawFrame(saved, true);
      }
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    return () => window.removeEventListener("resize", resizeCanvas);
  }, [drawFrame]);

  useEffect(() => {
    if (!isLoaded) return;

    drawFrame(0, true);

    const handleScroll = () => {
      if (rafRef.current) return;

      rafRef.current = requestAnimationFrame(() => {
        const section = sectionRef.current;
        if (!section) {
          rafRef.current = null;
          return;
        }

        const rect = section.getBoundingClientRect();
        const sectionHeight = section.offsetHeight;
        const viewportHeight = window.innerHeight;

        const scrollableDistance = sectionHeight - viewportHeight;
        const scrolled = -rect.top;
        const progress = Math.max(0, Math.min(1, scrolled / scrollableDistance));

        setScrollProgress(progress);

        const frameIndex = Math.min(
          Math.floor(progress * FRAME_COUNT),
          FRAME_COUNT - 1
        );

        drawFrame(frameIndex);
        rafRef.current = null;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isLoaded, drawFrame]);

  // Text fades out quickly (within first 15% of scroll)
  const textOpacity = Math.max(0, 1 - scrollProgress * 6);
  const overlayOpacity = 0.5 * textOpacity;

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative bg-black hero-scroll-height"
    >
      {/* ===== DESKTOP: overlay layout ===== */}
      <div className="sticky top-0 h-screen overflow-hidden hidden md:block">
        <canvas
          ref={desktopCanvasRef}
          className={`absolute inset-0 w-full h-full transition-opacity duration-700 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ backgroundColor: `rgba(0,0,0,${overlayOpacity})` }}
        />
        {!isLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a0015] to-[#05000d]" />
        )}
        {!isLoaded && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 z-30">
            <div className="w-12 h-12 border-2 border-[#6B46C1] border-t-transparent rounded-full animate-spin" />
            <p className="text-sm text-[#A0A0B0]">{loadProgress}%</p>
          </div>
        )}
        <div
          className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center pointer-events-none"
          style={{ opacity: textOpacity }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold leading-tight mb-6 max-w-4xl drop-shadow-[0_2px_20px_rgba(0,0,0,0.8)]">
            사장님이 잠든 시간에도
            <br />
            <span className="gradient-text">고객은 검색하고 있습니다</span>
          </h1>
          <p className="text-xl text-white/80 mb-8 max-w-2xl drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            24시간 지치지 않는 최우수 영업사원,
            <br />
            제대로 된 홈페이지 하나면 충분합니다.
          </p>
          <div className="pointer-events-auto">
            <a
              href="#form"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#6B46C1] text-white font-semibold text-lg hover:bg-[#553C9A] transition-all animate-pulse-glow"
            >
              프로젝트 문의하기
            </a>
          </div>
        </div>
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#A0A0B0] z-10"
          style={{ opacity: textOpacity }}
        >
          <span className="text-xs">스크롤하세요</span>
          <div className="w-5 h-8 rounded-full border-2 border-[#A0A0B0]/40 flex justify-center">
            <div className="w-1 h-2 bg-[#A0A0B0] rounded-full mt-1.5 animate-bounce" />
          </div>
        </div>
      </div>

      {/* ===== MOBILE: text above → video middle → CTA below ===== */}
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col items-center justify-center gap-4 md:hidden">
        {!isLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a0015] to-[#05000d]" />
        )}
        {!isLoaded && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 z-30">
            <div className="w-12 h-12 border-2 border-[#6B46C1] border-t-transparent rounded-full animate-spin" />
            <p className="text-sm text-[#A0A0B0]">{loadProgress}%</p>
          </div>
        )}

        {/* Top: title text — stays visible throughout scroll */}
        <div className="relative z-10 pt-14 px-5 text-center">
          <h1 className="text-[22px] font-bold leading-snug mb-1.5">
            사장님이 잠든 시간에도
            <br />
            <span className="gradient-text">고객은 검색하고 있습니다</span>
          </h1>
          <p className="text-sm text-white/70 leading-relaxed">
            24시간 지치지 않는 최우수 영업사원,
            <br />
            제대로 된 홈페이지 하나면 충분합니다.
          </p>
        </div>

        {/* Middle: video canvas — fixed 16:9 aspect ratio */}
        <div className="relative w-[calc(100%-2rem)] aspect-[16/9]">
          <canvas
            ref={mobileCanvasRef}
            className={`w-full h-full rounded-2xl transition-opacity duration-700 ${
              isLoaded ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>

        {/* Bottom: CTA stays visible, scroll indicator fades */}
        <div className="relative z-10 px-5 text-center">
          <a
            href="#form"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#6B46C1] text-white font-semibold text-base hover:bg-[#553C9A] transition-all animate-pulse-glow"
          >
            프로젝트 문의하기
          </a>
          <div
            className="flex flex-col items-center gap-1 mt-2 text-[#A0A0B0]"
            style={{ opacity: Math.max(0, 1 - scrollProgress * 4) }}
          >
            <span className="text-[11px]">스크롤하세요</span>
            <div className="w-4 h-6 rounded-full border-2 border-[#A0A0B0]/40 flex justify-center">
              <div className="w-1 h-1.5 bg-[#A0A0B0] rounded-full mt-1 animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
