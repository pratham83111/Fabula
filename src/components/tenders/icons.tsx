export const Bookmark = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
    <path d="M6 3h12v18l-6-4-6 4z" />
  </svg>
);
export const Arrow = ({ dir = "right" }: { dir?: "left" | "right" }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden style={dir === "left" ? { transform: "scaleX(-1)" } : undefined}>
    <path d="M4 12h16M14 6l6 6-6 6" />
  </svg>
);
