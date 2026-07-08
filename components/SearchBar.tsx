"use client";

import { useSearch } from "@/context/SearchContext";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

function SearchBar() {
  const { searchQuery, setSearchQuery } = useSearch();
  const [localQuery, setLocalQuery] = useState(searchQuery);
  const router = useRouter();
  const pathname = usePathname();

  const [prevSearchQuery, setPrevSearchQuery] = useState(searchQuery);

  if (searchQuery !== prevSearchQuery) {
    setPrevSearchQuery(searchQuery);
    setLocalQuery(searchQuery);
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = localQuery.trim();

    setSearchQuery(trimmed);

    if (pathname !== "/courses") {
      router.push("/courses");
    }
  };

  const handleTagClick = (tag: string) => {
    setLocalQuery(tag);
    setSearchQuery(tag);
    if (pathname !== "/courses") {
      router.push("/courses");
    }
  };

  return (
    <div className="max-w-xl pt-2">
      <form
        onSubmit={handleSubmit}
        className="relative flex items-center p-2 rounded-3xl bg-white border border-slate-100 shadow-[0_15px_40px_-15px_rgba(22,46,68,0.06)] focus-within:border-brand-gold/60 focus-within:shadow-[0_20px_40px_-15px_rgba(244,162,21,0.1)] transition-all duration-300"
      >
        <div className="flex-1 flex items-center gap-3 px-3">
          <svg
            className="w-5 h-5 text-brand-navy/40 shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            placeholder="ماذا تريد أن تتعلم اليوم؟ (كمي، مقارنات، ورقي ١٤٤٧...)"
            className="w-full bg-transparent border-none text-brand-navy placeholder:text-brand-navy/30 text-sm font-bold focus:outline-none text-right"
            value={localQuery}
            onChange={(e) => setLocalQuery(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="px-6 py-3 rounded-2xl bg-brand-navy text-white text-xs sm:text-sm font-black hover:bg-brand-gold hover:text-brand-navy transition-all duration-300 cursor-pointer shadow-xs"
        >
          ابحث عن دورة
        </button>
      </form>

      {/* tags */}
      <div className="flex flex-wrap items-center gap-2 mt-4 px-2">
        <span className="text-xs font-bold text-brand-gray/60">
          الوسوم الشائعة:
        </span>
        {[
          " تأسيس كمي ولفظي",
          "تأسيس المُعاصر ثمانية",
          "تدريب كمي محوسب",
          "بث مباشر",
        ].map((tag, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => handleTagClick(tag)}
            className="text-[11px] font-bold text-brand-navy/70 bg-brand-light hover:bg-brand-gold/10 hover:text-brand-gold rounded-full px-3 py-1 transition-all border border-slate-50 cursor-pointer"
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
}

export default SearchBar;
