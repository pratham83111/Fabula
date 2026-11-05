import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";
import RelatedCarousel from "@/components/tenders/RelatedCarousel";
import ShareButtons from "@/components/tenders/ShareButtons";
import { formatMoney, getRelatedTenders, getTender, tenders } from "@/lib/data";
import "@/styles/tenders.css";

export function generateStaticParams() {
  return tenders.map((t) => ({ id: String(t.id) }));
}

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const tender = getTender(Number(params.id));
  return { title: tender ? tender.title : "Tender not found" };
}

export default function TenderDetailsPage({ params }: { params: { id: string } }) {
  const tender = getTender(Number(params.id));
  if (!tender) notFound();

  const sections = [
    { n: 1, title: "Overview", text: tender.overview },
    { n: 2, title: "Description", text: tender.description },
    { n: 3, title: "Responsibilities", text: tender.responsibilities },
    { n: 5, title: "Benefits:", text: tender.benefits },
  ];
  const rows: [string, string][] = [
    ["Salary", formatMoney(tender.salary)],
    ["Expertise", tender.experience],
    ["Location", tender.location],
    ["Tender Type", tender.type],
    ["Date", tender.date],
    ["Experience", tender.experience],
  ];

  return (
    <>
      <PageHero title="Contractor Details" subtitle="Explore the details of contractor opportunities including contract type, duration, and requirements." />

      <section className="section">
        <div className="container tnd-dgrid">
          <div>
            <div className="tnd-dhead">
              <div className="tnd-date">{tender.date} by</div>
              <div className="tnd-by">{tender.title}</div>
              <h2 className="tnd-dtitle">{tender.title}</h2>
              <ShareButtons title={tender.title} />
            </div>
            {sections.map((s) => (
              <div key={s.title} className="tnd-box">
                <h3>
                  <span className="tnd-num">{s.n}</span>
                  {s.title}
                </h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>

          <aside className="tnd-aside">
            <div className="tnd-aside-top">
              <div className="tnd-logo" aria-hidden />
              <p>{tender.title}</p>
              <Link href="/tenders-list" className="btn btn-dark btn-sm">
                Visit website
              </Link>
            </div>
            <dl>
              {rows.map(([k, v]) => (
                <div key={k}>
                  <dt>{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
            <div className="tnd-tags">
              {tender.tags.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
            <Link href={`/tenders-details/${tender.id}/bid`} className="btn btn-lime btn-block">
              Apply Now
            </Link>
          </aside>
        </div>
      </section>

      <RelatedCarousel items={getRelatedTenders(tender.id, 6)} />
      <CtaBand />
    </>
  );
}
