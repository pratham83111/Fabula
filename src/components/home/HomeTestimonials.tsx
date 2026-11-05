"use client";

import { useRef } from "react";

type T = { quote: string; name: string; role: string; rating: string };

export default function HomeTestimonials({ title, items }: { title: string; items: T[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const scroll = (d: number) => ref.current?.scrollBy({ left: d * 320, behavior: "smooth" });
  const sizes = ["BuildCorp", "Northgate Group"];
  return (
    <div className="container">
      <div className="home-head">
        <h2 className="home-h2 home-testi-h">{title}</h2>
        <div className="home-arrows">
          <button type="button" aria-label="Previous" onClick={() => scroll(-1)}>&larr;</button>
          <button type="button" aria-label="Next" onClick={() => scroll(1)}>&rarr;</button>
        </div>
      </div>
      <div className="home-testi-grid" ref={ref}>
        {items.map((t, i) => (
          <div key={t.name} className="home-testi">
            <div className="home-testi-logo">{sizes[i % 2]}</div>
            <blockquote>&ldquo;{t.quote}&rdquo;</blockquote>
            <div className="home-testi-by">
              <strong>{t.name}</strong>,{t.role}
            </div>
            <div className="home-testi-foot">
              <span>{t.rating}</span>
              <span className="home-stars">★★★★★</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
