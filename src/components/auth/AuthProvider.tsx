"use client";

import { usePathname, useRouter } from "next/navigation";
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import LoginCard from "./LoginCard";
import "@/styles/auth.css";

type AuthContextValue = { openLogin: () => void; closeLogin: () => void };

const AuthContext = createContext<AuthContextValue>({ openLogin: () => {}, closeLogin: () => {} });

export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const openLogin = useCallback(() => setOpen(true), []);
  const closeLogin = useCallback(() => {
    setOpen(false);
    // /login is a direct link to the modal: closing it goes back home.
    if (pathname === "/login") router.push("/");
  }, [pathname, router]);

  // Lock page scroll and allow Escape to close while the modal is open.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && closeLogin();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, closeLogin]);

  const value = useMemo(() => ({ openLogin, closeLogin }), [openLogin, closeLogin]);

  return (
    <AuthContext.Provider value={value}>
      {children}
      {open && (
        <div className="au-overlay" onMouseDown={(e) => e.target === e.currentTarget && closeLogin()}>
          <div className="au-modal" role="dialog" aria-modal="true" aria-labelledby="au-login-title">
            <button type="button" className="au-close" aria-label="Close" onClick={closeLogin}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M5 5l14 14M19 5L5 19" />
              </svg>
            </button>
            <LoginCard onDone={() => setOpen(false)} />
          </div>
        </div>
      )}
    </AuthContext.Provider>
  );
}
