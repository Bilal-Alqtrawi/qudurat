"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { ArrowLeft } from "lucide-react";

const navLinks = [
  { name: "الرئيسية", href: "/" },
  { name: "عن المدربة", href: "/#about" },
  { name: "الدورات والبرامج", href: "/#courses" },
  { name: "الأسئلة الشائعة", href: "/faq" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [hash, setHash] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    setHash(window.location.hash);
    const handleHashChange = () => setHash(window.location.hash);
    window.addEventListener("hashchange", handleHashChange);

    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname, hash]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all border-b-0 duration-500 ${
          isScrolled || isMobileOpen
            ? "bg-white/80 backdrop-blur-xl border-b border-slate-100 shadow-[0_4px_30px_rgba(0,0,0,0.02)] py-3"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-3 group transition-transform duration-300 hover:scale-[1.01] relative z-50"
          >
            <Logo />
          </Link>

          <nav className="hidden md:flex items-center gap-10 text-sm font-black text-brand-navy">
            {navLinks.map((link, index) => {
              // التحقق الذكي من الرابط النشط سواء كان صفحة كاملة أو Anchor Link
              const isActive =
                link.href === "/"
                  ? pathname === "/" && hash === ""
                  : link.href.startsWith("/#")
                    ? pathname === "/" && hash === link.href.replace("/", "")
                    : pathname === link.href;

              return (
                <Link
                  key={index}
                  href={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  className={`relative py-1 tracking-wide transition-colors duration-300 group/link ${
                    isActive
                      ? "text-brand-gold"
                      : "text-brand-navy hover:text-brand-gold"
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute bottom-0 right-0 h-0.5 bg-brand-gold transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover/link:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="/register"
              className="hidden sm:inline-flex overflow-hidden px-7 py-3 rounded-full bg-brand-navy text-white font-bold text-xs shadow-xl shadow-brand-navy/10 hover:shadow-brand-navy/20 hover:-translate-y-0.5 transition-all duration-300 relative z-50"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                <span>سجّل الآن</span>
                <ArrowLeft className="w-4 h-4" />
              </span>
            </Link>

            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              suppressHydrationWarning // لمنع ظهور أخطاء حقن الخواص من المتصفح
              className="md:hidden p-2 text-brand-navy hover:text-brand-gold transition-colors focus:outline-hidden relative z-50 cursor-pointer"
              aria-label="Toggle Menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* قائمة الموبايل ملائمة للـ Active pathname */}
      <div
        className={`fixed inset-0 z-40 bg-white/95 backdrop-blur-lg md:hidden transition-all duration-300 flex flex-col justify-center items-center ${
          isMobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center gap-8 text-xl font-black text-brand-navy text-center w-full px-6">
          {navLinks.map((link, index) => {
            const isActive =
              link.href === "/"
                ? pathname === "/" && hash === ""
                : link.href.startsWith("/#")
                  ? pathname === "/" && hash === link.href.replace("/", "")
                  : pathname === link.href;

            return (
              <a
                key={index}
                href={link.href}
                onClick={() => setIsMobileOpen(false)}
                className={`w-full py-2 transition-colors ${isActive ? "text-brand-gold font-black" : "hover:text-brand-gold"}`}
              >
                {link.name}
              </a>
            );
          })}

          <Link
            href="/register"
            className="mt-4 w-full max-w-xs py-4 rounded-full bg-brand-navy text-white font-bold text-sm shadow-lg text-center"
          >
            سجّلي الآن 🔴
          </Link>
        </nav>
      </div>
    </>
  );
}
