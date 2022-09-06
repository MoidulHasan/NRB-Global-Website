import React from 'react';
import './FeatureMembers.css';
import { Button } from 'primereact/button';
import memberImg1 from '../../../assets/image/topmembers/img3.jpg';
import memberImg2 from '../../../assets/image/topmembers/img4.jpg';
import memberImg3 from '../../../assets/image/topmembers/img5.jpg';
import memberIm4 from '../../../assets/image/topmembers/img6.jpg';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';

const FeaturedMembers = () => {
  return (
    <div className='p-container mb-4'>
      <div className='sectionWhyContainer  pt-5 pb-3 px-4'>
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
                  <span className='block text-xl mb-1'>Hasan Ahmed</span>
                  <span className='block text-l text-gray-700'>
                    SE at Kajkam Init
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
                  <span className='block text-xl mb-1'>Moidul Hasan Khan</span>
                  <span className='block text-l text-gray-700'>
                    SE at Kajkam Init
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
                  <span className='block text-xl mb-1'>
                    Raida Fairuz Nashra
                  </span>
                  <span className='block text-l text-gray-700'>
                    Member of UK Parliament
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
                  <span className='block text-l text-gray-700'>
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
