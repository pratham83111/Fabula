import type { Metadata } from "next";
import { profile } from "@/lib/data";

export const metadata: Metadata = { title: "Payment Settings" };

export default function PaymentsPage() {
  const { methods, transactions } = profile.payments;
  return (
    <>
      <h1 className="db-h1">Payment Settings</h1>

      <div className="db-card">
        <h2 className="db-h2">Payment Methods</h2>
        {methods.map((m) => (
          <div key={m.id} className="db-row">
            <span>
              <strong>{m.brand}</strong> ending in {m.last4}
              <span className="db-hint"> &middot; expires {m.expires}</span>
            </span>
            {m.default ? <span className="db-status Paid">Default</span> : <button type="button" className="db-link">Make default</button>}
          </div>
        ))}
        <div className="db-actions">
          <button type="button" className="db-btn db-btn-sm">+ Add payment method</button>
        </div>
      </div>

      <div className="db-card">
        <h2 className="db-h2">Transaction History</h2>
        <div className="db-table-wrap">
          <table className="db-table">
            <thead>
              <tr>
                <th scope="col">Date</th>
                <th scope="col">Description</th>
                <th scope="col">Amount</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((t) => (
                <tr key={t.id}>
                  <td>{t.date}</td>
                  <td>{t.description}</td>
                  <td>{t.amount}</td>
                  <td>
                    <span className={`db-status ${t.status}`}>{t.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
