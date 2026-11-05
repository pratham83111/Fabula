export default function NotFoundArt() {
  const S = { stroke: "#000", strokeWidth: 4, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  const T = "#3dffd0";
  const Y = "#ffe600";
  return (
    <svg className="pg-art" viewBox="0 0 800 760" role="img" aria-label="Illustration of a confused woman beside a 404 window" fill="none">
      {/* browser window */}
      <g transform="rotate(-6 150 110)">
        <rect x="30" y="40" width="230" height="150" rx="6" fill="#fff" {...S} />
        <path d="M30 78H260" {...S} />
        <circle cx="52" cy="60" r="6" fill={Y} />
        <circle cx="72" cy="60" r="6" fill={Y} />
        <text x="145" y="150" textAnchor="middle" fontFamily="Georgia, serif" fontSize="62" fill="#000" stroke="none">
          404
        </text>
        <path d="M95 168h95M120 180h45" stroke={T} strokeWidth="6" strokeLinecap="round" />
      </g>
      {/* magnifier */}
      <circle cx="610" cy="90" r="58" fill="#fff" stroke="#000" strokeWidth="14" />
      <path d="M588 70l44 40M632 70l-44 40" stroke={T} strokeWidth="9" strokeLinecap="round" />
      <path d="M565 140L505 215" stroke="#000" strokeWidth="18" strokeLinecap="round" />
      <circle cx="440" cy="40" r="14" stroke={Y} strokeWidth="9" />
      <circle cx="140" cy="300" r="16" stroke={Y} strokeWidth="10" />
      {/* warning triangle */}
      <path d="M720 240l-85 62 140 28z" fill={Y} {...S} strokeWidth={3} />
      <path d="M718 268l4 32" stroke="#000" strokeWidth="9" strokeLinecap="round" />
      <circle cx="724" cy="318" r="4" fill="#000" />
      {/* hair back */}
      <path d="M270 300C270 200 320 150 400 150S530 200 530 300c0 60 70 100 100 160 20 50-20 90-80 70-60-20-90-10-150-10s-90-10-150 10c-60 20-100-20-80-70 30-60 100-100 100-160z" fill="#000" />
      {/* torso */}
      <path d="M270 640c-10-90 20-150 90-170h160c60 20 90 80 80 170l-10 90H280z" fill="#fff" {...S} />
      <path d="M345 510c10 60 100 70 150 0" stroke={Y} strokeWidth="14" strokeLinecap="round" />
      {/* face */}
      <path d="M340 290c0-40 30-60 60-60s60 20 60 60c0 50-20 100-60 100s-60-50-60-100z" fill="#fff" {...S} strokeWidth={3} />
      <path d="M338 275c20-35 104-35 124 0-30-18-94-18-124 0z" fill="#000" />
      <rect x="338" y="298" width="50" height="34" rx="10" stroke={T} strokeWidth="6" />
      <rect x="412" y="298" width="50" height="34" rx="10" stroke={T} strokeWidth="6" />
      <path d="M388 312h24" stroke={T} strokeWidth="5" />
      <circle cx="363" cy="316" r="4" fill="#000" />
      <circle cx="437" cy="316" r="4" fill="#000" />
      <path d="M345 352h14M441 352h14" stroke={Y} strokeWidth="10" strokeLinecap="round" />
      <path d="M400 330l-8 28h14M382 376c10-8 28-8 38 4" stroke="#000" strokeWidth="3.5" strokeLinecap="round" />
      <ellipse cx="333" cy="350" rx="9" ry="22" stroke={Y} strokeWidth="6" />
      <ellipse cx="467" cy="350" rx="9" ry="22" stroke={Y} strokeWidth="6" />
      {/* shrugging arms */}
      <path d="M290 490c-60 20-110 60-130 100" {...S} />
      <path d="M520 490c60 20 100 70 120 110" {...S} />
      <path d="M160 590c-50-20-100-100-120-150-10-20 20-30 40-10l50 60" fill="#fff" {...S} />
      <path d="M640 600c50-30 100-100 120-150 8-20-20-30-40-10l-50 60" fill="#fff" {...S} />
      <path d="M30 400c20-10 30-30 40-40M60 380c10-20 20-30 30-40M90 400c10-15 20-25 40-30" {...S} />
      <path d="M770 400c-20-10-30-30-40-40M740 380c-10-20-20-30-30-40" {...S} />
      <path d="M90 590c20 20 60 20 80-10" stroke={T} strokeWidth="7" strokeLinecap="round" />
      <path d="M630 590c20 30 60 30 80 0" stroke={T} strokeWidth="7" strokeLinecap="round" />
      <path d="M300 300c-20 40-30 70-40 100M520 300c20 40 30 70 40 100" stroke="#fff" strokeWidth="5" strokeLinecap="round" strokeDasharray="30 18" />
    </svg>
  );
}
