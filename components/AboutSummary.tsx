import Link from "next/link";

export default function AboutSummary() {
  return (
    <section className="py-24 px-6 bg-slate-100 relative z-10">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/about"
          className="group block relative p-8 sm:p-10 rounded-[2.5rem] bg-linear-to-b from-brand-light to-white border border-slate-100 shadow-[0_15px_40px_-20px_rgba(22,46,68,0.05)] hover:shadow-[0_30px_60px_-15px_rgba(244,162,21,0.15)] hover:border-brand-gold/40 transition-all duration-500 overflow-hidden"
        >
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-brand-gold/10 rounded-full filter blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 relative z-10">
            <div className="w-24 h-24 shrink-0 rounded-3xl bg-brand-navy text-brand-gold flex flex-col items-center justify-center shadow-lg shadow-brand-navy/20 group-hover:scale-105 transition-transform duration-500">
              <span className="text-3xl font-black leading-none">+٢k</span>
              <span className="text-xs font-bold text-white/70 mt-1">
                طالبة
              </span>
            </div>

            <div className="flex-1 text-center md:text-right space-y-4">
              <div className="inline-flex items-center gap-2 bg-white border border-slate-100 rounded-full px-4 py-1.5 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
                <span className="text-[10px] font-bold text-brand-navy tracking-wide">
                  التميز الأكاديمي
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-brand-navy leading-tight">
                بقيادة الأستاذة{" "}
                <span className="text-brand-gold">ريناد ناصر</span>
              </h2>

              <p className="text-brand-gray text-sm sm:text-base font-medium leading-relaxed max-w-xl">
                خبرة ٦ سنوات نضعها بين يديكِ لتبسيط أعقد مسائل الكمي والمقارنات،
                وتحويل أحدث التجميعات إلى مهارات حل بديهية وسريعة.
              </p>
            </div>

            <div className="shrink-0">
              <div className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-brand-navy font-black text-xs border border-slate-100 shadow-xs group-hover:bg-brand-navy group-hover:text-white transition-colors duration-300">
                <span>السيرة والاعتمادات</span>
                <svg
                  className="w-4 h-4 transform rotate-180 group-hover:-translate-x-1 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
