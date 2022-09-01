import { Button } from 'primereact/button';
import React from 'react';

const TopBlogs = () => {
  return (
    <div className='p-container my-4'>
      <div className='topServiceContainer py-5 px-4'>
        <h3 className='orangeTextOrg text-xl text-center'>
          Our Featured Members
        </h3>
        <h1 className='mt-1 mb-2 textPrimeMembers text-4xl md:text-5xl'>
          People we are proud of for being with us!
        </h1>
        <span className='block text-gray-600 text-xl my-1 font-semibold text-center'>
          There are many variations of people in our community, who is best in
          his/her own position.
        </span>
        <div className='flex justify-content-center mt-4 mb-6'>
          <Button
            label='View All Services'
            className='p-button-rounded p-button-help p-button-outlined'
            icon='pi pi-angle-right'
            iconPos='right'
          />
        </div>
      </div>
    </div>
  );
};

export default TopBlogs;
