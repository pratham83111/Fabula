"use client";

import { useState } from "react";
import "@/styles/tenders.css";

export default function ShareButtons({ title }: { title: string }) {
  const [copied, setCopied] = useState(false);
  const url = () => (typeof window !== "undefined" ? window.location.href : "");
  return (
    <div className="tnd-share">
      <button type="button" onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url())}`, "_blank")}>
        <b>f</b> Facebook
      </button>
      <button type="button" onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url())}`, "_blank")}>
        <b>t</b> Twitter
      </button>
      <button
        type="button"
        onClick={() => {
          navigator.clipboard?.writeText(url()).catch(() => {});
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        }}
      >
        &#128279; {copied ? "Copied" : "Copy"}
      </button>
    </div>
  );
}
