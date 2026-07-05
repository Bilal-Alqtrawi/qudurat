"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { ArrowLeft, Menu, X } from "lucide-react";

const navLinks = [
  { name: "الرئيسية", href: "/" },
  { name: "عن المدربة", href: "/#about" },
  { name: "الدورات والبرامج", href: "/#courses" },
  { name: "الأسئلة الشائعة", href: "/faq" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileOpen(false);
    };

    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMobileOpen]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    setIsMobileOpen(false); // إغلاق المنيو دائماً

    // إذا كنا في الصفحة الرئيسية والروابط تتعلق بنفس الصفحة (هاش أو الرئيسية)
    if (pathname === "/") {
      if (href === "/") {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
        // مسح الهاش تماماً من الرابط وجعله نظيف (تم التعديل هنا إلى null)
        window.history.pushState(null, "", window.location.pathname);
      } else if (href.startsWith("/#")) {
        e.preventDefault();
        const targetId = href.replace("/#", "");
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          // تحديث الهاش بشكل نظيف بدون تراكم (تم التعديل هنا إلى null)
          window.history.pushState(null, "", href);
        }
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all  duration-300 border-b-0 ${
          isScrolled
            ? "bg-white/80 backdrop-blur-xl shadow-sm  py-3"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          <Link
            href="/"
            onClick={(e) => handleNavClick(e, "/")}
            className="flex items-center gap-3 group transition-transform duration-300 hover:scale-[1.01] relative z-70"
          >
            <Logo />
          </Link>

          <nav className="hidden md:flex items-center gap-10 text-sm font-black text-brand-navy">
            {navLinks.map((link, index) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={index}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative py-1 tracking-wide transition-colors duration-300 group/link ${
                    isActive ? "text-brand-gold" : "hover:text-brand-gold"
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
              href="https://wa.me/966547477545"
              target="_blank"
              onClick={() => setIsMobileOpen(false)}
              className="hidden sm:inline-flex overflow-hidden px-7 py-3 rounded-full bg-brand-navy text-white font-bold text-xs shadow-xl shadow-brand-navy/10 hover:shadow-brand-navy/20 hover:-translate-y-0.5 transition-all duration-300 relative z-60 hover:bg-brand-gold"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                <span>سجّل الآن</span>
                <ArrowLeft className="size-4" />
              </span>
            </Link>

            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="md:hidden p-2 text-brand-navy hover:text-brand-gold transition-colors focus:outline-none relative cursor-pointer z-60"
              aria-label="Toggle Menu"
            >
              {isMobileOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[55] bg-black/20 backdrop-blur-md transition-opacity duration-300 md:hidden ${
          isMobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileOpen(false)}
        aria-hidden="true"
      />

      <div
        className={`fixed bottom-0 left-0 right-0 z-[60] bg-white rounded-t-[2.5rem] p-8 pb-12 shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:hidden ${
          isMobileOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="w-12 h-1.5 bg-slate-200 rounded-full mx-auto mb-8" />

        <nav className="flex flex-col gap-3">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`py-4 px-6 rounded-2xl text-center font-black text-lg text-brand-navy hover:bg-brand-light transition-colors ${
                  isActive ? "text-brand-gold" : "hover:text-brand-gold"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <Link
            href="https://wa.me/966547477545"
            target="_blank"
            onClick={() => setIsMobileOpen(false)}
            className="mt-4 py-4 rounded-2xl bg-brand-gold text-brand-navy text-center font-black text-lg shadow-lg hover:opacity-90 transition-opacity"
          >
            اشترك الآن
          </Link>
        </nav>
      </div>
    </>
  );
}
