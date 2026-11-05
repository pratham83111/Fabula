"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useAuth } from "./auth/AuthProvider";
import Logo from "./Logo";
import { site } from "@/lib/data";

export default function Header({ solid = false }: { solid?: boolean }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { openLogin } = useAuth();

  return (
    <header className={`header ${solid ? "header-solid" : ""}`}>
      <div className="container header-inner">
        <Logo />
        <nav className="nav" aria-label="Main">
          {site.nav.map((item) => (
            <Link key={item.href} href={item.href} className={pathname === item.href ? "active" : ""}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <button type="button" className="login-link" onClick={openLogin}>
            Login
          </button>
          <Link href="/register" className="btn btn-bright btn-sm">
            Register
          </Link>
        </div>
        <button className="menu-btn" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>
      {open && (
        <div className="mobile-menu">
          {site.nav.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
          <button
            type="button"
            style={{ textAlign: "left", padding: "10px 0", borderBottom: "1px solid rgba(255,255,255,.1)" }}
            onClick={() => {
              setOpen(false);
              openLogin();
            }}
          >
            Login
          </button>
          <Link href="/register" onClick={() => setOpen(false)}>
            Register
          </Link>
        </div>
      )}
    </header>
  );
}
