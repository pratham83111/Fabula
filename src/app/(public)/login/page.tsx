import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import OpenLoginOnMount from "@/components/auth/OpenLoginOnMount";

export const metadata: Metadata = { title: "Login" };

export default function LoginPage() {
  return (
    <>
      <PageHero title="Login" subtitle="Welcome back! Sign in to manage your bids and tenders." />
      <div style={{ minHeight: 360 }} />
      <OpenLoginOnMount />
    </>
  );
}
