import React from "react";
import Link from "next/link";
import AccordionItem from "../accordion/accordion-item";

// faq data
const cookies_data: {
  id: string;
  title: string;
  desc: string;
  isShow?: boolean;
  parent: string;
}[] = [
    {
      id: "One",
      title: "What Are Cookies",
      desc: "Cookies are small pieces of data stored on your device (computer, tablet, or mobile) when you visit Besoin. They are widely used to make websites work more efficiently and to provide information to the website owners.",
      isShow: true,
      parent: "accordionTwo",
    },
    {
      id: "Two",
      title: "Types of Cookies",
      desc: "Besoin uses both session cookies and persistent cookies. Session cookies are temporary and are deleted when you close your browser, while persistent cookies remain on your device for a set period of time.",
      parent: "accordionTwo",
    },
    {
      id: "Three",
      title: "Why We Use Cookies",
      desc: "Besoin uses cookies for various purposes, including but not limited to<br/>" +
            "Authentication: To identify users and provide personalized content.<br/>" +
            "Preferences: To remember your preferences and settings.<br/>" +
            "Analytics: To analyze how users interact with the website and improve its performance.<br/>" +
            "Advertising: To display targeted ads based on your browsing behavior.",
      parent: "accordionTwo"
    },
    {
      id: "Four",
      title: "Third-Party Cookies",
      desc: "Besoin may also use cookies from third-party service providers, such as analytics and advertising partners. These cookies are subject to the respective privacy policies of the third parties.",
      parent: "accordionTwo",
    },
    {
      id: "Five",
      title: "Cookie Control",
      desc: "You can control and/or delete cookies as you wish. Most web browsers allow you to manage your cookie preferences. However, please note that disabling cookies may affect the functionality of Besoin and may prevent you from accessing certain features.",
      parent: "accordionTwo",
    },
    {
      id: "Six",
      title: "Consent",
      desc: "By using Besoin, you consent to the use of cookies in accordance with this Cookie Policy. If you do not agree to the use of cookies, you should adjust your browser settings accordingly or refrain from using Besoin.",
      parent: "accordionTwo",
    },
    {
      id: "Seven",
      title: "Updates to the Cookie Policy",
      desc: "Besoin may update this Cookie Policy from time to time. Any changes will be posted on this page, and your continued use of Besoin after the changes are made will signify your acceptance of the updated policy.",
      parent: "accordionTwo",
    },
  ];

export function CookiesItems() {
  return (
    <div className="accordion accordion-style-two" id="accordionTwo">
      {cookies_data.map((f) => (
        <AccordionItem
          key={f.id}
          id={f.id}
          isShow={f.isShow}
          title={f.title}
          desc={f.desc}
          parent={f.parent}
        />
      ))}
    </div>
  )
}
const CookiesOne = () => {
  return (
    <>
      <section className="faq-section position-relative mt-180 xl-mt-150 lg-mt-100 mb-150 lg-mb-100">
        <div className="container">
          <div className="title-one text-center">
            {/* <h2 className="text-dark wow fadeInUp" data-wow-delay="0.3s">Questions & Answers</h2> */}
          </div>
          <div className="bg-wrapper mt-60 lg-mt-40">
            <CookiesItems/>
          </div>
          <div className="text-center mt-50 sm-mt-40 wow fadeInUp">
          <div className="text-center border-bottom pb-150 lg-pb-50 mt-60 lg-mt-40 wow fadeInUp">
          <div className="title-three mb-30">
            <h2 className="fw-normal">Don’t get your answer?</h2>
          </div>
          <Link href='/contact' className="btn-one">Contact Us</Link>
        </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CookiesOne;
