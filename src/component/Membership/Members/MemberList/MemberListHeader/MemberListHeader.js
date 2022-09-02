import React from 'react';
import './MemberListHeader.css';

const MemberListHeader = () => {
  return (
    <div className='p-container mb-4 mt-3 md:mt-5'>
      <div className='memberContainer py-5 px-4 flex flex-column align-items-center justify-content-center'>
        <div className='textDiv flex flex-column align-items-center justify-content-center '>
          <h2 className='text-2xl md:text-5xl mb-2'>Our Honourable Members</h2>
          <span className='text-dark text-xl font-bold'>A Family We Are</span>
        </div>
      </div>
    </div>
  );
};

export default MemberListHeader;
