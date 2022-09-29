import React from 'react';
import ReactPlayer from 'react-player';
import '../ThirdAnniversarySection.css';
import promo1 from '../../../../assets/videos/promo1.mp4';

const WellWishersMessage = () => {
  return (
    <div className='my-4'>
      <h2 className='mt-5 md:mt-6 mb-3  wellWisherHeaderText orangeTextOrg text-center text-3xl md:text-5xl'>
        Well Wisher's Message of NRB GLobal on <br />{' '}
        <span className='text-blue-900 text-bold'>Three Years Anniversary</span>
      </h2>
      <div className='grid mt-4'>
        <div className='col-12 md:col-4'>
          <div className='player-wrapper p-2'>
            <video
              controls
              className='reactPlayerForVideo'
              src='/assets/videos/promo6.mp4'
              width='100%'
              height='100%'
            >
              Sorry, your browser doesn't support embedded videos, but don't
              worry. Watch it with your favorite video player!
            </video>
          </div>
        </div>
        <div className='col-12 md:col-4'>
          <div className='player-wrapper p-2'>
            <video
              controls
              className='reactPlayerForVideo'
              src='/assets/videos/promo5.mp4'
              width='100%'
              height='100%'
            >
              Sorry, your browser doesn't support embedded videos, but don't
              worry. Watch it with your favorite video player!
            </video>
          </div>
        </div>
        <div className='col-12 md:col-4'>
          <div className='player-wrapper p-2'>
            <video
              controls
              className='reactPlayerForVideo'
              src='/assets/videos/promo4.mp4'
              width='100%'
              height='100%'
            >
              Sorry, your browser doesn't support embedded videos, but don't
              worry. Watch it with your favorite video player!
            </video>
          </div>
        </div>
        <div className='col-12 md:col-4'>
          <div className='player-wrapper p-2'>
            <video
              controls
              className='reactPlayerForVideo'
              src='/assets/videos/promo3.mp4'
              width='100%'
              height='100%'
            >
              Sorry, your browser doesn't support embedded videos, but don't
              worry. Watch it with your favorite video player!
            </video>
          </div>
        </div>
        <div className='col-12 md:col-4'>
          <div className='player-wrapper p-2'>
            <video
              controls
              className='reactPlayerForVideo'
              src='/assets/videos/promo2.mp4'
              width='100%'
              height='100%'
            >
              Sorry, your browser doesn't support embedded videos, but don't
              worry. Watch it with your favorite video player!
            </video>
          </div>
        </div>
        <div className='col-12 md:col-4'>
          <div className='player-wrapper p-2'>
            <video
              controls
              className='reactPlayerForVideo'
              src='/assets/videos/promo1.mp4'
              width='100%'
              height='100%'
            >
              Sorry, your browser doesn't support embedded videos, but don't
              worry. Watch it with your favorite video player!
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WellWishersMessage;
