import React from 'react';
import { Fade, Slide } from 'react-reveal';
import founder from '../../../assets/image/about/founder2.jpg';
import './Founder.css';

const Founder = () => {
  return (
    <div className='p-container my-5'>
      <div className=' px-4 py-4 nrbFounderDiv'>
        <div className='grid py-3'>
          <div className='col-12 md:col-6'>
            <h4 className='my-4 font-bold text-3xl md:text-6xl text-blue-900'>
              Founder's Message
            </h4>
            <Slide cascade left duration={1300}>
              <div className='founderMassageDiv flex flex-column p-2'>
                <svg
                  width='50'
                  height='50'
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

                <p className='text-base md:text-xl text-blue-900 font-medium founderMessageText pr-2 md:pr-6 pl-2 md:pl-5'>
                  NRB Global Non-resident Bangladeshi a completely different
                  type of Global based organization formed by the Expatriate
                  Bangladeshi Community Worldwide. This is the first worldwide
                  15 Million Bangladeshi people's platform, a non-profit and
                  non-political organization for 15 Million Bangladeshi living
                  in different countries in the world. We also roared our voice
                  putting our shoulders to the shoulders of international human
                  rights organizations. NRB Global has efficiently done the job
                  of " image-building" of Bangladesh abroad maintaining a deep
                  relationship with the icon(Bangladeshi Star) most designated
                  officials of the administration of different countries. NRB
                  Global is the bridge between Bangladesh and abroad.
                </p>

                <div className='founderNameDiv flex align-items-center justify-content-end text-blue-900'>
                  <div className='founderDetail flex'>
                    <span className='material-icons-sharp text-5xl '>
                      remove
                    </span>
                    <div className='founderNameDesignation ml-2'>
                      <h5 className='text-3xl font-bold my-1 text-center'>
                        Tarik Babu
                      </h5>
                      <span className='text-semibold text-lg my-0'>
                        Founder, NRB Global
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Slide>
          </div>
          <div className='col-12 md:col-6 flex align-items-center justify-content-center'>
            <div className='founderImgDiv '>
              <img src={founder} alt='Tariq Babu' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Founder;
