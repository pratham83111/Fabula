"use client";

import { useState } from "react";

export default function DbForm({
  children,
  successMessage = "Saved.",
  validate,
}: {
  children: React.ReactNode;
  successMessage?: string;
  validate?: (fd: FormData) => string | null;
}) {
  const [msg, setMsg] = useState<{ ok: boolean; text: string } | null>(null);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const err = validate?.(new FormData(e.currentTarget));
        setMsg(err ? { ok: false, text: err } : { ok: true, text: successMessage });
      }}
      onReset={() => setMsg(null)}
    >
      {msg && (
        <div className="db-ok" role={msg.ok ? "status" : "alert"} style={msg.ok ? undefined : { background: "#fde2e0", color: "#b3261e" }}>
          {msg.text}
        </div>
      )}
      {children}
    </form>
  );
}
