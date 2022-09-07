import { Carousel } from 'primereact/carousel';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const ExecutiveCommitteeMemberCarousel = () => {
  const [cabinateMembers, setcabinateMembers] = useState([]);

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
    fetch('/committeeMembers.json')
      .then((res) => res.json())
      .then((data) => setcabinateMembers(data));
  }, []);

  const cabinateMemberTemplate = (member) => {
    return (
      <div className='cabinateMemberCard mx-2 border-round-xl px-2 pb-3 pt-2 my-2'>
        <div className='cabinateMemberImgHolder'>
          <img src={member.profileImg} alt='cabinate member of NRB Global' />
        </div>
        <div className='cabinateMemberDetailHolder text-center'>
          <h2 className='text-blue-900 my-1 text-base md:text-xl'>
            {member.name}
          </h2>
          <h3 className='text-gray-700 my-1 text-sm md:text-base'>
            {member.designation}
          </h3>
        </div>
      </div>
    );
  };

  return (
    <div className='carousel-demo'>
      <div className='card'>
        <Carousel
          value={cabinateMembers}
          numVisible={3}
          numScroll={1}
          responsiveOptions={responsiveOptions}
          className='custom-carousel'
          circular
          autoplayInterval={3000}
          itemTemplate={cabinateMemberTemplate}
        />
      </div>
    </div>
  );
};

export default ExecutiveCommitteeMemberCarousel;
