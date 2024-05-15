import React from "react";
import { Metadata } from "next";
import Header from "@/layouts/headers/header";
import Wrapper from "@/layouts/wrapper";
import JobPortalIntro from "../components/contract-portal-intro/job-portal-intro";
import CompanyBreadcrumb from "../components/common/common-breadcrumb";
import FooterOne from "@/layouts/footers/footer-one";
import FaqArea from "../components/faqs/faq-area";
import HeaderFour from "@/layouts/headers/header-4";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Find answers to frequently asked questions about our platform and services.",
  keywords:"FAQ, frequently asked questions, help, support",
};

const FaqPage = () => {
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        {/* header start */}
        <HeaderFour />
        {/* header end */}

        {/*breadcrumb start */}
        <CompanyBreadcrumb
          title="Question & Answers"
          subtitle="Find your answers"
        />
        {/*breadcrumb end */}

        {/* faq area start */}
        <FaqArea />
        {/* faq area end */}

        {/* job portal intro start */}
        <JobPortalIntro top_border={true} />
        {/* job portal intro end */}

        {/* footer start */}
        <FooterOne />
        {/* footer end */}
      </div>
    </Wrapper>
  );
};

export default FaqPage;
