import React from 'react';
import './SingleServiceTestimonial.css';
import TestimonialCarousel from './TestimonialCarousel/TestimonialCarousel';

const SingleServiceTestimonial = () => {
  return (
    <div className='p-container my-4'>
      <div className='text-center'>
        <h1 className='text-gray-700 mt-4 mb-2 text-2xl'>Our Testimonals</h1>
        <h1 className='text-blue-900 font-bold text-3xl mb-3 mt-2'>
          What Clients Say
        </h1>
      </div>
      <TestimonialCarousel />
    </div>
  );
};

export default SingleServiceTestimonial;
