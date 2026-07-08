"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AlertTriangle,
  BookOpen,
  Check,
  CheckCircle,
  ChevronLeft,
  Clock,
  MessageSquare,
  Phone,
  Sparkles,
  Star,
  User,
  Video,
  Maximize2,
  X,
} from "lucide-react";
import Select from "@/components/ui/Select";
import {
  getAverageRating,
  type Course,
  type Review,
} from "@/data/courses-data";

const RATING_OPTIONS = [
  { value: "5", label: "★★★★★ مميز جداً (5/5)" },
  { value: "4", label: "★★★★☆ رائع ويستحق (4/5)" },
  { value: "3", label: "★★★☆☆ مُرضي (3/5)" },
  { value: "2", label: "★★☆☆☆  عادي (2/5)" },
  { value: "1", label: "★☆☆☆☆ غير راضٍ (1/5)" },
];

interface CourseDetailsProps {
  course: Course;
  initialReviews: Review[];
}

export default function CourseDetails({
  course,
  initialReviews,
}: CourseDetailsProps) {
  const [reviews, setReviews] = useState<Review[]>(initialReviews);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [reviewName, setReviewName] = useState("");
  const [reviewComment, setReviewComment] = useState("");
  const [reviewRating, setReviewRating] = useState(5);
  const [submitted, setSubmitted] = useState(false);

  // سيناريو المعرض التفاعلي: بناء مصفوفة الصور بشكل ذكي
  const galleryImages =
    course.gallery && course.gallery.length > 0
      ? course.gallery
      : [course.image, course.image, course.image]; // Fallback لضمان الهيكل بـ 3 صور افتراضية متطابقة للمعاينة

  const [activeImage, setActiveImage] = useState<string>(galleryImages[0]);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  useEffect(() => {
    if (!submitted) return;
    const timeout = setTimeout(() => setSubmitted(false), 3000);
    return () => clearTimeout(timeout);
  }, [submitted]);

  const avgRating = getAverageRating(reviews);
  const whatsappMessage = encodeURIComponent(
    `مرحباً أستاذة ريناد، أرغب بالاستفسار عن: ${course.title}`,
  );
  const whatsappUrl = `https://wa.me/966567318977?text=${whatsappMessage}`;

  function handleAddReview(e: React.FormEvent) {
    e.preventDefault();
    if (!reviewName.trim() || !reviewComment.trim()) return;

    setReviews((prev) => [
      {
        name: reviewName,
        rating: reviewRating,
        comment: reviewComment,
        date: new Date().toISOString().split("T")[0],
      },
      ...prev,
    ]);

    setReviewName("");
    setReviewComment("");
    setReviewRating(5);
    setShowReviewForm(false);
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-slate-50 pt-28 sm:pt-32 pb-24" dir="rtl">
      {/* مسار التنقل (Breadcrumb) */}
      <nav
        aria-label="مسار التنقل"
        className="max-w-5xl mx-auto px-6 mb-6 text-xs font-bold text-brand-gray flex items-center gap-2"
      >
        <Link href="/" className="hover:text-brand-gold-deep transition-colors">
          الرئيسية
        </Link>
        <span>/</span>
        <Link
          href="/courses"
          className="hover:text-brand-gold-deep transition-colors"
        >
          الدورات
        </Link>
        <span>/</span>
        <span className="text-brand-navy truncate max-w-50 sm:max-w-none">
          {course.title}
        </span>
      </nav>

      <div className="max-w-5xl mx-auto px-6 grid lg:grid-cols-[1.6fr_1fr] gap-8 items-start">
        {/* العمود الرئيسي لتفاصيل الدورة */}
        <div className="space-y-8">
          {/* بطاقة الهيدر العلوية */}
          <section className="bg-white rounded-4xl border border-slate-100 shadow-xs p-6 sm:p-8 space-y-5">
            <div className="flex flex-wrap items-center gap-2">
              <span
                className={`px-3 py-1 rounded-full text-[11px] font-black tracking-wide flex items-center gap-1.5 ${
                  course.type === "live"
                    ? "bg-rose-50 text-rose-600 border border-rose-100"
                    : "bg-blue-50 text-blue-600 border border-blue-100"
                }`}
              >
                {course.type === "live" ? (
                  <Video className="w-3.5 h-3.5" />
                ) : (
                  <BookOpen className="w-3.5 h-3.5" />
                )}
                {course.type === "live"
                  ? "بث مباشر تفاعلي"
                  : "حقيبة رقمية مسجلة"}
              </span>
              {course.level && (
                <span className="px-3 py-1 rounded-full text-[11px] font-black bg-brand-light text-brand-navy border border-slate-100">
                  {course.level}
                </span>
              )}
            </div>

            <h1 className="text-2xl sm:text-4xl font-black text-brand-navy leading-snug">
              {course.title}
            </h1>

            <p className="text-brand-gray text-sm sm:text-base font-medium leading-relaxed">
              {course.shortDesc}
            </p>

            {course.duration && (
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-emerald-700 bg-emerald-50 border border-emerald-100/60 rounded-xl px-4 py-2.5 font-bold">
                <Clock className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{course.duration}</span>
              </div>
            )}

            {course.type === "live" && (
              <div className="flex items-center gap-4 bg-brand-navy/3 border border-brand-navy/10 rounded-2xl p-4">
                <div className="relative shrink-0 w-11 h-11 rounded-full bg-brand-navy flex items-center justify-center">
                  <Phone className="w-5 h-5 text-white" />
                  <span className="absolute -bottom-1 -left-1 w-5 h-5 rounded-full bg-brand-gold flex items-center justify-center border-2 border-white">
                    <Video className="w-2.5 h-2.5 text-brand-navy" />
                  </span>
                </div>
                <p className="text-xs sm:text-sm font-bold text-brand-navy leading-relaxed">
                  حصص البث المباشر تُعقد عبر تطبيق{" "}
                  <span className="text-brand-gold-deep">Zoom</span> مباشرة من
                  جوالك، دون الحاجة لأي أجهزة إضافية.
                </p>
              </div>
            )}
          </section>

          {/* الوصف التفصيلي للمنهج */}
          <section className="bg-white rounded-4xl border border-slate-100 shadow-xs p-6 sm:p-8 space-y-4">
            <h2 className="font-black text-brand-navy text-lg flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-brand-gold-deep" />
              نظرة تفصيلية على البرنامج
            </h2>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-semibold bg-slate-50 p-5 rounded-2xl border border-slate-100">
              {course.longDesc}
            </p>
          </section>

          {/* المميزات الرسمية */}
          <section className="bg-white rounded-4xl border border-slate-100 shadow-xs p-6 sm:p-8 space-y-4">
            <h2 className="font-black text-brand-navy text-lg flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-brand-gold-deep" />
              المحتويات والمميزات الرسمية للدورة
            </h2>
            <ul className="grid sm:grid-cols-2 gap-2.5">
              {course.features.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 bg-slate-50 p-3.5 rounded-xl border border-slate-100/50 text-xs sm:text-sm text-slate-700 font-semibold"
                >
                  <Check className="w-4 h-4 text-brand-gold-deep shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* محاور المنهج الجانبية */}
          {course.curriculum && course.curriculum.length > 0 && (
            <section className="bg-white rounded-4xl border border-slate-100 shadow-xs p-6 sm:p-8 space-y-5">
              <h2 className="font-black text-brand-navy text-lg flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-brand-gold-deep" />
                محاور المنهج
              </h2>
              <div className="space-y-4">
                {course.curriculum.map((mod, i) => (
                  <div
                    key={i}
                    className="border border-slate-100 rounded-2xl p-4 sm:p-5 bg-slate-50/60"
                  >
                    <h3 className="font-black text-brand-navy text-sm mb-3">
                      {mod.title}
                    </h3>
                    <ul className="space-y-2">
                      {mod.lessons.map((lesson, j) => (
                        <li
                          key={j}
                          className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-gold shrink-0" />
                          {lesson}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* شروط وقوانين الالتزام */}
          {course.rules && (
            <section className="bg-rose-50/50 rounded-4xl border border-rose-100/60 p-6 sm:p-8 space-y-3">
              <h2 className="font-black text-rose-700 text-sm sm:text-base flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-rose-600" />
                الشروط الأكاديمية وقوانين الالتزام بالمسار
              </h2>
              <ul className="space-y-2 text-xs sm:text-sm text-rose-900/80 font-medium">
                {course.rules.map((rule, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-rose-500 shrink-0">•</span>
                    <span className="leading-relaxed">{rule}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* التعليقات والمراجعات */}
          <section className="bg-white rounded-4xl border border-slate-100 shadow-xs p-6 sm:p-8 space-y-5">
            <div className="flex items-center justify-between flex-wrap gap-3">
              <h2 className="font-black text-brand-navy text-lg flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-brand-gold-deep" />
                آراء بتقييمات الطلاب ({reviews.length})
              </h2>
              <button
                onClick={() => setShowReviewForm((v) => !v)}
                className="px-4 py-2.5 rounded-xl bg-brand-navy hover:bg-brand-gold text-white hover:text-brand-navy text-xs font-black transition-all cursor-pointer shadow-xs"
              >
                {showReviewForm ? "إلغاء" : "✍️ إضافة تقييم"}
              </button>
            </div>

            {submitted && (
              <div className="flex items-center gap-2 bg-emerald-50 text-emerald-700 border border-emerald-100 rounded-xl px-4 py-3 text-xs font-bold">
                <Check className="w-4 h-4" />
                تم نشر تقييمك بنجاح، شكراً لمشاركتك تجربتك!
              </div>
            )}

            {showReviewForm && (
              <form
                onSubmit={handleAddReview}
                className="bg-brand-light border border-slate-200/60 p-5 rounded-2xl space-y-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-black text-brand-navy block">
                      الاسم الكامل
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="مثال: فيصل بن عبد الله"
                      value={reviewName}
                      onChange={(e) => setReviewName(e.target.value)}
                      className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2.5 text-xs font-bold focus:outline-none focus:border-brand-gold"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-black text-brand-navy block">
                      التقييم العام
                    </label>
                    <Select
                      size="sm"
                      options={RATING_OPTIONS}
                      value={String(reviewRating)}
                      onChange={(v) => setReviewRating(Number(v))}
                    />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-black text-brand-navy block">
                    التعليق
                  </label>
                  <textarea
                    required
                    rows={3}
                    placeholder="اترك تعليقك وتجربتك هنا بكل شفافية..."
                    value={reviewComment}
                    onChange={(e) => setReviewComment(e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-xl p-3 text-xs font-medium focus:outline-none focus:border-brand-gold resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-brand-navy hover:bg-brand-gold text-white hover:text-brand-navy font-black text-xs transition-all shadow-md cursor-pointer"
                >
                  نشر التقييم والتعليق
                </button>
              </form>
            )}

            <div className="space-y-3">
              {reviews.length === 0 ? (
                <p className="text-xs text-brand-gray/60 text-center font-medium py-4">
                  لا توجد تقييمات منشورة بعد. شاركنا تجربتك!
                </p>
              ) : (
                reviews.map((rev, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-slate-50 border border-slate-100 rounded-xl space-y-1.5"
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
                ))
              )}
            </div>
          </section>
        </div>

        {/* العمود الجانبي الثابت والـ Interactive Image Gallery */}
        <aside className="lg:sticky lg:top-28 w-full">
          <div className="bg-white rounded-4xl border border-slate-100 shadow-xl p-5 sm:p-6 space-y-5">
            {/* معرض الصور المطور التفاعلي (Gallery Showcase) */}
            <div className="space-y-3">
              {/* العارض الأساسي النشط بمميزات الـ Fill والـ 3D Scale الخفيف */}
              <div
                onClick={() => setLightboxImage(activeImage)}
                className="group relative h-56 rounded-2xl bg-slate-100 border border-slate-200/60 overflow-hidden cursor-zoom-in transition-transform duration-500 hover:scale-[1.01]"
              >
                <Image
                  src={activeImage}
                  alt={course.title}
                  fill
                  sizes="(max-w-768px) 100vw, 30vw"
                  className="object-cover"
                  priority
                />

                {/* طبقة المؤثرات عند الحوم فوق الصورة النشطة */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-brand-navy opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100 shadow-md">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* شبكة الصور المصغرة (Thumbnails Grid) في الجاليري */}
              <div className="grid grid-cols-3 gap-2">
                {galleryImages.map((imgUrl, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(imgUrl)}
                    className={`relative h-16 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                      activeImage === imgUrl
                        ? "border-orange-500 ring-2 ring-orange-500/20 scale-95"
                        : "border-slate-200 hover:border-slate-400"
                    }`}
                  >
                    <Image
                      src={imgUrl}
                      alt={`معاينة معرض الصور ${index + 1}`}
                      fill
                      sizes="10vw"
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-end justify-between">
              <div>
                <span className="block text-[11px] text-brand-gray font-bold">
                  الاستثمار الحالي
                </span>
                {course.oldPrice && (
                  <span className="text-xs text-brand-gray/50 line-through font-bold block">
                    {course.oldPrice}
                  </span>
                )}
                <span className="text-2xl font-black text-brand-navy tracking-tight">
                  {course.price}
                </span>
              </div>
              <span className="flex items-center gap-1 text-[11px] font-black text-amber-700">
                <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                {avgRating}
              </span>
            </div>

            <Link
              href="https://wa.me/966567318977"
              target="_blank"
              className="btn-gold-gradient w-full py-3.5 rounded-xl font-black text-sm flex items-center justify-center gap-2 shadow-md"
            >
              <span>احجز مقعدك الآن</span>
              <ChevronLeft className="w-4 h-4" />
            </Link>

            <Link
              href={whatsappUrl}
              target="_blank"
              className="w-full py-3.5 rounded-xl font-black text-sm flex items-center justify-center gap-2 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-colors border border-emerald-100"
            >
              <MessageSquare className="w-4 h-4" />
              <span>استفسار سريع عبر واتساب</span>
            </Link>

            <p className="text-[11px] text-brand-gray text-center leading-relaxed">
              بالتسجيل أنتِ توافقين على الشروط الأكاديمية الموضحة في الصفحة.
            </p>
          </div>
        </aside>
      </div>

      {/* الـ Lightbox المنبثق لصفحة التفاصيل عند نقر الصورة الأساسية */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-navy/95 backdrop-blur-2xl transition-all duration-500"
          onClick={() => setLightboxImage(null)}
        >
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-6 left-6 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors duration-300 cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>

          <div
            className="relative max-w-4xl w-full h-[75vh] sm:h-[85vh] rounded-3xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightboxImage}
              alt="معاينة المعرض الموسع"
              fill
              quality={100}
              className="object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}
