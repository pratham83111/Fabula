import type { Metadata } from "next";
import "@/styles/pages.css";
import CtaBand from "@/components/CtaBand";
import FaqTabs from "@/components/FaqTabs";
import PageHero from "@/components/PageHero";
import { faqs } from "@/lib/data";

export const metadata: Metadata = { title: "FAQs" };

export default function FaqPage() {
  return (
    <>
      <PageHero title="Question & Answers" subtitle="Find your answers" />
      <section className="section">
        <div className="container" style={{ maxWidth: 820 }}>
          <FaqTabs categories={faqs.categories} items={faqs.items} />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
