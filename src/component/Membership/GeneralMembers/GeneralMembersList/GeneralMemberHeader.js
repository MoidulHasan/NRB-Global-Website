import React from 'react';
import { Fade } from 'react-reveal';
import './GeneralMemberHeader.css';

const GeneralMemberHeader = () => {
  return (
    <div className='p-container mb-4 mt-3 md:mt-5'>
      <div className='generalMemberContainer py-5 px-4 flex flex-column align-items-center justify-content-center'>
        <Fade top duration={1500}>
          <div className='textDiv flex flex-column align-items-center justify-content-center '>
            <h2 className='text-2xl md:text-5xl mb-2'>
              General Members of NRB Global
            </h2>
            <span className='text-dark text-xl font-bold'>
              For Whom We Stand
            </span>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default GeneralMemberHeader;
