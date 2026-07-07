"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, LogIn, UserPlus } from "lucide-react";
import Logo from "@/components/shared/Logo";
import { navLinks, type AuthMode } from "@/config/navigation";
import { useEffect, useState } from "react";

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenAuth: (mode: AuthMode) => void;
}

export default function MobileSidebar({
  isOpen,
  onClose,
  onOpenAuth,
}: MobileSidebarProps) {
  const pathname = usePathname();
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <>
      <div
        className={`fixed inset-0 z-60 bg-brand-navy/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        className={`fixed top-0 right-0 bottom-0 w-[85%] max-w-sm z-70 bg-white shadow-2xl transition-transform duration-300 lg:hidden ${isOpen ? "translate-x-0" : "translate-x-full"} overflow-auto [&::-webkit-scrollbar]:w-1.5 
          [&::-webkit-scrollbar-track]:bg-transparent 
          [&::-webkit-scrollbar-thumb]:bg-slate-200 
          hover:[&::-webkit-scrollbar-thumb]:bg-brand-gold/40 
          [&::-webkit-scrollbar-thumb]:rounded-full`}
      >
        <div className="flex items-center justify-between p-6 border-b border-slate-100">
          <Logo />
          <button
            onClick={onClose}
            className="p-2 bg-brand-light rounded-full text-brand-navy hover:bg-slate-200 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="flex flex-col gap-2 p-6 overflow-y-auto grow ">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={onClose}
              className={`py-4 px-5 rounded-2xl font-black text-lg transition-colors ${pathname === link.href ? "bg-brand-gold/10 text-brand-gold" : "text-brand-navy hover:bg-brand-light"}`}
            >
              {link.name}
            </Link>
          ))}

          <div className="flex flex-col">
            <button
              onClick={() => setIsContactOpen(!isContactOpen)}
              className="w-full flex items-center justify-between py-4 px-5 rounded-2xl font-black text-lg text-brand-navy hover:bg-brand-light transition-colors text-right cursor-pointer"
            >
              <span>تواصل معنا</span>
              <svg
                className={`w-5 h-5 text-brand-navy transition-transform duration-300 ${isContactOpen ? "rotate-180 text-brand-gold" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                isContactOpen
                  ? "max-h-40 opacity-100 mt-2"
                  : "max-h-0 opacity-0 pointer-events-none"
              }`}
            >
              <Link
                href="https://t.me/rooro345"
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="flex items-center gap-4 p-4 mx-2 rounded-2xl bg-sky-50 text-sky-600 hover:bg-sky-100 transition-colors font-bold border border-sky-100/50"
              >
                <svg
                  className="w-7 h-7 fill-current shrink-0"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-1-.65-.35-1 .22-1.62.15-.15 2.7-2.48 2.75-2.7 tactics-.01-.03.01-.14-.06-.2-.07-.06-.17-.04-.25-.02-.11.02-1.78 1.13-5.03 3.33-.48.33-.91.49-1.3.48-.43-.01-1.26-.24-1.88-.45-.76-.25-1.37-.39-1.31-.83.03-.23.35-.46.96-.71 3.76-1.63 6.27-2.71 7.53-3.23 3.58-1.48 4.32-1.74 4.81-1.75.11 0 .35.03.5.16.13.11.17.26.19.37z" />
                </svg>
                <div className="flex flex-col text-right">
                  <span className="text-xs text-sky-700/70 font-bold">
                    قناة التيليجرام
                  </span>
                  <span dir="ltr" className="text-sm font-black tracking-wide">
                    @rooro345
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </nav>

        <div className="p-6 border-t border-slate-100 bg-brand-light/50 space-y-3">
          <button
            onClick={() => onOpenAuth("login")}
            className="w-full py-4 rounded-xl border-2 border-brand-navy text-brand-navy font-black flex justify-center gap-2 hover:bg-brand-navy hover:text-white transition-all"
          >
            <LogIn size={18} /> تسجيل الدخول
          </button>
          <button
            onClick={() => onOpenAuth("register")}
            className="w-full py-4 rounded-xl bg-brand-navy text-white font-black flex justify-center gap-2 hover:bg-brand-gold hover:text-brand-navy transition-all"
          >
            <UserPlus size={18} /> إنشاء حساب جديد
          </button>
        </div>
      </div>
    </>
  );
}
