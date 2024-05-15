import React from 'react';
import { Metadata } from 'next';
import Wrapper from '@/layouts/wrapper';
import Header from '@/layouts/headers/header';
import FooterOne from '@/layouts/footers/footer-one';
import JobBreadcrumb from '../components/jobs/breadcrumb/job-breadcrumb';
import JobPortalIntro from '../components/contract-portal-intro/job-portal-intro';
import JobListV3Area from '../components/jobs/list/job-list-v3-area';
import HeaderFour from '@/layouts/headers/header-4';

export const metadata: Metadata = {
  title: "Contract List ",
  description: "Browse a list of available contract openings. Find contract based on title, location, industry, and more.",
  keywords :"contract list, contract openings, contract search, contract listings"
};

const JobListThreePage = () => {
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        {/* header start */}
        <HeaderFour  />
        {/* header end */}

        {/* search breadcrumb start */}
        <JobBreadcrumb />
        {/* search breadcrumb end */}

        {/* job list three start */}
        <JobListV3Area itemsPerPage={8} />
        {/* job list three end */}

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

export default JobListThreePage;