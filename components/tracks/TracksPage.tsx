"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import {
  Check,
  ArrowRight,
  Video,
  BookOpen,
  MessageSquare,
} from "lucide-react";

export default function TracksPage() {
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
    <main
      className="min-h-screen bg-white py-32 px-6 selection:bg-brand-gold/20 text-right"
      dir="rtl"
    >
      <div className="max-w-5xl mx-auto space-y-16">
        <div className="space-y-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-bold text-brand-gray hover:text-brand-navy mb-4 transition-colors"
          >
            <ArrowRight className="w-4 h-4" />
            <span>العودة للرئيسية</span>
          </Link>
          <h1 className="text-3xl sm:text-5xl font-black text-brand-navy leading-tight">
            تفاصيل ومميزات{" "}
            <span className="text-brand-gold">المسارات التدريبية</span>
          </h1>
          <p className="text-sm sm:text-base text-brand-gray max-w-2xl font-medium leading-relaxed">
            تعرفي بشكل تفصيلي على مميزات كل مسار متاح داخل المنصة لتحديد الخيار
            الأمثل والأنسب لجدولك الدراسي.
          </p>
        </div>

        <div className="space-y-12">
          <div
            ref={boxOneRef}
            className="p-8 sm:p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center transition-all duration-300 hover:border-brand-navy/20"
          >
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-light text-brand-navy text-xs font-black">
                <Video className="w-4 h-4 text-brand-gold" />
                <span>المسار الأول</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-brand-navy">
                مسار البث المباشر التفاعلي
              </h2>
              <p className="text-sm sm:text-base text-brand-gray leading-relaxed font-medium">
                تركيز مطلق وضمان للتفاعل اللحظي المكثف، حيث تحصل الطالبة على
                توجيه مباشر مخصص من الأستاذة، مع رسم وتفكيك فوري لمسائل
                المقارنات والهندسة وتجمّعات ١٤٤٧ أولاً بأول لضمان الفهم التام
                والاستعداد التام.
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "شرح تفاعلي مباشر مع الأستاذة ريناد",
                  "إمكانية طرح الأسئلة والنقاش فورياً أثناء الحصة",
                  "حل وتحليل أحدث تجميعات ١٤٤٧ أولاً بأول",
                  "متابعة دورية واختبارات قصيرة لقياس مستوى التقدم",
                  "جروب خاص للمناقشات المستمرة والرد على الاستفسارات",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-brand-navy"
                  >
                    <div className="w-5 h-5 rounded-md bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3 w-full bg-white p-6 rounded-3xl border border-slate-100 shadow-xs">
              <span className="text-xs font-bold text-brand-gray text-center">
                أفضل خيار للتفاعل والالتزام اليومي
              </span>
              <Link
                href="https://wa.me/966567318977"
                target="_blank"
                className="w-full py-4 rounded-xl bg-brand-navy text-white text-center font-black text-sm flex items-center justify-center gap-2 hover:bg-brand-navy/90 transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>استفسار وتسجيل سريع</span>
              </Link>
            </div>
          </div>

          <div
            ref={boxTwoRef}
            className="p-8 sm:p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center transition-all duration-300 hover:border-brand-gold/20"
          >
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-50 text-brand-gold text-xs font-black">
                <BookOpen className="w-4 h-4 text-brand-gold" />
                <span>المسار الثاني</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-brand-navy">
                مسار الدورات المسجلة الشامل والحقائب الرقمية
              </h2>
              <p className="text-sm sm:text-base text-brand-gray leading-relaxed font-medium">
                هذا المسار مصمم خصيصاً لمن تفضل المذاكرة المرنة وإدارة وقتها
                بنفسها. يحتوي على حقيبة رقمية متكاملة تشمل فيديوهات قصيرة مركزة
                مأخوذة من الصفر وتغطي كتاب المعاصر كاملاً وتأسيس اللفظي الشامل
                دون حشو أو إطالة وتشتيت.
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "فيديوهات قصيرة مكثفة (اشرح من الصفر بدون تشتيت)",
                  "تغطية كاملة ومبسطة لكتاب المعاصر وتأسيس اللفظي",
                  "حقيبة رقمية وملخصات PDF جاهزة للتحميل والمذاكرة",
                  "حرية تامة في اختيار أوقات المذاكرة وسرعة الإنجاز",
                  "أكثر من ١٠٠٠ سؤال تدريبي مقسمة حسب الدروس",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-brand-navy"
                  >
                    <div className="w-5 h-5 rounded-md bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3 w-full bg-white p-6 rounded-3xl border border-slate-100 shadow-xs">
              <span className="text-xs font-bold text-brand-gray text-center">
                الخيار الأمثل للدراسة المرنة والمستقلة
              </span>
              <Link
                href="https://wa.me/966567318977"
                target="_blank"
                className="w-full py-4 rounded-xl bg-brand-gold text-brand-navy text-center font-black text-sm flex items-center justify-center gap-2 hover:bg-brand-gold/90 transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>اشتري الحقيبة الرقمية الآن</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
