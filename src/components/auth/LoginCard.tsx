"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import PasswordField from "./PasswordField";
import SocialButtons from "./SocialButtons";

export default function LoginCard({ onDone }: { onDone: () => void }) {
  const router = useRouter();
  const emailRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState("");

  useEffect(() => emailRef.current?.focus(), []);

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const email = String(new FormData(e.currentTarget).get("email") ?? "").trim();
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    // Front-end only: there is no backend yet, so any valid email signs in.
    setError("");
    onDone();
    router.push("/contractor/profile");
  }

  return (
    <div className="au-card">
      <h2 id="au-login-title" className="au-title">
        Hi, Welcome Back!
      </h2>
      <p className="au-sub">
        Still do not have an account? <Link href="/register" onClick={onDone}>Sign up</Link>
      </p>

      <form className="au-form" onSubmit={submit} noValidate>
        <div className="au-field">
          <label htmlFor="login-email">Email*</label>
          <input ref={emailRef} id="login-email" name="email" type="email" placeholder="james@example.com" required autoComplete="email" aria-invalid={!!error} />
        </div>
        <PasswordField id="login-password" />

        {error && (
          <p className="au-error" role="alert">
            {error}
          </p>
        )}

        <div className="au-row">
          <label className="au-check">
            <input type="checkbox" name="remember" /> Keep me logged in
          </label>
          <Link href="/contact" className="au-forgot" onClick={onDone}>
            Forget Password?
          </Link>
        </div>

        <button type="submit" className="au-submit">
          LOGIN
        </button>
      </form>

      <SocialButtons verb="Login" />
      <p className="au-foot">
        Do not have an account? <Link href="/register" onClick={onDone}>Sign up</Link>
      </p>
    </div>
  );
}
