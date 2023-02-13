import React from 'react';
import MemberRegistrationForm from '../../../component/Membership/MemberRegistration/MemberRegistrationForm';
import MemberRegistrationHeader from '../../../component/Membership/MemberRegistration/MemberRegistrationHeader';

const YoungCongressMemberRegistration = () => {
  const member = 'Young Congress';
  const memberType = 'Individual';
  return (
    <section>
      <div>
        <MemberRegistrationHeader member={member} memberType={memberType} />
      </div>
      <div>
        <MemberRegistrationForm member={member} memberType={memberType} />
      </div>
    </section>
  );
};

export default YoungCongressMemberRegistration;
