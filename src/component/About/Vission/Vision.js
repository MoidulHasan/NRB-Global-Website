import React from 'react';
import vision from '../../../assets/image/aboutRefactor/vissionNRB.png';
import './Vision.css';

const Vision = () => {
  return (
    <div className='p-container my-5'>
      <div className=' px-4 py-4 nrbVission-div'>
        <div className=''></div>
        <div className='grid'>
          <div className='col-12 md:col-6 p-2 flex align-items-center justify-content-center'>
            <div className='visionImgContainer'>
              <img src={vision} alt='NRB Vision' />
            </div>
          </div>
          <div className='col-12 md:col-6 p-2 '>
            <div className='visionContainer m-3'>
              <h1 className=' text-bold text-3xl md:text-6xl  my-2 md:my-6 visionTextHeader p-3'>
                Our Vision
              </h1>
              <p className='visionText p-5 font-semibold'>
                All NRB'S professionals, scientist, academicians, people in
                business, attorneys, journalists, government official, trade
                organizations and community activists will unite and work
                together for the betterment of our beloved Bangladesh regardless
                of individual ideology or political affiliations is the vision
                of the NRB Global Non-resident Bangladeshi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
