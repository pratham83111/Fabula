"use client";

import { useState } from "react";

/**
 * Front-end only form wrapper: prevents the page reload and shows a success
 * message. Swap `onSubmit` for a real API call once a backend exists.
 */
export default function DemoForm({
  children,
  successMessage = "Saved successfully.",
  className = "form",
}: {
  children: React.ReactNode;
  successMessage?: string;
  className?: string;
}) {
  const [done, setDone] = useState(false);

  return (
    <form
      className={className}
      onSubmit={(e) => {
        e.preventDefault();
        setDone(true);
        setTimeout(() => setDone(false), 3500);
      }}
    >
      {children}
      {done && (
        <p className="form-ok" role="status">
          {successMessage}
        </p>
      )}
    </form>
  );
}
