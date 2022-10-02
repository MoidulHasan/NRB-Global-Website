import React from 'react';
import photoContestBanner from '../../../assets/image/photoContests/photo Contest all photo/YC photo contest.jpg';
import './YCPhotoContest.css';

const YCPhotoContest = () => {
  return (
    <div className='p-container my-4'>
      <div className='photoContestContainer py-5 '>
        <div className='photoContestHeaderContainer '>
          <img
            src={photoContestBanner}
            alt='Young Congress Pictur Contest Banner'
          />
        </div>
      </div>
    </div>
  );
};

export default YCPhotoContest;
