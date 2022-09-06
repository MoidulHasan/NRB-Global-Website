import React from 'react';
import './SingleServiceTestimonial.css';
import TestimonialCarousel from './TestimonialCarousel/TestimonialCarousel';

const SingleServiceTestimonial = () => {
  return (
    <div className='p-container my-4'>
      <div className='text-center'>
        <h1 className='text-gray-500 my-3 text-3xl'>Our Testimonals</h1>
        <h1 className='text-blue-900 font-bold text-3xl mb-3'>
          What clients Say
        </h1>
      </div>
      <TestimonialCarousel />
    </div>
  );
};

export default SingleServiceTestimonial;
