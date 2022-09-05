import React from 'react';
import MemberRegistrationForm from '../../../../component/Membership/MemberRegistration/MemberRegistrationForm';
import MemberRegistrationHeader from '../../../../component/Membership/MemberRegistration/MemberRegistrationHeader';

const GeneralMemberRegistration = () => {
  const member = 'General Member';
  const memberType = 'Individual';
  return (
    <div>
      <section>
        <MemberRegistrationHeader member={member} memberType={memberType} />
      </section>
      <section>
        <MemberRegistrationForm member={member} memberType={memberType} />
      </section>
    </div>
  );
};

export default GeneralMemberRegistration;
