import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import kajkamLogo from '../../assets/image/kajkamlogo.png';

const Footer = () => {
  return (
    <div className='footerContainer'>
      <div className='p-container mt-6 mb-0'>
        <div className='grid mb-4'>
          <div className='col-12 md:col-3 pr-4 md:pr-8'>
            <h1 className='text-3xl footerLogoColor'>NRB Global</h1>
            <span className='my-4 text-sm font-semibold detailColor'>
              NRb Global is one of the Bangladesh's largest non residential
              community that provides a one-stop platform for students, youth,
              businessmen, job holders to cope up in foreign, learn new
              screen,network with peers, and grow as an individual.
            </span>
          </div>
          <div className='col-12 md:col-3'>
            <h2 className='text-l'>Community</h2>
            <div className='flex flex-column listContainer font-bold'>
              <Link to='/about' className='linkDecoration my-2'>
                <li>About</li>
              </Link>
              <Link to='/about' className='linkDecoration my-2'>
                <li>Privacy policy</li>
              </Link>
              <Link to='/about' className='linkDecoration my-2'>
                <li>Terms & Condition</li>
              </Link>
            </div>
          </div>
          <div className='col-12 md:col-3'>
            <h2 className='text-l'>Other Links</h2>
            <div className='flex flex-column listContainer font-bold'>
              <Link to='/about' className='linkDecoration my-2'>
                <li>Community</li>
              </Link>
              <Link to='/events' className='linkDecoration my-2'>
                <li>Events</li>
              </Link>
              <Link to='/gmRegistration' className='linkDecoration my-2'>
                <li>Registration</li>
              </Link>
              <Link to='/contact' className='linkDecoration my-2'>
                <li>Contact</li>
              </Link>
            </div>
          </div>
          <div className='col-12 md:col-3'>
            <h2 className='text-l uppercase'>Contact Us</h2>
            <span className='orangeTextOrg '>support@nrbglobal.org</span>
            <div className='flex align-items-center justify-content-start my-4'>
              <a
                href='https://www.facebook.com/NRBGlobal20'
                target='_blanck'
                className='linkKajkam instaLink'
              >
                <span className='mr-3'>
                  <i className='pi pi-instagram text-xl'></i>
                </span>
              </a>

              <a
                href='https://www.facebook.com/NRBGlobal20'
                target='_blanck'
                className='linkKajkam twitterLink'
              >
                <span className='mr-3'>
                  <i className='pi pi-twitter text-xl'></i>
                </span>
              </a>

              <a
                href='https://www.facebook.com/NRBGlobal20'
                target='_blanck'
                className='linkKajkam fbLink'
              >
                <span className='mr-3'>
                  <i className='pi pi-facebook text-xl'></i>
                </span>
              </a>

              <a
                href='https://www.linkedin.com/company/kajkam-initiative-ltd/'
                target='_blanck'
                className='linkKajkam linkedinLink'
              >
                <span className='mr-3'>
                  <i className='pi pi-linkedin text-xl'></i>
                </span>
              </a>

              <a
                href='https://www.youtube.com/channel/UCqOkpldBPoXCpi62nt9UioQ'
                target='_blanck'
                className='linkKajkam youtubeLink'
              >
                <span className='mr-3'>
                  <i className='pi pi-youtube text-xl'></i>
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className='hidden md:flex copywrite mt-2 mb-0 align-items-center justify-content-between'>
          <h4 className='text-bold text-xl flex align-items-center '>
            <span className='material-icons-sharp mr-2'>copyright</span> 2022,
            <span className='footerLogoColor ml-2 mr-1'>NRB Global. </span> All
            rights reserved.
          </h4>
          <a
            className='linkKajkam flex align-items-center'
            href='https://kajkaminitiative.com/'
            target='_blanck'
          >
            <span className='font-bold'>Developed By</span>
            <img
              src={kajkamLogo}
              alt='kajkaminitiative.com'
              width='180px'
              //   className=''
            />
          </a>
        </div>
        <div className='grid md:hidden copywrite mt-2 mb-0'>
          <div className='col-12'>
            <h4 className='text-bold text-base flex align-items-center justify-content-center'>
              <span className='material-icons-sharp mr-1'>copyright</span> 2022,
              <span className='orangeTextOrg ml-2 mr-1'>NRB Global. </span> All
              rights reserved.
            </h4>
          </div>
          <div className='col-12'>
            <a
              className='linkKajkam flex align-items-center justify-content-center'
              href='https://kajkaminitiative.com/'
              target='_blanck'
            >
              <span className='font-bold'>Developed By</span>
              <img
                src={kajkamLogo}
                alt='kajkaminitiative.com'
                width='180px'
                //   className=''
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
