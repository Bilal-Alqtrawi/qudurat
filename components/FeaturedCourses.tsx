"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import {
  BookOpen,
  Video,
  Sparkles,
  Star,
  MessageSquare,
  Maximize2,
  X,
} from "lucide-react";
import {
  INITIAL_COURSES,
  INITIAL_REVIEWS,
  getAverageRating,
  type CourseType,
} from "@/data/courses-data";

export default function FeaturedCourses() {
  const [activeTab, setActiveTab] = useState<"all" | CourseType>("all");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  const filteredCourses =
    activeTab === "all"
      ? INITIAL_COURSES
      : INITIAL_COURSES.filter((course) => course.type === activeTab);

  return (
    <section
      id="courses"
      className="py-24 px-4 sm:px-6 bg-slate-50 relative selection:bg-orange-500/20 select-none text-right"
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-[11px] font-black text-orange-500 mx-auto shadow-3xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>مسارات تدريبية متكاملة للطلاب والطالبات</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-brand-navy tracking-tight">
            الدورات والبرامج التدريبية
          </h2>
          <p className="text-brand-gray text-base sm:text-lg font-semibold leading-relaxed">
            اختر الطريقة الأنسب لكِ ولَكَ للتعلم والتفوق؛ برامجنا مصممة بعناية
            لتغطية التأسيس من الصفر وتحويلها لمهارات سريعة ومضمونة.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 pt-2">
          {(
            [
              { id: "all", label: "جميع المسارات" },
              { id: "recorded", label: "المُسجلة والإستشارات" },
              { id: "live", label: "البث المباشر والـ VIP" },
            ] as const
          ).map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-black transition-colors duration-300 cursor-pointer border ${
                activeTab === tab.id
                  ? "bg-brand-navy text-white border-brand-navy shadow-md"
                  : "bg-white text-brand-navy border-slate-200 hover:bg-slate-100"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-8 pt-6">
          {filteredCourses.slice(0, 4).map((course) => {
            const reviews = INITIAL_REVIEWS[course.id] || [];
            const avgRating = getAverageRating(reviews);

            return (
              <div
                key={course.id}
                className="group relative bg-white rounded-[2.2rem] shadow-[0_15px_35px_-15px_rgba(15,23,42,0.05)] hover:shadow-[0_30px_60px_-15px_rgba(249,115,22,0.18)] transition-all duration-500 ease-out transform-gpu hover:-translate-y-2.5 will-change-transform cursor-pointer"
              >
                <div className="absolute inset-0 rounded-[2.2rem] border border-slate-200/70 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none z-0" />

                <div className="absolute inset-0 p-[1.5px] bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-500 rounded-[2.2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0" />

                <div className="relative z-10 bg-white rounded-[2.1rem] overflow-hidden flex flex-col flex-1 justify-between h-full">
                  <div className="relative h-56 w-full overflow-hidden rounded-t-[2.1rem] bg-slate-50 border-b border-slate-100 shrink-0">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      sizes="(max-w-768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-[1.02] transition-transform duration-500 ease-out transform-gpu"
                      priority
                    />

                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500 pointer-events-none" />

                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setLightboxImage(course.image);
                      }}
                      title="تكبير ومعاينة الصورة"
                      className="absolute top-4 left-4 p-2.5 rounded-full bg-white/95 backdrop-blur-md text-brand-navy shadow-xs opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-105 z-30 cursor-zoom-in"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                    </button>

                    <span
                      className={`absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] font-black tracking-wide shadow-3xs flex items-center gap-1.5 border z-10 bg-white ${
                        course.type === "live"
                          ? "text-rose-600 border-rose-100"
                          : "text-blue-600 border-blue-100"
                      }`}
                    >
                      {course.type === "live" ? (
                        <Video className="w-3 h-3" />
                      ) : (
                        <BookOpen className="w-3 h-3" />
                      )}
                      {course.type === "live"
                        ? "بث مباشر تفاعلي"
                        : "حقيبة رقمية مسجلة"}
                    </span>

                    <div className="absolute bottom-4 right-4 flex items-center gap-1 bg-white px-2.5 py-1 rounded-full border border-slate-100 text-[11px] font-black text-brand-navy shadow-3xs z-10">
                      <Star className="w-3 h-3 text-orange-500 fill-orange-500" />
                      <span>{avgRating}</span>
                      <span className="text-brand-gray/60 font-bold">
                        ({reviews.length})
                      </span>
                    </div>
                  </div>

                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between gap-5">
                    <div className="space-y-2">
                      <Link
                        href={`/courses/${course.id}`}
                        className="block focus:outline-none after:absolute after:inset-0 after:z-10"
                      >
                        <h3 className="text-base sm:text-lg font-black text-brand-navy group-hover:text-orange-500 transition-colors duration-300 leading-snug">
                          {course.title}
                        </h3>
                      </Link>

                      <p className="text-brand-gray text-xs sm:text-sm font-medium leading-relaxed line-clamp-2">
                        {course.shortDesc}
                      </p>
                    </div>

                    {course.features && course.features.length > 0 && (
                      <div className="pt-4 border-t border-slate-100 space-y-2">
                        <span className="text-[10px] font-black text-brand-navy/40 block mb-1">
                          الميزات المتضمنة في المسار:
                        </span>
                        <div className="grid grid-cols-1 gap-2">
                          {course.features.map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <div className="w-3.5 h-3.5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-100">
                                <svg
                                  className="w-2 h-2"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  strokeWidth={4.5}
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M5 13l4 4L19 7"
                                  />
                                </svg>
                              </div>
                              <span className="text-xs font-bold text-brand-navy/80 leading-tight">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3 relative z-20">
                      <div className="flex flex-col">
                        {course.oldPrice && (
                          <span className="text-[11px] text-brand-gray/40 line-through font-bold">
                            {course.oldPrice}
                          </span>
                        )}
                        <span className="text-lg font-black text-brand-navy tracking-tight">
                          {course.price}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="px-4 py-2.5 rounded-xl text-center bg-slate-50 group-hover:bg-orange-500 group-hover:text-white text-brand-navy text-xs font-black transition-colors duration-300 shadow-3xs pointer-events-none">
                          التفاصيل
                        </span>
                        <Link
                          href={`https://wa.me/966567318977?text=${encodeURIComponent(`السلام عليكم أ.ريناد، أريد الاستفسار عن مسار: ${course.title}`)}`}
                          target="_blank"
                          onClick={(e) => e.stopPropagation()}
                          className="p-2.5 bg-brand-gold text-brand-light rounded-xl hover:bg-brand-navy transition-colors border border-emerald-100/70 shadow-3xs text-nowrap gap-2 inline-flex items-center justify-between "
                        >
                          <MessageSquare size={14} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {mounted &&
        lightboxImage &&
        createPortal(
          <div
            className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md transition-opacity duration-300"
            onClick={() => setLightboxImage(null)}
          >
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-6 left-6 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors duration-300 cursor-pointer z-[100000]"
            >
              <X className="w-6 h-6" />
            </button>

            <div
              className="relative max-w-4xl w-full h-[70vh] sm:h-[80vh] rounded-3xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={lightboxImage}
                alt="معاينة تفاصيل الصورة المكبرة"
                fill
                quality={100}
                className="object-contain"
              />
            </div>
          </div>,
          document.body,
        )}
    </section>
  );
}
