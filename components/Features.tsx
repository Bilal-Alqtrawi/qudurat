import { ReactNode } from "react";
import Link from "next/link";

const tracks = [
  {
    title: "مسار البث المباشر التفاعلي",
    desc: "تركيز مطلق وضمان للتفاعل اللحظي المكثف، حيث تحصل الطالبة على توجيه مباشر مخصص، مع رسم وتفكيك فوري لمسائل المقارنات والهندسة وتجمّعات ١٤٤٧ أولاً بأول.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
        />
      </svg>
    ),
    badge: "الأكثر تفاعلاً",
  },
  {
    title: "مسار الدورات المسجلة الشاملة",
    desc: "مرونة كاملة وتجربة تعلم ذاتية ممتازة، متاحة على مدار الساعة لترسيخ تكتيكات الحل السريع في ٣٠ ثانية ومراجعة شروحات النماذج الورقية والمحوسبة الحديثة بالكامل.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    badge: "مرونة مطلقة",
  },
];

type TrackProps = {
  title: string;
  desc: string;
  icon: ReactNode;
  badge: string;
};

export default function Features() {
  return (
    <section
      id="features"
      className="py-24 px-6 bg-white relative z-10 text-right"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-light border border-slate-100/80 text-[11px] font-bold text-brand-gold mx-auto">
            ⚡️ مسارات مرنة تناسب وقتك وقدراتك
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-brand-navy tracking-tight">
            مسارات تدريبية صُممت{" "}
            <span className="text-brand-gold">لتميزكَ</span> الأكاديمي
          </h2>
          <p className="text-brand-gray text-sm sm:text-base font-medium max-w-xl mx-auto">
            اختار المسار الذكي الذي يتناسب مع نمط تعلمك وجدولك الدراسي لتبدء
            رحلة حصد الـ +٩٥ في اختبارات قياس (الورقي والمحوسب).
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto w-full">
          {tracks.map((track, idx) => (
            <TrackItem key={idx} track={track} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TrackItem({ track }: { track: TrackProps }) {
  return (
    <div className="group relative p-8 sm:p-10 rounded-4xl bg-brand-light border border-slate-100/50 hover:bg-brand-navy hover:border-brand-navy transition-all duration-400 flex flex-col items-center text-center shadow-[0_15px_40px_-20px_rgba(22,46,68,0.03)] hover:shadow-[0_30px_60px_-15px_rgba(22,46,68,0.18)] transform hover:-translate-y-1">
      <span className="absolute top-4 left-6 px-3 py-1 rounded-full bg-white group-hover:bg-white/10 text-brand-navy/60 group-hover:text-brand-gold text-[10px] font-black tracking-wide border border-slate-100 group-hover:border-transparent transition-colors duration-400">
        {track.badge}
      </span>

      <div className="w-16 h-16 rounded-2xl bg-white group-hover:bg-brand-gold text-brand-navy group-hover:text-white flex items-center justify-center mb-8 shadow-[0_8px_20px_-6px_rgba(22,46,68,0.08)] transition-all duration-400 transform group-hover:scale-105">
        {track.icon}
      </div>

      <h3 className="text-xl font-black text-brand-navy group-hover:text-white mb-4 transition-colors duration-400">
        {track.title}
      </h3>

      <p className="text-sm sm:text-base text-brand-gray group-hover:text-white/75 mb-8 leading-relaxed font-medium transition-colors duration-400">
        {track.desc}
      </p>

      <Link
        href="https://wa.me/966547477545"
        target="_blank"
        className="mt-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white group-hover:bg-brand-gold text-brand-navy group-hover:text-brand-navy font-black text-xs shadow-xs hover:shadow-md transition-all duration-400 cursor-pointer border border-slate-100/80 group-hover:border-transparent outline-0"
      >
        سجل الآن وابدئي رحلتكِ
        <span className="text-sm transition-transform duration-300 group-hover:-translate-x-0.75">
          ←
        </span>
      </Link>
    </div>
  );
}
