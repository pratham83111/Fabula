import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import RegisterForm from "@/components/auth/RegisterForm";

export const metadata: Metadata = { title: "Register" };

export default function RegisterPage() {
  return (
    <>
      <PageHero title="Register" subtitle="Create an account & Start posting or hiring talents" />
      <section className="section sage">
        <div className="container">
          <RegisterForm />
        </div>
      </section>
    </>
  );
}
