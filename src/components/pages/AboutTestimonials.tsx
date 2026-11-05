"use client";

import { useState } from "react";
import "@/styles/pages.css";

type Testimonial = { quote: string; name: string; role: string; rating: string };

export default function AboutTestimonials({ items }: { items: Testimonial[] }) {
  const [i, setI] = useState(0);
  const t = items[i];
  const go = (d: number) => setI((i + d + items.length) % items.length);

  return (
    <>
      <div className="pg-tcard" aria-live="polite">
        <blockquote>&ldquo;{t.quote}&rdquo;</blockquote>
        <small>
          <strong>{t.name}</strong>, {t.role}
        </small>
        <div className="pg-row">
          <span>{t.rating}</span>
          <span style={{ letterSpacing: 2 }} aria-hidden="true">
            ★★★★★
          </span>
        </div>
      </div>
      <div className="pg-arrows">
        <button type="button" aria-label="Previous testimonial" onClick={() => go(-1)}>
          <svg width="26" height="14" viewBox="0 0 26 14" fill="none" stroke="#fff" strokeWidth="1.8">
            <path d="M26 7H1M7 1L1 7l6 6" />
          </svg>
        </button>
        <button type="button" aria-label="Next testimonial" onClick={() => go(1)}>
          <svg width="26" height="14" viewBox="0 0 26 14" fill="none" stroke="#fff" strokeWidth="1.8">
            <path d="M0 7h25M19 1l6 6-6 6" />
          </svg>
        </button>
      </div>
    </>
  );
}
