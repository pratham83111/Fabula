"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useAuth } from "./AuthProvider";
import PasswordField from "./PasswordField";
import SocialButtons from "./SocialButtons";

const ROLES = ["Bidder", "Company"] as const;

export default function RegisterForm() {
  const router = useRouter();
  const { openLogin } = useAuth();
  const [role, setRole] = useState<(typeof ROLES)[number]>("Company");
  const [error, setError] = useState("");

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    if (!data.get("terms")) {
      setError("Please accept the Terms & conditions and Privacy Policy to continue.");
      return;
    }
    // Front-end only: no backend yet, so just continue to the dashboard.
    setError("");
    router.push("/contractor/profile");
  }

  return (
    <div className="au-card au-card-page">
      <h2 className="au-title">Create Account</h2>

      <div className="au-tabs" role="tablist" aria-label="Account type">
        {ROLES.map((r) => (
          <button key={r} type="button" role="tab" aria-selected={role === r} className={`au-tab ${role === r ? "on" : ""}`} onClick={() => setRole(r)}>
            {r}
          </button>
        ))}
      </div>

      <form className="au-form" onSubmit={submit} noValidate={false}>
        <input type="hidden" name="role" value={role} />
        <div className="au-field">
          <label htmlFor="reg-name">Name*</label>
          <input id="reg-name" name="name" placeholder="James Brower" required autoComplete="name" />
        </div>
        <div className="au-field">
          <label htmlFor="reg-email">Email*</label>
          <input id="reg-email" name="email" type="email" placeholder="james@example.com" required autoComplete="email" />
        </div>
        <div className="au-field">
          <label htmlFor="reg-phone">Phone Number*</label>
          <input id="reg-phone" name="phone" type="tel" placeholder="Enter Phone Number" required autoComplete="tel" />
        </div>
        <PasswordField id="reg-password" />

        <h3 className="au-section">Address &amp; Location</h3>
        <div className="au-field">
          <label htmlFor="reg-address">Address*</label>
          <input id="reg-address" name="address" placeholder="Enter Your Address" required autoComplete="street-address" />
        </div>

        <label className="au-check au-terms">
          <input type="checkbox" name="terms" />
          <span>
            By hitting the Register button, you agree to the <Link href="/terms-and-conditions">Terms conditions</Link> &amp; <Link href="/cookies">Privacy Policy</Link>
          </span>
        </label>

        {error && (
          <p className="au-error" role="alert">
            {error}
          </p>
        )}

        <button type="submit" className="au-submit">
          REGISTER
        </button>
      </form>

      <SocialButtons verb="Signup" />
      <p className="au-foot">
        Have an account?{" "}
        <button type="button" className="au-linkbtn" onClick={openLogin}>
          Sign In
        </button>
      </p>
    </div>
  );
}
