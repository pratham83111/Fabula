import type { Metadata } from "next";
import "@/styles/pages.css";
import DemoForm from "@/components/DemoForm";
import Field from "@/components/Field";
import { ChatIcon, MailIcon, PinIcon } from "@/components/pages/Icons";
import MapArt from "@/components/pages/MapArt";
import { site } from "@/lib/data";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  const c = site.contact;
  return (
    <>
      <div className="pg-mapwrap" style={{ height: 76 }} />
      <MapArt />

      <section className="section">
        <div className="container">
          <h2 className="h-lg center">Get in touch</h2>
          <div className="pg-info">
            <div>
              <div className="pg-ico">
                <PinIcon />
              </div>
              <h3>Our Address</h3>
              <p>{c.address}</p>
              <p>{c.city}</p>
            </div>
            <div>
              <div className="pg-ico">
                <MailIcon />
              </div>
              <h3>Contact Info</h3>
              <p>Open a chat or give us call at</p>
              <a className="pg-phone" href={`tel:${c.phone.replace(/\D/g, "")}`}>
                {c.phone}
              </a>
            </div>
            <div>
              <div className="pg-ico">
                <ChatIcon />
              </div>
              <h3>Live Support</h3>
              <p>live chat service</p>
              <a className="pg-live" href={c.liveChatUrl} target="_blank" rel="noopener noreferrer">
                {c.liveChatLabel}
              </a>
            </div>
          </div>

          <DemoForm className="pg-form" successMessage="Thanks! Your message has been sent.">
            <Field label="Name*" name="name" placeholder="Your Name*" required />
            <Field label="Email*" name="email" type="email" placeholder="Email Address*" required />
            <Field label="Subject (optional)" name="subject" placeholder="Write about the subject here.." />
            <Field label="Your message*" name="message" textarea placeholder="Your message*" required />
            <button type="submit" className="btn btn-green btn-block">
              SEND MESSAGE
            </button>
          </DemoForm>
        </div>
      </section>
    </>
  );
}
