export default function Footer() {
  return (
    <footer className="py-12 bg-black border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-lg font-bold gradient-text">
              웹쿡
            </span>
            <p className="text-sm text-[#A0A0B0] mt-1">
              24시간 영업하는 전환형 홈페이지 전문 제작
            </p>
          </div>

          <div className="flex items-center gap-6 text-sm text-[#A0A0B0]">
            <a
              href="/privacy"
              className="hover:text-white transition-colors"
            >
              개인정보처리방침
            </a>
            <a
              href="mailto:contact@webcook.kr"
              className="hover:text-white transition-colors"
            >
              이메일 문의
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 text-center text-xs text-[#A0A0B0]">
          &copy; {new Date().getFullYear()} 웹쿡(WebCook). All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
