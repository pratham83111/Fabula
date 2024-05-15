import React from "react";
import { Metadata } from "next";
import Header from "@/layouts/headers/header";
import Wrapper from "@/layouts/wrapper";
import JobPortalIntro from "../components/contract-portal-intro/job-portal-intro";
import CompanyBreadcrumb from "../components/common/common-breadcrumb";
import FooterOne from "@/layouts/footers/footer-one";
import Termsofuse from "../components/terms of use/termsofuse-one";

export const metadata: Metadata = {
  title: "Terms of Use",
  description : "Read our terms of use to understand the rules and guidelines for using our website and services.",
  keywords: "terms of use, terms and conditions, website terms, usage guidelines",
  
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
          title="Terms of Use"
          subtitle="Find your answers"
        />
        {/*breadcrumb end */}

        {/* faq area start */}
        <Termsofuse />
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
