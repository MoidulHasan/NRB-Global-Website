import React from 'react';
import './MembersInOrganizations.css';
import { Image } from 'primereact/image';
import './MembersInOrganizations.css';
import img6 from '../../../assets/image/orgs/Untitled (126 × 40 px) (2).svg';
import img1 from '../../../assets/image/orgs/Untitled (126 × 40 px) (3).svg';
import img2 from '../../../assets/image/orgs/Untitled (126 × 40 px) (4).svg';
import img3 from '../../../assets/image/orgs/Untitled (126 × 40 px) (5).svg';
import img4 from '../../../assets/image/orgs/Untitled (126 × 40 px) (6).svg';
import img5 from '../../../assets/image/orgs/Untitled (126 × 40 px) (2).svg';

const MembersInOrganizations = () => {
  return (
    <div className='p-container mb-4'>
      <div className='organization py-5 px-4'>
        <h2 className='font-semibold companyMembers mt-4 uppercase ml-1 md:ml-4 text-2xl mb-4'>
          Our <span className='orangeTextOrg'> Community Members</span> come
          from
        </h2>

        <div className='grid'>
          <div className='col-6 md:col-2 flex align-items-center justify-content-center'>
            <img className='imgOrg' src={img2} alt='' />
          </div>
          <div className='col-6 md:col-2 flex align-items-center justify-content-center'>
            <img className='imgOrg' src={img3} alt='' />
          </div>
          <div className='col-6 md:col-2 flex align-items-center justify-content-center'>
            <img className='imgOrg' src={img4} alt='' />
          </div>
          <div className='col-6 md:col-2 flex align-items-center justify-content-center'>
            <img className='imgOrg' src={img5} alt='' />
          </div>
          <div className='col-6 md:col-2 flex align-items-center justify-content-center'>
            <img className='imgOrg' src={img1} alt='' />
          </div>
          <div className='col-6 md:col-2 flex align-items-center justify-content-center'>
            <img className='imgOrg' src={img2} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembersInOrganizations;
