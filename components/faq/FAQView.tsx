"use client";

import { useState, memo } from "react";
import Header from "@/components/shared/header/Header";
import Footer from "@/components/shared/Footer";

const FAQS = [
  {
    q: "هل الدورات مناسبة للمبتدئين تماماً؟",
    a: "نعم، نبدأ في كل المسارات من الصفر المطلق ونقوم بتأسيس المفاهيم الأساسية وتفكيك القوانين الرياضية خطوة بخطوة.",
  },
  {
    q: "ما هو الفرق بين البث المباشر والدورات المسجلة؟",
    a: "البث المباشر يتيح لكِ التفاعل والتوجيه اللحظي المباشر وطرح الأسئلة مع الأستاذة ريناد، بينما المسجلة توفر لكِ حرية المشاهدة بأي وقت ووصول كامل مدى الحياة.",
  },
  {
    q: "كيف أحصل على ملفات التجميعات والتسريبات؟",
    a: "فور إتمام حجز مقعدكِ وتأكيد الحساب، سيتم إرسال كافة الحقائب الرقمية وملفات الـ PDF مباشرة وتلقائياً عبر الواتساب ومجتمعاتنا.",
  },
  {
    q: "هل يوجد ضمان على نتائج الدورة؟",
    a: "نحن نضع بين يديكِ خلاصة خبرتنا واستراتيجياتنا المعتمدة. الالتزام بتطبيق الشروحات والممارسة المستمرة هو مفتاحكِ للوصول إلى 100 بإذن الله.",
  },
  {
    q: "هل يمكنني استرداد المبلغ في حال عدم الرغبة في إكمال الدورة؟",
    a: "نحن ملتزمون بتقديم أعلى جودة تعليمية. يمكنك الاطلاع على سياسة الاسترجاع الخاصة بنا في صفحة الشروط والأحكام عند التسجيل.",
  },
  {
    q: "هل الدورة محدودة بوقت معين؟",
    a: "تختلف المدة حسب المسار؛ الدورات المسجلة متاحة لكِ مدى الحياة، بينما البث المباشر يتبع جدولاً زمنياً محدداً لضمان التزام ومتابعة الطالبات.",
  },
];

// مكون فرعي مع حركات انسيابية ممتازة
const FAQItemRow = memo(function FAQItemRow({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="border-b border-slate-100 last:border-none py-4 transition-all duration-300">
      <button
        type="button"
        onClick={onClick}
        aria-expanded={isOpen}
        suppressHydrationWarning
        className="w-full flex items-center justify-between gap-4 text-right py-4 cursor-pointer group"
      >
        <span
          className={`text-base sm:text-lg font-black transition-colors duration-300 ${
            isOpen
              ? "text-brand-gold"
              : "text-brand-navy group-hover:text-brand-gold"
          }`}
        >
          {question}
        </span>
        <span
          className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
            isOpen
              ? "bg-brand-gold/10 text-brand-gold rotate-180"
              : "bg-brand-light text-brand-navy"
          }`}
        >
          <svg
            className="w-3.5 h-3.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={3}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </span>
      </button>

      <div
        className={`grid transition-all duration-350 ease-in-out text-brand-gray text-sm sm:text-base leading-relaxed overflow-hidden ${
          isOpen
            ? "grid-rows-[1fr] opacity-100 pt-1 pb-4"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="pl-6 font-medium text-brand-gray/90">{answer}</p>
        </div>
      </div>
    </div>
  );
});

export default function FAQView() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <div className="relative w-full min-h-screen flex flex-col bg-white antialiased overflow-x-hidden">
      <Header />

      <main className="w-full grow pt-36 pb-24 px-6 relative z-10 bg-slate-50/40">
        <div className="max-w-4xl mx-auto space-y-12 text-right">
          {/* العناوين المحدثة المتطابقة مع الهوم بايج */}
          <div className="text-center space-y-3">
            <h1 className="text-3xl sm:text-4xl font-black text-brand-navy tracking-tight">
              لديك <span className="text-brand-gold">استفسار؟</span> تجد
              إجابته هنا
            </h1>
            <p className="text-brand-gray text-sm sm:text-base font-medium max-w-xl mx-auto">
              كل ما تود معرفته عن آلية التدريب والتسجيل في المنصة لتنطلق بثقة
              نحو هدفك.
            </p>
          </div>

          {/* بوكس الأسئلة الأنيق المقتبس من الـ Home Page */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100/80 shadow-[0_20px_50px_-20px_rgba(22,46,68,0.04)]">
            {FAQS.map((faq, idx) => (
              <FAQItemRow
                key={idx}
                question={faq.q}
                answer={faq.a}
                isOpen={openIdx === idx}
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
