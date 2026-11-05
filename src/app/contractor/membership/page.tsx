import type { Metadata } from "next";
import { plans } from "@/lib/data";

export const metadata: Metadata = { title: "Membership" };

export default function MembershipPage() {
  const cur = plans.current;
  return (
    <>
      <h1 className="db-h1">Membership</h1>
      <section className="db-cur" aria-label="Current plan">
        <div className="db-cur-top">
          <h2>Current Plan ({cur.name})</h2>
          <p>{cur.description}</p>
        </div>
        <div className="db-cur-bot">
          <span className="db-cur-price">{cur.price}</span>
          <div>
            <h3>{cur.cycle}</h3>
            <p>
              Your subscription renews <b>{cur.renews}</b>
            </p>
            <button type="button" className="db-link">Cancel Current Plan</button>
          </div>
        </div>
      </section>

      <div className="db-plans">
        {plans.plans.map((p) => (
          <div key={p.name} className={`db-plan ${p.popular ? "pop" : ""}`}>
            {p.popular && <span className="db-ribbon">POPULAR</span>}
            <div className="n">{p.name}</div>
            <div className="p">
              {p.currency && <sup>{p.currency} </sup>}
              {p.price}
              {p.cents && <sup>.{p.cents}</sup>}
            </div>
            <ul>
              {p.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <button type="button" className="db-btn">Choose Plan</button>
          </div>
        ))}
      </div>
    </>
  );
}
