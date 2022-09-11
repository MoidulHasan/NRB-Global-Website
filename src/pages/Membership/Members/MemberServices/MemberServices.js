import React from 'react';
import MemberServiceList from '../../../../component/Membership/Members/MemberServices/MemberServicesHeader/MemberServiceList';
import MemberServicesHeader from '../../../../component/Membership/Members/MemberServices/MemberServicesHeader/MemberServicesHeader';
import './MemberServices.css';

const MemberServices = ({ location }) => {
  return (
    <div>
      <section>
        <MemberServicesHeader />
      </section>
      <section>
        <MemberServiceList location={location} />
      </section>
    </div>
  );
};

export default MemberServices;
