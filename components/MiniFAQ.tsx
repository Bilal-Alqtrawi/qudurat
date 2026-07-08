"use client";

import { faqData } from "@/data/faq-data";
import { useState, memo } from "react";

const FAQItem = memo(function FAQItem({
  item,
  isOpen,
  onClick,
}: {
  item: (typeof faqData)[0];
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="border-b border-slate-100 last:border-none py-4 transition-all duration-300">
      <button
        type="button"
        onClick={onClick}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between gap-4 text-right py-3 cursor-pointer group"
      >
        <span
          className={`text-base sm:text-lg font-black transition-colors duration-300 ${isOpen ? "text-brand-gold" : "text-brand-navy group-hover:text-brand-gold"}`}
        >
          {item.question}
        </span>
        <span
          className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen ? "bg-brand-gold/10 text-brand-gold rotate-180" : "bg-brand-light text-brand-navy"}`}
        >
          <svg
            className="w-3 h-3"
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

      {/* حاوية الإجابة مع أنيميشن ناعم وآمن للأداء */}
      <div
        className={`grid transition-all duration-350 ease-in-out text-brand-gray text-sm sm:text-base leading-relaxed overflow-hidden ${
          isOpen
            ? "grid-rows-[1fr] opacity-100 pt-1 pb-4"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="pl-6 font-medium">{item.answer}</p>
        </div>
      </div>
    </div>
  );
});

export default function MiniFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="w-full py-24 bg-slate-50  px-6 relative z-10 text-right">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-3">
          <h2 className="text-3xl sm:text-4xl font-black text-brand-navy tracking-tight">
            لديك <span className="text-brand-gold">استفسار؟</span> تجد إجابته
            هنا
          </h2>
          <p className="text-brand-gray text-sm sm:text-base font-medium max-w-xl mx-auto">
            جمعنا لك أكثر الأسئلة شيوعاً التي تطرحها عقول الطلاب والطالبات قبل
            بدء رحلة التميز معنا.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-[0_20px_50px_-20px_rgba(22,46,68,0.05)]">
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              item={item}
              isOpen={openIndex === index}
              onClick={() => toggleFAQ(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
