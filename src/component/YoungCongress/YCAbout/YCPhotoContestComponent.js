import { Button } from 'primereact/button';
import React from 'react';
import { Link } from 'react-router-dom';

import { photo_contest_pictures as photoContestImages } from '../../../data';
import YCPhotoContestShow from '../YCPhotoContest/YCPhotoContestShow';

const YCPhotoContestComponent = () => {
  return (
    <div className='ycPhotoContestAboutContainer my-4'>
      <h4 className='my-5 ycPhotoContestAboutHeader text-bold text-center'>
        Young Congress Photo Contest
      </h4>
      <p className='mt-2 mb-6 orangeText text-bold text-xl text-center contestAboutText'>
        We arrange photo contests among the Young Congress members to encourage
        the inner talents.
      </p>
      {/* the photo content  */}
      {photoContestImages.slice(0, 1).map((photoInContest) => (
        <YCPhotoContestShow photoInContest={photoInContest} />
      ))}
      <div className='flex justify-content-center mt-5 mb-5'>
        <Link to='/YoungCongressPhotoContest' className='linkDecoration'>
          <Button
            label='Explore more Photos of the Contest'
            className='p-button-rounded p-button-primary p-button-outlined'
            icon='pi pi-angle-right'
            iconPos='right'
          />
        </Link>
      </div>
    </div>
  );
};

export default YCPhotoContestComponent;
