import { Carousel } from 'primereact/carousel';
import React, { useState, useEffect } from 'react';
import './TestimonialCarousel.css';

const TestimonialCarousel = () => {
  const [testimonials, setTestimonials] = useState([]);
  const responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: '600px',
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: '480px',
      numVisible: 1,
      numScroll: 1,
    },
  ];

  useEffect(() => {
    fetch('/testimonials.json')
      .then((res) => res.json())
      .then((data) => setTestimonials(data.data));
  }, []);

  const TesimonialTemplate = (testimonial) => {
    return (
      <div className='TestimonialCard mb-4'>
        <div className='grid'>
          <div className='col-12 md:col-7 px-2  pl-2 pr-2 md:pr-7'>
            <div className='flex flex-column md:flex-row pt-0 md:pt-6'>
              <img
                src={testimonial.authorPic}
                alt='testimonial member'
                className='testimonalMemberImg mr-0 md:mr-3'
              />
              <div className='testimonialDetails'>
                <h3 className='text-base md:text-xl font-bold mt-0'>
                  {testimonial.testimonialTitle}
                </h3>
                <p className='text-gray-800'>
                  {testimonial.testimonialDetails}
                </p>
                <h2 className='text-lg font-bold'>
                  {' '}
                  <span className='text-blue-900'>
                    {testimonial.author}
                  </span>, <span>{testimonial.authorDesignation}</span>{' '}
                </h2>
              </div>
            </div>
          </div>
          <div className='col-12 md:col-5 hidden md:block'>
            <div className='testimonailStaticImgHolder'>
              <img src={testimonial.sideImg} alt='testimonal reviews' />
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className='carousel-review'>
      <div className='card'>
        <Carousel
          value={testimonials}
          numVisible={1}
          numScroll={1}
          responsiveOptions={responsiveOptions}
          className='custom-carousel'
          circular
          autoplayInterval={3000}
          itemTemplate={TesimonialTemplate}
        />
      </div>
    </div>
  );
};

export default TestimonialCarousel;
