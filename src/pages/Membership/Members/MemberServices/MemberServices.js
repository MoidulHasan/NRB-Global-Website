import React from 'react';
import FloatJoinNRB from '../../../../component/';
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
      <section className='floatNRB mb-8'>
        <FloatJoinNRB />
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
