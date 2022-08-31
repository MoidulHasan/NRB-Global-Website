import React, { useState } from 'react';
import img1 from '../../../assets/image/headerback.png';
import './CommunityReviews.css';
import imgrev1 from '../../../assets/image/commReviews/comRev1.jpg';
import imgrev11 from '../../../assets/image/commReviews/comRev11.jpg';
import imgrev2 from '../../../assets/image/commReviews/comriv2.jpg';
import imgrev22 from '../../../assets/image/commReviews/comriv22.jpg';
import imgrev3 from '../../../assets/image/commReviews/comriv3.jpg';
import imgrev33 from '../../../assets/image/commReviews/comriv33.jpg';

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
          height: '200px',
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
                  <img src={picChange1 ? imgrev11 : imgrev1} alt='' />
                </div>
                <div className='reviewTextSec'>
                  <h4 className=''>
                    "An international platform to represent Bangladesh. A lot of
                    kind hearted people maintain the community. Love NRB Global"
                  </h4>
                  <span className='block reviewPerson font-bold'>
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
                  <img src={picChange2 ? imgrev22 : imgrev2} alt='' />
                </div>
                <div className='reviewTextSec'>
                  <h4 className=''>
                    "NRB Global helped me to be successful. Excellent level of
                    communication enable people to grow more here."
                  </h4>
                  <span className='block reviewPerson font-bold'>
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
                  <img src={picChange3 ? imgrev3 : imgrev33} alt='' />
                </div>
                <div className='reviewTextSec'>
                  <h4 className=''>
                    "NRB Global makes me fill like home in abroad. Different
                    kind of meetings, hangouts, communication systems are highly
                    appreciable"
                  </h4>
                  <span className='block reviewPerson font-bold'>
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
