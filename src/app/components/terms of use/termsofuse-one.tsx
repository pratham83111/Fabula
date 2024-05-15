import React from "react";
import Link from "next/link";
import AccordionItem from "../accordion/accordion-item";

// faq data
const faq_data: {
  id: string;
  title: string;
  desc: string;
  isShow?: boolean;
  parent: string;
}[] = [
    {
      id: "One",
      title: "User Agreement",
      desc: "By accessing or using fabula, you agree to comply with these Terms of Use. If you do not agree with any part of the Terms, you may not access the website or use any services.",
      isShow: true,
      parent: "accordionTwo",
    },
    {
      id: "Two",
      title: "Content Usage",
      desc: " Users are solely responsible for the content they post on fabula. This includes job listings, resumes, and any other materials. fabula reserves the right to remove any content that violates our guidelines or is deemed inappropriate.",
      parent: "accordionTwo",
    },
    {
      id: "Three",
      title: "Privacy Policy",
      desc: " fabula respects the privacy of its users. Our Privacy Policy outlines how we collect, use, and disclose personal information. By using fabula, you consent to the collection and use of your information as outlined in the Privacy Policy.",
      parent: "accordionTwo",
    },
    {
      id: "Four",
      title: "Intellectual Property",
      desc: "All content on fabula, including logos, trademarks, text, graphics, and images, is the property of fabula or its licensors and is protected by intellectual property laws. Users may not use, reproduce, or distribute any content from fabula without prior written permission.",
      parent: "accordionTwo",
    },
    {
      id: "Five",
      title: "Limitation of Liability",
      desc: "fabula is not liable for any damages or losses resulting from the use of the website or any services provided. This includes but is not limited to direct, indirect, incidental, consequential, or punitive damages. Users use fabula at their own risk.",
      parent: "accordionTwo",
    },
  ];

export function TermofuseItems() {
  return (
    <div className="accordion accordion-style-two" id="accordionTwo">
      {faq_data.map((f) => (
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
const TermsofUseOne = () => {
  return (
    <>
      <section className="faq-section position-relative mt-180 xl-mt-150 lg-mt-100 mb-150 lg-mb-100">
        <div className="container">
          <div className="title-one text-center">
            {/* <h2 className="text-dark wow fadeInUp" data-wow-delay="0.3s">Questions & Answers</h2> */}
          </div>
          <div className="bg-wrapper mt-60 lg-mt-40">
            <TermofuseItems/>
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

export default TermsofUseOne;
