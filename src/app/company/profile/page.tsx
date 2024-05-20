'use client'
import React,{useState} from 'react';
import Wrapper from '@/layouts/wrapper';
import EmployAside from '@/app/components/dashboard/company/aside';
import EmployProfileArea from '@/app/components/dashboard/company/profile-area';

const EmployDashboardProfilePage = () => {
  const [isOpenSidebar,setIsOpenSidebar] = useState<boolean>(false);
  return (
    <Wrapper>

    <div className='main-page-wrapper'>
      {/* aside start */}
      <EmployAside isOpenSidebar={isOpenSidebar} setIsOpenSidebar={setIsOpenSidebar}/>
      {/* aside end  */}

      {/* profile area start */}
      <EmployProfileArea setIsOpenSidebar={setIsOpenSidebar}/>
      {/* profile area end */}
    </div>
    </Wrapper>
  );
};

export default EmployDashboardProfilePage;