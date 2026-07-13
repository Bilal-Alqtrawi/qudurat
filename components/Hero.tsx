"use client";

import {
  ArrowLeft,
  GraduationCap,
  Video,
  Trophy,
  ChartSpline,
  ArrowDown,
} from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-32 sm:pt-40 pb-20 overflow-hidden bg-gradient-to-b from-[#0B1528] via-[#0F1A2F] to-[#09101E] selection:bg-orange-500/30 select-none text-center text-white"
      dir="rtl"
    >
      {/* 🌌 تأثير إضاءة خلفي ناعم */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[120px] transform-gpu" />
        <div className="absolute bottom-[20%] left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[100px] transform-gpu" />
      </div>

      {/* المحتوى الرئيسي المتمركز */}
      <div className="max-w-4xl mx-auto flex flex-col items-center space-y-10 relative z-10 w-full flex-1 justify-center">
        {/* البادج العلوي */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white shadow-3xs">
          <span className="flex h-1.5 w-1.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-orange-500"></span>
          </span>
          <span className="text-[11px] font-bold text-white/80">
            المنصة التأهيلية الأولى للقدرات والتحصيلي للطلبة (ورقي ومحوسب)
          </span>
        </div>

        {/* العنوان الرئيسي */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.25] tracking-tight text-white max-w-3xl">
          طريقك نحو الـ{" "}
          <span className="text-orange-500 inline-block relative">100%</span>{" "}
          <br />
          يبدأ من خطوة{" "}
          <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
            تأسيس ذكي
          </span>
        </h1>

        {/* الوصف */}
        <p className="text-slate-300 text-base sm:text-lg font-medium max-w-2xl leading-relaxed opacity-90">
          دورتنا مصممة لتأهيلك خطوة بخطوة من الصفر عبر استراتيجيات حل مبتكرة،
          تجميعات حديثة، ومتابعة دورية تضمن قفزة حقيقية في درجاتك.
        </p>

        {/* الأزرار التفاعلية */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full pt-2">
          <Link
            href="/tracks"
            className="w-full sm:w-auto px-8 py-4 bg-orange-500 text-white rounded-2xl hover:bg-orange-600 active:scale-98 transition-all duration-200 font-black text-sm flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20 transform-gpu"
          >
            <GraduationCap className="w-5 h-5" />
            <span>ابدأ التأسيس واستكشف المسارات</span>
            <ArrowLeft size={16} />
          </Link>

          <Link
            href="/courses"
            className="w-full sm:w-auto px-7 py-4 bg-white/5 text-white border border-white/10 rounded-2xl hover:bg-white/10 active:scale-98 transition-all duration-200 font-black text-sm flex items-center justify-center gap-2 backdrop-blur-md"
          >
            <Video size={14} className="text-orange-400" />
            <span>شاهد الدورات بالكامل</span>
          </Link>
        </div>

        {/* 📑 الكرت المدمج الفخم الأصلي المقتبس من الصورة مباشرة */}
        <div className="w-full max-w-md pt-8 transform-gpu">
          <div className="bg-white rounded-3xl overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.4)] border border-white/10 text-right">
            {/* الترويسة الداكنة العلوية للكرت */}
            <div className="bg-[#121E31] p-6 space-y-3 border-b border-slate-800">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-slate-400">
                  تجميعات ورقي ومحوسب
                </span>
                <span className="px-2 py-0.5 text-[10px] font-black bg-rose-500/20 text-rose-400 rounded-md">
                  مباشر الآن
                </span>
              </div>
              <h3 className="text-base font-black text-white leading-relaxed">
                استراتيجية الرسم لتفكيك مسائل الهندسة والمقارنات المعقدة
              </h3>
              <p className="text-[11px] text-brand-gold font-bold">
                مع الأستاذة / ريناد عاصم
              </p>

              {/* شريط تقدم صغير لإعطاء الطابع المدمج التفاعلي */}
              <div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden mt-1">
                <div className="bg-brand-gold h-full w-3/4 rounded-full" />
              </div>
            </div>

            {/* القسم السفلي الأبيض للإحصائيات مصفوفة عمودياً كالصورة */}
            <div className="p-4 bg-white space-y-3">
              {/* السطر الأول: أعلى درجة */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-xs font-black text-slate-900">100%</span>
                <div className="flex items-center gap-2.5">
                  <div className="text-right">
                    <h5 className="text-xs font-black text-slate-900">
                      أعلى درجة مسجلة بالمنصة
                    </h5>
                    <p className="text-[10px] font-medium text-slate-400 mt-0.5">
                      الطالبة: روان عاصم (ورقي ومحوسب)
                    </p>
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center text-amber-500 shrink-0">
                    <Trophy size={16} />
                  </div>
                </div>
              </div>

              {/* السطر الثاني: معدل التحسن */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-xs font-black text-emerald-600">
                  +٢٣٪
                </span>
                <div className="flex items-center gap-2.5">
                  <div className="text-right">
                    <h5 className="text-xs font-black text-slate-900">
                      معدل تحسن الطلاب
                    </h5>
                    <p className="text-[10px] font-medium text-slate-400 mt-0.5">
                      بعد أول شهر تأسيسي بالمنصة
                    </p>
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-500 shrink-0">
                    <ChartSpline size={16} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* مؤشر النزول للأسفل */}
      <div className="w-full flex justify-center items-center pt-12 relative z-20">
        <Link
          href="/#courses"
          className="flex flex-col items-center gap-2 text-white/30 hover:text-orange-400 transition-colors duration-200 group cursor-pointer"
        >
          <span className="text-[10px] font-bold tracking-wider text-slate-400/80 group-hover:text-orange-400 transition-colors">
            رؤية المسارات والدورات
          </span>
          <div className="w-6 h-10 rounded-full border border-white/10 group-hover:border-orange-500/30 flex justify-center p-1 transition-colors">
            <div className="w-1 h-1.5 bg-slate-400 group-hover:bg-orange-400 rounded-full animate-bounce" />
          </div>
        </Link>
      </div>
    </section>
  );
}
