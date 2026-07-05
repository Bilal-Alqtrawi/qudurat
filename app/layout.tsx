import { Tajawal } from "next/font/google";
import localFont from "next/font/local";

import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

const tajawal = Tajawal({
  subsets: ["arabic"],
  variable: "--font-tajawal",
  weight: ["300", "400", "500", "700", "900"],
});

const thmanyah = localFont({
  src: [
    {
      path: "../public/fonts/thmanyah-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/thmanyah-medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/thmanyah-bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/thmanyah-black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-thmanyah",
});

export const metadata: Metadata = {
  title: {
    default: "منصة الأستاذة ريناد ناصر | تأسيس القدرات والتحصيلي الذكي",
    template: "%s | منصة أ. ريناد ناصر",
  },
  description:
    "المنصة التدريبية المعتمدة للأستاذة ريناد ناصر لتأهيل طالبات القدرات والتحصيلي. نرافقكِ خطوة بخطوة نحو الـ +٩٥ عبر استراتيجيات حل مبتكرة وبثوث مباشرة مخصصة.",
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
      "طريقك نحو الـ +٩٥ يبدأ بتأسيس ذكي مبني على أسس علمية معتمدة دولياً ومحلياً.",
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
      className={`${tajawal.variable} ${thmanyah.variable} h-full antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
