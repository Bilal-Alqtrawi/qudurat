"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

const SCREENSHOTS = [
  { id: 1, src: "/testimonials/1.jpeg", title: "رأي طالبة في تسيير المذاكرة" },
  { id: 2, src: "/testimonials/6.jpeg", title: "نتيجة الابن سعود (86%)" },
  {
    id: 3,
    src: "/testimonials/3.jpeg",
    title: "طفرة في درجات القدرات (من 54 إلى 81)",
  },
  {
    id: 4,
    src: "/testimonials/4.jpeg",
    title: "ارتفاع درجات القسم الكمي واللفظي (82)",
  },
  { id: 5, src: "/testimonials/5.jpeg", title: "تجربة الطالبة درر مع التأسيس" },
  {
    id: 6,
    src: "/testimonials/2.jpeg",
    title: "تفاعل وتقفيل الدرجات من جروب التليجرام",
  },
  {
    id: 7,
    src: "/testimonials/7.jpeg",
    title: "رأي طالبة في تبسيط شرح وتفريج الكمي",
  },
  {
    id: 8,
    src: "/testimonials/8.jpeg",
    title: "سعادة الطالبات بعد الخروج من الاختبار",
  },
  {
    id: 9,
    src: "/testimonials/9.jpeg",
    title: "رسالة شكر ودعاء لأستاذة ريناد",
  },
  {
    id: 10,
    src: "/testimonials/10.jpeg",
    title: "رسالة شكر ودعاء لأستاذة ريناد",
  },
  {
    id: 11,
    src: "/testimonials/11.jpeg",
    title: "رسالة شكر ودعاء لأستاذة ريناد",
  },
  {
    id: 12,
    src: "/testimonials/12.jpeg",
    title: "رسالة شكر ودعاء لأستاذة ريناد",
  },
  {
    id: 13,
    src: "/testimonials/13.jpeg",
    title: "رسالة شكر ودعاء لأستاذة ريناد",
  },
  {
    id: 14,
    src: "/testimonials/14.jpeg",
    title: "رسالة شكر ودعاء لأستاذة ريناد",
  },
];

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [activeModalImage, setActiveModalImage] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setMounted(true);
    }, 10);
    return () => setMounted(false);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % SCREENSHOTS.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + SCREENSHOTS.length) % SCREENSHOTS.length,
    );
  };

  useEffect(() => {
    if (activeModalImage) {
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
  }, [activeModalImage]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveModalImage(null);
        setIsHovered(false);
      }
    };
    if (activeModalImage) {
      window.addEventListener("keydown", handleEscape);
    }
    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [activeModalImage]);

  useEffect(() => {
    if (isHovered || activeModalImage) return;
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [isHovered, activeModalImage]);

  return (
    <section
      className="py-20 px-6 bg-brand-light relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="max-w-4xl mx-auto space-y-10 relative z-10 text-center">
        <div className="space-y-4">
          <h2 className="text-3xl sm:text-4xl font-black text-brand-navy">
            لوحة شرف وفخر طُللابنا
          </h2>
          <p className="text-brand-gray text-base font-medium">
            لقطات شاشة حية لرسائل الطلبة ونتائجهم في اختبارات القدرات
          </p>
        </div>

        <div className="relative min-h-115 sm:min-h-125 flex items-center justify-center px-2">
          {SCREENSHOTS.map((img, idx) => (
            <div
              key={img.id}
              className={`w-full max-w-sm bg-white rounded-3xl p-4 border border-slate-100 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.06)] transition-all duration-500 absolute ${
                idx === currentIndex
                  ? "opacity-100 translate-x-0 scale-100 z-10"
                  : "opacity-0 translate-x-16 scale-95 pointer-events-none"
              }`}
            >
              <div
                onClick={() => setActiveModalImage(img.src)}
                className="relative cursor-zoom-in group rounded-2xl overflow-hidden bg-slate-50 border border-slate-100 h-95 w-full flex items-center justify-center"
              >
                <Image
                  src={img.src}
                  alt={img.title}
                  fill
                  sizes="(max-w-384px) 100vw, 384px"
                  priority={idx === currentIndex}
                  className="object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-brand-navy/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-20">
                  <span className="bg-white/90 text-brand-navy text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                    اضغط للتكبير 🔍
                  </span>
                </div>
              </div>

              <div className="mt-3 text-center">
                <span className="text-xs font-bold text-brand-gray/80">
                  {img.title}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center gap-4 pt-2">
          <button
            onClick={prevSlide}
            aria-label="السابق"
            className="w-12 h-12 rounded-full bg-white text-brand-navy border border-slate-100 flex items-center justify-center font-bold hover:bg-brand-navy hover:text-white transition-all shadow-xs cursor-pointer select-none active:scale-95"
          >
            →
          </button>

          <div className="flex gap-1.5 max-w-sm overflow-x-auto py-1 px-2 scrollbar-none">
            {SCREENSHOTS.map((_, idx) => (
              <span
                key={idx}
                className={`h-2 rounded-full transition-all duration-300 shrink-0 ${
                  idx === currentIndex
                    ? "w-5 bg-brand-gold"
                    : "w-2 bg-brand-gray/30"
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            aria-label="التالي"
            className="w-12 h-12 rounded-full bg-white text-brand-navy border border-slate-100 flex items-center justify-center font-bold hover:bg-brand-navy hover:text-white transition-all shadow-xs cursor-pointer select-none active:scale-95"
          >
            ←
          </button>
        </div>
      </div>

      {activeModalImage &&
        mounted &&
        createPortal(
          <div
            className="fixed inset-0 z-999 bg-black/70 backdrop-blur-md flex items-center justify-center p-4 transition-opacity duration-300"
            onClick={() => setActiveModalImage(null)}
          >
            <div className="relative w-full max-w-2xl h-[80vh] flex flex-col items-center justify-center animate-scaleUp">
              <button
                className="absolute -top-12 left-0 text-white text-sm font-bold bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full transition-all z-50 cursor-pointer"
                onClick={() => setActiveModalImage(null)}
              >
                إغلاق ✕
              </button>
              <div
                className="relative w-full h-full"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={activeModalImage}
                  alt="لقطة شاشة مكبرة لنتائج الطلاب"
                  fill
                  sizes="(max-w-768px) 100vw, 768px"
                  className="object-contain rounded-2xl shadow-2xl border border-white/10"
                  unoptimized // مفيد لتقليل استهلاك السيرفر إذا كانت الصور بصيغ ثابتة ولا تحتاج إعادة تحجيم مستمر بالنافذة
                />
              </div>
            </div>
          </div>,
          document.body,
        )}
    </section>
  );
}
