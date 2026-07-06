"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Search,
  ChevronLeft,
  Video,
  BookOpen,
  Clock,
  Star,
  MessageSquare,
  SlidersHorizontal,
  Frown,
} from "lucide-react";
import Select from "@/components/ui/Select";
import {
  getAverageRating,
  type Course,
  type Review,
} from "@/data/courses-data";

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

const SORT_OPTIONS: { value: SortValue; label: string }[] = [
  { value: "featured", label: "الأكثر ملاءمة" },
  { value: "price-asc", label: "السعر: من الأقل للأعلى" },
  { value: "price-desc", label: "السعر: من الأعلى للأقل" },
];

function parsePrice(price: string): number {
  const match = price
    .replace(/[^\d.]/g, " ")
    .trim()
    .split(" ")[0];
  const num = Number(match);
  return Number.isFinite(num) ? num : 0;
}

export default function CoursesPageClient({
  courses,
  reviews,
}: CoursesPageClientProps) {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<FilterValue>("all");
  const [sort, setSort] = useState<SortValue>("featured");

  const filteredCourses = useMemo(() => {
    const query = search.trim();
    let result = courses.filter((course) => {
      const matchesSearch =
        query.length === 0 ||
        course.title.includes(query) ||
        course.shortDesc.includes(query);
      const matchesFilter = filter === "all" || course.type === filter;
      return matchesSearch && matchesFilter;
    });

    if (sort === "price-asc") {
      result = [...result].sort(
        (a, b) => parsePrice(a.price) - parsePrice(b.price),
      );
    } else if (sort === "price-desc") {
      result = [...result].sort(
        (a, b) => parsePrice(b.price) - parsePrice(a.price),
      );
    }

    return result;
  }, [courses, search, filter, sort]);

  return (
    <div dir="rtl">
      {/* شريط البحث والفلترة */}
      <div className="flex flex-col md:flex-row gap-4 mb-10">
        <div className="relative flex-1">
          <Search
            className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-gray/50 pointer-events-none"
            size={20}
            aria-hidden="true"
          />
          <input
            type="text"
            value={search}
            placeholder="ابحث عن دورتك (مثال: تجميعات، تأسيس، زوم...)"
            aria-label="ابحث في الدورات"
            className="w-full py-3.5 pr-12 pl-4 rounded-2xl border border-slate-200 bg-white font-medium text-sm text-brand-navy placeholder:text-brand-gray/50 focus:ring-4 focus:ring-brand-gold/15 focus:border-brand-gold outline-none transition-all"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-2 gap-3 md:w-105 shrink-0">
          <Select
            size="md"
            variant="solid"
            value={filter}
            onChange={(v) => setFilter(v as FilterValue)}
            options={FILTER_OPTIONS}
          />
          <Select
            size="md"
            variant="light"
            value={sort}
            onChange={(v) => setSort(v as SortValue)}
            options={SORT_OPTIONS}
          />
        </div>
      </div>

      {/* عدد النتائج */}
      <p className="text-xs font-bold text-brand-gray mb-6">
        {filteredCourses.length > 0
          ? `عرض ${filteredCourses.length} من أصل ${courses.length} دورة تدريبية`
          : "لا توجد نتائج مطابقة"}
      </p>

      {/* عرض الدورات */}
      {filteredCourses.length === 0 ? (
        <div className="text-center py-24 bg-brand-light/60 rounded-3xl border border-dashed border-slate-200">
          <Frown className="w-10 h-10 text-brand-gray/40 mx-auto mb-4" />
          <h3 className="font-black text-brand-navy text-lg mb-2">
            لم نجد أي دورة مطابقة لبحثك
          </h3>
          <p className="text-brand-gray text-sm">
            جرّب كلمة بحث مختلفة أو أعد ضبط الفلاتر أعلاه.
          </p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-8">
          {filteredCourses.map((course) => {
            const courseReviews = reviews[course.id] || [];
            const avgRating = getAverageRating(courseReviews);

            return (
              <article
                key={course.id}
                className="bg-white rounded-4xl border border-slate-100 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                <div className="relative h-40 w-full bg-linear-to-b from-brand-light to-white flex items-center justify-center border-b border-slate-50 p-6">
                  <Image
                    src={course.image}
                    alt={course.title}
                    width={84}
                    height={84}
                    className="object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                  <span
                    className={`absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] font-black tracking-wide shadow-xs flex items-center gap-1.5 ${
                      course.type === "live"
                        ? "bg-rose-50 text-rose-600 border border-rose-100"
                        : "bg-blue-50 text-blue-600 border border-blue-100"
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
                  <div className="absolute bottom-3 left-4 flex items-center gap-1 bg-white px-2.5 py-1 rounded-full border border-slate-100 text-[11px] font-black text-brand-navy shadow-2xs">
                    <Star className="w-3 h-3 text-brand-gold fill-brand-gold" />
                    <span>{avgRating}</span>
                    <span className="text-brand-gray/60 font-bold">
                      ({courseReviews.length})
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between gap-6 text-right">
                  <div className="space-y-2.5">
                    <h2 className="text-lg sm:text-xl font-black text-brand-navy leading-snug group-hover:text-brand-gold-deep transition-colors">
                      {course.title}
                    </h2>
                    <p className="text-brand-gray text-sm font-medium leading-relaxed line-clamp-2">
                      {course.shortDesc}
                    </p>
                    {course.duration && (
                      <div className="text-[11px] text-emerald-700 bg-emerald-50 border border-emerald-100/60 rounded-xl px-3 py-2 font-bold inline-flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-emerald-600" />
                        <span>{course.duration}</span>
                      </div>
                    )}
                  </div>

                  <div className="pt-4 border-t border-slate-50 flex items-center justify-between gap-3">
                    <div className="flex flex-col">
                      {course.oldPrice && (
                        <span className="text-xs text-brand-gray/50 line-through font-bold">
                          {course.oldPrice}
                        </span>
                      )}
                      <span className="text-xl font-black text-brand-navy tracking-tight">
                        {course.price}
                      </span>
                    </div>

                    <div className="flex gap-2">
                      <Link
                        href={`/courses/${course.id}`}
                        className="btn-navy-gradient px-4 py-3 rounded-xl text-center font-black text-xs flex items-center gap-1"
                      >
                        <span>التفاصيل</span>
                        <ChevronLeft className="w-3.5 h-3.5" />
                      </Link>
                      <a
                        href="https://wa.me/966547477545"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="تواصل عبر واتساب"
                        className="p-3 bg-emerald-50 text-emerald-600 rounded-xl hover:bg-emerald-100 transition-colors"
                      >
                        <MessageSquare size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </div>
  );
}
