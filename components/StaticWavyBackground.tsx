"use client";

import { memo } from "react";

function StaticWavyBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none bg-white">
      <div className="absolute top-0 right-1/4 w-125 h-125 bg-brand-gold/5 rounded-full filter blur-[120px]" />
      <div className="absolute bottom-10 left-1/4 w-150 h-150 bg-brand-light rounded-full filter blur-[100px]" />

      <svg
        className="absolute bottom-0 left-0 w-full h-[70%] min-h-125 text-brand-light"
        viewBox="0 0 1440 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M0,320 L120,340 C240,360 480,400 720,380 C960,360 1200,280 1320,240 L1440,200 L1440,800 L1320,800 C1200,800 960,800 720,800 C480,800 240,800 120,800 L0,800 Z"
          className="fill-brand-light/40"
        />
        <path
          d="M0,420 C360,320 720,520 1080,400 C1260,340 1380,260 1440,220 L1440,800 L0,800 Z"
          className="fill-brand-gold/2.5"
        />
      </svg>
    </div>
  );
}

export default memo(StaticWavyBackground);
