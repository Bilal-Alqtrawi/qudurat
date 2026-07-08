import { credentials } from "@/data/about-data";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 px-6 bg-white min-h-screen" dir="rtl">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-brand-light border border-slate-100 rounded-full px-4 py-2 shadow-xs">
            <span className="text-xs font-bold text-brand-navy tracking-wide">
              السيرة الذاتية والاعتمادات
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-brand-navy leading-tight">
            بقيادة الأستاذة <span className="text-brand-gold">ريناد ناصر</span>
          </h1>
          <p className="text-brand-gray text-base sm:text-lg font-medium leading-relaxed">
            نغير مفهوم الاستعداد للاختبارات. خبرة أكاديمية وميدانية نضعها بين
            يديكِ لتبسيط أعقد المسائل وتحويلها لمهارات سريعة ومضمونة.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {credentials.map((cred, idx) => (
            <div
              key={idx}
              className="group relative p-8 rounded-[2.5rem] bg-linear-to-b from-white to-brand-light border border-slate-100 shadow-sm hover:shadow-xl hover:border-brand-gold/40 transition-all duration-500 flex flex-col justify-between overflow-hidden"
            >
              <div
                className={`absolute -top-10 -left-10 w-32 h-32 bg-linear-to-br ${cred.accent} rounded-full filter blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`}
              />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-8 shadow-sm border border-slate-50/50 group-hover:scale-110 transition-all duration-500">
                  {cred.icon}
                </div>
                <h3 className="text-xl font-black text-brand-navy mb-3 group-hover:text-brand-gold transition-colors duration-300">
                  {cred.title}
                </h3>
                <p className="text-sm text-brand-gray leading-relaxed font-medium mb-10">
                  {cred.desc}
                </p>
              </div>

              <Link
                href={cred.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-10 inline-flex items-center justify-center gap-2 text-xs font-black text-brand-navy bg-white hover:bg-brand-navy hover:text-white border border-slate-100 rounded-full px-5 py-3 shadow-xs transition-all duration-300 w-full sm:w-auto self-start"
              >
                <span>الاطلاع على الاعتماد الرسمي</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
