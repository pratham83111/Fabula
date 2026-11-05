"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { legal } from "@/lib/data";

const KEY = "fabula-cookie-consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  function answer(value: "accepted" | "declined") {
    try {
      localStorage.setItem(KEY, value);
    } catch {
      /* storage unavailable */
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="cookie" role="dialog" aria-label="Cookie consent">
      <p>
        {legal.banner} <Link href="/cookies">Learn more</Link>
      </p>
      <div className="cookie-actions">
        <button className="btn btn-lime btn-sm" onClick={() => answer("accepted")}>
          Accept
        </button>
        <button className="btn btn-outline btn-sm" style={{ borderColor: "#fff", color: "#fff" }} onClick={() => answer("declined")}>
          Decline
        </button>
      </div>
    </div>
  );
}
