import React from 'react';
import photoContestBanner from '../../../assets/image/photoContests/photo Contest all photo/YC photo contest.jpg';
import './YCPhotoContest.css';

import { photo_contest_pictures as photoContestImages } from '../../../data';
import YCPhotoContestShow from '../../../component/YoungCongress/YCPhotoContest/YCPhotoContestShow';

const YCPhotoContest = () => {
  return (
    <div className='p-container my-4'>
      <div className='photoContestContainer py-5 '>
        <div className='photoContestHeaderContainer '>
          <img
            src={photoContestBanner}
            alt='Young Congress Picture Contest Banner'
          />
        </div>
      </div>
      <div className='youngCongressPhotoContestPhotoContainer py-3'>
        {photoContestImages.map((photoInContest) => (
          // <section key={photoInContest.id}>
          //   <div className='grid mb-3'>
          //     <div className='col-12 md:col-6 imgPhotoGraphyContestContainer'>
          //       <Image
          //         imageClassName='imgPhotoGraphyContest'
          //         src={photoInContest?.imgInRow?.imgSeparate}
          //         alt='Photo Contest Image'
          //         width='100%'
          //         preview
          //         downloadable
          //       />
          //     </div>
          //     <div className='col-12 md:col-6 imgPhotoGraphyContestContainer'>
          //       <div className='grid'>
          //         <div className='col-12 md:col-6 imgPhotoGraphyContestContainer'>
          //           <Image
          //             imageClassName='imgPhotoGraphyContest'
          //             src={photoInContest?.imgInRow?.imgSeparateRow?.img1}
          //             alt='Image'
          //             width='100%'
          //             preview
          //             downloadable
          //           />
          //         </div>
          //         <div className='col-12 md:col-6 imgPhotoGraphyContestContainer'>
          //           <Image
          //             imageClassName='imgPhotoGraphyContest'
          //             src={photoInContest?.imgInRow?.imgSeparateRow?.img2}
          //             alt='Image'
          //             width='100%'
          //             preview
          //             downloadable
          //           />
          //         </div>
          //         <div className='col-12 md:col-6 imgPhotoGraphyContestContainer'>
          //           <Image
          //             imageClassName='imgPhotoGraphyContest'
          //             src={photoInContest?.imgInRow?.imgSeparateRow?.img3}
          //             alt='Image'
          //             width='100%'
          //             preview
          //             downloadable
          //           />
          //         </div>
          //         <div className='col-12 md:col-6 imgPhotoGraphyContestContainer'>
          //           <Image
          //             imageClassName='imgPhotoGraphyContest'
          //             src={photoInContest?.imgInRow?.imgSeparateRow?.img4}
          //             alt='Image'
          //             width='100%'
          //             preview
          //             downloadable
          //           />
          //         </div>
          //       </div>
          //     </div>
          //   </div>
          //   <div className='grid'>
          //     <div className='col-12 md:col-6 imgPhotoGraphyContestContainer'>
          //       <div className='grid'>
          //         <div className='col-12 md:col-6 imgPhotoGraphyContestContainer'>
          //           <Image
          //             imageClassName='imgPhotoGraphyContest'
          //             src={photoInContest?.imgInSecondRow?.imgSeparateRow?.img1}
          //             alt='Image'
          //             width='100%'
          //             preview
          //             downloadable
          //           />
          //         </div>
          //         <div className='col-12 md:col-6 imgPhotoGraphyContestContainer'>
          //           <Image
          //             imageClassName='imgPhotoGraphyContest'
          //             src={photoInContest?.imgInSecondRow?.imgSeparateRow?.img2}
          //             alt='Image'
          //             width='100%'
          //             preview
          //             downloadable
          //           />
          //         </div>
          //         <div className='col-12 md:col-6 imgPhotoGraphyContestContainer'>
          //           <Image
          //             imageClassName='imgPhotoGraphyContest'
          //             src={photoInContest?.imgInSecondRow?.imgSeparateRow?.img3}
          //             alt='Image'
          //             width='100%'
          //             preview
          //             downloadable
          //           />
          //         </div>
          //         <div className='col-12 md:col-6 imgPhotoGraphyContestContainer'>
          //           <Image
          //             imageClassName='imgPhotoGraphyContest'
          //             src={photoInContest?.imgInSecondRow?.imgSeparateRow?.img4}
          //             alt='Image'
          //             width='100%'
          //             preview
          //             downloadable
          //           />
          //         </div>
          //       </div>
          //     </div>
          //     <div className='col-12 md:col-6 imgPhotoGraphyContestContainer'>
          //       <Image
          //         imageClassName='imgPhotoGraphyContest'
          //         src={photoInContest?.imgInSecondRow?.imgSeparate}
          //         alt='Image'
          //         width='100%'
          //         preview
          //         downloadable
          //       />
          //     </div>
          //   </div>
          // </section>
          <YCPhotoContestShow photoInContest={photoInContest} />
        ))}
      </div>
    </div>
  );
};

export default YCPhotoContest;
