import type { Metadata } from "next";
import "@/styles/pages.css";
import Accordion from "@/components/Accordion";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";
import AboutTestimonials from "@/components/pages/AboutTestimonials";
import { about } from "@/lib/data";

export const metadata: Metadata = { title: "About us" };

export default function AboutPage() {
  return (
    <>
      <PageHero title={about.title} crumbs="Home › About" />

      <section className="section">
        <div className="container pg-about pg-acc">
          <div>
            <h2 className="h-lg" style={{ marginBottom: 20 }}>
              {about.heading}
            </h2>
            <div style={{ background: "transparent" }}>
              <Accordion items={about.accordion} />
            </div>
            <div className="pg-video" role="img" aria-label="Video thumbnail">
              <svg viewBox="0 0 400 260" preserveAspectRatio="xMidYMid slice" aria-hidden>
                <rect y="150" width="400" height="110" fill="#7c8059" />
                <rect x="20" y="60" width="110" height="120" fill="#4a7a62" />
                <rect x="40" y="20" width="14" height="80" fill="#e5b41d" transform="rotate(25 40 20)" />
                <circle cx="250" cy="110" r="26" fill="#d9a07a" />
                <path d="M222 100a28 22 0 0 1 56 0z" fill="#f2c200" />
                <rect x="215" y="136" width="70" height="120" rx="10" fill="#e8742a" />
                <circle cx="335" cy="120" r="24" fill="#c98f6c" />
                <path d="M310 110a26 20 0 0 1 52 0z" fill="#f2c200" />
                <rect x="305" y="144" width="65" height="116" rx="10" fill="#d8dc4a" />
              </svg>
              <span className="pg-play">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#000" aria-hidden>
                  <path d="M7 4l13 8-13 8z" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="pg-collage" style={{ maxWidth: 700, margin: "0 auto" }}>
            <div>
              <div className="pg-ph" style={{ height: 130 }}>
                321X197
              </div>
              <div className="pg-ph" style={{ height: 80, marginTop: 14, width: "60%" }}>
                195X175
              </div>
            </div>
            <div className="pg-ph" style={{ height: 230 }}>
              296X323
            </div>
          </div>
        </div>
      </section>

      <section className="pg-dark">
        <div className="container">
          <AboutTestimonials items={about.testimonials} />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
