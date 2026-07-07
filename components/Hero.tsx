import Link from "next/link";
import { Trophy, ChartSpline } from "lucide-react";
import SearchBar from "./SearchBar";
import StaticWavyBackground from "./StaticWavyBackground";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 pt-36 pb-24 overflow-hidden bg-white selection:bg-brand-gold/20"
    >
      <StaticWavyBackground />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10 w-full text-right">
        <div className="lg:col-span-7 space-y-8">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-brand-light border border-slate-100/80 text-brand-navy shadow-xs">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-gold"></span>
            </span>
            <span className="text-xs font-black tracking-wide">
              المنصة التأهيلية الأولى للقدرات والتحصيلي للطلبة (ورقي ومحوسب)
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-[4.25rem] font-black text-brand-navy leading-[1.15] tracking-tight">
            طريقك نحو الـ{" "}
            <span className="text-brand-gold font-black inline-block relative">
              100
            </span>{" "}
            <br />
            يبدأ من خطوة{" "}
            <span className="relative inline-block bg-clip-text py-2 text-[#d08503]">
              تأسيس ذكي
            </span>
          </h1>

          <p className="text-brand-gray font-semibold  text-base sm:text-lg max-w-2xl leading-relaxed">
            نركز على تفكيك العقد الرياضية ومسائل المقارنات والهندسة ببناء
            أكاديمي راسخ يحول القوانين الطويلة إلى مهارات وحلول تفاعلية بديهية
            فائقة السرعة.
          </p>

          <SearchBar />

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link
              href="https://wa.me/966567318977"
              target="_blank"
              className="px-8 py-4 rounded-2xl bg-brand-navy text-white font-black text-sm hover:shadow-xl hover:shadow-brand-navy/10 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
            >
              احجز مقعدك الآن
            </Link>
            <a
              href="#features"
              className="px-8 py-4 rounded-2xl bg-brand-light text-brand-navy font-black text-sm border border-slate-100 hover:border-brand-gold/40 hover:bg-white transition-all duration-300"
            >
              اكتشف مساراتنا التدريبية
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 relative hidden lg:block">
          <div className="relative mx-auto max-w-95 p-6 rounded-[2.5rem] bg-linear-to-b from-white to-brand-light border border-slate-100 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.08)] backdrop-blur-md transform-gpu">
            <div className="rounded-3xl overflow-hidden bg-brand-navy p-5 text-white relative shadow-inner space-y-4">
              <div className="flex justify-between items-center">
                <span className="px-2.5 py-1 rounded-md bg-rose-500 text-[10px] font-black tracking-wide animate-pulse uppercase">
                  مباشر الآن
                </span>
                <span className="text-[11px] font-bold text-white/60">
                  تجميعات ورقي ١٤٤٧
                </span>
              </div>
              <div className="pt-2">
                <h4 className="text-lg font-black leading-snug">
                  استراتيجية الرسم لتفكيك مسائل الهندسة والمقارنات المعقدة
                </h4>
                <p className="text-xs text-brand-gold font-bold mt-1">
                  مع الأستاذة ريناد ناصر
                </p>
              </div>
              <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                <div className="w-3/4 h-full bg-brand-gold rounded-full" />
              </div>
            </div>

            <div className="mt-4 space-y-3">
              <div className="p-4 rounded-2xl bg-white border border-slate-100 flex items-center justify-between shadow-xs hover:border-brand-gold/30 transition-all">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-brand-light flex items-center justify-center text-brand-gold">
                    <Trophy size={20} />
                  </div>
                  <div className="text-right">
                    <h5 className="text-xs font-black text-brand-navy">
                      أعلى درجة مسجلة بالمنصة
                    </h5>
                    <p className="text-[10px] font-medium text-brand-gray">
                      للطلبة - ورقي ومحوسب
                    </p>
                  </div>
                </div>
                <span className="text-sm font-black text-brand-navy">100%</span>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-100 flex items-center justify-between shadow-xs hover:border-brand-gold/30 transition-all">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                    <ChartSpline size={20} />
                  </div>
                  <div className="text-right">
                    <h5 className="text-xs font-black text-brand-navy">
                      معدل تحسن الطلبة
                    </h5>
                    <p className="text-[10px] font-medium text-brand-gray">
                      بعد أول شهر تأسيسي بالمنصة
                    </p>
                  </div>
                </div>
                <span className="text-sm font-black text-emerald-600">
                  +٢٣٪
                </span>
              </div>
            </div>
          </div>

          <div className="absolute -z-10 -bottom-6 -right-6 w-44 h-44 border-4 border-brand-gold/10 rounded-full pointer-events-none" />
          <div className="absolute -z-10 -top-6 -left-6 w-32 h-32 bg-brand-light rounded-3xl rotate-12 pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
