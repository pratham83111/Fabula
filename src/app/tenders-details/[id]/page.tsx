"use client"
import React, { useEffect, useState } from "react";
import Wrapper from "@/layouts/wrapper";
import Header from "@/layouts/headers/header";
import JobDetailsV1Area from "@/app/components/contract-details/job-details-v1-area";
import JobPortalIntro from "@/app/components/contract-portal-intro/job-portal-intro";
import JobDetailsBreadcrumb from "@/app/components/jobs/breadcrumb/job-details-breadcrumb";
import RelatedJobs from "@/app/components/jobs/related-jobs";
import FooterOne from "@/layouts/footers/footer-one";
// import job_data from "@/data/job-data";
import { getAlljobs } from "@/redux/Api/JobApi";
import contractorTenders from "@/data/job-data";

const JobDetailsDynamicPage = ({ params }: { params: { id: string } }) => {
  const [job_data, setJob_Date] = useState<any[]>([]);

  // useEffect(() => {
  //   const fetchJobs = async () => {
  //     try {
  //       const jobss = await getAlljobs();
  //       console.log("Fetched jobs:", jobss);
  //       setJob_Date(jobss || []); // Ensure fallback to an empty array
  //     } catch (error) {
  //       console.error("Error fetching jobs:", error);
  //       setJob_Date([]); // Fallback to an empty array on error
  //     }
  //   };
  //   fetchJobs();
  // }, []);

  useEffect(()=>{
    setJob_Date(contractorTenders)
  })

  // const job = Array.isArray(contractorTenders) && contractorTenders.find((j) => j.id === params.id);
  const job = job_data.find((j)=>j.id === Number(params.id))
  console.log("Selected job:",params.id);

  return (
    <Wrapper>
      <div className="main-page-wrapper">
        <Header />
        <JobDetailsBreadcrumb />
        {job && <JobDetailsV1Area tender={job} />}
        {job && <RelatedJobs category={job.category} />}
        <JobPortalIntro />
        <FooterOne />
      </div>
    </Wrapper>
  );
};

export default JobDetailsDynamicPage;
