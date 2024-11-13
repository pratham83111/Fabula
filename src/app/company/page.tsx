import React from 'react';
import Wrapper from '@/layouts/wrapper';
import EmployDashboardMain from '@/app/components/dashboard/company';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Company",
  description: "Innovating solutions with passion, driving success through creativity and cutting-edge technology."
};

const EmployDashboardPage = () => {
  return (
    <Wrapper>
      <EmployDashboardMain/>
    </Wrapper>
  );
};

export default EmployDashboardPage;