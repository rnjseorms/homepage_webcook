import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "웹쿡 | 24시간 영업하는 전환형 홈페이지 제작",
  description:
    "사장님이 잠든 시간에도 고객은 검색합니다. 24시간 지치지 않고 영업하는 최우수 직원, 전환형 홈페이지를 웹쿡이 만들어 드립니다. 무료 상담 진행 중.",
  keywords: [
    "홈페이지 제작",
    "랜딩페이지 제작",
    "전환형 홈페이지",
    "웹에이전시",
    "소상공인 홈페이지",
    "홈페이지 외주",
    "웹쿡",
  ],
  openGraph: {
    title: "웹쿡 | 24시간 영업하는 전환형 홈페이지 제작",
    description:
      "사장님이 잠든 시간에도 고객은 검색합니다. 전환율을 높이는 홈페이지, 웹쿡이 만들어 드립니다.",
    type: "website",
    locale: "ko_KR",
    siteName: "웹쿡",
  },
  twitter: {
    card: "summary_large_image",
    title: "웹쿡 | 24시간 영업하는 전환형 홈페이지 제작",
    description:
      "사장님이 잠든 시간에도 고객은 검색합니다. 제대로 된 홈페이지 하나, 최고의 영업사원입니다.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
