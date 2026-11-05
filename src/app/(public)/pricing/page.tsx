import type { Metadata } from "next";
import "@/styles/pages.css";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";
import PlanCards from "@/components/PlanCards";
import { plans } from "@/lib/data";

export const metadata: Metadata = { title: "Pricing" };

export default function PricingPage() {
  return (
    <>
      <PageHero title="Pricing" subtitle={plans.subtitle} />
      <section className="section sage">
        <div className="container">
          <h2 className="h-lg center">{plans.title}</h2>
          <PlanCards />
          <p className="pg-note">{plans.note}</p>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
