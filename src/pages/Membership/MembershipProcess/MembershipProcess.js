import React from 'react';
import './MembershipProcess.css';
import { Fade } from 'react-reveal';
import MembershipProcessSteps from '../../../component/Membership/MembershipProcess/MembershipProcessSteps';
import WhyJoinNRB from '../../../component/Home/WhyJoinNRB/WhyJoinNRB';

const MembershipProcess = () => {
  return (
    <div className='p-container my-4'>
      <div className='membershipProcessContainer py-5 px-4 flex flex-column align-items-center justify-content-center'>
        <Fade top duration={1500}>
          <div className='textDiv flex flex-column align-items-center justify-content-center '>
            <div>
              <h2 className='text-2xl md:text-5xl'>
                Get our
                <span className='text-orange-400'> Membership</span>
              </h2>
            </div>
            <span className='text-dark text-base font-bold mt-3'>
              Be a NRB Global member in a minute by following some simple steps.
            </span>
          </div>
        </Fade>
      </div>
      {/* process list  */}
      <MembershipProcessSteps />
      <section className='my-2'>
        <WhyJoinNRB />
      </section>
    </div>
  );
};

export default MembershipProcess;
