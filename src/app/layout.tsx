import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import CookieBanner from "@/components/CookieBanner";
import ScrollTopButton from "@/components/ScrollTopButton";
import "./globals.css";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-cormorant",
});
const sans = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: { default: "Fabula | Tender Project", template: "%s | Fabula" },
  description: "Find, bid on and manage contractor tenders on Fabula.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>
        {children}
        <ScrollTopButton />
        <CookieBanner />
      </body>
    </html>
  );
}
