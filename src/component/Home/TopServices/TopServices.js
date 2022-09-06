import { Button } from 'primereact/button';
import React from 'react';
import { Link } from 'react-router-dom';
import useDataContexts from '../../../hooks/useDataContexts';
import NrbService from '../../Services/AllServices/NrbService';
import './TopService.css';

const TopServices = () => {
  const { nrbServices } = useDataContexts();
  return (
    <div className='p-container my-4'>
      <div className='topServiceContainer py-5 px-4'>
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
          {nrbServices.slice(0, 4).map((singleService) => (
            <NrbService singleService={singleService} key={singleService.id} />
          ))}
        </div>
        <div className='flex justify-content-center mt-6 mb-4'>
          <Link to='/allservices' className='linkDecoration'>
            <Button
              label='View All Services'
              className='p-button-rounded p-button-help p-button-outlined'
              icon='pi pi-angle-right'
              iconPos='right'
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopServices;
