"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [done, setDone] = useState(false);

  return (
    <form
      className="newsletter"
      onSubmit={(e) => {
        e.preventDefault();
        setDone(true);
        e.currentTarget.reset();
      }}
    >
      <input type="email" name="email" placeholder="Enter your email*" required aria-label="Email" />
      <button type="submit">{done ? "Thanks!" : "Send"}</button>
    </form>
  );
}
