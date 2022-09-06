import { Button } from 'primereact/button';
import React from 'react';
import { Link } from 'react-router-dom';
import './SingleServicePageAdditional.css';

const SingleServicePageAdditional = ({ singleService }) => {
  return (
    <div className='p-container mt-4 md:mt-0 mb-4 '>
      <div className='additionalInfoSIngleServicePageContainer py-5 px-4'>
        <div className='flex flex-column align-items-center'>
          <h2 className='text-bold  text-gray-700 my-3'>
            {singleService.name}
          </h2>
          <p className='text-bold my-3 text-blue-900'>
            NRB Global is committed to their members while giving services.
            Services provided by NRB globals will be one of the best community
            services in Bangladesh and other foreign countries. We are a big
            community who are pledge to serve the non residential people of
            Bangladesh. NRB is a non profitable organization who works for the
            betterment of Bangladeshi Community. We are now proving services
            like <span className='text-bluegray-900'>{singleService.name}</span>
            . We will expand our services and will expand our members soon.
          </p>
          <div>
            <div className='flex justify-content-center mt-5 mb-3'>
              <Link to='/contact' className='linkDecoration'>
                <Button
                  label='Contact for Support'
                  className='p-button-rounded p-button-primary p-button-outlined'
                  icon='pi pi-angle-right'
                  iconPos='right'
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleServicePageAdditional;
