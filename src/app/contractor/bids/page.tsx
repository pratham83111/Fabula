import type { Metadata } from "next";
import Link from "next/link";
import { bids } from "@/lib/data";

export const metadata: Metadata = { title: "My Bids" };

export default function BidsPage() {
  return (
    <>
      <h1 className="db-h1">My Bids</h1>
      <div className="db-card">
        <div className="db-table-wrap">
          <table className="db-table">
            <thead>
              <tr>
                <th scope="col">Tender</th>
                <th scope="col">Amount</th>
                <th scope="col">Status</th>
                <th scope="col">Submitted</th>
              </tr>
            </thead>
            <tbody>
              {bids.map((b) => (
                <tr key={b.id}>
                  <td>
                    <Link href={`/tenders-details/${b.tenderId}`} className="db-link">
                      {b.tender}
                    </Link>
                  </td>
                  <td>{b.amount}</td>
                  <td>
                    <span className={`db-status ${b.status}`}>{b.status}</span>
                  </td>
                  <td>{b.submitted}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="db-hint" style={{ marginTop: 16 }}>
          Want to bid on more tenders?{" "}
          <Link href="/tenders-list" className="db-link">
            Explore tenders
          </Link>
        </p>
      </div>
    </>
  );
}
