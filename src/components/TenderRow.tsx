"use client";

import { useState } from "react";
import Link from "next/link";
import CompanyLogo from "@/components/CompanyLogo";
import type { Tender } from "@/lib/data";
import { Bookmark } from "@/components/tenders/icons";
import "@/styles/tenders.css";

export default function TenderRow({ tender, showApply = false }: { tender: Tender; showApply?: boolean }) {
  const [saved, setSaved] = useState(false);
  return (
    <div className="tnd-card">
      <CompanyLogo name={tender.company} size={48} className="tnd-logo" />
      <div className="tnd-title">{tender.title}..</div>
      <div className="tnd-info">
        <div className="tnd-meta">{tender.location}</div>
        <div className="tnd-meta">Total . {tender.experience}</div>
      </div>
      <span className="tnd-badge">{tender.type}</span>
      <span className="tnd-price">${Number(tender.salary).toLocaleString("en-US")}</span>
      <div className="tnd-actions">
        <button type="button" className={`tnd-save${saved ? " on" : ""}`} aria-label="Save tender" onClick={() => setSaved(!saved)}>
          <Bookmark />
        </button>
        <Link href={`/tenders-details/${tender.id}`} className={showApply ? "tnd-apply" : "tnd-details"}>
          {showApply ? "APPLY" : "DETAILS"}
        </Link>
      </div>
    </div>
  );
}
