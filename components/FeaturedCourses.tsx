"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import {
  BookOpen,
  Video,
  Sparkles,
  Calendar,
  AlertTriangle,
  CheckCircle,
  Star,
  X,
  User,
  MessageSquare,
  ChevronLeft,
  Clock,
} from "lucide-react";

interface Review {
  name: string;
  rating: number;
  comment: string;
  date: string;
}

type CourseType = "recorded" | "live";

interface Course {
  id: number;
  title: string;
  type: CourseType;
  shortDesc: string;
  longDesc: string;
  features: string[];
  rules?: string[];
  price: string;
  oldPrice?: string;
  duration?: string;
  image: string;
}

const INITIAL_COURSES: Course[] = [
  {
    id: 1,
    title: "رسوم التأسيس الشامل (كمي + لفظي) - الحقيبة الرقمية",
    type: "recorded",
    shortDesc:
      "فيديوهات قصيرة من الصفر مع ملخص شامل لكتاب المعاصر وتأسيس اللفظي المتكامل.",
    longDesc:
      "التأسيس بشرح يفتح النفس، ونتحدى أن تخرج من الدورة دون أن تكون فاهماً لكل المبادئ إن شاء الله. يتضمن المنهج شروحات مبسطة ومقسمة من الصفر (Zero) لتأهيل الطلاب والطالبات بالترتيب الكامل للقسمين الكمي واللفظي.",
    price: "199 ر.س",
    oldPrice: "249 ر.س",
    duration:
      "مدة الاشتراك: 3 أشهر (ويمكن إنجازه في 3 أسابيع إلى شهر ونص أو أقل حسب جهدك)",
    features: [
      "فيديوهات مدتها قصيرة ومبسطة لشرح كل الأسئلة in الكتاب بسلاسة.",
      "تأسيس متكامل مبني على كتاب المعاصر وتأسيس اللفظي.",
      "تقسيم المنهج إلى 6 أقسام شاملة ومقترنة بملفات تدريبية مخصصة.",
      "أكثر من 1000 سؤال كمي ومحوسب لضمان الفهم التام وطرق الحل السريعة.",
      "اختبارات تدريبية مكثفة بعد كل ملف، ومع الأستاذة ريناد التأسيس مضمون بجيبك.",
      "ميزة خاصة: إذا كنت غير متأسس، يمكنك دخول دورات التأسيس مجاناً.",
    ],
    image: "/logo.png",
  },
  {
    id: 2,
    title: "برنامج البث المباشر الخاص والتوجيه الفردي عبر زوم",
    type: "live",
    shortDesc:
      "حصص تفاعلية مباشرة عبر الزوم خاصة بطالب واحد أو طالبة واحدة فقط لتركيز مطلق.",
    longDesc:
      "برنامج تعليمي مكثف وفردي بالكامل، يغطي التأسيس الشامل من كتاب المعاصر وتأسيس اللفظي، يليه تدريب شامل ومكثف للقسمين (الكمي واللفظي) يستمر معك حتى يوم الاختبار الفعلي لضمان الجاهزية التامة.",
    price: "600 ر.س / أسبوعياً",
    duration:
      "على مدار 3 حصص أسبوعية مع واجبات يومية ومتابعة دقيقة خلال الأسبوع",
    features: [
      "بث مباشر فردي مخصص بالكامل لطالب واحد فقط عبر منصة زوم.",
      "المحتوى المعتمد: كتاب المعاصر + التأسيس اللفظي بالكامل.",
      "تدريب شامل ومستمر للقسمين الكمي واللفظي يمتد حتى يوم اختبارك الرسمي.",
      "تزويد المشتركين بأحدث التسريبات والأسئلة لضمان التفوق.",
      "الميزة الكبرى: متابعة مستمرة ورسم الخطة الدراسية كاملة حتى يوم الاختبار.",
      "قصص نجاح حقيقية: ارتفعت درجات المشتركين بفضل الله من سقف الخمسينات إلى التسعينات.",
    ],
    rules: [
      "الالتزام التام بالمذاكرة والحل مطلوب (يحق للأستاذة استبعاد غير الملتزمين بالخطة).",
      "للطالب أو الطالبة حرية الانسحاب، ولا يوجد ضمان للدرجات أو استرجاع للرسوم المدفوعة.",
      "في حال حدوث ظرف طارئ خاص بالمعلمة، لا يُشترط عليها الإكمال وتُسوى الرسوم.",
    ],
    image: "/logo.png",
  },
];

