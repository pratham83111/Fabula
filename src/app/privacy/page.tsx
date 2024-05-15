import React from "react";
import { Metadata } from "next";
import Header from "@/layouts/headers/header";
import Wrapper from "@/layouts/wrapper";
import JobPortalIntro from "../components/contract-portal-intro/job-portal-intro";
import CompanyBreadcrumb from "../components/common/common-breadcrumb";
import FooterOne from "@/layouts/footers/footer-one";
import Privacy from "../components/privacy/privacy-one";

export const metadata: Metadata = {
  title: "Privacy",
  description:"Read our privacy policy to understand how we handle your personal information.",
  keywords:"privacy policy, data protection, personal information",
};

const TermsOfUsePage = () => {
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        {/* header start */}
        <Header />
        {/* header end */}

        {/*breadcrumb start */}
        <CompanyBreadcrumb
          title="Privacy Policy"
          subtitle="Find your answers"
        />
        {/*breadcrumb end */}

        {/* faq area start */}
        <Privacy/>
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

export default TermsOfUsePage;
