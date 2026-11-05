import type { Metadata } from "next";
import SettingsForms from "@/components/dashboard/SettingsForms";
import { profile } from "@/lib/data";

export const metadata: Metadata = { title: "Account Settings" };

export default function SettingPage() {
  return <SettingsForms a={profile.account} />;
}
