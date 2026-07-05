"use client";

import { useEffect, useId, useRef, useState } from "react";
import { Check, ChevronDown } from "lucide-react";

export interface SelectOption {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

interface SelectProps {
  options: SelectOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  label?: string;
  /** الحجم: sm للفلاتر داخل الشريط، md للنماذج، lg لواجهات التركيز الكامل */
  size?: "sm" | "md" | "lg";
  /** solid: خلفية داكنة بارزة (للفلاتر البارزة) | light: خلفية بيضاء بحد (للنماذج) */
  variant?: "solid" | "light";
  className?: string;
  fullWidth?: boolean;
  disabled?: boolean;
}

const sizeClasses: Record<NonNullable<SelectProps["size"]>, string> = {
  sm: "px-4 py-2.5 text-xs gap-2",
  md: "px-5 py-3.5 text-sm gap-2.5",
  lg: "px-6 py-4 text-base gap-3",
};

const chevronSize: Record<NonNullable<SelectProps["size"]>, number> = {
  sm: 15,
  md: 18,
  lg: 20,
};

/**
 * قائمة منسدلة (Select) قابلة لإعادة الاستخدام على مستوى المشروع بالكامل.
 * مبنية بمعايير وصول (a11y) كاملة عبر نمط combobox + aria-activedescendant،
 * مع دعم لوحة المفاتيح، الإغلاق عند النقر خارجها، ودعم كامل لـ RTL.
 */
export default function Select({
  options,
  value,
  onChange,
  placeholder = "اختر...",
  label,
  size = "md",
  variant = "light",
  className = "",
  fullWidth = true,
  disabled = false,
}: SelectProps) {
  const [open, setOpen] = useState(false);
  const [highlighted, setHighlighted] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const listboxId = useId();

  const selectedIndex = options.findIndex((o) => o.value === value);
  const selected = selectedIndex >= 0 ? options[selectedIndex] : undefined;

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function openMenu() {
    setHighlighted(selectedIndex >= 0 ? selectedIndex : 0);
    setOpen(true);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLButtonElement>) {
    if (disabled) return;

    if (!open) {
      if (["Enter", " ", "ArrowDown", "ArrowUp"].includes(e.key)) {
        e.preventDefault();
        openMenu();
      }
      return;
    }

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setHighlighted((prev) => Math.min(prev + 1, options.length - 1));
        break;
      case "ArrowUp":
        e.preventDefault();
        setHighlighted((prev) => Math.max(prev - 1, 0));
        break;
      case "Home":
        e.preventDefault();
        setHighlighted(0);
        break;
      case "End":
        e.preventDefault();
        setHighlighted(options.length - 1);
        break;
      case "Enter":
      case " ":
        e.preventDefault();
        if (options[highlighted]) {
          onChange(options[highlighted].value);
          setOpen(false);
        }
        break;
      case "Escape":
        e.preventDefault();
        setOpen(false);
        break;
      case "Tab":
        setOpen(false);
        break;
    }
  }

  const triggerBase =
    "flex items-center justify-between rounded-2xl font-black transition-all duration-300 outline-none border";

  const triggerVariant =
    variant === "solid"
      ? disabled
        ? "bg-slate-100 text-slate-400 border-slate-100 cursor-not-allowed"
        : "bg-brand-navy text-white border-brand-navy hover:bg-brand-gold hover:border-brand-gold hover:text-brand-navy cursor-pointer shadow-lg shadow-brand-navy/10"
      : disabled
        ? "bg-slate-50 text-slate-400 border-slate-100 cursor-not-allowed"
        : `bg-white text-brand-navy cursor-pointer ${
            open
              ? "border-brand-gold ring-4 ring-brand-gold/15"
              : "border-slate-200 hover:border-brand-gold/60"
          }`;

  return (
    <div
      ref={rootRef}
      className={`relative ${fullWidth ? "w-full" : "inline-block"} ${className}`}
    >
      {label && (
        <label className="block text-sm font-black text-brand-navy mb-2">
          {label}
        </label>
      )}

      <button
        type="button"
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listboxId}
        aria-label={label || placeholder}
        onClick={() => (open ? setOpen(false) : openMenu())}
        onKeyDown={handleKeyDown}
        className={`w-full ${triggerBase} ${sizeClasses[size]} ${triggerVariant}`}
      >
        <span className="flex items-center gap-2 truncate">
          {selected?.icon}
          <span className="truncate">
            {selected ? selected.label : placeholder}
          </span>
        </span>
        <ChevronDown
          size={chevronSize[size]}
          className={`shrink-0 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          } ${variant === "solid" ? "opacity-80" : "text-brand-gray/50"}`}
        />
      </button>

      <ul
        id={listboxId}
        role="listbox"
        aria-activedescendant={
          open ? `${listboxId}-opt-${highlighted}` : undefined
        }
        className={`absolute z-30 mt-2 w-full max-h-72 overflow-auto rounded-2xl border border-slate-100 bg-white p-2 shadow-2xl shadow-brand-navy/10 origin-top transition-all duration-200 [scrollbar-width:thin] [scrollbar-color:var(--color-brand-gold)_transparent] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:bg-brand-gold/40 [&::-webkit-scrollbar-thumb]:rounded-full ${
          open
            ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
            : "opacity-0 scale-95 -translate-y-1 pointer-events-none"
        }`}
      >
        {options.map((opt, i) => (
          <li
            key={opt.value}
            id={`${listboxId}-opt-${i}`}
            role="option"
            aria-selected={opt.value === value}
            onMouseEnter={() => setHighlighted(i)}
            onClick={() => {
              onChange(opt.value);
              setOpen(false);
            }}
            className={`flex items-center justify-between gap-2 px-4 py-3 rounded-xl text-sm font-bold cursor-pointer transition-colors duration-150 ${
              i === highlighted
                ? "bg-brand-light text-brand-navy"
                : "text-brand-gray"
            }`}
          >
            <span className="flex items-center gap-2 truncate">
              {opt.icon}
              <span className="truncate">{opt.label}</span>
            </span>
            {opt.value === value && (
              <Check size={16} className="text-brand-gold shrink-0" />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
