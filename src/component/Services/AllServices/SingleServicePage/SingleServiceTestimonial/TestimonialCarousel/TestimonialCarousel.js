import { Carousel } from 'primereact/carousel';
import React, { useState, useEffect } from 'react';
import { TestimonalService, TestimonialService } from './TestimonialService';
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

  const testimonicalService = new TestimonialService();

  useEffect(() => {
    testimonicalService
      .getTestimonials()
      .then((data) => setTestimonials(data.slice(0, 4)));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const TesimonialTemplate = (testimonial) => {
    return (
      <div className='TestimonialCard'>
        <div>
          <h1>Turu</h1>
        </div>
      </div>
    );
  };

  return (
    <div className='carousel-demo'>
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
