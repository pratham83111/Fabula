import type { Metadata } from "next";
import Link from "next/link";
import "@/styles/pages.css";
import Accordion from "@/components/Accordion";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";
import { legal } from "@/lib/data";

export const metadata: Metadata = { title: "Terms & Conditions" };

export default function TermsPage() {
  const { terms } = legal;
  return (
    <>
      <PageHero title={terms.title} subtitle={terms.subtitle} />
      <section className="section">
        <div className="container" style={{ maxWidth: 820 }}>
          <div className="pg-acc"><Accordion items={terms.items} /></div>
          <div className="pg-more">
            <h2 className="h-lg">Don&apos;t get your answer?</h2>
            <Link href="/contact" className="btn btn-lime">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
