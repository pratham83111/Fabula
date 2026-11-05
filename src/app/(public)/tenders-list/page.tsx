import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import TendersExplorer from "@/components/TendersExplorer";
import { tenders } from "@/lib/data";

export const metadata: Metadata = { title: "Explore Tenders" };

export default function TendersListPage({ searchParams }: { searchParams: { q?: string; category?: string } }) {
  return (
    <>
      <TendersExplorer tenders={tenders} initialQuery={searchParams.q ?? ""} initialCategory={searchParams.category ?? ""} />
      <CtaBand />
    </>
  );
}
