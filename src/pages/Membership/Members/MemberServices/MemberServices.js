import React from 'react';
import MemberServiceList from '../../../../component/Membership/Members/MemberServices/MemberServicesHeader/MemberServiceList';
import MemberServicesHeader from '../../../../component/Membership/Members/MemberServices/MemberServicesHeader/MemberServicesHeader';
import './MemberServices.css';

const MemberServices = () => {
  return (
    <div>
      <section>
        <MemberServicesHeader />
      </section>
      <section>
        <MemberServiceList />
      </section>
    </div>
  );
};

export default MemberServices;
