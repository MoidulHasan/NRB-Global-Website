import React from 'react';
import './WhyJoinHome.css';
import whyJoin from '../../../assets/image/whyJoin/whyJoin11.png';
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';
import FloatJoinNRB from '../../FloatJoinNRB/FloatJoinNRB';

const WhyJoinHome = () => {
  return (
    <div className='p-container mb-4'>
      {/* why join nrb home 
      is completed by this */}
      <div className='sectionWhyContainer  py-5 px-4'>
        <h1 className='text-4xl md:text-5xl mt-3 mb-3 md:mb-6 textWhy text-center'>
          Why Join NRB Global?{' '}
        </h1>
        <div className='grid whyGrid mt-4 mb-7'>
          <div className='col-12 md:col-4 columnWhy p-4'>
            <h4 className='text-4xl font-bold mt-3 mb-4'>300+</h4>
            <span className='text-gray-500 font-bold'>
              300+ events in this running year in different countries to build
              the community stronger.
            </span>
          </div>
          <div className='col-12 md:col-4 columnWhy p-4'>
            <h4 className='text-4xl font-bold  mt-3 mb-4'>100+</h4>
            <span className='text-gray-500 font-bold'>
              100+ countries and beyond, we are more than a community to help
              our brother and sisters.
            </span>
          </div>
          <div className='col-12 md:col-4 columnWhy p-4'>
            <h4 className='text-4xl font-bold mt-3 mb-4'>100%</h4>
            <span className='text-gray-500 font-bold'>
              100% of our members are happy with our community.
            </span>
          </div>
        </div>
        <div className='grid mt-6'>
          <div className='col-12 md:col-3 whyPhotoColumn'>
            <img src={whyJoin} alt='' className='whyJoinPhoto' />
          </div>
          <div className='col-12 md:col-9 whyJoinColText'>
            <div className='columnForMobile'>
              <div className='whyColumnBlue'>
                <h2 className='text-2xl md:text-6xl my-4 text-white font-bold'>
                  A better way to connect to your motherland.
                </h2>
                <span className=' text-white my-2 md:my-3 md:text-2xl whyPoints hidden md:block'>
                  NRB Globals helps people in various ways like{' '}
                  <span className='text-yellow-400'>Guiding and Coaching</span>,{' '}
                  <span className='text-yellow-400'>Encouraging</span>,{' '}
                  <span className='text-yellow-400'>Supporting</span>,{' '}
                  <span className='text-yellow-400'>
                    Communicating and helping.
                  </span>
                </span>
                <span className='text-yellow-400 block md:hidden'>
                  NRB Global helps in guiding, coaching, encouraging, supporting
                  and others.
                </span>
              </div>
              <div className='flex justify-content-center mt-3 pb-6'>
                <Link to='/events' className='linkDecoration'>
                  <Button
                    label='Explore more event'
                    className='p-button-rounded p-button-warning p-button-outlined'
                    icon='pi pi-angle-right'
                    iconPos='right'
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div>
          <FloatJoinNRB />
        </div>
      </div>
    </div>
  );
};

export default WhyJoinHome;
