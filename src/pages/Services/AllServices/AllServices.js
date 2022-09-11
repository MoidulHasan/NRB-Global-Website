import React from 'react';
import { useLocation } from 'react-router-dom';
import MemberServices from '../../Membership/Members/MemberServices/MemberServices';

const AllServices = () => {
  let location = useLocation();

  return <MemberServices location={location} />;
};

export default AllServices;