export default function FeaturedCourses() {
  const [activeTab, setActiveTab] = useState<CourseType>("recorded");
  const [visibleCount, setVisibleCount] = useState(4);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
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
  }>({
    1: [
      {
        name: "أحمد السديري",
        rating: 5,
        comment:
          "الشرح يفتح النفس فعلاً والفيديوهات قصيرة وماتحس بالوقت وأنت تدرس.",
        date: "2026-06-18",
      },
      {
        name: "نورة التميمي",
        rating: 5,
        comment:
          "ملخص المعاصر واللفظي شامل جداً، والأسئلة المقسمة رتبت لي معلوماتي.",
        date: "2026-06-25",
      },
    ],
    2: [
      {
        name: "فيصل الحربي",
        rating: 5,
        comment:
          "كنت بالخمسينات والحمد لله بعد المتابعة الفردية والالتزام بالواجبات قفزت فوق الـ 94. تجربة استثنائية!",
        date: "2026-05-30",
      },
    ],
  });

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

  const filteredCourses = INITIAL_COURSES.filter(
    (course) => course.type === activeTab,
  );

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
          {[
            { id: "all", label: "جميع المسارات" },
            { id: "recorded", label: "المُسجلة والإستشارات" },
            { id: "live", label: "البث المباشر والـ VIP" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
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
            const avgRating = reviews.length
              ? (
                  reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
                ).toFixed(1)
              : "5.0";

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

                  <div className="absolute bottom-3 left-4 flex items-center gap-1 bg-white px-2.5 py-1 rounded-full border border-slate-100 text-[11px] font-black text-brand-navy shadow-2xs">
                    <Star className="w-3 h-3 text-brand-gold fill-brand-gold" />
                    <span>{avgRating}</span>
                    <span className="text-brand-gray/60 font-bold">
                      ({reviews.length})
                    </span>
                  </div>
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

                    <button
                      onClick={() => setSelectedCourse(course)}
                      className="px-5 py-3 rounded-xl bg-brand-light hover:bg-brand-navy text-brand-navy hover:text-white text-xs font-black transition-all duration-300 cursor-pointer border border-transparent flex items-center gap-1 hover:shadow-md"
                    >
                      <span>عرض التفاصيل والآراء</span>
                      <ChevronLeft className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {selectedCourse &&
        mounted &&
        createPortal(
          <div
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setSelectedCourse(null);
                setShowReviewForm(false);
              }
            }}
            className="fixed inset-0 z-9999 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-brand-navy/60 backdrop-blur-md overflow-hidden animate-in fade-in duration-200"
          >
            <div className="bg-white rounded-[2.5rem] max-w-3xl w-full flex flex-col shadow-2xl border border-slate-100 h-full max-h-[85vh] sm:max-h-[80vh] overflow-hidden animate-in zoom-in-95 duration-200 relative">
              <div className="p-6 sm:p-8 border-b border-slate-100 flex items-start justify-between bg-white shrink-0 relative z-10 text-right">
                <div className="space-y-1.5">
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-brand-gold/10 text-brand-gold rounded-full text-xs font-black">
                    <Sparkles className="w-3 h-3 text-brand-gold" />
                    <span>نظرة تفصيلية على البرنامج</span>
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-brand-navy leading-snug pl-8">
                    {selectedCourse.title}
                  </h3>
                </div>

                <button
                  onClick={() => {
                    setSelectedCourse(null);
                    setShowReviewForm(false);
                  }}
                  className="w-9 h-9 rounded-full bg-slate-100 text-brand-navy flex items-center justify-center font-black hover:bg-brand-gold hover:text-brand-navy transition-all cursor-pointer border border-slate-200/60 outline-none shrink-0 mr-4"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="p-6 sm:p-8 overflow-y-auto flex-1 space-y-6 text-right [scrollbar-width:thin] [scrollbar-color:var(--color-brand-gold)_transparent] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-brand-gold/40 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-brand-gold">
                <p className="text-slate-800 text-sm leading-relaxed font-semibold bg-slate-50 p-5 rounded-2xl border border-slate-100">
                  {selectedCourse.longDesc}
                </p>

                <div className="space-y-3">
                  <h4 className="font-black text-brand-navy text-sm flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-gold" />
                    <span>المحتويات والمميزات الرسمية للدورة:</span>
                  </h4>
                  <ul className="grid grid-cols-1 gap-2.5 text-xs text-slate-700 font-semibold">
                    {selectedCourse.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 bg-slate-50 p-3 rounded-xl border border-slate-100/50"
                      >
                        <span className="text-brand-gold shrink-0 font-black">
                          ✓
                        </span>
                        <span className="leading-relaxed text-right">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {selectedCourse.rules && (
                  <div className="space-y-3 bg-rose-50/50 p-4 rounded-2xl border border-rose-100/60">
                    <h4 className="font-black text-rose-700 text-sm flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-rose-600" />
                      <span>الشروط الأكاديمية وقوانين الالتصاق بالمسار:</span>
                    </h4>
                    <ul className="space-y-2 text-xs text-rose-900/80 font-medium">
                      {selectedCourse.rules.map((rule, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-rose-500 shrink-0">•</span>
                          <span className="leading-relaxed text-right">
                            {rule}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="pt-6 border-t border-slate-100 space-y-4">
                  <div className="flex items-center justify-between flex-wrap gap-3">
                    <h4 className="font-black text-brand-navy text-base flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-brand-navy" />
                      <span>
                        آراء وتقييمات الطلاب والمشتركين (
                        {courseReviews[selectedCourse.id]?.length || 0})
                      </span>
                    </h4>
                    <button
                      onClick={() => setShowReviewForm(!showReviewForm)}
                      className="px-4 py-2 rounded-xl bg-brand-navy hover:bg-brand-gold text-white hover:text-brand-navy text-xs font-black transition-all cursor-pointer shadow-xs"
                    >
                      {showReviewForm
                        ? "إلغاء التقييم"
                        : "✍️ إضافة مراجعة وتقييم جديد"}
                    </button>
                  </div>

                  {showReviewForm && (
                    <form
                      onSubmit={(e) => handleAddReview(e, selectedCourse.id)}
                      className="bg-brand-light border border-slate-200/60 p-5 rounded-2xl space-y-4 animate-in fade-in duration-200"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-xs font-black text-brand-navy block">
                            الاسم الكامل:
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="مثال: فيصل بن عبد الله"
                            value={reviewName}
                            onChange={(e) => setReviewName(e.target.value)}
                            className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2.5 text-xs font-bold focus:outline-none focus:border-brand-gold text-right"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-xs font-black text-brand-navy block">
                            التقييم العام:
                          </label>
                          <select
                            value={reviewRating}
                            onChange={(e) =>
                              setReviewRating(Number(e.target.value))
                            }
                            className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2.5 text-xs font-black focus:outline-none focus:border-brand-gold text-right"
                          >
                            <option value={5}>★★★★★ مميز جداً (5/5)</option>
                            <option value={4}>★★★★☆ رائع ويستحق (4/5)</option>
                            <option value={3}>
                              ★★★☆☆ متوسط المقارنة (3/5)
                            </option>
                            <option value={2}>
                              ★★☆☆☆ يحتاج بعض الملفات (2/5)
                            </option>
                            <option value={1}>★☆☆☆☆ غير راضٍ (1/5)</option>
                          </select>
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-black text-brand-navy block">
                          التعليق المخصص للدورة:
                        </label>
                        <textarea
                          required
                          rows={3}
                          placeholder="اترك تعليقك وتجربتك هنا بكل شفافية وأمانة..."
                          value={reviewComment}
                          onChange={(e) => setReviewComment(e.target.value)}
                          className="w-full bg-white border border-slate-200 rounded-xl p-3 text-xs font-medium focus:outline-none focus:border-brand-gold text-right resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full py-3 rounded-xl bg-brand-navy hover:bg-brand-gold text-white hover:text-brand-navy font-black text-xs transition-all shadow-md cursor-pointer"
                      >
                        نشر التقييم والتعليق على الدورة فوراً
                      </button>
                    </form>
                  )}

                  {/* قائمة المراجعات */}
                  <div className="space-y-3">
                    {(courseReviews[selectedCourse.id] || []).length === 0 ? (
                      <p className="text-xs text-brand-gray/60 text-center font-medium py-4">
                        لا توجد تقييمات منشورة لهذا المسار التدريبي بعد. شاركنا
                        تجربتك!
                      </p>
                    ) : (
                      (courseReviews[selectedCourse.id] || []).map(
                        (rev, idx) => (
                          <div
                            key={idx}
                            className="p-4 bg-slate-50 border border-slate-100 rounded-xl space-y-1.5 text-right"
                          >
                            <div className="flex justify-between items-center">
                              <div className="flex items-center gap-1.5">
                                <User className="w-3.5 h-3.5 text-brand-navy/40" />
                                <span className="text-xs font-black text-brand-navy">
                                  {rev.name}
                                </span>
                              </div>
                              <span className="text-[10px] text-brand-gray/50 font-bold">
                                {rev.date}
                              </span>
                            </div>
                            <div className="flex gap-0.5">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-3 h-3 ${
                                    i < rev.rating
                                      ? "text-brand-gold fill-brand-gold"
                                      : "text-slate-200"
                                  }`}
                                />
                              ))}
                            </div>
                            <p className="text-xs text-slate-700 font-medium leading-relaxed">
                              {rev.comment}
                            </p>
                          </div>
                        ),
                      )
                    )}
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8 border-t border-slate-100 bg-slate-50/90 backdrop-blur-xs flex flex-wrap items-center justify-between gap-4 shrink-0 rounded-b-[2.5rem] relative z-10 text-right">
                <div>
                  <span className="block text-[10px] text-brand-gray font-bold">
                    الاستثمار الحالي للمسار
                  </span>
                  <span className="text-2xl font-black text-brand-navy tracking-tight">
                    {selectedCourse.price}
                  </span>
                </div>
                <button
                  onClick={() =>
                    window.open(
                      "https://wa.me/966547477545",
                      "_blank",
                      "noopener,noreferrer",
                    )
                  }
                  className="px-6 py-3.5 rounded-xl bg-brand-navy hover:bg-brand-gold text-white hover:text-brand-navy font-black text-sm transition-all shadow-lg hover:shadow-brand-navy/20 cursor-pointer"
                >
                  حجز المقعد وبدء الدراسة فوراً
                </button>
              </div>
            </div>
          </div>,
          document.body,
        )}

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
