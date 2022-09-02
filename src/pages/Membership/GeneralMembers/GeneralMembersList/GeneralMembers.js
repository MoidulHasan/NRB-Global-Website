import { Button } from 'primereact/button';
import React from 'react';
import './GeneralMembers.css';
import MemberListToSHow from '../../../../component/Membership/Members/MemberList/MemberListToSHow/MemberListToSHow';
import GeneralMemberHeader from '../../../../component/Membership/GeneralMembers/GeneralMembersList/GeneralMemberHeader';

const GeneralMembers = () => {
  return (
    <div>
      <section>
        {' '}
        <GeneralMemberHeader />{' '}
      </section>
      <section>
        <MemberListToSHow />
      </section>
      <section className='p-container my-4'>
        <div className='beAnrbMember py-5 px-4 flex flex-column align-items-center justify-content-center'>
          <div>
            <h2 className='my-2 excitedJoinText'>
              We are very excited to <span className='seeYou'>see you</span> in
              the member list
            </h2>
          </div>
          <div className='flex justify-content-center mt-3'>
            <Button
              label='Join NRB Global'
              className='p-button-rounded p-button-raised p-button-help p-button-outlined'
              icon='pi pi-angle-right'
              iconPos='right'
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default GeneralMembers;
