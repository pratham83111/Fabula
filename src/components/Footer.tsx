import Link from "next/link";
import Logo from "./Logo";
import { site } from "@/lib/data";
import { SocialIcon } from "./Icons";
import NewsletterForm from "./NewsletterForm";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Logo />
          </div>
          {Object.entries(site.footer).map(([title, links]) => (
            <div key={title}>
              <h4>{title}</h4>
              <ul>
                {links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h4>Newsletter</h4>
            <p className="hint" style={{ fontSize: "0.9rem", marginBottom: 8 }}>
              Join &amp; get important new regularly
            </p>
            <NewsletterForm />
            <p className="hint">We only send interesting and relevant emails.</p>
          </div>
        </div>
        <div className="social">
          {site.social.map((s) => (
            <a key={s.label} href={s.href} aria-label={s.label} target="_blank" rel="noopener noreferrer">
              <SocialIcon name={s.icon} />
            </a>
          ))}
        </div>
        <p className="footer-bottom">
          <strong>Privacy &amp; Terms.</strong>
          <Link href="/contact">
            <strong>Contact Us</strong>
          </Link>
        </p>
        <p className="footer-bottom hint" style={{ marginTop: 6 }}>
          {site.copyright}
        </p>
      </div>
    </footer>
  );
}
