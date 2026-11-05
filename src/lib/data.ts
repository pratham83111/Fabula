import site from "@/data/site.json";
import home from "@/data/home.json";
import tenders from "@/data/tenders.json";
import plans from "@/data/plans.json";
import faqs from "@/data/faqs.json";
import legal from "@/data/legal.json";
import about from "@/data/about.json";
import bids from "@/data/bids.json";
import messages from "@/data/messages.json";
import profile from "@/data/profile.json";

export type Tender = (typeof tenders)[number];
export type Bid = (typeof bids)[number];

export { site, home, tenders, plans, faqs, legal, about, bids, messages, profile };

export function getTender(id: number): Tender | undefined {
  return tenders.find((t) => t.id === id);
}

export function getRelatedTenders(id: number, count = 4): Tender[] {
  return tenders.filter((t) => t.id !== id).slice(0, count);
}

export function formatMoney(value: string | number): string {
  const n = typeof value === "string" ? Number(value) : value;
  return `$${n.toLocaleString("en-US")}`;
}
