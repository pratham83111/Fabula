const base = {
  width: 22,
  height: 22,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

/** One icon per role card, in the same order as `home.roles.items`. */
export const roleIcons = [
  // Experienced: award
  <svg key="award" {...base}>
    <circle cx="12" cy="9" r="5.5" />
    <path d="M8.7 13.6L7.5 21l4.5-2.6 4.5 2.6-1.2-7.4" />
  </svg>,
  // Reliable: shield with check
  <svg key="shield" {...base}>
    <path d="M12 3l7.5 3v5.5c0 4.5-3.1 8.2-7.5 9.5-4.4-1.3-7.5-5-7.5-9.5V6z" />
    <path d="M8.8 12l2.3 2.3 4.2-4.6" />
  </svg>,
  // Licensed: document with check
  <svg key="license" {...base}>
    <path d="M6 3h8l4 4v14H6z" />
    <path d="M14 3v4h4M9 14l2 2 4-4" />
  </svg>,
  // Affordable: wallet
  <svg key="wallet" {...base}>
    <path d="M4 7.5A2.5 2.5 0 0 1 6.5 5H18v3" />
    <path d="M4 7.5V17a2 2 0 0 0 2 2h13a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1H6.5A2.5 2.5 0 0 1 4 7.5z" />
    <circle cx="16" cy="13.5" r="1.1" />
  </svg>,
  // Service: wrench
  <svg key="wrench" {...base}>
    <path d="M14.5 6.5a4 4 0 0 0-5 5L4 17l3 3 5.5-5.5a4 4 0 0 0 5-5L15.5 12 12 8.5z" />
  </svg>,
  // Trade: building
  <svg key="building" {...base}>
    <path d="M5 21V4h9v17M14 9h5v12M3 21h18M8 8h3M8 12h3M8 16h3" />
  </svg>,
];
