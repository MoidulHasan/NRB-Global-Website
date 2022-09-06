import { Button } from 'primereact/button';
import React from 'react';
import './MemberServicesList.css';
import useDataContexts from '../../../../../hooks/useDataContexts';
import NrbService from '../../../../Services/AllServices/NrbService';

const MemberServiceList = () => {
  const { nrbServices } = useDataContexts();
  console.log(nrbServices);
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
          {nrbServices.map((singleService) => (
            <NrbService key={singleService.id} singleService={singleService} />
          ))}
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
