import Link from "next/link";
import { memo } from "react";

const CTA = memo(function CTA() {
  return (
    <section className="w-full py-16 px-6 bg-white relative z-10 text-right overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        <div className="relative w-full rounded-[2.5rem] bg-brand-navy text-white px-8 py-16 sm:p-16 overflow-hidden shadow-[0_30px_70px_-20px_rgba(22,46,68,0.3)] transform-gpu">
          <div className="absolute top-0 left-0 w-96 h-96 bg-brand-gold/10 rounded-full filter blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/5 rounded-full filter blur-[80px] pointer-events-none" />

          <div className="absolute inset-0 opacity-10 pointer-events-none select-none mix-blend-overlay">
            <svg
              className="w-full h-full"
              viewBox="0 0 1440 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path
                d="M0,200 C360,300 720,100 1080,200 C1260,250 1380,150 1440,100 L1440,400 L0,400 Z"
                fill="currentColor"
              />
            </svg>
          </div>

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-brand-gold text-xs font-black tracking-wider mx-auto">
              ⚡ مقاعد المجموعات الحالية محدودة جداً
            </div>

            {/* تحديث النص لصيغة المؤنث المباشر */}
            <h2 className="text-3xl sm:text-5xl font-black leading-tight tracking-tight">
              هل أنت مستعد لتكون نجم المنصة القادمة وتحقق{" "}
              <span className="text-brand-gold font-black">الـ 100</span>
            </h2>

            <p className="text-white/70 text-base sm:text-lg font-medium max-w-2xl mx-auto leading-relaxed">
              انضم الآن إلى آلاف الطلاب اللذين اختصروا وقت التأسيس، واكتسبوا
              تكنيكات الحل الفوري لأصعب مسائل قياس وتجمّعات الحوت والمنصف
              الحديثة. رحلتك تبدأ بنقرة زر.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                href="https://wa.me/966567318977"
                target="_blank"
                className="w-full sm:w-auto px-10 py-4.5 rounded-2xl bg-brand-gold text-brand-navy font-black text-base hover:bg-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5 text-center cursor-pointer shadow-lg shadow-brand-gold/10"
              >
                اشترك الآن وابدء فوراً
              </Link>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 pt-6 text-xs font-bold text-white/40">
              <div className="flex items-center gap-1.5">
                ✓ تحديثات شاملة ومستمرة لتجمعات ١٤٤٧
              </div>
              <div className="flex items-center gap-1.5">
                ✓ دعم أكاديمي ومتابعة متكاملة للطلاب
              </div>
              <div className="flex items-center gap-1.5">
                ✓ تجميعات محوسب وورقي حصرية ومقفلّة
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default CTA;
