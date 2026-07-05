import type { Metadata } from "next";
import { Sparkles } from "lucide-react";
import CoursesPageClient from "@/components/courses/CoursesPageClient";
import {
  INITIAL_COURSES,
  INITIAL_REVIEWS,
  getAverageRating,
} from "@/data/courses-data";

export const metadata: Metadata = {
  title: "الدورات والبرامج التدريبية",
  description:
    "تصفّحي جميع مسارات القدرات والتحصيلي مع الأستاذة ريناد ناصر: حقائب رقمية مسجلة وبرامج بث مباشر فردي عبر زوم، مع تأسيس شامل كمي ولفظي وضمان الوصول لأعلى الدرجات.",
  keywords: [
    "دورات قدرات",
    "دورة تحصيلي",
    "تأسيس قدرات ريناد ناصر",
    "بث مباشر قدرات زوم",
    "حقيبة رقمية قدرات",
  ],
  alternates: {
    canonical: "/courses",
  },
  openGraph: {
    title: "الدورات والبرامج التدريبية | منصة أ. ريناد ناصر",
    description:
      "اختاري المسار الأنسب لكِ: تأسيس شامل مسجل أو متابعة فردية مباشرة عبر زوم.",
    url: "/courses",
    type: "website",
  },
};

export default function CoursesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: INITIAL_COURSES.map((course, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `/courses/${course.id}`,
      item: {
        "@type": "Course",
        name: course.title,
        description: course.seoDescription || course.shortDesc,
        provider: {
          "@type": "Organization",
          name: "منصة أ. ريناد ناصر",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: getAverageRating(INITIAL_REVIEWS[course.id]),
          reviewCount: (INITIAL_REVIEWS[course.id] || []).length || 1,
        },
      },
    })),
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-20 px-6" dir="rtl">
      {/* بيانات منظمة (Structured Data) لتحسين الظهور في نتائج البحث */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-light border border-slate-100 text-[11px] font-bold text-brand-gold-deep mx-auto">
            <Sparkles className="w-3.5 h-3.5 text-brand-gold-deep" />
            <span>مسارات تدريبية متكاملة للطلاب والطالبات</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-brand-navy tracking-tight">
            الدورات والبرامج التدريبية
          </h1>
          <p className="text-brand-gray text-base sm:text-lg font-medium leading-relaxed">
            اختر الطريقة الأنسب لكِ وللك للتعلم والتفوق؛ برامجنا مصممة بعناية
            لتغطية التأسيس من الصفر، التدريب المكثف، والوصول الآمن لعتبة الـ
            +95.
          </p>
        </div>

        <CoursesPageClient
          courses={INITIAL_COURSES}
          reviews={INITIAL_REVIEWS}
        />
      </div>
    </div>
  );
}
