import Link from "next/link";
import "@/styles/pages.css";
import NotFoundArt from "@/components/pages/NotFoundArt";

export default function NotFound() {
  return (
    <div className="pg-nf">
      <div>
        <div className="pg-n">404</div>
        <h1>Page Not Found</h1>
        <p>Can not find what you need? Take a moment and do a search below or start from our Homepage.</p>
        <Link href="/" className="pg-go">
          <span>GO BACK</span>
          <svg width="36" height="16" viewBox="0 0 36 16" fill="none" stroke="#000" strokeWidth="2" aria-hidden>
            <path d="M0 8h34M27 1l7 7-7 7" />
          </svg>
        </Link>
      </div>
      <NotFoundArt />
    </div>
  );
}
