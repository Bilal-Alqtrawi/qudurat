"use client";

import { useMemo, useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import {
  Search,
  ChevronLeft,
  Video,
  BookOpen,
  Star,
  MessageSquare,
  SlidersHorizontal,
  Frown,
  Maximize2,
  X,
} from "lucide-react";
import Select from "@/components/ui/Select";
import {
  getAverageRating,
  type Course,
  type Review,
} from "@/data/courses-data";
import { useSearch } from "@/context/SearchContext";

type FilterValue = "all" | "recorded" | "live";
type SortValue = "featured" | "price-asc" | "price-desc";

interface CoursesPageClientProps {
  courses: Course[];
  reviews: { [key: number]: Review[] };
}

const FILTER_OPTIONS: {
  value: FilterValue;
  label: string;
  icon: React.ReactNode;
}[] = [
  {
    value: "all",
    label: "جميع المسارات",
    icon: <SlidersHorizontal className="w-4 h-4" />,
  },
  {
    value: "recorded",
    label: "المُسجلة والحقائب الرقمية",
    icon: <BookOpen className="w-4 h-4" />,
  },
  {
    value: "live",
    label: "البث المباشر والـ VIP",
    icon: <Video className="w-4 h-4" />,
  },
];

const SORT_OPTIONS = [
  { value: "featured", label: "المقترحة والمميزة" },
  { value: "price-asc", label: "السعر: من الأقل للأعلى" },
  { value: "price-desc", label: "السعر: من الأعلى للأقل" },
];

export default function CoursesPageClient({
  courses,
  reviews,
}: CoursesPageClientProps) {
  const { searchQuery, setSearchQuery } = useSearch();
  const [activeFilter, setActiveFilter] = useState<FilterValue>("all");
  const [activeSort, setActiveSort] = useState<SortValue>("featured");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  const processedCourses = useMemo(() => {
    let result = [...courses];

    if (activeFilter !== "all") {
      result = result.filter((course) => course.type === activeFilter);
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      result = result.filter(
        (course) =>
          course.title.toLowerCase().includes(query) ||
          course.shortDesc.toLowerCase().includes(query),
      );
    }

    if (activeSort === "price-asc") {
      result.sort((a, b) => {
        const pA = parseFloat(a.price.replace(/[^\d.]/g, "")) || 0;
        const pB = parseFloat(b.price.replace(/[^\d.]/g, "")) || 0;
        return pA - pB;
      });
    } else if (activeSort === "price-desc") {
      result.sort((a, b) => {
        const pA = parseFloat(a.price.replace(/[^\d.]/g, "")) || 0;
        const pB = parseFloat(b.price.replace(/[^\d.]/g, "")) || 0;
        return pB - pA;
      });
    }

    return result;
  }, [courses, activeFilter, searchQuery, activeSort]);

  return (
    <main className="space-y-10">
      {/* شريط التحكم */}
      <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center justify-between bg-white p-4 sm:p-5 rounded-[2rem] border border-slate-200/60 shadow-3xs">
        <div className="relative flex-1 max-w-xl group">
          <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-gray/50 group-focus-within:text-orange-500 transition-colors" />
          <input
            type="text"
            placeholder="ابحث عن اسم الدورة أو محتواها..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-4 pr-11 py-3 text-sm bg-slate-50 border border-slate-200/70 rounded-2xl focus:outline-none focus:border-orange-500/50 focus:bg-white text-brand-navy font-bold transition-all placeholder:text-brand-gray/40"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-gray/40 hover:text-brand-navy transition-colors text-xs p-1"
            >
              مسح
            </button>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {FILTER_OPTIONS.map((opt) => (
            <button
              key={opt.value}
              onClick={() => setActiveFilter(opt.value)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-black border transition-all duration-300 cursor-pointer ${
                activeFilter === opt.value
                  ? "bg-brand-navy text-white border-brand-navy shadow-sm"
                  : "bg-slate-50 text-brand-navy border-slate-200/70 hover:bg-slate-100"
              }`}
            >
              {opt.icon}
              <span>{opt.label}</span>
            </button>
          ))}
        </div>

        <div className="w-full lg:w-56 shrink-0 border-t lg:border-t-0 pt-3 lg:pt-0">
          <Select
            options={SORT_OPTIONS}
            value={activeSort}
            onChange={(val) => setActiveSort(val as SortValue)}
          />
        </div>
      </div>

      {processedCourses.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-[2.5rem] border border-slate-100 shadow-3xs space-y-4">
          <div className="w-16 h-16 bg-slate-50 text-brand-gray/40 rounded-full flex items-center justify-center mx-auto border border-slate-100">
            <Frown className="w-8 h-8" />
          </div>
          <h3 className="text-lg font-black text-brand-navy">
            لم نجد أي نتائج تطابق بحثك
          </h3>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {processedCourses.map((course) => {
            const courseReviews = reviews[course.id] || [];
            const avgRating = getAverageRating(courseReviews);

            return (
              <article
                key={course.id}
                className="group relative bg-white rounded-[2.2rem] shadow-[0_15px_35px_-15px_rgba(15,23,42,0.05)] hover:shadow-[0_30px_60px_-15px_rgba(249,115,22,0.18)] transition-all duration-500 ease-out transform-gpu hover:-translate-y-2.5 will-change-transform cursor-pointer"
              >
                <div className="absolute inset-0 rounded-[2.2rem] border border-slate-200/70 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none z-0" />
                <div className="absolute inset-0 p-[1.5px] bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-500 rounded-[2.2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0" />

                <div className="relative z-10 bg-white rounded-[2.1rem] overflow-hidden flex flex-col justify-between h-full">
                  <div className="relative h-56 w-full overflow-hidden rounded-t-[2.1rem] bg-slate-50 border-b border-slate-100 shrink-0">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      sizes="(max-w-768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-[1.02] transition-transform duration-500 ease-out transform-gpu"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500 pointer-events-none" />

                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setLightboxImage(course.image);
                      }}
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
                        ({courseReviews.length})
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
                      <div className="pt-4 border-t border-slate-100/80 space-y-2">
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

                    {/* الفوتر السفلي بعد تعديل الزر الأخضر إلى البرتقالي الفاخر بنص "إشترك الآن" */}
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

                      <div className="flex items-center gap-2 justify-end w-full">
                        <span className="px-4 py-2.5 rounded-xl text-center bg-slate-50 group-hover:bg-brand-navy group-hover:text-white text-brand-navy text-xs font-black transition-colors duration-300 shadow-3xs pointer-events-none">
                          التفاصيل
                          <ChevronLeft className="w-3.5 h-3.5 inline-block mr-1" />
                        </span>

                        {/* الزر المطور والجديد تماماً */}
                        <Link
                          href={`https://wa.me/966567318977?text=${encodeURIComponent(`السلام عليكم أ.ريناد، أريد الاشتراك في مسار: ${course.title} 🚀`)}`}
                          target="_blank"
                          onClick={(e) => e.stopPropagation()}
                          className="px-4 py-2.5 bg-orange-500 text-white rounded-xl hover:bg-brand-navy active:scale-95 transition-all duration-300 font-black text-xs flex items-center gap-1.5 shadow-3xs transform-gpu hover:-translate-y-0.5"
                        >
                          <MessageSquare size={14} className="animate-pulse" />
                          {/* <span>إشترك الآن</span> */}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      )}

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
                alt="معاينة"
                fill
                quality={100}
                className="object-contain"
              />
            </div>
          </div>,
          document.body,
        )}
    </main>
  );
}
