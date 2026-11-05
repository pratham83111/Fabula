"use client";

import { useState } from "react";

export type HomeAccItem = { q: string; a: string };

export default function HomeAccordion({ items, variant = "line" }: { items: HomeAccItem[]; variant?: "line" | "card" }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className={`home-acc home-acc-${variant}`}>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className={`home-acc-item${isOpen ? " open" : ""}`}>
            <button type="button" className="home-acc-q" aria-expanded={isOpen} onClick={() => setOpen(isOpen ? null : i)}>
              <span>{item.q}</span>
              <span className="home-acc-ico" aria-hidden>
                {variant === "card" ? (isOpen ? "−" : "+") : isOpen ? "⌃" : "⌄"}
              </span>
            </button>
            {isOpen && <p className="home-acc-a">{item.a}</p>}
          </div>
        );
      })}
    </div>
  );
}
