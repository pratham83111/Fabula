"use client";

import { useState } from "react";
import "@/styles/pages.css";
import Accordion from "./Accordion";

type Item = { category: string; q: string; a: string };

export default function FaqTabs({ categories, items }: { categories: string[]; items: Item[] }) {
  const [active, setActive] = useState("All");
  const visible = active === "All" ? items : items.filter((i) => i.category === active);

  return (
    <div className="pg-faq pg-acc">
      <div className="chips" role="tablist">
        {categories.map((c) => (
          <button key={c} role="tab" aria-selected={c === active} className={`chip ${c === active ? "active" : ""}`} onClick={() => setActive(c)}>
            {c}
          </button>
        ))}
      </div>
      {visible.length ? <Accordion key={active} items={visible} /> : <p className="center">No questions in this category yet.</p>}
    </div>
  );
}
