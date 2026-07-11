"use client";

import { credentials } from "@/data/about-data";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div
      className="pt-32 pb-24 px-4 sm:px-6 bg-slate-50 min-h-screen selection:bg-brand-gold/20"
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-6 max-w-3xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-full px-4 py-1.5 shadow-2xs">
            <span className="text-xs font-black text-brand-navy tracking-wide">
              السيرة الذاتية والاعتمادات
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-brand-navy leading-tight">
            بقيادة الأستاذة <span className="text-brand-gold">ريناد ناصر</span>
          </h1>
          <p className="text-brand-gray text-sm sm:text-lg font-semibold leading-relaxed">
            نغير مفهوم الاستعداد للاختبارات. خبرة أكاديمية وميدانية نضعها بين
            يديكِ لتبسيط أعقد المسائل وتحويلها لمهارات سريعة ومضمونة.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {credentials.map((cred, idx) => (
            <div
              key={idx}
              className="group relative p-8 sm:p-10 rounded-[2.5rem] bg-white shadow-[0_25px_60px_-15px_rgba(15,23,42,0.08)] hover:shadow-[0_30px_60px_-15px_rgba(244,162,21,0.35)] transition-all duration-500 flex flex-col justify-between overflow-hidden transform-gpu hover:-translate-y-1.5"
            >
              <div className="absolute inset-0 p-[1.5px] bg-linear-to-br from-slate-200 via-brand-gold/40 to-slate-200 rounded-[2.5rem] pointer-events-none z-0 group-hover:opacity-0 transition-opacity duration-500" />
              <div className="absolute inset-[1.5px] bg-white rounded-[2.45rem] pointer-events-none z-0 group-hover:opacity-0 transition-opacity duration-500" />

              <div className="absolute inset-0 bg-linear-to-br from-amber-400 via-brand-gold to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0" />

              <div className="absolute -top-24 -left-24 w-48 h-48 bg-white/20 rounded-full filter blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0" />

              <div className="relative z-10 flex flex-col items-center text-center lg:items-start lg:text-right">
                <div className="w-16 h-16 rounded-2xl bg-slate-50 text-brand-navy flex items-center justify-center mb-6 shadow-2xs border border-slate-200 group-hover:bg-white group-hover:text-brand-navy group-hover:scale-110 transition-all duration-500">
                  {cred.icon}
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-brand-navy mb-3 group-hover:text-white transition-colors duration-300">
                  {cred.title}
                </h3>

                <p className="text-sm sm:text-base text-brand-gray font-medium leading-relaxed mb-8 group-hover:text-white/90 transition-colors duration-300">
                  {cred.desc}
                </p>
              </div>

              <div className="relative z-10 w-full flex justify-center lg:justify-start">
                <Link
                  href={cred.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 text-xs font-black text-brand-navy bg-white hover:bg-brand-navy hover:text-white border border-slate-200 rounded-xl px-6 py-3.5 shadow-2xs transition-all duration-300 w-full sm:w-auto group-hover:bg-brand-navy group-hover:text-white group-hover:border-brand-navy group-hover:shadow-md"
                >
                  <span>الاطلاع على الاعتماد الرسمي</span>
                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-0.5"
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
