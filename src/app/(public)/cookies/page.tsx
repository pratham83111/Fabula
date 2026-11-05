import type { Metadata } from "next";
import "@/styles/pages.css";
import Accordion from "@/components/Accordion";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";
import { legal } from "@/lib/data";

export const metadata: Metadata = { title: "Cookie Policy" };

export default function CookiesPage() {
  const { cookies } = legal;
  return (
    <>
      <PageHero title={cookies.title} subtitle={cookies.subtitle} />
      <section className="section">
        <div className="container" style={{ maxWidth: 820 }}>
          <div className="pg-acc"><Accordion items={cookies.items} /></div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
