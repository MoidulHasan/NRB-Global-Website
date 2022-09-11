import { Button } from 'primereact/button';
import React from 'react';
import { Link } from 'react-router-dom';
import EventCarousel from './EventCarousel/EventCarousel';
import './ExclusiveEvent.css';
const ExclusiveEvent = () => {
  return (
    <div className='p-container mb-4'>
      <div className='eventSummery  py-5 px-4'>
        <h2 className='my-3 text-3xl md:text-5xl text-center eventHeaderTextOnHome'>
          {' '}
          <span className='orangeTextOrg'>Exclusive Events</span> for NRB Global
          Memebers{' '}
        </h2>
        <p className='text-center text-xl md:text-2xl eventHeaderSupportTextOnHome'>
          Join our NRB GLobal community absolutely free and get access to
          valuable events by industry experts.
        </p>
        {/* carousel section  */}
        <section>
          <EventCarousel />
        </section>
        <div className='flex justify-content-center mt-3'>
          <Link to='/events' className='linkDecoration'>
            <Button
              label='Explore more event'
              className='p-button-rounded p-button-help p-button-outlined'
              icon='pi pi-angle-right'
              iconPos='right'
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ExclusiveEvent;
