import "@/styles/pages.css";
import { plans } from "@/lib/data";

export default function PlanCards() {
  return (
    <div className="pg-plans">
      {plans.plans.map((p) => (
        <div key={p.name} className={`pg-plan ${p.popular ? "pg-pop" : ""}`}>
          {p.popular && <span className="pg-ribbon">POPULAR</span>}
          <div className="pg-plan-name">{p.name}</div>
          <div className="pg-price">
            {p.currency && <sup>{p.currency}</sup>}
            {p.price}
            {p.cents && <sup className="pg-c">.{p.cents}</sup>}
          </div>
          <ul>
            {p.features.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
          <button className={`btn btn-block ${p.popular ? "btn-lime" : "btn-green"}`}>Choose Plan</button>
        </div>
      ))}
    </div>
  );
}
