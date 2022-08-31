import React from 'react';
import './WhyJoinNRB.css';
import supportImg from '../../../assets/image/whyJoin/support-removebg-preview.png';
import path from '../../../assets/image/whyJoin/path-removebg-preview.png';
import comm from '../../../assets/image/whyJoin/comm-removebg-preview.png';
import encourage from '../../../assets/image/whyJoin/encourage-removebg-preview.png';

const WhyJoinNRB = () => {
  return (
    <div className='p-container mb-4'>
      <div className='sectionWhyContainer  py-5 px-4'>
        <h1 className='text-4xl md:text-5xl mt-3 mb-3 md:mb-6 textWhy text-center'>
          Why Join US?{' '}
        </h1>
        <div className='grid'>
          <div className='col-12 md:col-6 flex align-items-center flex-column justify-content-center p-6 whyContents'>
            <div className='imgContainerJoin'>
              <img src={path} alt='' />
            </div>
            <p className='fontDesc text-start my-2'>
              <span className='font-semibold '>Guiding and Coaching</span>{' '}
              University students, young graduates and about-to-start-young
              entrepreneurs in their life, career, and entrepreneurial steps in
              foreign countries. We provide feedback during seminars and offer
              access to our cast networks.
            </p>
          </div>
          <div className='col-12 md:col-6 flex align-items-center flex-column justify-content-center p-6 whyContents'>
            <div className='imgContainerJoin'>
              <img src={encourage} alt='' />
            </div>
            <p className='fontDesc text-start my-2'>
              <span className='font-bold '>Encouraging</span> youths,
              students,and their parents, service holders, businessmen, workers
              by sharing our own vita and experiences with them, coveying one
              central message: "Desh o Probasher Shetubondhon. NRB Global
              welcome everyone"
            </p>
          </div>
          <div className='col-12 md:col-6 flex align-items-center flex-column justify-content-center p-6 whyContents'>
            <div className='imgContainerJoin'>
              <img src={supportImg} alt='' />
            </div>
            <p className='fontDesc text-start my-2'>
              <span className='font-bold '>
                Supporting Business, and Entrepreneurs and Students
              </span>{' '}
              with exceptional ideas and problems to raise capital. We provide
              guidance for getting loans, scholarships and other financial
              offers.
            </p>
          </div>
          <div className='col-12 md:col-6 flex align-items-center flex-column justify-content-center p-6 whyContents'>
            <div className='imgContainerJoin'>
              <img src={comm} alt='' />
            </div>
            <p className='fontDesc text-start my-2'>
              <span className='font-bold '>Communicating and helping</span> each
              other regularly via our digital medias, meeting offline,
              organizing events, and mingling with a variety of founders with
              immigration backgrounds in different countries. We represent
              Bangladesh.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyJoinNRB;
