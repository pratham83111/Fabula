import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DemoForm from "@/components/DemoForm";
import Field from "@/components/Field";
import PageHero from "@/components/PageHero";
import "@/styles/tenders.css";
import { getTender, tenders } from "@/lib/data";

export function generateStaticParams() {
  return tenders.map((t) => ({ id: String(t.id) }));
}

export const metadata: Metadata = { title: "Place Bid" };

export default function PlaceBidPage({ params }: { params: { id: string } }) {
  const tender = getTender(Number(params.id));
  if (!tender) notFound();

  return (
    <>
      <PageHero title="Place Bid" subtitle={tender.title} />
      <section className="section">
        <div className="container">
          <div className="tnd-bidcard">
            <div className="tnd-bidsum">
              <div className="tnd-logo" aria-hidden />
              <div>
                <div className="tnd-title">{tender.title}</div>
                <div className="tnd-meta">{tender.location} &middot; {tender.type}</div>
              </div>
            </div>
          <DemoForm successMessage="Your bid has been submitted.">
            <Field label="Bid amount ($)*" name="amount" type="number" placeholder="e.g. 480000" required />
            <Field label="Proposal*" name="proposal" textarea placeholder="Describe your approach, timeline and experience" required />
            <Field label="Attachments" name="attachments" type="file" />
            <div>
              <button type="submit" className="btn btn-lime">
                Submit Bid
              </button>
            </div>
          </DemoForm>
          </div>
        </div>
      </section>
    </>
  );
}
