"use client";

import { useRef } from "react";
import DbForm from "./DbForm";
import DbField from "./DbField";

type Account = { firstName: string; lastName: string; email: string; phone: string };

export default function SettingsForms({ a }: { a: Account }) {
  const first = useRef<HTMLInputElement>(null);
  return (
    <>
      <h1 className="db-h1">Account Settings</h1>
      <div className="db-card">
        <DbForm successMessage="Account details saved.">
          <div style={{ marginBottom: 22 }}>
            <button type="button" className="db-btn db-btn-sm" onClick={() => first.current?.focus()}>Edit &amp; Update</button>
          </div>
          <DbField label="First Name" name="firstName" defaultValue={a.firstName} inputRef={first} />
          <DbField label="Last Name" name="lastName" defaultValue={a.lastName} />
          <DbField label="Email" name="email" type="email" defaultValue={a.email} />
          <DbField label="Phone Number" name="phone" defaultValue={a.phone} />
          <DbField label="Password" name="password" type="password" autoComplete="current-password" />
          <div className="db-actions" style={{ marginTop: 34 }}>
            <button type="submit" className="db-btn" style={{ minWidth: 180 }}>Save</button>
            <button type="reset" className="db-cancel">Cancel</button>
          </div>
        </DbForm>
      </div>

      <h2 className="db-h1" style={{ marginTop: 34 }}>Change Password</h2>
      <div className="db-card">
        <DbForm
          successMessage="Password updated."
          validate={(fd) => {
            const n = String(fd.get("new") ?? "");
            if (n.length < 8) return "New password must be at least 8 characters.";
            if (n !== fd.get("confirm")) return "New password and confirm password do not match.";
            if (n === fd.get("old")) return "New password must differ from the old password.";
            return null;
          }}
        >
          <DbField label="Old Password*" name="old" type="password" required autoComplete="current-password" />
          <DbField label="New Password*" name="new" type="password" required autoComplete="new-password" />
          <DbField label="Confirm Password*" name="confirm" type="password" required autoComplete="new-password" />
          <button type="submit" className="db-btn db-btn-sm" style={{ minHeight: 52 }}>Save &amp; Updated</button>
        </DbForm>
      </div>
    </>
  );
}
