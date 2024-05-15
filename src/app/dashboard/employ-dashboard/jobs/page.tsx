'use client'
import React,{useState} from 'react';
import Wrapper from '@/layouts/wrapper';
import EmployAside from '@/app/components/dashboard/company/aside';
import EmployJobArea from '@/app/components/dashboard/company/job-area';

const EmployDashboardJobsPage = () => {
  const [isOpenSidebar,setIsOpenSidebar] = useState<boolean>(false);
  return (
    <Wrapper>

    <div className='main-page-wrapper'>
      {/* aside start */}
      <EmployAside isOpenSidebar={isOpenSidebar} setIsOpenSidebar={setIsOpenSidebar}/>
      {/* aside end  */}

      {/* job area start */}
      <EmployJobArea setIsOpenSidebar={setIsOpenSidebar}/>
      {/* job area end */}
    </div>
    </Wrapper>
  );
};

export default EmployDashboardJobsPage;