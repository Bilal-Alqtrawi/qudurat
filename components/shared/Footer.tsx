import Link from "next/link";
import Logo from "./Logo";

const socials = [
  {
    name: "واتساب",
    href: "https://wa.me/966547477545",
    color:
      "hover:bg-emerald-50 hover:text-emerald-600 hover:border-emerald-200",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12c0 1.821.487 3.53 1.338 5L2 22l5.002-1.338A9.966 9.966 0 0012 22z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16.5 13.5c-.25-.125-1.5-.75-1.725-.825-.225-.075-.375-.125-.525.125-.15.25-.6.75-.725.875-.125.125-.25.125-.5 0-.25-.125-1.05-.387-2-1.233-.733-.655-1.233-1.464-1.375-1.714-.15-.25-.013-.388.112-.513.113-.112.25-.3.375-.45.125-.15.163-.25.25-.425.088-.175.038-.325-.013-.425-.05-.1-.45-1.1-.613-1.5-.162-.388-.325-.338-.45-.338h-.388c-.137 0-.362.05-.55.263-.188.212-.725.712-.725 1.737 0 1.025.75 2.013.85 2.15.1.137 1.475 2.25 3.575 3.163.5.212.887.35 1.187.437.5.163.963.138 1.325.088.4-.063 1.225-.5 1.4-1 .175-.5.175-.925.125-1-.05-.075-.175-.125-.425-.25z"
        />
      </svg>
    ),
  },
  {
    name: "تيليجرام",
    href: "https://t.me/rooro345",
    color: "hover:bg-sky-50 hover:text-sky-600 hover:border-sky-200",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 5L2 12.5l7 3M21 5l-8 14-4-4.5M21 5L9 15.5M13 19l-1.5-4.5"
        />
      </svg>
    ),
  },
  {
    name: "إنستغرام",
    href: "https://instagram.com/ryndfysl9",
    color: "hover:bg-pink-50 hover:text-pink-600 hover:border-pink-200",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    name: "تيك توك",
    href: "https://www.tiktok.com/@rinad5667",
    color: "hover:bg-slate-50 hover:text-slate-900 hover:border-slate-300",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12a4 4 0 104 4V4a5 5 0 005 5"
        />
      </svg>
    ),
  },
  {
    name: "يوتيوب",
    href: "https://www.youtube.com/@Ra-cw7zw",
    color: "hover:bg-rose-50 hover:text-rose-600 hover:border-rose-200",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33z"
        />
        <polygon
          points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"
          fill="currentColor"
        />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 relative overflow-hidden text-right pt-20 pb-10 px-6 sm:px-8">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-125 h-37.5 bg-brand-light rounded-full filter blur-[100px] opacity-70 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 items-start border-b border-slate-100">
          <div className="md:col-span-5 space-y-5">
            <Link
              href="/"
              className="inline-block transition-transform duration-300 hover:scale-[1.01]"
            >
              <Logo />
            </Link>
            <p className="text-brand-gray text-sm leading-relaxed font-medium max-w-sm">
              المنصة الأكاديمية الرائدة لتأسيس وتأهيل طُلاب القدرات والتحصيلي
              بالمملكة العربية السعودية، نمنحك المفاتيح الذكية للوصول للقمة.
            </p>
          </div>

          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-black text-brand-navy tracking-widest uppercase opacity-40">
              تصفح سريع
            </h4>
            <nav className="flex flex-col gap-3 text-sm font-black text-brand-navy/80">
              {[
                { name: "الرئيسية والمنصة", href: "." },
                { name: "عن الأستاذة ريناد", href: "/#about" },
                { name: "الدورات والبرامج", href: "/#courses" },
                { name: "سياسية الخصوصية", href: "privacy" },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="hover:text-brand-gold transition-colors duration-300 w-fit"
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>

          <div className="md:col-span-4 space-y-5">
            <div className="space-y-1">
              <h4 className="text-xs font-black text-brand-navy tracking-widest uppercase opacity-40">
                مجتمعاتنا الرقمية
              </h4>
              <p className="text-[11px] font-bold text-brand-gray">
                انضم إلينا وكون قريب من التسريبات والتجميعات اليومية.
              </p>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.name}
                  className={`w-11 h-11 rounded-2xl bg-brand-light text-brand-navy border border-slate-100/60 flex items-center justify-center transition-all duration-300 shadow-xs cursor-pointer ${social.color} hover:-translate-y-1`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* القسم السفلي لحقوق الملكية الفكرية */}
        <div className="pt-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-bold text-brand-gray/60">
          <p className="order-2 sm:order-1">
            جميع الحقوق محفوظة © {new Date().getFullYear()} مـ . منصة الأستاذة
            ريناد ناصر
          </p>
          <div className="flex items-center gap-2 order-1 sm:order-2 text-[11px]">
            <span>صُنع بشغف لتقديم أفضل تجربة تعلم</span>
            <span className="text-brand-gold animate-pulse text-sm">✦</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
