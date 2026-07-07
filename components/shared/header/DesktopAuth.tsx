"use client";

import { useState } from "react";
import { User, ChevronDown, LogIn, UserPlus } from "lucide-react";
import type { AuthMode } from "@/config/navigation";

interface DesktopAuthProps {
  onOpenAuth: (mode: AuthMode) => void;
}

export default function DesktopAuth({ onOpenAuth }: DesktopAuthProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="hidden lg:flex items-center relative z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-brand-navy text-white hover:bg-brand-gold hover:shadow-lg hover:shadow-brand-gold/20 transition-all font-black text-sm"
      >
        <User size={18} />
        <span>حسابي</span>
        <ChevronDown
          size={16}
          className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="absolute left-0 top-full mt-3 w-56 bg-white border border-slate-100 rounded-2xl shadow-xl overflow-hidden flex flex-col animate-fade-up">
          <button
            onClick={() => {
              onOpenAuth("login");
              setIsOpen(false);
            }}
            className="flex items-center gap-3 px-5 py-4 text-brand-navy hover:bg-brand-light font-bold text-sm transition-colors text-right w-full"
          >
            <LogIn size={18} className="text-brand-gold" /> تسجيل الدخول
          </button>
          <div className="h-px bg-slate-100 w-full" />
          <button
            onClick={() => {
              onOpenAuth("register");
              setIsOpen(false);
            }}
            className="flex items-center gap-3 px-5 py-4 text-brand-navy hover:bg-brand-light font-bold text-sm transition-colors text-right w-full"
          >
            <UserPlus size={18} className="text-brand-gold" /> إنشاء حساب جديد
          </button>
        </div>
      )}
    </div>
  );
}
