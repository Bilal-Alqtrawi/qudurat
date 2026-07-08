"use client";

import Link from "next/link";
import { MoveLeft } from "lucide-react";

export default function Tracks() {
  return (
    <section
      id="tracks-intro"
      className="py-20 px-6 bg-brand-gold-deep/30 selection:bg-brand-gold/20"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-black text-brand-navy tracking-tight">
            المسارات التعليمية بالمنصة
          </h2>
          <p className="text-sm sm:text-base text-brand-gray font-semibold leading-relaxed">
            نوفر لكِ خيارات مدروسة بعناية لتناسب وقتك وطريقة استذكارك، سواءً كنت
            تُفضل التفاعل المباشر أو الدراسة المرنة.
          </p>
        </div>

        <div className="text-center">
          <Link
            href="/tracks"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-brand-navy text-white text-sm font-black hover:bg-brand-gold hover:text-brand-navy transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            <span>اكتشف تفاصيل المسارات واختر ما يناسبك</span>
            <MoveLeft className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
