export function SocialIcon({ name }: { name: string }) {
  const p = { width: 18, height: 18, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true };
  switch (name) {
    case "whatsapp":
      return (<svg {...p}><path d="M3 21l1.6-4.7A8.5 8.5 0 1 1 8 19.5L3 21z" /><path d="M9 8.5c0 3.5 3 6.5 6.5 6.5l1-1.5-2-1-1 .8c-1-.4-2-1.4-2.4-2.4l.8-1-1-2L9 8.5z" /></svg>);
    case "dribbble":
      return (<svg {...p}><circle cx="12" cy="12" r="9" /><path d="M8.5 3.5c3 3 5 6.500 6 17M3 11c4 .5 9-.5 14-4M5 18c3-4 8-5 14-3" /></svg>);
    case "google":
      return (<svg {...p} strokeWidth={2.6}><path d="M20 12h-8M19.5 10.5A8 8 0 1 0 20 12c0 4-3.500 8-8 8" /></svg>);
    default:
      return (<svg {...p}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.500" cy="6.500" r=".6" fill="currentColor" /></svg>);
  }
}
