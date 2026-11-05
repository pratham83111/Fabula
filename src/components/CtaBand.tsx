import Link from "next/link";
import { site } from "@/lib/data";

export default function CtaBand() {
  return (
    <section className="cta">
      <h2 className="h-lg">{site.tagline}</h2>
      <p>{site.taglineSub}</p>
      <div className="cta-actions">
        <Link href="/tenders-list" className="btn btn-outline">
          Looking for Contract?
        </Link>
        <Link href="/contractor/bids" className="btn btn-lime">
          Post a Contract
        </Link>
      </div>
    </section>
  );
}
