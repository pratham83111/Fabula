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
      title: "What services do you offer as a contractor?",
      desc: "We provide a wide range of contracting services, including construction, renovation, and project management, tailored to meet client needs.",
      isShow: true,
      parent: "accordionTwo",
    },
    {
      id: "Two",
      title: "How do you ensure project deadlines are met?",
      desc: "We follow a structured project timeline and utilize advanced tools to monitor progress, ensuring that deadlines are met without compromising quality.",
      parent: "accordionTwo",
    },
    {
      id: "Three",
      title: "What qualifications do your contractors have?",
      desc: "Our team consists of licensed and experienced professionals who are skilled in various aspects of contracting, ensuring top-notch service delivery.",
      parent: "accordionTwo",
    },
    {
      id: "Four",
      title: "How do you handle project cost estimation?",
      desc: "We provide detailed cost breakdowns during the planning phase, ensuring transparency and accurate budgeting for every project.",
      parent: "accordionTwo",
    },
    {
      id: "Five",
      title: "What is your process for handling client feedback?",
      desc: "We prioritize client satisfaction by maintaining open communication channels and promptly addressing feedback to improve our services.",
      parent: "accordionTwo",
    },
  ];

export function FaqItems() {
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
const FaqOne = () => {
  return (
    <>
      <section className="faq-section position-relative mt-180 xl-mt-150 lg-mt-100 mb-150 lg-mb-100">
        <div className="container">
          <div className="title-one text-center">
            <h2 className="text-dark wow fadeInUp" data-wow-delay="0.3s">Contractor FAQs</h2>
          </div>
          <div className="bg-wrapper mt-60 lg-mt-40">
            <FaqItems/>
          </div>
          <div className="text-center mt-50 sm-mt-40 wow fadeInUp">
            <div className="btn-eight style-two fw-500">
              Don’t find the answer? We can help.{" "}
              <Link href="/faq">Click here</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FaqOne;
