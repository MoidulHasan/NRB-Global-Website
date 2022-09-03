import React from 'react';
import { Fade } from 'react-reveal';
import './MemberRegistrationHeader.css';
const MemberRegistrationHeader = (props) => {
  return (
    <div className='p-container mb-4 mt-3 md:mt-5'>
      <div className='memberRegHeadContainer py-5 px-4 flex flex-column align-items-center justify-content-center'>
        <Fade top duration={1500}>
          <div className='textDiv flex flex-column align-items-center justify-content-center '>
            <h2 className='text-2xl md:text-5xl mb-2'>
              Register as{' '}
              <span className='text-orange-400'>{props?.member}</span>
            </h2>
            <span className='text-dark text-xl font-bold mt-3'>
              Start Your Journey with us.
            </span>
          </div>
        </Fade>
      </div>
    </div>
  );
};
export default MemberRegistrationHeader;
