import React from 'react';
import MemberRegistrationForm from '../../../component/Membership/MemberRegistration/MemberRegistrationForm';
import MemberRegistrationHeader from '../../../component/Membership/MemberRegistration/MemberRegistrationHeader';

const EMOrganization = () => {
  const member = 'Executive Member';
  const memberType = 'Organization';
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

export default EMOrganization;
