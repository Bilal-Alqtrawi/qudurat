"use client";

import Link from "next/link";
import { useEffect, useRef, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import {
  Check,
  ArrowRight,
  Video,
  BookOpen,
  MessageSquare,
} from "lucide-react";

function TracksContent() {
  const searchParams = useSearchParams();
  const trackType = searchParams.get("type");

  const boxOneRef = useRef<HTMLDivElement>(null);
  const boxTwoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (trackType === "live" && boxOneRef.current) {
      boxOneRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    } else if (trackType === "recorded" && boxTwoRef.current) {
      boxTwoRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [trackType]);

  return (
    <div className="max-w-5xl mx-auto space-y-16">
      {/* الهيدر العلوي وزر العودة */}
      <div className="space-y-4">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 text-xs font-black text-brand-gray hover:text-brand-navy mb-2 transition-colors"
        >
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          <span>العودة للرئيسية</span>
        </Link>
        <h1 className="text-3xl sm:text-5xl font-black text-brand-navy leading-tight">
          تفاصيل ومميزات{" "}
          <span className="text-brand-gold">المسارات التدريبية</span>
        </h1>
        <p className="text-sm sm:text-base text-brand-gray max-w-2xl font-semibold leading-relaxed">
          تعرفي بشكل تفصيلي على مميزات كل مسار متاح داخل المنصة لتحديد الخيار
          الأمثل والأنسب لجدولك الدراسي.
        </p>
      </div>

      <div className="space-y-12">
        {/* المسار الأول: البث المباشر */}
        <div
          ref={boxOneRef}
          className="group relative p-8 sm:p-10 rounded-[2.5rem] bg-white shadow-[0_25px_60px_-15px_rgba(15,23,42,0.06)] hover:shadow-[0_35px_60px_-15px_rgba(22,46,68,0.25)] border border-transparent transition-all duration-500 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center transform-gpu hover:-translate-y-1"
        >
          {/* Border Gradient ناعم قبل الـ Hover يختفي بسلاسة */}
          <div className="absolute inset-0 p-[1.5px] bg-gradient-to-br from-slate-200 via-brand-navy/10 to-slate-200 rounded-[2.5rem] pointer-events-none z-0 group-hover:opacity-0 transition-opacity duration-500" />
          <div className="absolute inset-[1.5px] bg-white rounded-[2.45rem] pointer-events-none z-0 group-hover:opacity-0 transition-opacity duration-500" />

          {/* محتوى المسار الأول */}
          <div className="relative z-10 lg:col-span-8 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-light text-brand-navy text-xs font-black border border-brand-navy/5">
              <Video className="w-4 h-4 text-brand-gold animate-pulse" />
              <span>المسار الأول</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-brand-navy">
              مسار البث المباشر التفاعلي
            </h2>
            <p className="text-sm sm:text-base text-brand-gray leading-relaxed font-medium">
              تركيز مطلق وضمان للتفاعل اللحظي المكثف، حيث تحصل الطالبة على توجيه
              مباشر مخصص من الأستاذة، مع رسم وتفكيك فوري لمسائل المقارنات
              والهندسة وتجمّعات أولاً بأول لضمان الفهم التام والاستعداد التام.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {[
                "شرح تفاعلي مباشر مع الأستاذة ريناد",
                "إمكانية طرح الأسئلة والنقاش فورياً أثناء الحصة",
                "حل وتحليل أحدث التجميعات أولاً بأول",
                "متابعة دورية واختبارات قصيرة لقياس مستوى التقدم",
                "جروب خاص للمناقشات المستمرة والرد على الاستفسارات",
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 text-xs sm:text-sm font-bold text-brand-navy/90"
                >
                  <div className="w-5 h-5 rounded-md bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 shadow-2xs border border-emerald-100">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* صندوق الأكشن / السعر والتسجيل */}
          <div className="relative z-10 lg:col-span-4 flex flex-col gap-4 w-full bg-slate-50/60 p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-2xs text-center">
            <div className="space-y-1">
              <span className="text-[11px] font-black text-brand-navy bg-white px-3 py-1 rounded-full border border-slate-200/60 shadow-3xs">
                التفاعل والالتزام اليومي
              </span>
              <p className="text-xs font-semibold text-brand-gray pt-2">
                مقاعد محدودة لضمان جودة المتابعة الشخصية لكل طالبة.
              </p>
            </div>
            <Link
              href="https://wa.me/966567318977"
              target="_blank"
              className="group w-full py-4 rounded-2xl bg-brand-navy text-white text-center font-black text-sm flex items-center justify-center gap-2 hover:bg-brand-navy/90 transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-brand-navy/10 transform-gpu hover:-translate-y-0.5"
            >
              <MessageSquare className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
              <span>استفسار وتسجيل سريع</span>
            </Link>
          </div>
        </div>

        {/* المسار الثاني: الدورات المسجلة */}
        <div
          ref={boxTwoRef}
          className="group relative p-8 sm:p-10 rounded-[2.5rem] bg-white shadow-[0_25px_60px_-15px_rgba(15,23,42,0.06)] hover:shadow-[0_35px_60px_-15px_rgba(244,162,21,0.25)] border border-transparent transition-all duration-500 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center transform-gpu hover:-translate-y-1"
        >
          {/* Border Gradient ذهبي ناعم قبل الـ Hover يختفي بسلاسة */}
          <div className="absolute inset-0 p-[1.5px] bg-gradient-to-br from-slate-200 via-brand-gold/30 to-slate-200 rounded-[2.5rem] pointer-events-none z-0 group-hover:opacity-0 transition-opacity duration-500" />
          <div className="absolute inset-[1.5px] bg-white rounded-[2.45rem] pointer-events-none z-0 group-hover:opacity-0 transition-opacity duration-500" />

          {/* محتوى المسار الثاني */}
          <div className="relative z-10 lg:col-span-8 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-50 text-brand-gold text-xs font-black border border-brand-gold/10">
              <BookOpen className="w-4 h-4 text-brand-gold" />
              <span>المسار الثاني</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-brand-navy">
              مسار الدورات المسجلة الشامل والحقائب الرقمية
            </h2>
            <p className="text-sm sm:text-base text-brand-gray leading-relaxed font-medium">
              هذا المسار مصمم خصيصاً لمن تفضل المذاكرة المرنة وإدارة وقتها
              بنفسها. يحتوي على حقيبة رقمية متكاملة تشمل فيديوهات قصيرة مركزة
              مأخوذة من الصفر وتغطي كتاب المعاصر كاملاً وتأسيس اللفظي الشامل دون
              حشو أو إطالة وتشتيت.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {[
                "فيديوهات قصيرة مكثفة (اشرح من الصفر بدون تشتيت)",
                "تغطية كاملة ومبسطة لكتاب المعاصر وتأسيس اللفظي",
                "حقيبة رقمية وملخصات PDF جاهزة للتحميل والمذاكرة",
                "حرية تامة في اختيار أوقات المذاكرة وسرعة الإنجاز",
                "أكثر من ١٠٠٠ سؤال تدريبي مقسمة حسب الدروس",
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 text-xs sm:text-sm font-bold text-brand-navy/90"
                >
                  <div className="w-5 h-5 rounded-md bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 shadow-2xs border border-emerald-100">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* صندوق الأكشن / السعر والتسجيل */}
          <div className="relative z-10 lg:col-span-4 flex flex-col gap-4 w-full bg-slate-50/60 p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-2xs text-center">
            <div className="space-y-1">
              <span className="text-[11px] font-black text-brand-gold bg-white px-3 py-1 rounded-full border border-slate-200/60 shadow-3xs">
                الدراسة المرنة والمستقلة
              </span>
              <p className="text-xs font-semibold text-brand-gray pt-2">
                انطلقي بالسرعة التي تناسبك مع حقائب ومصادر مفتوحة الأمد بالكامل.
              </p>
            </div>
            <Link
              href="https://wa.me/966567318977"
              target="_blank"
              className="group w-full py-4 rounded-2xl bg-brand-gold text-brand-navy text-center font-black text-sm flex items-center justify-center gap-2 hover:bg-brand-gold/90 transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-brand-gold/10 transform-gpu hover:-translate-y-0.5"
            >
              <MessageSquare className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
              <span>اشتري الحقيبة الرقمية الآن</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TracksPage() {
  return (
    <main
      className="min-h-screen bg-slate-50 py-32 px-4 sm:px-6 selection:bg-brand-gold/20 text-right"
      dir="rtl"
    >
      <Suspense
        fallback={
          <div className="text-center py-20 text-sm font-bold text-brand-gray">
            جاري تحميل المسارات...
          </div>
        }
      >
        <TracksContent />
      </Suspense>
    </main>
  );
}
