"use client";

import { useState } from "react";

export default function PasswordField({ id, label = "Password*", required = true }: { id: string; label?: string; required?: boolean }) {
  const [show, setShow] = useState(false);

  return (
    <div className="au-field">
      <label htmlFor={id}>{label}</label>
      <div className="au-pass">
        <input id={id} name={id} type={show ? "text" : "password"} placeholder="Enter Password" required={required} minLength={6} autoComplete="current-password" />
        <button type="button" className="au-eye" aria-label={show ? "Hide password" : "Show password"} aria-pressed={show} onClick={() => setShow(!show)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z" />
            <circle cx="12" cy="12" r="3" />
            {!show && <path d="M3 3l18 18" />}
          </svg>
        </button>
      </div>
    </div>
  );
}
