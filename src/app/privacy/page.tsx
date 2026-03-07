import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "개인정보처리방침 | 웹쿡",
  description: "웹쿡(WebCook) 개인정보처리방침",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <a
          href="/"
          className="inline-flex items-center gap-2 text-sm text-[#9F7AEA] hover:text-[#6B46C1] mb-10 transition-colors"
        >
          &larr; 홈으로 돌아가기
        </a>

        <h1 className="text-3xl font-bold mb-8">개인정보처리방침</h1>

        <div className="space-y-8 text-[#A0A0B0] text-sm leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              1. 개인정보의 수집 및 이용 목적
            </h2>
            <p>
              웹쿡(이하 &ldquo;회사&rdquo;)는 다음의 목적을 위해
              개인정보를 수집하고 있습니다:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>무료 특강 및 상담 신청 접수</li>
              <li>서비스 관련 안내 및 정보 제공</li>
              <li>마케팅 및 이벤트 정보 전달</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              2. 수집하는 개인정보 항목
            </h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>필수 항목: 이메일 주소</li>
              <li>선택 항목: 이름, 연락처(전화번호 또는 카카오톡 ID)</li>
              <li>
                자동 수집 항목: 접속 IP, 쿠키, 방문 일시, 서비스 이용 기록,
                유입 경로(UTM)
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              3. 개인정보의 보유 및 이용 기간
            </h2>
            <p>
              회사는 개인정보 수집 및 이용 목적이 달성된 후에는 해당 정보를
              지체 없이 파기합니다. 단, 관련 법령에 의해 보존할 필요가 있는
              경우 일정 기간 보관합니다.
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>계약 또는 청약철회 등에 관한 기록: 5년</li>
              <li>소비자 불만 또는 분쟁 처리에 관한 기록: 3년</li>
              <li>웹사이트 방문 기록: 3개월</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              4. 개인정보의 파기 절차 및 방법
            </h2>
            <p>
              전자적 파일 형태의 정보는 기록을 재생할 수 없는 기술적 방법을
              사용하여 삭제합니다. 종이에 출력된 개인정보는 분쇄하거나
              소각하여 파기합니다.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              5. 개인정보의 제3자 제공
            </h2>
            <p>
              회사는 원칙적으로 이용자의 개인정보를 제3자에게 제공하지
              않습니다. 다만, 이용자의 동의가 있거나 법령의 규정에 의한
              경우에는 예외로 합니다.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              6. 이용자의 권리와 행사 방법
            </h2>
            <p>
              이용자는 언제든지 등록되어 있는 자신의 개인정보를 조회하거나
              수정할 수 있으며, 가입 해지를 요청할 수 있습니다. 개인정보
              관련 문의는 아래 연락처로 해주세요.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              7. 개인정보 보호책임자
            </h2>
            <p>이메일: contact@webcook.kr</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              8. 개인정보처리방침의 변경
            </h2>
            <p>
              이 개인정보처리방침은 법령, 정책 또는 보안 기술의 변경에 따라
              내용의 추가, 삭제 및 수정이 있을 수 있으며, 변경 시 웹사이트를
              통해 공지합니다.
            </p>
            <p className="mt-4">시행일자: 2025년 6월 1일</p>
          </section>
        </div>
      </div>
    </div>
  );
}
