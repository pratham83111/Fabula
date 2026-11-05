"use client";

import { useMemo, useState } from "react";
import TenderRow from "./TenderRow";
import { Arrow } from "./tenders/icons";
import type { Tender } from "@/lib/data";
import "@/styles/tenders.css";

const PAGE_SIZE = 8;

export default function TendersExplorer({
  tenders,
  initialQuery = "",
  initialCategory = "",
}: {
  tenders: Tender[];
  initialQuery?: string;
  initialCategory?: string;
}) {
  const maxPrice = useMemo(() => Math.max(...tenders.map((t) => Number(t.salary))), [tenders]);
  const [query, setQuery] = useState(initialQuery);
  const [category, setCategory] = useState(initialCategory);
  const [country, setCountry] = useState("");
  const [types, setTypes] = useState<string[]>([]);
  const [budget, setBudget] = useState(maxPrice);
  const [sort, setSort] = useState("default");
  const [view, setView] = useState<"grid" | "list">("list");
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(1);

  const categories = useMemo(() => Array.from(new Set(tenders.map((t) => t.industry))), [tenders]);
  const countries = useMemo(() => Array.from(new Set(tenders.map((t) => t.location.split(",")[0].trim()))).sort(), [tenders]);
  const tenderTypes = useMemo(() => Array.from(new Set(tenders.map((t) => t.type))), [tenders]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    let list = tenders.filter(
      (t) =>
        (!q || t.title.toLowerCase().includes(q) || t.location.toLowerCase().includes(q)) &&
        (!category || t.industry === category) &&
        (!country || t.location.startsWith(country)) &&
        (types.length === 0 || types.includes(t.type)) &&
        Number(t.salary) <= budget,
    );
    if (sort === "low") list = [...list].sort((a, b) => Number(a.salary) - Number(b.salary));
    if (sort === "high") list = [...list].sort((a, b) => Number(b.salary) - Number(a.salary));
    return list;
  }, [tenders, query, category, country, types, budget, sort]);

  const pages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const current = Math.min(page, pages);
  const start = (current - 1) * PAGE_SIZE;
  const visible = filtered.slice(start, start + PAGE_SIZE);

  const reset = () => {
    setQuery("");
    setCategory("");
    setCountry("");
    setTypes([]);
    setBudget(maxPrice);
    setPage(1);
  };

  return (
    <>
      <section className="tnd-hero">
        <div className="container">
          <h1 className="h-lg">Tender&apos;s Listing</h1>
          <p>We delivered blazing fast &amp; striking work solution</p>
          <form className="tnd-search" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="q">What are you looking for?</label>
              <input
                id="q"
                value={query}
                placeholder="Title or location"
                onChange={(e) => {
                  setQuery(e.target.value);
                  setPage(1);
                }}
              />
            </div>
            <div>
              <label htmlFor="cat">Category</label>
              <select
                id="cat"
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                  setPage(1);
                }}
              >
                <option value="">All categories</option>
                {categories.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </div>
            <button type="submit">SEARCH</button>
          </form>
        </div>
      </section>

      <section className="tnd-wrap">
        <div className="container">
          <button type="button" className="tnd-filter-btn" onClick={() => setOpen(!open)} aria-expanded={open}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <path d="M3 5h18l-7 8v6l-4 2v-8z" />
            </svg>
            Filter
          </button>

          <div className="tnd-layout">
            <aside className={`tnd-side${open ? " open" : ""}`} aria-label="Filters">
              <div className="tnd-fg">
                <h3>Category</h3>
                <select
                  value={category}
                  onChange={(e) => {
                    setCategory(e.target.value);
                    setPage(1);
                  }}
                >
                  <option value="">All categories</option>
                  {categories.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </div>
              <div className="tnd-fg">
                <h3>Location</h3>
                <select
                  value={country}
                  onChange={(e) => {
                    setCountry(e.target.value);
                    setPage(1);
                  }}
                >
                  <option value="">All countries</option>
                  {countries.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </div>
              <div className="tnd-fg">
                <h3>Budget up to ${budget.toLocaleString("en-US")}</h3>
                <input
                  type="range"
                  min={100000}
                  max={maxPrice}
                  step={100000}
                  value={budget}
                  aria-label="Maximum budget"
                  onChange={(e) => {
                    setBudget(Number(e.target.value));
                    setPage(1);
                  }}
                />
              </div>
              <div className="tnd-fg">
                <h3>Tender Type</h3>
                {tenderTypes.map((tt) => (
                  <label key={tt}>
                    <input
                      type="checkbox"
                      checked={types.includes(tt)}
                      onChange={() => {
                        setTypes(types.includes(tt) ? types.filter((x) => x !== tt) : [...types, tt]);
                        setPage(1);
                      }}
                    />
                    {tt}
                  </label>
                ))}
              </div>
              <button type="button" className="tnd-reset" onClick={reset}>
                Reset filters
              </button>
            </aside>

            <div>
              <div className="tnd-toolbar">
                <span>
                  All <strong>{filtered.length}</strong> Tender Found
                </span>
                <label className="tnd-sort">
                  Short:
                  <select value={sort} onChange={(e) => setSort(e.target.value)} aria-label="Sort">
                    <option value="default">Price Short</option>
                    <option value="low">Price low to high</option>
                    <option value="high">Price high to low</option>
                  </select>
                </label>
                <button type="button" className="tnd-view" aria-label="Toggle grid or list view" onClick={() => setView(view === "grid" ? "list" : "grid")}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                    {view === "grid" ? <path d="M4 6h16M4 12h16M4 18h16" /> : <path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" />}
                  </svg>
                </button>
              </div>

              {visible.length === 0 && <p className="tnd-empty">No tenders match your search.</p>}
              <div className={`tnd-list ${view}`}>
                {visible.map((t) => (
                  <TenderRow key={t.id} tender={t} />
                ))}
              </div>

              {filtered.length > 0 && (
                <>
                  <p className="tnd-showing">
                    Showing <b>{start + 1}</b> to <b>{start + visible.length}</b> of <b>{filtered.length}</b>
                  </p>
                  <div className="tnd-pager">
                    {Array.from({ length: pages }, (_, i) => i + 1).map((n) => (
                      <button key={n} type="button" className={n === current ? "on" : ""} onClick={() => setPage(n)}>
                        {n}
                      </button>
                    ))}
                    <button type="button" className="last" disabled={current === pages} onClick={() => setPage(pages)}>
                      Last <Arrow />
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
