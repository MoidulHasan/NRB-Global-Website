import React, { useState } from 'react';
import img1 from '../../../assets/image/headerback.png';
import './CommunityReviews.css';
import imgrev1 from '../../../assets/image/commReviews/review1.png';
import imgrev11 from '../../../assets/image/commReviews/review11.png';
import imgrev2 from '../../../assets/image/commReviews/review2.png';
import imgrev22 from '../../../assets/image/commReviews/review22.png';
import imgrev3 from '../../../assets/image/commReviews/review3.png';
import imgrev33 from '../../../assets/image/commReviews/review33.png';

const CommunityReviews = () => {
  const [picChange1, setPicChange1] = useState(false);
  const [picChange2, setPicChange2] = useState(false);
  const [picChange3, setPicChange3] = useState(false);

  const onMouseEnter = (refer) => {
    if (refer === 1) {
      setPicChange1(true);
    } else if (refer === 3) {
      setPicChange3(true);
    } else {
      setPicChange2(true);
    }
  };
  const onMouseLeave = (refer) => {
    if (refer === 1) {
      setPicChange1(false);
    } else if (refer === 3) {
      setPicChange3(false);
    } else {
      setPicChange2(false);
    }
  };
  return (
    <div>
      <div
        className='communityHeader-lg mt-4 mb-4'
        style={{
          backgroundImage: `url(${img1})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          height: '250px',
        }}
      >
        <div className='textReview'>
          <h2 className='text-5xl my-2 text-bold textReviewHeader'>
            Community Reviews
          </h2>
          <p className='mt-1 textReviewSub text-xl'>
            Loved by organizations and individuals across the globe
          </p>
        </div>
      </div>
      <div className='p-container mb-4'>
        <div className='communityReviewContainer py-5'>
          <div className='grid'>
            <div className='col-12 md:col-6 lg:col-4 '>
              <div className='singleReview p-4'>
                <div
                  className='revImgContainer'
                  onMouseEnter={() => onMouseEnter(1)}
                  onMouseLeave={() => onMouseLeave(1)}
                >
                  <img src={picChange1 ? imgrev1 : imgrev11} alt='' />
                </div>
                <div className='reviewTextSec'>
                  <div className='flex gap-3'>
                    <svg
                      width='16'
                      height='16'
                      viewBox='0 0 12 10'
                      xmlns='http://www.w3.org/2000/svg'
                      className='flex-shrink-0 fill-orange-600'
                    >
                      <path
                        fill-rule='evenodd'
                        clip-rule='evenodd'
                        d='M11.4655 1.6721C9.84947 2.43612 9.04145 3.33384 9.04145 4.36526C9.73027 4.44166 10.2999 4.71225 10.7502 5.17703C11.2006 5.64181 11.4258 6.1798 11.4258 6.79101C11.4258 7.44043 11.2072 7.98797 10.7701 8.43365C10.333 8.87933 9.78325 9.10216 9.12093 9.10216C8.37913 9.10216 7.73669 8.81248 7.19359 8.2331C6.65048 7.65371 6.37894 6.95019 6.37894 6.1225C6.37894 3.63943 7.82277 1.69758 10.7105 0.296875L11.4655 1.6721ZM5.76238 1.6721C4.13307 2.43612 3.31843 3.33384 3.31843 4.36526C4.02049 4.44166 4.5967 4.71225 5.04708 5.17703C5.49745 5.64181 5.72264 6.1798 5.72264 6.79101C5.72264 7.44043 5.50077 7.98797 5.05701 8.43365C4.61326 8.87933 4.06023 9.10216 3.39791 9.10216C2.65611 9.10216 2.01698 8.81248 1.4805 8.2331C0.944017 7.65371 0.675781 6.95019 0.675781 6.1225C0.675781 3.63943 2.113 1.69758 4.98747 0.296875L5.76238 1.6721Z'
                      ></path>
                    </svg>
                    <h4 className=''>
                      An international platform to represent Bangladesh. A lot
                      of kind hearted people maintain the community. Love NRB
                      Global
                    </h4>
                  </div>
                  <span className='block reviewPerson font-bold text-orange-500'>
                    Kamal Hossain
                  </span>
                  <span className='personPosition text-gray-500'>
                    Social Worker
                  </span>
                </div>
              </div>
            </div>
            <div className='col-12 md:col-6 lg:col-4 '>
              <div className='singleReview p-4'>
                <div
                  className='revImgContainer'
                  onMouseEnter={() => onMouseEnter(2)}
                  onMouseLeave={() => onMouseLeave(2)}
                >
                  <img src={picChange2 ? imgrev3 : imgrev33} alt='' />
                </div>
                <div className='reviewTextSec'>
                  <div className='flex gap-3'>
                    <svg
                      width='16'
                      height='16'
                      viewBox='0 0 12 10'
                      xmlns='http://www.w3.org/2000/svg'
                      className='flex-shrink-0 fill-orange-600'
                    >
                      <path
                        fill-rule='evenodd'
                        clip-rule='evenodd'
                        d='M11.4655 1.6721C9.84947 2.43612 9.04145 3.33384 9.04145 4.36526C9.73027 4.44166 10.2999 4.71225 10.7502 5.17703C11.2006 5.64181 11.4258 6.1798 11.4258 6.79101C11.4258 7.44043 11.2072 7.98797 10.7701 8.43365C10.333 8.87933 9.78325 9.10216 9.12093 9.10216C8.37913 9.10216 7.73669 8.81248 7.19359 8.2331C6.65048 7.65371 6.37894 6.95019 6.37894 6.1225C6.37894 3.63943 7.82277 1.69758 10.7105 0.296875L11.4655 1.6721ZM5.76238 1.6721C4.13307 2.43612 3.31843 3.33384 3.31843 4.36526C4.02049 4.44166 4.5967 4.71225 5.04708 5.17703C5.49745 5.64181 5.72264 6.1798 5.72264 6.79101C5.72264 7.44043 5.50077 7.98797 5.05701 8.43365C4.61326 8.87933 4.06023 9.10216 3.39791 9.10216C2.65611 9.10216 2.01698 8.81248 1.4805 8.2331C0.944017 7.65371 0.675781 6.95019 0.675781 6.1225C0.675781 3.63943 2.113 1.69758 4.98747 0.296875L5.76238 1.6721Z'
                      ></path>
                    </svg>
                    <h4 className=''>
                      NRB Global helped me to be successful. Excellent level of
                      communication enable people to grow more here.
                    </h4>
                  </div>
                  <span className='block reviewPerson font-bold text-orange-500'>
                    Samiul Hasan
                  </span>
                  <span className='personPosition text-gray-500'>
                    Restaurant Owner
                  </span>
                </div>
              </div>
            </div>
            <div className='col-12 md:col-6 lg:col-4 '>
              <div className='singleReview p-4'>
                <div
                  className='revImgContainer'
                  onMouseEnter={() => onMouseEnter(3)}
                  onMouseLeave={() => onMouseLeave(3)}
                >
                  <img src={picChange3 ? imgrev2 : imgrev22} alt='' />
                </div>
                <div className='reviewTextSec'>
                  <div className='flex gap-3'>
                    <svg
                      width='16'
                      height='16'
                      viewBox='0 0 12 10'
                      xmlns='http://www.w3.org/2000/svg'
                      className='flex-shrink-0 fill-orange-600'
                    >
                      <path
                        fill-rule='evenodd'
                        clip-rule='evenodd'
                        d='M11.4655 1.6721C9.84947 2.43612 9.04145 3.33384 9.04145 4.36526C9.73027 4.44166 10.2999 4.71225 10.7502 5.17703C11.2006 5.64181 11.4258 6.1798 11.4258 6.79101C11.4258 7.44043 11.2072 7.98797 10.7701 8.43365C10.333 8.87933 9.78325 9.10216 9.12093 9.10216C8.37913 9.10216 7.73669 8.81248 7.19359 8.2331C6.65048 7.65371 6.37894 6.95019 6.37894 6.1225C6.37894 3.63943 7.82277 1.69758 10.7105 0.296875L11.4655 1.6721ZM5.76238 1.6721C4.13307 2.43612 3.31843 3.33384 3.31843 4.36526C4.02049 4.44166 4.5967 4.71225 5.04708 5.17703C5.49745 5.64181 5.72264 6.1798 5.72264 6.79101C5.72264 7.44043 5.50077 7.98797 5.05701 8.43365C4.61326 8.87933 4.06023 9.10216 3.39791 9.10216C2.65611 9.10216 2.01698 8.81248 1.4805 8.2331C0.944017 7.65371 0.675781 6.95019 0.675781 6.1225C0.675781 3.63943 2.113 1.69758 4.98747 0.296875L5.76238 1.6721Z'
                      ></path>
                    </svg>
                    <h4 className=''>
                      NRB Global makes me fill like home in abroad. Different
                      kind of meetings, hangouts are highly appreciable.
                    </h4>
                  </div>
                  <span className='block reviewPerson font-bold text-orange-500'>
                    Nusrat Tabassum
                  </span>
                  <span className='personPosition text-gray-500'>
                    University Student
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityReviews;
