"use client";

import { memo } from "react";
import { Target, Zap, Layout, Calendar } from "lucide-react";

const methodologyFeatures = [
  {
    icon: Target,
    title: "تفكيك أسئلة المقارنات والنسب",
    desc: "تبسيط مهارات المقارنة الحسابية وحساب النسب المئوية (مثل مقارنة القيم والكسور) ذهنياً وبأسرع طريقة بدون قوانين معقدة.",
  },
  {
    icon: Layout,
    title: "الشرح بالتمثيل البصري والرسم",
    desc: "اعتماد أسلوب الرسم التفاعلي المباشر لتوضيح مسائل الهندسة والخطوط (مثل تقسيم الأسلاك والمضلعات) لتسهيل استيعابها.",
  },
  {
    icon: Zap,
    title: "استراتيجية الحل السريع المباشر",
    desc: "تدريب كامل على مهارات الاستبعاد الذكي والوصول للناتج النهائي بأقل خطوات حسابية ممكنة لاستغلال وقت الاختبار.",
  },
  {
    icon: Calendar,
    title: "مواكبة تجميعات الورقي ١٤٤٧",
    desc: "شرح تطبيقي حي ومباشر على أحدث الأسئلة والنماذج المكررة والجديدة الخاصة باختبارات قياس الورقية والمحوسبة.",
  },
];

export default memo(function VideoExplanation() {
  return (
    <section className="py-24 px-6 bg-brand-light relative overflow-hidden">
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-brand-gold/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-brand-navy/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 space-y-6 w-full">
            <div className="relative aspect-video w-full rounded-4xl sm:rounded-[2.5rem] overflow-hidden bg-brand-navy shadow-[0_25px_60px_-15px_rgba(22,46,68,0.12)] border-4 border-white transition-transform duration-500 hover:scale-[1.005]">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="شرح توضيحي لمنهجية حل تجميعات القسم الكمي"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <p className="text-[11px] font-bold text-brand-gray/75 text-center sm:text-right px-4">
              * شاهد النبذة السريعة لتتعرف على أسلوب تبسيط المسائل الحسابية
              والهندسية خطوة بخطوة.
            </p>
          </div>

          <div className="lg:col-span-5 space-y-8 text-right">
            <div className="space-y-4">
              <span className="text-xs font-black tracking-widest text-brand-gold uppercase bg-white border border-slate-100 rounded-full px-4 py-1.5 shadow-xs inline-block">
                💡 أسلوب التمكين الذكي
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-brand-navy leading-tight">
                فلسفة الشرح وتبسيط القسم الكمي
              </h2>
              <p className="text-brand-gray text-sm sm:text-base leading-relaxed font-medium">
                نبتعد تماماً عن التلقين وحفظ القوانين الطويلة؛ هدفنا هو تدريب
                الطالب على قراءة المسألة، رسمها هندسياً، وحلها ذهنياً في ثوانٍ
                معدودة وبأعلى دقة.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 pt-2">
              {methodologyFeatures.map((feature, idx) => {
                const IconComponent = feature.icon;
                return (
                  <div
                    key={idx}
                    className="group flex gap-4 p-4 rounded-2xl bg-white/60 hover:bg-white border border-transparent hover:border-slate-100 transition-all duration-300 shadow-xs hover:shadow-md"
                  >
                    <div className="w-12 h-12 rounded-xl bg-brand-light group-hover:bg-brand-gold/10 text-brand-navy group-hover:text-brand-gold flex items-center justify-center shrink-0 transition-colors duration-300">
                      <IconComponent className="w-5 h-5 stroke-2" />
                    </div>

                    <div className="space-y-1">
                      <h4 className="text-sm sm:text-base font-black text-brand-navy group-hover:text-brand-gold transition-colors duration-300">
                        {feature.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-brand-gray font-medium leading-relaxed">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
