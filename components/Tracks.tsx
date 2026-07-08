"use client";

import Link from "next/link";
import { MoveLeft, Sparkles } from "lucide-react";

export default function Tracks() {
  return (
    <section
      id="tracks-intro"
      className="relative w-full py-20 px-6 bg-brand-navy text-white overflow-hidden text-right"
      dir="rtl"
    >
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-gold/10 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 text-center space-y-8">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-brand-gold text-xs font-black tracking-wide mx-auto backdrop-blur-xs">
          <Sparkles className="w-3.5 h-3.5" />
          <span>مرونة وتفاعل مخصص لكِ</span>
        </div>

        <div className="space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            المسارات التعليمية بالمنصة
          </h2>
          <p className="text-sm sm:text-base text-white/80 font-semibold leading-relaxed max-w-2xl mx-auto">
            نوفر لك خيارات مدروسة بعناية لتناسب وقتك وطريقة استذكارك، سواءً
            كنتِ تُفضلين التفاعل المباشر أو الدراسة المرنة
          </p>
        </div>

        <div className="pt-4">
          <Link
            href="/tracks"
            className="inline-flex items-center gap-2.5 px-10 py-4.5 rounded-2xl bg-brand-gold text-brand-navy text-base font-black hover:bg-white hover:text-brand-navy hover:shadow-2xl hover:shadow-brand-gold/20 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg shadow-brand-gold/10"
          >
            <span>اكتشفي تفاصيل المسارات واختاري ما يناسبكِ</span>
            <MoveLeft className="w-4 h-4 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
}
