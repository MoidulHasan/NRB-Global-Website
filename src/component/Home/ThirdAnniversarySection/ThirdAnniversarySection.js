import React from 'react';
import AnniversaryPhotoCarousel from './AnniversaryPhotoCarousel/AnniversaryPhotoCarousel';
import './ThirdAnniversarySection.css';
import thirdAnniversaryImg from '../../../assets/image/transparentAnni.png';
import WellWishersMessage from './WellWishersMessage/WellWishersMessage';

const ThirdAnniversarySection = () => {
  return (
    <div className='p-container mb-4'>
      <div className='thirdAnniversarySection py-5 px-4'>
        {/* header  */}
        <div className='headerofThirdAnniversary'>
          <h2 className='anniversaryFirstHeaderText text-2xl md:text-4xl text-center '>
            {' '}
            <span className='mr-2'>
              {' '}
              3<sup>rd</sup>
            </span>
            <span>Year Anniversary of NRB Global</span>
          </h2>
          <div className='anniversaryImgContainer flex align-items-center justify-content-center'>
            <img
              src={thirdAnniversaryImg}
              alt='three Year Anniversary'
              className='thirdAnniversaryImg'
            />
          </div>
          <h4 className='my-3 text-3xl md:text-5xl text-center thirdAnniversaryHeaderTextHome'>
            {' '}
            <span className='orangeTextOrg celebrationText'>
              Celebrating Three Years
            </span>{' '}
            <span className='celebrationTextExtra'> of NRB Global </span>
          </h4>
        </div>
        <div className='imageSLiderContainer mt-6'>
          <h4 className='text-2xl my-4 font-bold text-blue-900 text-center guestText'>
            Our Honorable Guests who will present in the three years anniversary
            ceremony
          </h4>
          <AnniversaryPhotoCarousel />
          <WellWishersMessage />
        </div>
      </div>
    </div>
  );
};

export default ThirdAnniversarySection;
