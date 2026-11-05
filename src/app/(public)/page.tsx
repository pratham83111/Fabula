import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import HomeAccordion from "@/components/home/HomeAccordion";
import HomeTenderRow from "@/components/home/HomeTenderRow";
import HomeTestimonials from "@/components/home/HomeTestimonials";
import { home, tenders } from "@/lib/data";
import "@/styles/home.css";

const icons = ["✎", "‹›", "✆", "▣", "≡", "▥"];

export default function HomePage() {
  const latest = tenders.slice(0, 5);

  return (
    <div className="home">
      <section className="home-hero">
        <div className="home-hero-bg" aria-hidden />
        <div className="container home-hero-in">
          <h1 className="home-hero-h">{home.hero.title}</h1>
          <p className="home-hero-p">{home.hero.subtitle}</p>
        </div>
        <div className="container home-search-wrap">
          <form className="home-search" action="/tenders-list" method="get">
            <div className="home-f">
              <label htmlFor="h-cat">Contract Category</label>
              <select id="h-cat" name="category" defaultValue="">
                <option value="">Construction</option>
                {home.hero.categories.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </div>
            <div className="home-f">
              <label htmlFor="h-loc">Location</label>
              <select id="h-loc" name="location">
                {home.hero.locations.map((l) => (
                  <option key={l}>{l}</option>
                ))}
              </select>
            </div>
            <div className="home-f">
              <label htmlFor="h-q">Keywords or Role</label>
              <input id="h-q" name="q" placeholder="Construction, eng..." />
            </div>
            <button type="submit" className="home-search-btn">
              SEARCH
            </button>
          </form>
        </div>
      </section>

      <section className="home-sec home-roles">
        <div className="container">
          <div className="home-head">
            <h2 className="home-h2">{home.roles.title}</h2>
            <Link href="/tenders-list" className="home-link">
              Explore all contractor fields &gt;
            </Link>
          </div>
          <div className="home-role-grid">
            {home.roles.items.map((r, i) => (
              <div key={r.title} className={`home-role${i === 0 ? " active" : ""}`}>
                <span className="home-role-ico">{icons[i % icons.length]}</span>
                <strong>{r.title}</strong>
                <small>{r.count}</small>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container home-feature-wrap">
        <div className="home-feature">
          <div className="home-feature-imgs" aria-hidden>
            <div className="home-feature-img1" />
            <div className="home-feature-img2" />
          </div>
          <div className="home-feature-body">
            <h2>{home.feature.title}</h2>
            <p>{home.feature.text}</p>
            <Link href="/tenders-list" className="home-feature-btn">
              <span>{home.feature.cta}</span>
              <span>&rsaquo;</span>
            </Link>
          </div>
        </div>
        <div className="home-stats">
          {home.stats.map((s) => (
            <div key={s.label}>
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="home-sec">
        <div className="container">
          <div className="home-head">
            <h2 className="home-h2">New Contracts listing</h2>
            <Link href="/tenders-list" className="home-link">
              Explore all Contractor &gt;
            </Link>
          </div>
          <div className="home-trows">
            {latest.map((t, i) => (
              <HomeTenderRow key={t.id} tender={t} index={i} />
            ))}
          </div>
          <p className="home-note">
            <span>
              Do you want to post a job for your company? <Link href="/contact">We can help. Click here</Link>
            </span>
          </p>
        </div>
      </section>

      <section className="home-sec">
        <HomeTestimonials title={home.testimonials.title} items={home.testimonials.items} />
      </section>

      <section className="home-sec">
        <div className="container home-talents">
          <div className="home-collage" aria-hidden>
            <div className="home-c1" />
            <div className="home-c2" />
            <div className="home-c3" />
          </div>
          <div className="home-talents-body">
            <small>{home.talents.eyebrow}</small>
            <h2 className="home-h2">{home.talents.title}</h2>
            <HomeAccordion items={home.talents.items.map((i) => ({ q: i.title, a: i.text }))} />
            <Link href="/tenders-list" className="home-outline-btn">
              Find Talents
            </Link>
          </div>
        </div>
      </section>

      <section className="container home-faq-wrap">
        <div className="home-faq">
          <h2 className="home-h2">{home.faqTitle}</h2>
          <HomeAccordion variant="card" items={home.faqs} />
          <p className="home-note">
            <span>
              Don&apos;t find the answer? <Link href="/contact">We can help. Click here</Link>
            </span>
          </p>
        </div>
      </section>

      <CtaBand />
    </div>
  );
}
