"use client";

import { ChartSpline, Target, Layout, Zap, Calendar } from "lucide-react";
import SearchBar from "./SearchBar";
import StaticWavyBackground from "./StaticWavyBackground";

const methodologyFeatures = [
  {
    icon: Target,
    title: "تفكيك أسئلة المقارنات",
    desc: "تبسيط مهارات المقارنة وحساب النسب ذهنياً وبأسرع طريقة.",
  },
  {
    icon: Layout,
    title: "الشرح بالتمثيل البصري",
    desc: "اعتماد أسلوب الرسم التفاعلي لتسهيل استيعاب الهندسة.",
  },
  {
    icon: Zap,
    title: "الحل السريع المباشر",
    desc: "مهارات الاستبعاد الذكي والوصول للناتج النهائي بأقل خطوات.",
  },
  {
    icon: Calendar,
    title: "تجميعات الورقي ١٤٤٧",
    desc: "شرح تطبيقي حي على أحدث الأسئلة والنماذج المكررة.",
  },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 pt-24 sm:pt-36 pb-24 overflow-hidden bg-white selection:bg-brand-gold/20"
    >
      <StaticWavyBackground />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10 w-full text-right">
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

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-brand-navy leading-[1.15] tracking-tight">
            طريقك نحو الـ{" "}
            <span className="text-brand-gold font-black inline-block relative">
              100%
            </span>{" "}
            <br />
            يبدأ من هنا بشرح يفتح النفس
          </h1>

          <p className="text-brand-gray text-base sm:text-lg font-medium max-w-2xl leading-relaxed">
            دورتنا مصممة لتأهيلك خطوة بخطوة من الصفر عبر استراتيجيات حل مبتكرة،
            تجميعات حديثة، ومتابعة دورية تضمن قفزة حقيقية في درجاتك.
          </p>

          {/* شريط البحث الذكي */}
          <SearchBar />

          {/* المميزات التكتيكية مدمجة بشكل أنيق ومصغر في الـ Hero */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100/60">
            {methodologyFeatures.map((feature, idx) => {
              const IconComponent = feature.icon;
              return (
                <div key={idx} className="flex gap-3 group">
                  <div className="w-9 h-9 rounded-xl bg-brand-light group-hover:bg-brand-gold/10 text-brand-navy group-hover:text-brand-gold flex items-center justify-center shrink-0 transition-colors duration-300">
                    <IconComponent className="w-4 h-4 stroke-[2.5]" />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="text-xs sm:text-sm font-black text-brand-navy group-hover:text-brand-gold transition-colors duration-300">
                      {feature.title}
                    </h4>
                    <p className="text-[11px] sm:text-xs text-brand-gray font-medium leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* الجانب الأيسر: مشغل الفيديو والشرح التفاعلي */}
        <div className="lg:col-span-5 relative w-full flex flex-col items-center">
          <div className="w-full relative rounded-3xl overflow-hidden bg-slate-900 shadow-[0_25px_60px_-15px_rgba(22,46,68,0.12)] border-4 border-white aspect-video lg:aspect-square max-w-lg lg:max-w-none group">
            {/* هنا نضع الـ iframe الخاص بالفيديو (مثال يوتيوب أو vimeo) */}
            <iframe
              className="w-full h-full object-cover rounded-2xl opacity-90 group-hover:opacity-100 transition-opacity duration-300"
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID_HERE?rel=0"
              title="شرح تشويقي للمنصة"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>

            {/* تأثير إضاءة خلفي خلف الفيديو لإعطائه طابع الفخامة */}
            <div className="absolute -z-10 inset-0 bg-gradient-to-tr from-brand-gold/20 to-transparent blur-2xl rounded-full scale-95 pointer-events-none" />
          </div>

          {/* كرت إحصائي عائم صغير أسفل الفيديو ليعطي عمق وثقة حية */}
          <div className="absolute -bottom-6 right-6 p-4 rounded-2xl bg-white border border-slate-100 flex items-center gap-3 shadow-xl hover:border-brand-gold/30 transition-all z-20">
            <div className="w-9 h-9 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600">
              <ChartSpline size={20} />
            </div>
            <div className="text-right">
              <h5 className="text-xs font-black text-brand-navy">
                +٢٣٪ معدل تحسن
              </h5>
              <p className="text-[10px] font-medium text-brand-gray">
                بعد أول شهر تأسيسي
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* الأشكال الخلفية الجمالية الدائرية */}
      <div className="absolute -z-10 -bottom-6 -right-6 w-44 h-44 border-4 border-brand-gold/10 rounded-full pointer-events-none" />
      <div className="absolute -z-10 -top-6 -left-6 w-32 h-32 bg-brand-light/40 rounded-full pointer-events-none filter blur-xl" />
    </section>
  );
}
