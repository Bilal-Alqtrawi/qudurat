const credentials = [
  {
    title: "٣ دبلومات معتمدة",
    desc: "متخصصة في إعداد وتأهيل مدربات القدرات والتحصيلي الاحترافيات وفق معايير قياس الحديثة.",
    pdfUrl: "/docs/me-academy.pdf",
    accent: "from-amber-500/20 to-brand-gold/10",
    icon: (
      <svg
        className="w-6 h-6 text-brand-gold"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 14l9-5-9-5-9 5 9 5z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
        />
      </svg>
    ),
  },
  {
    title: "معهد معاني التطوير",
    desc: "اعتماد رسمي مسجل بالكامل تحت إشراف المؤسسة العامة للتدريب التقني والمهني بالمملكة.",
    pdfUrl: "/docs/me-academy.pdf",
    accent: "from-blue-500/10 to-brand-navy/10",
    icon: (
      <svg
        className="w-6 h-6 text-brand-navy"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "أكاديمية الشرق الأوسط",
    desc: "عضوية تدريبية دولية معتمدة لضمان تطبيق أعلى معايير جودة المناهج للقدرات بشقيها.",
    pdfUrl: "/docs/me-academy.pdf",
    accent: "from-teal-500/10 to-emerald-500/10",
    icon: (
      <svg
        className="w-6 h-6 text-emerald-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
        />
      </svg>
    ),
  },
  {
    title: "المعهد الأمريكي (AIPS)",
    desc: "اعتماد احترافي دولي في صياغة استراتيجيات وبناء بيئات التعليم الرقمي التفاعلي المبتكر.",
    pdfUrl: "/docs/me-academy.pdf",
    accent: "from-purple-500/10 to-pink-500/10",
    icon: (
      <svg
        className="w-6 h-6 text-purple-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-32 px-6 bg-white relative overflow-hidden"
    >
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-brand-gold/10 rounded-full filter blur-[100px] animate-blob pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-brand-navy/5 rounded-full filter blur-[120px] animate-blob [animation-delay:3s] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
        <div className="lg:col-span-5 space-y-10 lg:sticky lg:top-32 text-right">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-brand-light border border-slate-100 rounded-full px-4 py-2 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
              <span className="text-xs font-bold text-brand-navy tracking-wide">
                التميز الأكاديمي والاعتماد
              </span>
            </div>

            <h2 className="text-4xl sm:text-6xl font-black text-brand-navy leading-[1.2] tracking-tight">
              بقيادة الأستاذة <br />
              <span className="relative inline-block text-brand-gold">
                ريناد ناصر
              </span>
            </h2>

            <p className="text-brand-gray text-lg sm:text-xl leading-relaxed font-medium max-w-md">
              نغير مفهوم الاستعداد للاختبارات. خبرة ٦ سنوات نضعها بين يديكِ
              لتبسيط أعقد مسائل الكمي والمقارنات، وتحويل أحدث التجميعات إلى
              مهارات حل بديهية وسريعة.
            </p>
          </div>

          <div className="inline-flex items-center gap-6 p-3 rounded-4xl bg-brand-light border border-white shadow-[0_20px_50px_-20px_rgba(22,46,68,0.05)] backdrop-blur-xl">
            <div className="w-20 h-20 rounded-3xl bg-brand-navy text-brand-gold flex flex-col items-center justify-center shadow-lg shadow-brand-navy/20">
              <span className="text-2xl font-black leading-none">+٢k</span>
              <span className="text-[10px] font-bold text-white/70 mt-1">
                طالبة
              </span>
            </div>
            <div className="pl-6 text-right">
              <h4 className="font-black text-brand-navy text-lg">
                رحلة نجاح متكاملة
              </h4>
              <p className="text-xs text-brand-gray font-medium mt-0.5">
                تم التأسيس والتأهيل للوصول للقمة بنجاح
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6 lg:pt-12">
          {credentials.map((cred, idx) => (
            <div
              key={idx}
              className={`group relative p-8 rounded-[2.5rem] bg-linear-to-b from-white to-brand-light border border-slate-100 shadow-[0_15px_40px_-20px_rgba(0,0,0,0.03)] hover:shadow-[0_30px_60px_-20px_rgba(244,162,21,0.15)] hover:border-brand-gold/40 transition-all duration-500 flex flex-col justify-between overflow-hidden backdrop-blur-xs
                ${idx % 2 === 1 ? "sm:translate-y-10" : ""}
              `}
            >
              <div
                className={`absolute -top-10 -left-10 w-32 h-32 bg-linear-to-br ${cred.accent} rounded-full filter blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`}
              />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-8 shadow-sm border border-slate-50/50 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  {cred.icon}
                </div>

                <h3 className="text-xl font-black text-brand-navy mb-3 group-hover:text-brand-gold transition-colors duration-300">
                  {cred.title}
                </h3>

                <p className="text-sm text-brand-gray leading-relaxed font-medium mb-10 group-hover:text-brand-navy/80 transition-colors duration-300">
                  {cred.desc}
                </p>
              </div>

              <a
                href={cred.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-10 inline-flex items-center justify-center gap-2 text-xs font-black text-brand-navy bg-white hover:bg-brand-navy hover:text-white border border-slate-100 rounded-full px-5 py-3 shadow-xs transition-all duration-300 group/btn mt-auto w-full sm:w-auto"
              >
                <span>الاطلاع على الاعتماد الرسمي</span>
                <svg
                  className="w-4 h-4 transform group-hover/btn:-translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
