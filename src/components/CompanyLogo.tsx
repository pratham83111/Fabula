const PALETTE = ["#2f7a58", "#7a4e3d", "#2d5f8a", "#8a5a2d", "#5b4a8a", "#a14a5b", "#3f6f6f", "#8a7a2d", "#37506b", "#6b3f6b"];

function hash(text: string) {
  let h = 0;
  for (let i = 0; i < text.length; i++) h = (h * 31 + text.charCodeAt(i)) >>> 0;
  return h;
}

function initials(name: string) {
  const words = name.replace(/[^A-Za-z0-9 ]/g, " ").split(/\s+/).filter(Boolean);
  const letters = words.length > 1 ? words[0][0] + words[1][0] : (words[0] ?? "?").slice(0, 2);
  return letters.toUpperCase();
}

/** Placeholder company logo: coloured badge with the company's initials. */
export default function CompanyLogo({
  name,
  size = 48,
  radius = "50%",
  className,
}: {
  name: string;
  size?: number;
  radius?: string | number;
  className?: string;
}) {
  return (
    <span
      role="img"
      aria-label={`${name} logo`}
      className={className}
      style={{
        width: size,
        height: size,
        borderRadius: radius,
        background: PALETTE[hash(name) % PALETTE.length],
        color: "#fff",
        display: "grid",
        placeItems: "center",
        flex: "none",
        fontFamily: "var(--font-serif)",
        fontWeight: 600,
        fontSize: Math.round(size * 0.38),
        letterSpacing: ".02em",
        lineHeight: 1,
        userSelect: "none",
      }}
    >
      {initials(name)}
    </span>
  );
}
