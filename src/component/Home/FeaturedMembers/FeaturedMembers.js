import React from 'react';
import './FeatureMembers.css';
import { Button } from 'primereact/button';
import memberImg1 from '../../../assets/image/topmembers/drZia.png';
import memberImg2 from '../../../assets/image/topmembers/aziz.png';
import memberImg3 from '../../../assets/image/topmembers/tarikBabu.png';
import memberIm4 from '../../../assets/image/topmembers/img6.jpg';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';

const FeaturedMembers = () => {
  return (
    <div className='p-container mb-4'>
      <div className='featuredContainer  pt-5 pb-3 px-4'>
        <h3 className='orangeTextOrg text-xl text-center'>
          Our Featured Members
        </h3>
        <h1 className='mt-1 mb-2 textPrimeMembers text-4xl md:text-5xl'>
          People we are proud of for being with us!
        </h1>
        <span className='block text-gray-600 text-xl my-1 font-semibold text-center'>
          There are many variations of people in our community, who is best in
          his/her own position.
        </span>
        <div className='flex justify-content-center mt-4 mb-6'>
          <Link to='/memberList' className='linkDecoration'>
            <Button
              label='View All Members'
              className='p-button-rounded p-button-help p-button-outlined'
              icon='pi pi-angle-right'
              iconPos='right'
            />
          </Link>
        </div>
        <Fade bottom cascade duration={1200}>
          <div className='grid my-2'>
            <div className='col-12 md:col-6 lg:col-3 '>
              <div className='flex flex-column justify-content-center'>
                <div className='memberImgContainer'>
                  <img src={memberImg1} alt='' className='imgMember' />
                </div>
                <div className='memberDetail'>
                  <span className='block text-xl mb-1'>Dr. Ziauddin Ahmed</span>
                  <span className='block text-l text-gray-700'>
                    President of Bangladesh Medical Association of North America
                    (BMANA)
                  </span>
                  <div className='socailLinks mt-4 flex align-items-center'>
                    <i
                      className='pi pi-facebook mr-3'
                      style={{ fontSize: '1.5em' }}
                    ></i>
                    <i
                      className='pi pi-instagram'
                      style={{ fontSize: '1.5em' }}
                    ></i>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-12 md:col-6 lg:col-3'>
              <div className='flex flex-column justify-content-center'>
                <div className='memberImgContainer'>
                  <img src={memberImg2} alt='' className='imgMember' />
                </div>
                <div className='memberDetail'>
                  <span className='block text-xl mb-1'>Aziz Choudhury</span>
                  <span className='block text-l text-gray-700'>
                    Founder of Jamming Entertainment
                  </span>
                  <div className='socailLinks mt-4 flex align-items-center'>
                    <i
                      className='pi pi-facebook mr-3'
                      style={{ fontSize: '1.5em' }}
                    ></i>
                    <i
                      className='pi pi-instagram'
                      style={{ fontSize: '1.5em' }}
                    ></i>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-12 md:col-6 lg:col-3'>
              <div className='flex flex-column justify-content-center'>
                <div className='memberImgContainer'>
                  <img src={memberImg3} alt='' className='imgMember' />
                </div>
                <div className='memberDetail'>
                  <span className='block text-xl mb-1'>Tarik Babu</span>
                  <span className='block text-l text-gray-700'>
                    Founder President of NRB Global
                  </span>
                  <div className='socailLinks mt-4 flex align-items-center'>
                    <i
                      className='pi pi-facebook mr-3'
                      style={{ fontSize: '1.5em' }}
                    ></i>
                    <i
                      className='pi pi-instagram'
                      style={{ fontSize: '1.5em' }}
                    ></i>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-12 md:col-6 lg:col-3'>
              <div className='flex flex-column justify-content-center'>
                <div className='memberImgContainer'>
                  <img src={memberIm4} alt='' className='imgMember' />
                </div>
                <div className='memberDetail'>
                  <span className='block text-xl mb-1'>Atik Shahriar</span>
                  <span className='block text-base text-gray-700'>
                    Civil Engineer at RCC
                  </span>
                  <div className='socailLinks mt-4 flex align-items-center'>
                    <i
                      className='pi pi-facebook mr-3'
                      style={{ fontSize: '1.5em' }}
                    ></i>
                    <i
                      className='pi pi-instagram'
                      style={{ fontSize: '1.5em' }}
                    ></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default FeaturedMembers;
