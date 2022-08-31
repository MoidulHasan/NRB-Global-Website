import React from 'react';
import { Image } from 'primereact/image';
import './MembersInOrganizations.css';

const MembersInOrganizations = () => {
  return (
    <div className='p-container py-6'>
      <h2 className='font-semibold companyMembers my-4 uppercase'>
        Our Community Members come from
      </h2>
      <div className='flex flex-row align-items-center justify-content-center'>
        <div className='flex aign-items-center justify-content-center'>
          <Image src='image1.png' alt='Image Text' />
        </div>
      </div>
    </div>
  );
};

export default MembersInOrganizations;
