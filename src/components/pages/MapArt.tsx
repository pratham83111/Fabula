import "@/styles/pages.css";

export default function MapArt() {
  return (
    <div className="pg-map" role="img" aria-label="Map showing our office location">
      <svg className="pg-bg" viewBox="0 0 800 420" preserveAspectRatio="xMidYMid slice" aria-hidden>
        <rect width="800" height="420" fill="#ebe8e0" />
        <path d="M120 300 C200 270 300 330 380 300 S520 250 560 330 L520 380 C420 340 300 380 200 350z" fill="#a8cdea" />
        <path d="M0 90 C80 60 150 120 230 100 S330 40 420 70 L420 0 H0z" fill="#d6e9d2" />
        <path d="M560 40 C640 20 720 80 800 60 V0 H560z" fill="#d6e9d2" />
        <path d="M600 330 C680 300 740 360 800 340 V420 H600z" fill="#cfe5cb" />
        <path d="M60 330 C100 310 160 340 150 380 L60 400z" fill="#cfe5cb" />
        <g fill="none" stroke="#fff" strokeWidth="7" strokeLinecap="round">
          <path d="M0 150 L300 190 L560 120 L800 170" />
          <path d="M240 0 L300 190 L330 420" />
          <path d="M520 0 L560 120 L600 270 L620 420" />
          <path d="M0 320 L260 270 L600 270 L800 230" />
        </g>
        <g fill="none" stroke="#f7c04a" strokeWidth="5" strokeLinecap="round">
          <path d="M-10 60 L200 150 L420 260 L640 380" />
          <path d="M760 0 L700 170 L720 420" />
        </g>
        <g fill="none" stroke="#fff" strokeWidth="3">
          <path d="M100 0 L160 420M400 0 L430 420M0 220 L800 250" />
        </g>
        <g fontFamily="Arial, sans-serif" fontSize="13" fill="#555">
          <text x="640" y="40">Auburn</text>
          <text x="470" y="100" fill="#5f8a5a">Villawood</text>
          <text x="420" y="150">Hill</text>
          <text x="470" y="230">Yagoona</text>
          <text x="470" y="262">Bankstown</text>
          <text x="90" y="300">Chipping</text>
          <text x="95" y="316">Norton</text>
          <text x="14" y="240">ramatta</text>
          <text x="660" y="395" fill="#1a73e8">Bankstown Airport</text>
          <text x="750" y="150">Gree</text>
        </g>
      </svg>
      <div className="pg-map-card" />
      <a className="pg-maps-btn" href="https://maps.google.com/?q=Bass+Hill+Plaza+Medical+Centre" target="_blank" rel="noopener noreferrer">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5">
          <path d="M14 4h6v6M20 4l-9 9M18 14v5H5V6h5" />
        </svg>
        Open in Maps
      </a>
      <div className="pg-pinlbl">
        <span>
          Bass Hill Plaza
          <br />
          Medical Centre
        </span>
        <svg width="30" height="40" viewBox="0 0 30 40" aria-hidden>
          <path d="M15 0C7 0 1 6 1 14c0 10 14 26 14 26s14-16 14-26C29 6 23 0 15 0z" fill="#ea4335" />
          <circle cx="15" cy="14" r="5.5" fill="#8c1d18" />
        </svg>
      </div>
      <span className="pg-foot">Map data ©2026 Google</span>
    </div>
  );
}
