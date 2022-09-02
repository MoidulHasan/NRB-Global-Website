import { Button } from 'primereact/button';
import React from 'react';
import './MemberServicesList.css';
import { Link } from 'react-router-dom';
import './MemberServicesList.css';
import support1 from '../../../../../assets/image/support/handSupp.gif';
import support2 from '../../../../../assets/image/support/Untitled design (6).png';
import support3 from '../../../../../assets/image/support/Untitled design (7).png';
import support4 from '../../../../../assets/image/support/Untitled design (8).png';
import support5 from '../../../../../assets/image/support/studentSteps.gif';
import support6 from '../../../../../assets/image/support/encourage-removebg-preview.png';
import support7 from '../../../../../assets/image/support/step.png';
import support8 from '../../../../../assets/image/support/pathmerge.png';
import support9 from '../../../../../assets/image/support/deadbody.png';
import support10 from '../../../../../assets/image/support/e doctor.png';

const MemberServiceList = () => {
  return (
    <div className='p-container my-4'>
      <div className='mmbrServiceListContainer py-5 px-4'>
        <h3 className='orangeTextOrg text-xl text-center'>
          Services Our Members Get
        </h3>
        <h1 className='mt-1 mb-2 textPrimeMembers text-4xl md:text-5xl'>
          NRB Global is a family to serve our non residential Bangladesh
          community.
        </h1>
        <span className='block text-gray-600 text-xl my-1 font-semibold text-center'>
          Variety of services provided by NRB global helps you to grow and feel
          like home outside Bangladesh.
        </span>

        <div className='grid mt-6'>
          <div className='col-12 md:col-3'>
            <div className='flex justify-content-center flex-column serviceContent'>
              <div className='imgServiceContainer'>
                <img src={support1} alt='' className='imgService' />
              </div>
              <Link to='/services' className='toLinkText'>
                <h2 className='text-2xl textPrimeService mt-2'>
                  Relief Support
                </h2>
                <p className=' ml-4 md:ml-8 textPrimeService flex align-items-center'>
                  <span class='material-icons-sharp mr-2'>info</span>See Details
                </p>
              </Link>
            </div>
          </div>
          <div className='col-12 md:col-3'>
            <div className='flex justify-content-center flex-column serviceContent'>
              <div className='imgServiceContainer'>
                <img src={support2} alt='' className='imgService' />
              </div>
              <Link to='/services' className='toLinkText'>
                <h2 className='text-2xl textPrimeService mt-2'>
                  Business Support
                </h2>
                <p className=' ml-4 md:ml-8 textPrimeService flex align-items-center'>
                  <span class='material-icons-sharp mr-2'>info</span>See Details
                </p>
              </Link>
            </div>
          </div>
          <div className='col-12 md:col-3'>
            <div className='flex justify-content-center flex-column serviceContent'>
              <div className='imgServiceContainer'>
                <img src={support3} alt='' className='imgService' />
              </div>
              <Link to='/services' className='toLinkText'>
                <h2 className='text-2xl textPrimeService mt-2'>
                  Consultant Support
                </h2>
                <p className=' ml-4 md:ml-8 textPrimeService flex align-items-center'>
                  <span class='material-icons-sharp mr-2'>info</span>See Details
                </p>
              </Link>
            </div>
          </div>
          <div className='col-12 md:col-3'>
            <div className='flex justify-content-center flex-column serviceContent'>
              <div className='imgServiceContainer'>
                <img src={support4} alt='' className='imgService' />
              </div>
              <Link to='/services' className='toLinkText'>
                <h2 className='text-2xl textPrimeService mt-2'>Law Support</h2>
                <p className=' ml-4 md:ml-8 textPrimeService flex align-items-center'>
                  <span class='material-icons-sharp mr-2'>info</span>See Details
                </p>
              </Link>
            </div>
          </div>
          <div className='col-12 md:col-3'>
            <div className='flex justify-content-center flex-column serviceContent'>
              <div className='imgServiceContainer'>
                <img src={support5} alt='' className='imgService' />
              </div>
              <Link to='/services' className='toLinkText'>
                <h2 className='text-2xl textPrimeService mt-2'>
                  Student Support
                </h2>
                <p className=' ml-4 md:ml-8 textPrimeService flex align-items-center'>
                  <span class='material-icons-sharp mr-2'>info</span>See Details
                </p>
              </Link>
            </div>
          </div>
          <div className='col-12 md:col-3'>
            <div className='flex justify-content-center flex-column serviceContent'>
              <div className='imgServiceContainer'>
                <img src={support6} alt='' className='imgService' />
              </div>
              <Link to='/services' className='toLinkText'>
                <h2 className='text-2xl textPrimeService mt-2'>
                  Community Support
                </h2>
                <p className=' ml-4 md:ml-8 textPrimeService flex align-items-center'>
                  <span class='material-icons-sharp mr-2'>info</span>See Details
                </p>
              </Link>
            </div>
          </div>
          <div className='col-12 md:col-3'>
            <div className='flex justify-content-center flex-column serviceContent'>
              <div className='imgServiceContainer'>
                <img src={support7} alt='' className='imgService' />
              </div>
              <Link to='/services' className='toLinkText'>
                <h2 className='text-2xl textPrimeService mt-2'>Loan Support</h2>
                <p className=' ml-4 md:ml-8 textPrimeService flex align-items-center'>
                  <span class='material-icons-sharp mr-2'>info</span>See Details
                </p>
              </Link>
            </div>
          </div>
          <div className='col-12 md:col-3'>
            <div className='flex justify-content-center flex-column serviceContent'>
              <div className='imgServiceContainer'>
                <img src={support8} alt='' className='imgService' />
              </div>
              <Link to='/services' className='toLinkText'>
                <h2 className='text-2xl textPrimeService mt-2'>
                  E Doctor Support
                </h2>
                <p className=' ml-4 md:ml-8 textPrimeService flex align-items-center'>
                  <span class='material-icons-sharp mr-2'>info</span>See Details
                </p>
              </Link>
            </div>
          </div>
          <div className='col-12 md:col-3'>
            <div className='flex justify-content-center flex-column serviceContent'>
              <div className='imgServiceContainer'>
                <img src={support10} alt='' className='imgService' />
              </div>
              <Link to='/services' className='toLinkText'>
                <h2 className='text-2xl textPrimeService mt-2'>Job Support</h2>
                <p className=' ml-4 md:ml-8 textPrimeService flex align-items-center'>
                  <span class='material-icons-sharp mr-2'>info</span>See Details
                </p>
              </Link>
            </div>
          </div>
          <div className='col-12 md:col-3'>
            <div className='flex justify-content-center flex-column serviceContent'>
              <div className='imgServiceContainer'>
                <img src={support9} alt='' className='imgService' />
              </div>
              <Link to='/services' className='toLinkText'>
                <h2 className='text-2xl textPrimeService mt-2'>
                  Dead Body Support
                </h2>
                <p className=' ml-4 md:ml-8 textPrimeService flex align-items-center'>
                  <span class='material-icons-sharp mr-2'>info</span>See Details
                </p>
              </Link>
            </div>
          </div>
        </div>
        <div className='flex justify-content-center mt-6 mb-4'>
          <Button
            label='View All Services'
            className='p-button-rounded p-button-help p-button-outlined'
            icon='pi pi-angle-right'
            iconPos='right'
          />
        </div>
      </div>
    </div>
  );
};

export default MemberServiceList;
