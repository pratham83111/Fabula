import Link from "next/link";
import type { Tender } from "@/lib/data";

const durations = ["Full Time", "1 year", "3 months", "2 years", "16 months"];

export default function HomeTenderRow({ tender, index }: { tender: Tender; index: number }) {
  return (
    <div className="home-trow">
      <span className="home-trow-logo" aria-hidden />
      <div className="home-trow-title">Tender for {index % 2 ? "the expansion of a ..." : "construction of ...."}</div>
      <div className="home-trow-job">
        <small>{durations[index % durations.length]}</small>
        <span>{tender.title}</span>
      </div>
      <div className="home-trow-loc">{tender.location}</div>
      <div className="home-trow-act">
        <span className="home-trow-bm" aria-hidden />
        <Link href={`/tenders-details/${tender.id}`} className="home-trow-apply">
          APPLY
        </Link>
      </div>
    </div>
  );
}
