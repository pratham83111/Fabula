"use client";

import { useState } from "react";
import DbForm from "./DbForm";
import DbField from "./DbField";
import { PlusIcon } from "./Icons";

type Company = {
  name: string; email: string; website: string; size: string; phone: string; category: string; about: string;
  socials: string[]; country: string; city: string; zip: string; state: string;
};

export default function ProfileForm({ c }: { c: Company }) {
  const [links, setLinks] = useState<number[]>(c.socials.map((_, i) => i));
  const [next, setNext] = useState(c.socials.length);
  return (
    <DbForm successMessage="Profile saved.">
      <div className="db-card">
        <div className="db-photo">
          <div className="db-pic" role="img" aria-label="Profile photo" />
          <button type="button" className="db-btn db-btn-lime db-btn-sm">Upload new photo</button>
          <button type="button" style={{ color: "#111" }}>Delete</button>
        </div>
        <DbField label="Employer Name*" name="name" defaultValue={c.name} required />
        <DbField label="Email*" name="email" type="email" defaultValue={c.email} required />
        <DbField label="Website*" name="website" defaultValue={c.website} />
        <DbField label="Founded Date*" name="founded" type="date" />
        <DbField label="Company Size*" name="size" defaultValue={c.size} />
        <DbField label="Phone Number*" name="phone" defaultValue={c.phone} />
        <DbField label="Category*" name="category" defaultValue={c.category} />
        <DbField label="About Company*" name="about" textarea placeholder="Write something interesting about you...." defaultValue={c.about} />
        <p className="db-hint" style={{ marginTop: -6 }}>Brief description for your company. URLs are hyperlinked.</p>
      </div>

      <div className="db-card">
        <h2 className="db-h2">Social Media</h2>
        {links.map((id, i) => (
          <DbField key={id} label={`Network ${i + 1}`} name={`social${i + 1}`} defaultValue={c.socials[id] ?? ""} placeholder="https://" />
        ))}
        <button
          type="button"
          className="db-btn db-btn-sage db-btn-sm"
          onClick={() => {
            setLinks((l) => [...l, next]);
            setNext((n) => n + 1);
          }}
        >
          <PlusIcon size={16} /> Add more link
        </button>
      </div>

      <div className="db-grid2">
        <DbField label="Country*" name="country" defaultValue={c.country} options={["Afghanistan", "Australia", "Canada", "India", "United Kingdom", "United States"]} />
        <DbField label="City*" name="city" defaultValue={c.city} options={["Sydney", "Toronto", "London", "Mumbai", "New York"]} />
        <DbField label="Zip Code*" name="zip" defaultValue={c.zip} />
        <DbField label="State*" name="state" defaultValue={c.state} options={["Sydney", "California", "Ontario", "Texas"]} />
      </div>

      <div className="db-actions">
        <button type="submit" className="db-btn" style={{ minWidth: 150, borderRadius: 999 }}>Save</button>
        <button type="reset" className="db-cancel">Cancel</button>
      </div>
    </DbForm>
  );
}
