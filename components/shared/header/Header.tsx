"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import Logo from "@/components/shared/Logo";
import DesktopAuth from "./DesktopAuth";
import MobileSidebar from "./MobileSidebar";
import AuthModal from "@/components/auth/AuthModal";
import { navLinks, type AuthMode } from "@/config/navigation";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [authMode, setAuthMode] = useState<AuthMode>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openAuth = (mode: AuthMode) => {
    setAuthMode(mode);
    setIsMobileOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? "bg-white/80 backdrop-blur-xl shadow-sm py-3" : "bg-transparent py-5"}`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="relative z-50 shrink-0">
            <Logo />
          </Link>

          <nav className="hidden lg:flex items-center gap-8 font-black text-sm">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative py-1 tracking-wide transition-colors duration-300 group/link ${
                    isActive ? "text-brand-gold" : "hover:text-brand-gold"
                  } ${pathname === "/" && !isScrolled ? "text-white" : ""}`}
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

          <DesktopAuth onOpenAuth={openAuth} />

          <button
            className="lg:hidden relative z-50 p-2 text-brand-navy"
            onClick={() => setIsMobileOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      <MobileSidebar
        isOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
        onOpenAuth={openAuth}
      />
      <AuthModal
        mode={authMode}
        onClose={() => setAuthMode(null)}
        onChangeMode={setAuthMode}
      />
    </>
  );
}
