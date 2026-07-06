"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import {
  BookOpen,
  Video,
  Sparkles,
  AlertTriangle,
  CheckCircle,
  Star,
  X,
  User,
  MessageSquare,
  ChevronLeft,
  Clock,
} from "lucide-react";
import Select from "@/components/ui/Select";
import {
  INITIAL_COURSES,
  INITIAL_REVIEWS,
  RATING_OPTIONS,
  getAverageRating,
  type Course,
  type CourseType,
  type Review,
} from "@/data/courses-data";
import Link from "next/link";

export default function FeaturedCourses() {
  const [activeTab, setActiveTab] = useState<"all" | CourseType>("all");
  const [visibleCount, setVisibleCount] = useState(4);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setMounted(true);
    }, 10);
  }, []);

  useEffect(() => {
    if (selectedCourse) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight =
        "var(--removed-body-scroll-bar-size, 0px)";
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [selectedCourse]);

  const [courseReviews, setCourseReviews] = useState<{
    [key: number]: Review[];
  }>(INITIAL_REVIEWS);

  const [reviewName, setReviewName] = useState("");
  const [reviewComment, setReviewComment] = useState("");
  const [reviewRating, setReviewRating] = useState(5);
  const [showReviewForm, setShowReviewForm] = useState(false);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedCourse(null);
        setShowReviewForm(false);
      }
    };
    if (selectedCourse) {
      window.addEventListener("keydown", handleEscape);
    }
    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [selectedCourse]);

  const handleAddReview = (e: React.FormEvent, courseId: number) => {
    e.preventDefault();
    if (!reviewName.trim() || !reviewComment.trim()) return;

    const newReview: Review = {
      name: reviewName,
      rating: reviewRating,
      comment: reviewComment,
      date: new Date().toISOString().split("T")[0],
    };

    setCourseReviews((prev) => ({
      ...prev,
      [courseId]: [newReview, ...(prev[courseId] || [])],
    }));

    setReviewName("");
    setReviewComment("");
    setReviewRating(5);
    setShowReviewForm(false);
  };

  const filteredCourses =
    activeTab === "all"
      ? INITIAL_COURSES
      : INITIAL_COURSES.filter((course) => course.type === activeTab);

  return (
    <section
      id="courses"
      className="py-24 px-6 bg-white relative selection:bg-brand-gold/20 select-none"
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-light border border-slate-100 text-[11px] font-bold text-brand-gold mx-auto">
            <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
            <span>مسارات تدريبية متكاملة للطلاب والطالبات</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-brand-navy tracking-tight">
            الدورات والبرامج التدريبية
          </h2>
          <p className="text-brand-gray text-base sm:text-lg font-medium leading-relaxed">
            اختر الطريقة الأنسب لكِ ولَكَ للتعلم والتفوق؛ برامجنا مصممة بعناية
            لتغطية التأسيس من الصفر، التدريب المكثف، والوصول الآمن لعتبة الـ
            +95.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 pt-2">
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
              className={`px-6 py-3 rounded-full text-xs sm:text-sm font-black transition-all duration-300 cursor-pointer border ${
                activeTab === tab.id
                  ? "bg-brand-navy text-white border-brand-navy shadow-lg shadow-brand-navy/10"
                  : "bg-brand-light text-brand-navy border-slate-100 hover:bg-slate-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-6">
          {filteredCourses.map((course) => {
            const reviews = courseReviews[course.id] || [];
            const avgRating = getAverageRating(reviews);

            return (
              <div
                key={course.id}
                className="bg-white rounded-[2.5rem] border border-slate-100 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative"
              >
                <div className="relative h-44 w-full bg-linear-to-b from-brand-light to-white p-6 flex items-center justify-center border-b border-slate-50">
                  <Image
                    src={course.image}
                    alt={course.title}
                    width={100}
                    height={100}
                    className="object-contain group-hover:scale-105 transition-transform duration-500"
                  />

                  <span
                    className={`absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] font-black tracking-wide shadow-xs flex items-center gap-1.5 ${
                      course.type === "live"
                        ? "bg-rose-50 text-rose-600 border border-rose-100"
                        : course.type === "recorded"
                          ? "bg-blue-50 text-blue-600 border border-blue-100"
                          : course.type === "consultation"
                            ? "bg-amber-50 text-amber-600 border border-amber-100"
                            : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {course.type === "live" && <Video className="w-3 h-3" />}
                    {course.type === "recorded" && (
                      <BookOpen className="w-3 h-3" />
                    )}
                    {course.type === "live"
                      ? "بث مباشر تفاعلي مخصص"
                      : course.type === "recorded"
                        ? "حقيبة رقمية مسجلة"
                        : course.type === "consultation"
                          ? "جلسة استشارية خاصة"
                          : "قريباً جداً"}
                  </span>

                  {/* <div className="absolute bottom-3 left-4 flex items-center gap-1 bg-white px-2.5 py-1 rounded-full border border-slate-100 text-[11px] font-black text-brand-navy shadow-2xs">
                    <Star className="w-3 h-3 text-brand-gold fill-brand-gold" />
                    <span>{avgRating}</span>
                    <span className="text-brand-gray/60 font-bold">
                      ({reviews.length})
                    </span>
                  </div> */}
                </div>

                <div className="p-8 flex-1 flex flex-col justify-between space-y-6 text-right">
                  <div className="space-y-3">
                    <h3 className="text-xl font-black text-brand-navy group-hover:text-brand-gold transition-colors duration-300 leading-snug">
                      {course.title}
                    </h3>
                    <p className="text-sm text-brand-gray font-medium leading-relaxed">
                      {course.shortDesc}
                    </p>
                    {course.duration && (
                      <div className="text-[11px] text-emerald-700 bg-emerald-50 border border-emerald-100/60 rounded-xl px-3 py-2 font-bold inline-flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-emerald-600" />
                        <span>{course.duration}</span>
                      </div>
                    )}
                  </div>

                  <div className="pt-5 border-t border-slate-50 flex items-center justify-between">
                    <div className="flex flex-col text-right">
                      {course.oldPrice && (
                        <span className="text-xs text-brand-gray/50 line-through font-bold">
                          {course.oldPrice}
                        </span>
                      )}
                      <span className="text-2xl font-black text-brand-navy tracking-tight">
                        {course.price}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                      <Link
                        href={`/courses/${course.id}`}
                        className="px-4 py-3 rounded-xl bg-brand-light hover:bg-brand-navy text-brand-navy hover:text-white text-xs font-black transition-all duration-300 cursor-pointer border border-transparent flex items-center gap-1 hover:shadow-md"
                      >
                        <span>التفاصيل</span>
                      </Link>

                      <Link
                        href={`https://wa.me/966XXXXXXXXX?text=${encodeURIComponent(
                          `السلام عليكم أ.ريناد،\nأريد التسجيل في: ${course.title} 🚀`,
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-black transition-all duration-300 flex items-center gap-1.5 shadow-md hover:shadow-lg"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>تسجيل سريع</span>
                      </Link>
                    </div>
                    {/*           <Link
                      href={`/courses/${course.id}`}
                      className="px-5 py-3 rounded-xl bg-brand-light hover:bg-brand-navy text-brand-navy hover:text-white text-xs font-black transition-all duration-300 cursor-pointer border border-transparent flex items-center gap-1 hover:shadow-md"
                    >
                      <span>عرض التفاصيل</span>
                      <ChevronLeft className="w-3.5 h-3.5" />
                    </Link> */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {visibleCount < filteredCourses.length && (
        <div className="text-center mt-12">
          <button
            onClick={() => setVisibleCount((prev) => prev + 4)}
            className="px-8 py-4 rounded-2xl bg-brand-light text-brand-navy font-bold hover:bg-brand-gold hover:text-white transition-all"
          >
            عرض المزيد من الدورات
          </button>
        </div>
      )}
    </section>
  );
}
