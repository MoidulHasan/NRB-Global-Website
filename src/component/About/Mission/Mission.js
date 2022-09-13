import React from 'react';
import './Mission.css';

import missionImg from '../../../assets/image/aboutRefactor/missionNRB.png';

const Mission = () => {
  return (
    <div className='p-container my-5'>
      <div className='px-4 py-4 mission-div'>
        <h4 className='text-bold text-3xl md:text-4xl text-center my-3'>
          Our Mission
        </h4>
        <div className='grid'>
          <div className='col-12  md:col-6 p-2'>
            <div className='grid mt-4 mb-3'>
              <div className='col-12 px-4 m-2 p-1'>
                <div className='gridColumnMission p-4'>
                  <h5 className='missionNumber my-2 text-bold text-3xl'>01</h5>
                  <p className='missionText my-2'>
                    To serve the Non Residential Bangladeshies across the globe
                  </p>
                </div>
              </div>
              <div className='col-12 px-4  m-2 p-1'>
                <div className='gridColumnMission p-4'>
                  <h5 className='missionNumber my-2 text-bold text-3xl'>02</h5>
                  <p className='missionText my-2'>
                    To unite successful Bangladeshi under one Global platform to
                    share ideas, leverage knowledge, connect with each other,
                    create new ventures, create awareness of NRB's issues
                  </p>
                </div>
              </div>
              <div className='col-12 px-4  m-2 p-1'>
                <div className='gridColumnMission p-4'>
                  <h5 className='missionNumber my-2 text-bold text-3xl'>03</h5>
                  <p className='missionText my-2'>
                    To bridge the gap between NRB and Bangladesh government so
                    that Bangladesh can take advantages of her NRB's knowledge
                    and expertise for the economic, social, and cultural
                    development of Bangladesh.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='col-12 md:col-6 p-2 flex align-items-center justify-content-center'>
            <div className='aboutMissionImgCover'>
              <img src={missionImg} alt='mision of NRB' className='ms-2' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
