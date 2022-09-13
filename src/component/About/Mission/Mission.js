import React from 'react';
import mission from '../../../assets/image/about/mission.png';
import './Mission.css';

const Mission = () => {
  return (
    <div className='p-container my-4'>
      <div className='px-4 py-5 mission-div'>
        <h4 className='text-bold text-3xl md:text-4xl text-center'>
          Our Mission
        </h4>
        <div className='grid'>
          <div className='col-12 md:col-12 lg:col-6 xl:col-6'></div>
          <div className='col-12 md:col-12 lg:col-6 xl:col-6 lg:pt-8 xl:pt-8 lg:mt-5 xl:mt-5'></div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
