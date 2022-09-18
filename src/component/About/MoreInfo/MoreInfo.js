import React from 'react';
import './Morinfo.css';

import vision2025 from '../../../assets/image/aboutRefactor/objmoreImg3.png';
import rowImg1 from '../../../assets/image/aboutRefactor/objmoreImg1Row2.png';
import rowImg3 from '../../../assets/image/aboutRefactor/orbmoreImg3Row3.png';
import rowImg4 from '../../../assets/image/aboutRefactor/objmoreImg2Row2.png';

const MoreInfo = () => {
  return (
    <div className='p-container my-6'>
      <div className='px-4 py-4 moreInfoContaierAbout'>
        <div className='moreInfoHeading flex flex-column align-items-center text-blue-900 pb-4'>
          <h4 className='font-bold text-5xl my-4 '>
            NRB Global's Extended Vision and Future Goals
          </h4>
          <p className='text-xl my-2 font-bold text-center'>
            NRB Global is set to serve the country, Bangladesh and all the Non
            Resident Bangladeshies. We are the first biggest non resident
            Bangladeshi community and growing rapidly. We hope to help everyone.
          </p>
        </div>
        <div className='grid my-6'>
          <div className='col-12 md:col-4 moreTextInfoColumn'>
            <div className='moreInfoOfAbout p-3 text-center'>
              <p className='font-semibold text-blue-900 my-2 p-1 extendedAboutText'>
                NRB Global Non-resident Bangladeshi a completely different type
                of Global based organization formed by the Expatriate
                Bangladeshi Community Worldwide. This is the first worldwide 15
                Million Bangladeshi people's platform, a non-profit and
                non-political organization for 15 Million Bangladeshi living in
                different countries in the world. We also roared our voice
                putting our shoulders to the shoulders of international human
                rights organizations. NRB Global has efficiently done the job of
                " image-building" of Bangladesh abroad maintaining a deep
                relationship with the icon(Bangladeshi Star) most designated
                officials of the administration of different countries. NRB
                Global is the bridge between Bangladesh and abroad.
              </p>
            </div>
          </div>
          <div className='col-12 md:col-4'>
            <div className='moreInfoImgContainer'>
              <img src={vision2025} alt='vision 2025' className='' />
            </div>
          </div>
          <div className='col-12 md:col-4 moreTextInfoColumn'>
            <div className='moreInfoOfAbout p-3 text-center'>
              <p className='font-semibold text-blue-900 my-2 p-1 extendedAboutText'>
                NRB Global Non-resident Bangladeshi feels that your experience
                in working with the Bangladeshi NRB’s community as well as your
                knowledge of the Diaspora issue, plus Expatriates knowledge of
                Bangladesh social and economic situation would become a
                tremendous asset to our success. As you know more than 15
                Million NRB’s are living across the globe. The Remittance from
                the NRB is approximately 10% of the GDP of Bangladesh. Aside
                from sending hefty remittance, each NRB Global is a 'Brand
                Ambassador' aboard for our homeland. NRB's Bangladeshis in the
                Middle East, Europe, Australia, America, Canada, and elsewhere
                are creating a good reputation for Bangladesh with their hard
                work, honestly, and ingenuity.
              </p>
            </div>
          </div>
          <div className='col-12 md:col-4 '>
            <div className='moreInfoImgContainer'>
              <img src={rowImg1} alt='vision 2025' className='' />
            </div>
          </div>
          <div className='col-12 md:col-4'>
            <div className='moreInfoOfAbout p-3 text-center'>
              <p className='font-semibold text-blue-900 my-2 p-1 extendedAboutText'>
                From NSSA to Massachusetts (MIT), the Restaurant business in
                London, a small business in Jackson Heights, New York, Middle
                East real estate business, we are so proud of NRB'S active
                parliamentarians in the US and UK. Imaging all the successful
                and talented Bangladeshi NRB is unified and unified, under one
                Global umbrella platform, to work shoulder to shoulder and hand
                in hand for the betterment of our motherland. <br />
                NRB Global is the symbol of Unity among the healthy diversity of
                our multi-talented community and beyond. NRB Global synergizes
                the mutual benefit of our great community around the world.
              </p>
            </div>
          </div>
          <div className='col-12 md:col-4 '>
            <div className='moreInfoImgContainer'>
              <img src={rowImg3} alt='vision 2025' className='' />
            </div>
          </div>
          <div className='col-12 md:col-4'>
            <div className='moreInfoOfAbout p-3 text-center'>
              <p className='font-semibold text-blue-900 my-2 p-1 extendedAboutText'>
                NRB Global and their families save on the earth by offering our
                quality services like help our NRB Global Peoples around the
                world, our core values are Complete Honesty, Integrity,
                Transparency, and Trust. <br /> NRB Global great tools in
                establishing a great platform that can be the richest strongest
                and powerful tool in bringing a miracle change in all NRBs life
                all over the world as well as it can create a great and very
                valuable impact on a political platform in Bangladesh. <br />{' '}
                NRB Global can do a great deal of lobbying here to enforce
                justice in fair elections in Bangladesh. NRB Global will create
                a very strong monitoring cell in Bangladesh when our Expatriates
                visit Bangladesh.
              </p>
            </div>
          </div>
          <div className='col-12 md:col-4 '>
            <div className='moreInfoImgContainer'>
              <img src={rowImg4} alt='vision 2025' className='' />
            </div>
          </div>
          <div className='col-12 md:col-4'>
            <div className='moreInfoOfAbout p-3 text-center'>
              <p className='font-semibold text-blue-900 my-2 p-1 extendedAboutText'>
                The slogan should be something like True patriotism begins here,
                No more Blood for freedom rather, Social justice to establish
                freedom, No more freedom by word Rather Freedom has to be
                established and honored by action, Freedom must prevail, social
                justice must flourish, Darkness must vanish, Truth must Rise,
                Falsehood must erase, United we stand, United we achieve. <br />{' '}
                As we look to the future of the probable alliance between our
                community and the local government, we are committed to a new
                beginning partnership that will continue for many generations in
                fostering our culture and heritage to creating a better global
                understanding of humanity.
              </p>
            </div>
          </div>
        </div>
        <div className='flex flex-column align-items-center my-2 p-3 thankMessageAbout'>
          <p className='font-bold text-3xl my-2 text-blue-900 text-center p-2'>
            Thanks for your time to read our mission and vision and to consider
            a member of the NRB Global Non-resident Bangladeshi worldwide
            Platform
          </p>
        </div>
      </div>
    </div>
  );
};

export default MoreInfo;
