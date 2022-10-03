import { Image } from 'primereact/image';
import React from 'react';

const YCPhotoContestShow = ({ photoInContest }) => {
  return (
    <section key={photoInContest.id}>
      <div className='grid mb-3'>
        <div className='col-12 md:col-6 imgPhotoGraphyContestContainer'>
          <Image
            imageClassName='imgPhotoGraphyContest'
            src={photoInContest?.imgInRow?.imgSeparate}
            alt='Photo Contest Image'
            width='100%'
            preview
            downloadable
          />
        </div>
        <div className='col-12 md:col-6 imgPhotoGraphyContestContainer'>
          <div className='grid'>
            <div className='col-12 md:col-6 imgPhotoGraphyContestContainer'>
              <Image
                imageClassName='imgPhotoGraphyContest'
                src={photoInContest?.imgInRow?.imgSeparateRow?.img1}
                alt='Image'
                width='100%'
                preview
                downloadable
              />
            </div>
            <div className='col-12 md:col-6 imgPhotoGraphyContestContainer'>
              <Image
                imageClassName='imgPhotoGraphyContest'
                src={photoInContest?.imgInRow?.imgSeparateRow?.img2}
                alt='Image'
                width='100%'
                preview
                downloadable
              />
            </div>
            <div className='col-12 md:col-6 imgPhotoGraphyContestContainer'>
              <Image
                imageClassName='imgPhotoGraphyContest'
                src={photoInContest?.imgInRow?.imgSeparateRow?.img3}
                alt='Image'
                width='100%'
                preview
                downloadable
              />
            </div>
            <div className='col-12 md:col-6 imgPhotoGraphyContestContainer'>
              <Image
                imageClassName='imgPhotoGraphyContest'
                src={photoInContest?.imgInRow?.imgSeparateRow?.img4}
                alt='Image'
                width='100%'
                preview
                downloadable
              />
            </div>
          </div>
        </div>
      </div>
      <div className='grid'>
        <div className='col-12 md:col-6 imgPhotoGraphyContestContainer'>
          <div className='grid'>
            <div className='col-12 md:col-6 imgPhotoGraphyContestContainer'>
              <Image
                imageClassName='imgPhotoGraphyContest'
                src={photoInContest?.imgInSecondRow?.imgSeparateRow?.img1}
                alt='Image'
                width='100%'
                preview
                downloadable
              />
            </div>
            <div className='col-12 md:col-6 imgPhotoGraphyContestContainer'>
              <Image
                imageClassName='imgPhotoGraphyContest'
                src={photoInContest?.imgInSecondRow?.imgSeparateRow?.img2}
                alt='Image'
                width='100%'
                preview
                downloadable
              />
            </div>
            <div className='col-12 md:col-6 imgPhotoGraphyContestContainer'>
              <Image
                imageClassName='imgPhotoGraphyContest'
                src={photoInContest?.imgInSecondRow?.imgSeparateRow?.img3}
                alt='Image'
                width='100%'
                preview
                downloadable
              />
            </div>
            <div className='col-12 md:col-6 imgPhotoGraphyContestContainer'>
              <Image
                imageClassName='imgPhotoGraphyContest'
                src={photoInContest?.imgInSecondRow?.imgSeparateRow?.img4}
                alt='Image'
                width='100%'
                preview
                downloadable
              />
            </div>
          </div>
        </div>
        <div className='col-12 md:col-6 imgPhotoGraphyContestContainer'>
          <Image
            imageClassName='imgPhotoGraphyContest'
            src={photoInContest?.imgInSecondRow?.imgSeparate}
            alt='Image'
            width='100%'
            preview
            downloadable
          />
        </div>
      </div>
    </section>
  );
};

export default YCPhotoContestShow;
