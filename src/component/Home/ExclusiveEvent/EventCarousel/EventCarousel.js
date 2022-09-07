import React, { useState, useEffect } from 'react';
import { Carousel } from 'primereact/carousel';
import { Button } from 'primereact/button';
import './EventCarousel.css';
import img1 from '../../../../assets/image/Blue Teal Yellow Hopeful Community Facebook Cover.png';

const EventCarousel = () => {
  const [homeEvents, setHomeEvents] = useState([]);
  const responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 3,
    },
    {
      breakpoint: '600px',
      numVisible: 2,
      numScroll: 2,
    },
    {
      breakpoint: '480px',
      numVisible: 1,
      numScroll: 1,
    },
  ];

  useEffect(() => {
    fetch('/homeEvents.json')
      .then((res) => res.json())
      .then((data) => setHomeEvents(data));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const homeEventTemplate = (event) => {
    return (
      <div className='eventCard mx-2 border-round-xl'>
        <div className='eventImgDiv'>
          <img src={event.image} alt='' className='imgCard' />
        </div>
        <div className='eventDetail flex align-items-center justify-content-between p-2'>
          <div className=''>
            <h4 className='my-1 ml-2'> {event.eventName}</h4>
            <p className='my-1 flex align-items-center'>
              <span class='material-icons-sharp'>person</span>{' '}
              <span className='ml-1'>{event.organizer}</span>
            </p>
            <p className='my-1 flex align-items-center'>
              <span class='material-icons-sharp'>event</span>{' '}
              <span className='orangeTextOrg ml-2'>{event.date} </span>
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className='carousel-demo'>
      <div className='card'>
        <Carousel
          value={homeEvents}
          numVisible={3}
          numScroll={1}
          responsiveOptions={responsiveOptions}
          className='custom-carousel'
          circular
          autoplayInterval={3000}
          itemTemplate={homeEventTemplate}
        />
      </div>
    </div>
  );
};

export default EventCarousel;
