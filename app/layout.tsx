import { Cairo } from "next/font/google";

import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/shared/header/Header";
import Footer from "@/components/shared/Footer";
import { SearchProvider } from "@/context/SearchContext";

const cairo = Cairo({
  subsets: ["arabic"],
  variable: "--font-cairo",
  weight: ["300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "منصة الأستاذة ريناد ناصر | تأسيس القدرات والتحصيلي الذكي",
    template: "%s | منصة أ. ريناد ناصر",
  },
  description:
    "المنصة التدريبية المعتمدة للأستاذة ريناد ناصر لتأهيل طالبات القدرات والتحصيلي. نرافقكِ خطوة بخطوة نحو الـ 100 عبر استراتيجيات حل مبتكرة وبثوث مباشرة مخصصة.",
  keywords: [
    "قدرات",
    "تحصيلي",
    "ريناد ناصر",
    "تأسيس قدرات",
    "اختبار قياس",
    "دورة قدرات محوسب",
    "قدرات ورقي",
    "مركز قياس",
    "استراتيجيات الحل السريع",
  ],
  authors: [{ name: "الأستاذة ريناد ناصر" }],
  creator: "منصة أ. ريناد ناصر",
  // metadataBase: new URL("https://renad-qatrat.com"), // LATER FOR Real Domain

  // For Display logo and data when sharing in nice shape
  openGraph: {
    title: "منصة الأستاذة ريناد ناصر | تأسيس القدرات والتحصيلي الذكي",
    description:
      "طريقك نحو الـ 100 يبدأ بتأسيس ذكي مبني على أسس علمية معتمدة دولياً ومحلياً.",
    // url: "https://renad-qatrat.com",
    siteName: "منصة أ. ريناد ناصر",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "لوجو منصة الأستاذة ريناد ناصر",
      },
    ],
    locale: "ar_SA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "منصة الأستاذة ريناد ناصر | تأسيس القدرات والتحصيلي",
    description:
      "تأسيس ذكي، برامج مباشرة فردية وجماعية، وضمان جودة الطرح للوصول لأعلى الدرجات.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${cairo.variable}  h-full antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <SearchProvider>{children}</SearchProvider>
        <Footer />
      </body>
    </html>
  );
}
