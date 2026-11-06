"use client";

import { useRef } from "react";
import Link from "next/link";
import CompanyLogo from "@/components/CompanyLogo";
import type { Tender } from "@/lib/data";
import { Arrow, Bookmark } from "./icons";
import "@/styles/tenders.css";

export default function RelatedCarousel({ items }: { items: Tender[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const scroll = (d: number) => {
    const el = ref.current;
    if (el) el.scrollBy({ left: d * (el.clientWidth / 2), behavior: "smooth" });
  };
  return (
    <section className="tnd-rel">
      <div className="container">
        <h2 className="h-lg">Related Jobs</h2>
        <div className="tnd-track" ref={ref}>
          {items.map((t) => (
            <div key={t.id} className="tnd-rcard">
              <div className="tnd-rtop">
                <CompanyLogo name={t.company} size={34} radius={8} />
                <span className="tnd-save" style={{ width: 28, height: 28 }} aria-hidden>
                  <Bookmark />
                </span>
              </div>
              <span className="tnd-yrs">{t.experience.replace("+ years", " years")}</span>
              <Link href={`/tenders-details/${t.id}`} className="tnd-rtitle">
                {t.title}
              </Link>
              <div className="tnd-amt">
                ${Number(t.salary).toLocaleString("en-US")} <span>/ Total</span>
              </div>
              <div className="tnd-rbot">
                <span>{t.location}</span>
                <Link href={`/tenders-details/${t.id}/bid`} className="tnd-apply">
                  APPLY
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="tnd-arrows">
          <button type="button" aria-label="Previous" onClick={() => scroll(-1)}>
            <Arrow dir="left" />
          </button>
          <button type="button" aria-label="Next" onClick={() => scroll(1)}>
            <Arrow />
          </button>
        </div>
      </div>
    </section>
  );
}
