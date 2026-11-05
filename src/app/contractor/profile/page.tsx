import type { Metadata } from "next";
import ProfileForm from "@/components/dashboard/ProfileForm";
import { profile } from "@/lib/data";

export const metadata: Metadata = { title: "Profile Settings" };

export default function ProfilePage() {
  return <ProfileForm c={profile.company} />;
}
