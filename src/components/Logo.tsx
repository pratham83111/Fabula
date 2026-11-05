import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="logo" aria-label="Fabula home">
      <svg width="26" height="20" viewBox="0 0 26 20" fill="none" stroke="#e9e5c8" strokeWidth="1.3" aria-hidden="true">
        <rect x="2" y="5" width="22" height="13" rx="2" />
        <path d="M9 5V3a1 1 0 011-1h6a1 1 0 011 1v2M2 11h22M11 11v2h4v-2" />
      </svg>
      <span>Fabula</span>
    </Link>
  );
}
