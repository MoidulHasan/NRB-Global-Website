import React from 'react';
import AnniversaryPhotoCarousel from './AnniversaryPhotoCarousel/AnniversaryPhotoCarousel';
import './ThirdAnniversarySection.css';

const ThirdAnniversarySection = () => {
  return (
    <div className='p-container mb-4'>
      <div className='thirdAnniversarySection py-5 px-4'>
        {/* header  */}
        <div className='headerofThirdAnniversary'>
          <h2 className='my-3 text-3xl md:text-5xl text-center thirdAnniversaryHeaderTextHome'>
            {' '}
            <span className='orangeTextOrg celebrationText'>
              Celebrating Three Years
            </span>{' '}
            <span className='celebrationTextExtra'> of NRB Global </span>
          </h2>
          <p className='text-center text-xl md:text-2xl eventHeaderSupportTextAnniversary'>
            In a short time, NRB Global is able to connect with 15 Million non
            residents bangladeshi and we are trying to help every members in
            every possible ways.
          </p>
        </div>
        <div className='imageSLiderContainer mt-6'>
          <h4 className='text-2xl my-4 font-bold text-blue-900 text-center guestText'>
            Our Honorable Guests who will present in the three years anniversary
            ceremony
          </h4>
          <AnniversaryPhotoCarousel />
        </div>
      </div>
    </div>
  );
};

export default ThirdAnniversarySection;
