"use client";

import { useState } from "react";
import { FaqItem } from "@/data/faq";

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-sail-light border-t border-b border-sail-light">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.question}>
            <button
              className="w-full flex items-center justify-between gap-6 py-5 text-left"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : i)}
            >
              <span className="font-display text-lg text-harbor">{item.question}</span>
              <span
                className={`shrink-0 w-7 h-7 rounded-full border border-sail flex items-center justify-center text-harbor transition-transform duration-200 ${
                  isOpen ? "rotate-45" : ""
                }`}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                </svg>
              </span>
            </button>
            {isOpen && (
              <p className="pb-5 text-ink/65 leading-relaxed max-w-2xl">{item.answer}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}
