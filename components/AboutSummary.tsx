"use client";

import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";

export default function AboutSummary() {
  return (
    <section
      className="py-20 px-6 bg-slate-50 relative z-10 text-right"
      dir="rtl"
    >
      <div className="max-w-5xl mx-auto">
        <div className="relative p-8 sm:p-12 rounded-[2.5rem] bg-brand-navy border border-slate-900/40 shadow-[0_35px_60px_-15px_rgba(15,23,42,0.45)] overflow-hidden transform-gpu">
          <div className="absolute top-0 left-0 w-96 h-96 bg-brand-gold/10 rounded-full filter blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/5 rounded-full filter blur-[80px] pointer-events-none" />

          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 relative z-10">
            <div className="w-24 h-24 shrink-0 rounded-3xl bg-white/10 text-brand-gold flex flex-col items-center justify-center shadow-inner relative overflow-hidden backdrop-blur-xs">
              <Sparkles className="w-8 h-8" />
            </div>

            <div className="space-y-3 flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-gold"></span>
                </span>
                <span className="text-[11px] font-black text-brand-light tracking-wide">
                  التميز الأكاديمي والتدريبي
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight">
                بقيادة الأستاذة{" "}
                <span className="text-brand-gold">ريناد ناصر</span>
              </h2>

              <p className="text-white/80 text-sm sm:text-base font-semibold leading-relaxed max-w-2xl">
                خبرة ٦ سنوات نضعها بين يديكِ لتبسيط أعقد مسائل الكمي والمقارنات،
                وتحويل أحدث تجميعات المنصف والحوت الحديثة إلى مهارات حل بديهية
                وفورية.
              </p>
            </div>

            <div className="shrink-0 w-full md:w-auto">
              <Link
                href="/about"
                className="group inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-white/10 text-white font-black text-sm border border-white/10 shadow-2xs hover:bg-brand-gold hover:text-brand-navy hover:border-brand-gold transition-all duration-300 w-full hover:shadow-lg hover:shadow-brand-gold/10 hover:-translate-y-0.5 transform-gpu backdrop-blur-xs"
              >
                <span>السيرة والاعتمادات</span>
                <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
