"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import {
  X,
  LogIn,
  UserPlus,
  User,
  Mail,
  Lock,
  CheckSquare,
} from "lucide-react";
import type { AuthMode } from "@/config/navigation";

interface AuthModalProps {
  mode: AuthMode;
  onClose: () => void;
  onChangeMode: (mode: AuthMode) => void;
}

export default function AuthModal({
  mode,
  onClose,
  onChangeMode,
}: AuthModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setMounted(true);
    }, 10);

    const handleEsc = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    if (mode !== null) document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEsc);

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [mode]); // eslint-disable-line

  if (!mounted || !mode) return null;

  return createPortal(
    <div className="fixed inset-0 z-9999 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-brand-navy/60 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />

      <div className="relative w-full max-w-md bg-white rounded-[2.5rem] p-8 shadow-2xl animate-scaleUp overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-6 left-6 w-8 h-8 flex items-center justify-center bg-brand-light rounded-full text-brand-gray hover:text-brand-navy hover:bg-slate-200 z-10"
        >
          <X size={18} />
        </button>

        <div className="relative z-10">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-brand-light rounded-2xl flex items-center justify-center mx-auto mb-4 text-brand-gold">
              {mode === "login" ? <LogIn size={28} /> : <UserPlus size={28} />}
            </div>
            <h2 className="text-2xl font-black text-brand-navy">
              {mode === "login" ? "مرحباً بعودتك!" : "ابدأ رحلتك معنا"}
            </h2>
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            {mode === "register" && (
              <div className="relative">
                <User
                  size={18}
                  className="absolute right-4 top-4 text-brand-gray"
                />
                <input
                  type="text"
                  placeholder="الاسم الكامل"
                  className="w-full pr-12 pl-4 py-4 bg-brand-light border border-slate-100 rounded-xl focus:bg-white focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none text-sm font-medium"
                />
              </div>
            )}
            <div className="relative">
              <Mail
                size={18}
                className="absolute right-4 top-4 text-brand-gray"
              />
              <input
                type="email"
                placeholder="البريد الإلكتروني"
                className="w-full pr-12 pl-4 py-4 bg-brand-light border border-slate-100 rounded-xl focus:bg-white focus:border-brand-gold outline-none text-sm font-medium"
              />
            </div>
            <div className="relative">
              <Lock
                size={18}
                className="absolute right-4 top-4 text-brand-gray"
              />
              <input
                type="password"
                placeholder="كلمة المرور"
                className="w-full pr-12 pl-4 py-4 bg-brand-light border border-slate-100 rounded-xl focus:bg-white focus:border-brand-gold outline-none text-sm font-medium"
              />
            </div>
            {mode === "register" && (
              <div className="relative">
                <CheckSquare
                  size={18}
                  className="absolute right-4 top-4 text-brand-gray"
                />
                <input
                  type="password"
                  placeholder="تأكيد كلمة المرور"
                  className="w-full pr-12 pl-4 py-4 bg-brand-light border border-slate-100 rounded-xl focus:bg-white focus:border-brand-gold outline-none text-sm font-medium"
                />
              </div>
            )}

            <button className="w-full py-4 bg-brand-navy text-white rounded-xl font-black text-base hover:bg-brand-gold transition-all mt-4">
              {mode === "login" ? "تسجيل الدخول" : "إنشاء حساب"}
            </button>
          </form>

          <div className="mt-6 text-center text-sm font-medium text-brand-gray">
            {mode === "login" ? "ليس لديك حساب؟ " : "مسجل دخول مسبقاً؟ "}
            <button
              onClick={() =>
                onChangeMode(mode === "login" ? "register" : "login")
              }
              className="font-black text-brand-navy hover:text-brand-gold transition-colors"
            >
              {mode === "login" ? "سجل الآن" : "سجل الدخول"}
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
