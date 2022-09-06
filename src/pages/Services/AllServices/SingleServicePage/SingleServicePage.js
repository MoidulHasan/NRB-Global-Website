import React from 'react';
import { useParams } from 'react-router-dom';
import SingleServiceTestimonial from '../../../../component/Services/AllServices/SingleServicePage/SingleServiceTestimonial/SingleServiceTestimonial';

const SingleServicePage = () => {
  const { id } = useParams();
  return (
    <div>
      <section className='serviceHeader'>
        <SingleServiceTestimonial />
      </section>
    </div>
  );
};

export default SingleServicePage;
