"use client";

import { useState } from "react";

export type AccordionItem = { q: string; a: string };

export default function Accordion({ items, defaultOpen = 0 }: { items: AccordionItem[]; defaultOpen?: number | null }) {
  const [open, setOpen] = useState<number | null>(defaultOpen);

  return (
    <div className="acc">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className={`acc-item ${isOpen ? "open" : ""}`}>
            <button className="acc-q" aria-expanded={isOpen} onClick={() => setOpen(isOpen ? null : i)}>
              <span>{item.q}</span>
              <span className="acc-toggle">{isOpen ? "−" : "+"}</span>
            </button>
            {isOpen && <p className="acc-a">{item.a}</p>}
          </div>
        );
      })}
    </div>
  );
}
