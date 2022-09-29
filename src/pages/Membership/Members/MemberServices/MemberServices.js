import React from 'react';
import WhyJoinNRB from '../../../../component/Home/WhyJoinNRB/WhyJoinNRB';
import MemberServiceList from '../../../../component/Membership/Members/MemberServices/MemberServicesHeader/MemberServiceList';
import MemberServicesHeader from '../../../../component/Membership/Members/MemberServices/MemberServicesHeader/MemberServicesHeader';
import './MemberServices.css';

const MemberServices = ({ location }) => {
  const pathAllService = location?.pathname === '/allservices';
  return (
    <div>
      <section>
        <MemberServicesHeader />
      </section>
      <section>
        <MemberServiceList location={location} />
      </section>
      {pathAllService && (
        <section>
          <WhyJoinNRB />
        </section>
      )}
    </div>
  );
};

export default MemberServices;
