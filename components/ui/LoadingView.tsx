"use client";

import { memo } from "react";

const LoaderView = memo(function LoaderView() {
  return (
    <div className="fixed inset-0 z-5000 flex flex-col items-center justify-center bg-white antialiased select-none pointer-events-auto">
      <style>{`
        @keyframes fluidFill {
          0% { transform: translateY(100px) cubic-bezier(0.4, 0, 0.2, 1); }
          50% { transform: translateY(35px) rotate(6deg); }
          100% { transform: translateY(-12px); }
        }
        .wave-fill-element {
          animation: fluidFill 2.2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
          will-change: transform;
        }
      `}</style>

      <div className="relative flex flex-col items-center gap-6 scale-95 sm:scale-100">
        <div className="relative size-25 drop-shadow-[0_12px_30px_rgba(22,46,68,0.06)]">
          <svg
            className="w-full h-full text-brand-navy/15"
            viewBox="0 0 100 100"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 25C12 18 24 15 50 15C76 15 88 18 88 25V70C88 77 76 80 50 80C24 80 12 77 12 70V25Z" />
            <path
              d="M50 15V80"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M22 35C32 38 42 38 50 37M78 35C68 38 58 38 50 37"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              d="M22 50C32 53 42 53 50 52M78 50C68 53 58 53 50 52"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>

          {/* ٢. الأيقونة الأمامية التي تمتلئ تدريجياً باللون الذهبي الملكي */}
          <div className="absolute inset-0 overflow-hidden [clip-path:url(#logo-clip)]">
            <svg
              className="w-full h-full text-brand-gold wave-fill-element"
              viewBox="0 0 100 100"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* نفس المسارات تماماً لضمان التطابق المطلق أثناء الصعود */}
              <path d="M12 25C12 18 24 15 50 15C76 15 88 18 88 25V70C88 77 76 80 50 80C24 80 12 77 12 70V25Z" />
              <path
                d="M50 15V80"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M22 35C32 38 42 38 50 37M78 35C68 38 58 38 50 37"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M22 50C32 53 42 53 50 52M78 50C68 53 58 53 50 52"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <svg className="absolute w-0 h-0">
            <defs>
              <clipPath id="logo-clip">
                <path d="M12 25C12 18 24 15 50 15C76 15 88 18 88 25V70C88 77 76 80 50 80C24 80 12 77 12 70V25Z" />
              </clipPath>
            </defs>
          </svg>
        </div>

        <div className="text-center space-y-2">
          <p className="text-sm font-black text-brand-navy tracking-wide animate-pulse duration-1000">
            جاري تحضير رحلتكِ التعليمية...
          </p>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-light border border-slate-100/80 text-[11px] font-bold text-brand-gold">
            ✨ منصة الأستاذة ريناد ناصر للقدرات والتحصيلي
          </div>
        </div>
      </div>
    </div>
  );
});

export default LoaderView;
