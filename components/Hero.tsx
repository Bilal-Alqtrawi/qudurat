import {
  ArrowLeft,
  GraduationCap,
  Video,
  Trophy,
  ChartSpline,
} from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-28 sm:pt-36 pb-16 overflow-hidden bg-linear-to-b from-[#0B1528] via-[#0F1A2F] to-[#09101E] selection:bg-orange-500/30 select-none text-right text-white"
      dir="rtl"
    >
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] size-150 bg-orange-500/10 rounded-full blur-[130px] transform-gpu" />
        <div className="absolute bottom-[10%] left-[-5%] size-125 bg-amber-500/10 rounded-full blur-[120px] transform-gpu" />
        <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-size-[4rem_4rem]" />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10 w-full flex-1">
        <div className="lg:col-span-7 space-y-8 transform-gpu">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white shadow-sm transition-all duration-300 hover:border-orange-500/30">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            <span className="text-xs font-bold tracking-wide text-white/90">
              المنصة التأهيلية الأولى للقدرات والتحصيلي للطلبة (ورقي ومحوسب)
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-white">
            طريقك نحو الـ{" "}
            <span className="text-orange-500 font-black inline-block relative px-1 after:absolute after:bottom-2 after:right-0 after:w-full after:h-3 after:bg-orange-500/20 after:-z-10">
              100%
            </span>{" "}
            <br />
            يبدأ من خطوة{" "}
            <span className="bg-linear-to-r from-amber-400 via-orange-400 to-yellow-300 bg-clip-text text-transparent font-black">
              تأسيس ذكي
            </span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg font-medium max-w-2xl leading-relaxed">
            دورتنا مصممة لتأهيلك خطوة بخطوة من الصفر عبر استراتيجيات حل مبتكرة،
            تجميعات حديثة، ومتابعة دورية تضمن قفزة حقيقية في درجاتك.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/tracks"
              className="px-8 py-4 bg-orange-500 text-white rounded-2xl hover:bg-orange-600 active:scale-95 transition-all duration-300 font-black text-sm flex items-center gap-2.5 shadow-[0_12px_30px_-8px_rgba(249,115,22,0.4)] transform-gpu hover:-translate-y-0.5 group"
            >
              <GraduationCap className="w-5 h-5 transition-transform group-hover:rotate-12" />
              <span>ابدأ التأسيس واستكشف المسارات</span>
              <ArrowLeft
                size={16}
                className="transition-transform group-hover:-translate-x-1"
              />
            </Link>

            <Link
              href="/courses"
              className="px-6 py-4 bg-white/5 text-white border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/20 active:scale-95 transition-all duration-300 font-black text-sm flex items-center gap-2 shadow-3xs backdrop-blur-md"
            >
              <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center">
                <Video size={10} className="text-orange-400 fill-orange-400" />
              </div>
              <span>شاهد الدورات بالكامل</span>
            </Link>
          </div>
        </div>

        <div className="lg:col-span-5 relative w-full flex flex-col items-center transform-gpu">
          <div className="w-full max-w-md bg-white rounded-3xl overflow-hidden shadow-[0_30px_70px_-15px_rgba(0,0,0,0.5)] border border-white/10 text-right group transition-all duration-300 hover:border-orange-500/20">
            {/* ترويسة الكرت الداكنة الحيوية */}
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
              <p className="text-[11px] text-orange-400 font-bold">
                مع الأستاذة / ريناد عاصم
              </p>

              <div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden mt-1">
                <div className="bg-orange-500 h-full w-3/4 rounded-full" />
              </div>
            </div>

            <div className="p-4 bg-white space-y-3">
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

      <div className="w-full max-w-4xl mx-auto pt-16 relative z-10 transform-gpu">
        <div className="w-full relative rounded-[2.5rem] overflow-hidden bg-slate-950 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.6)] border-[6px] border-white/10 aspect-video group">
          <iframe
            className="w-full h-full object-cover rounded-4xl opacity-95 group-hover:opacity-100 transition-opacity duration-300"
            src="https://www.youtube.com/embed/VQNQNRoRDig"
            title="شرح تشويقي للمنصة"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <div className="w-full flex justify-center items-center pt-14 relative z-20">
        <Link
          href="/#courses"
          className="flex flex-col items-center gap-1.5 text-white/40 hover:text-orange-400 transition-colors duration-300 group cursor-pointer"
        >
          <span className="text-[10px] font-black tracking-widest uppercase text-slate-400 group-hover:text-orange-400">
            رؤية المسارات و الدورات
          </span>
          <div className="w-7 h-11 rounded-full border-2 border-white/20 group-hover:border-orange-500/50 flex justify-center p-1 transition-colors duration-300">
            <div className="w-1.5 h-2 bg-slate-400 group-hover:bg-orange-400 rounded-full animate-bounce" />
          </div>
        </Link>
      </div>

      <div className="absolute -z-10 -bottom-10 -right-10 w-52 h-52 border-4 border-white/5 rounded-full pointer-events-none" />
      <div className="absolute -z-10 -top-10 -left-10 w-40 h-40 bg-orange-500/5 rounded-full pointer-events-none filter blur-2xl transform-gpu" />
    </section>
  );
}
