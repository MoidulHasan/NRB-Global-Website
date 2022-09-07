import React from 'react';
import { Fade } from 'react-reveal';
import './MemberServicesHeader.css';

const MemberServicesHeader = () => {
  return (
    <div className='p-container my-4'>
      <div className='memberServiceContainer py-5 px-4 flex flex-column justify-content-center align-items-start'>
        <Fade top duration={1500}>
          <div className='PlatformService p-2 md:p-8 text-blue-700'>
            <h2 className='text-4xl '>One Platform. Multiple Benefits..</h2>
            <span className='my-2 growthSpanService text-bold'>
              With us as your growth partner, you can quickly adopt overseas,{' '}
              <br />
              without the burden of establishing costly supports.
            </span>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default MemberServicesHeader;
