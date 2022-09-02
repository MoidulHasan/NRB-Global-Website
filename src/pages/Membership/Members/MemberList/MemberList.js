import React from 'react';
import MemberListHeader from '../../../../component/Membership/Members/MemberList/MemberListHeader/MemberListHeader';
import MemberListToSHow from '../../../../component/Membership/Members/MemberList/MemberListToSHow/MemberListToSHow';

const MemberList = () => {
  return (
    <div>
      <section>
        <MemberListHeader></MemberListHeader>
      </section>
      <section>
        <MemberListToSHow />
      </section>
    </div>
  );
};

export default MemberList;
