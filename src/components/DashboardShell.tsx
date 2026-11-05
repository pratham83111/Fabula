"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/lib/data";
import { BackIcon, BellIcon, CloseIcon, MenuIcon, NavIcons } from "./dashboard/Icons";
import "@/styles/dashboard.css";

export default function DashboardShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const current = site.dashboardNav.find((n) => pathname === n.href || pathname.startsWith(n.href + "/"));

  return (
    <div className="db-root">
      <aside className={`db-side ${open ? "open" : ""}`} aria-label="Dashboard menu">
        <button type="button" className="db-close" aria-label="Close menu" onClick={() => setOpen(false)}>
          <CloseIcon />
        </button>
        <Link href="/" className="db-logo" aria-label="Fabula home">
          Fabula
        </Link>
        <nav style={{ display: "contents" }}>
          {site.dashboardNav.map((item) => (
            <Link key={item.href} href={item.href} className={`db-nav ${item === current ? "active" : ""}`} aria-current={item === current ? "page" : undefined}>
              {NavIcons[item.label]}
              {item.label}
            </Link>
          ))}
        </nav>
        <Link href="/" className="db-nav db-back">
          <BackIcon /> Back to website
        </Link>
      </aside>
      {open && <div className="db-overlay" onClick={() => setOpen(false)} aria-hidden="true" />}

      <div className="db-main-wrap">
        <header className="db-top">
          <button type="button" className="db-iconbtn db-menu-btn" aria-label="Open menu" aria-expanded={open} onClick={() => setOpen(true)}>
            <MenuIcon />
          </button>
          <span className="db-top-title">{current?.label ?? "Dashboard"}</span>
          <div className="db-top-right">
            <Link href="/contractor/notifications" className="db-iconbtn" aria-label="Notifications (new)">
              <BellIcon />
              <span className="db-dot" />
            </Link>
            <span className="db-avatar" aria-hidden="true" />
          </div>
        </header>
        <main className="db-main">{children}</main>
      </div>
    </div>
  );
}
