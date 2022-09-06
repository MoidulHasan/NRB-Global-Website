import { Button } from 'primereact/button';
import React from 'react';
import { Link } from 'react-router-dom';
import ExecutiveCommitteeMemberCarousel from './ExecutiveCommitteeMemberCarousel/ExecutiveCommitteeMemberCarousel';
import './ExecutiveCommitteeMembers.css';

const ExecutiveCommitteeMembers = () => {
  return (
    <div className='p-container my-4'>
      <div className='executiveCommitteMemberHomeContainer pt-5 pb-3 px-4'>
        <h3 className='orangeTextOrg text-xl text-center'>
          Cabinate Members of NRB GLobal
        </h3>
        <span className='block text-gray-600 text-xl mt-1 mb-4 font-semibold text-center'>
          There are many variations of people in our community, who is best in
          his/her own position.
        </span>
        <div className='flex justify-content-center mt-4 mb-6'>
          <Link to='/cabinateMembers' className='linkDecoration'>
            <Button
              label='View Cabinate Members'
              className='p-button-rounded p-button-help p-button-outlined'
              icon='pi pi-angle-right'
              iconPos='right'
            />
          </Link>
        </div>
        <section>
          <ExecutiveCommitteeMemberCarousel />
        </section>
      </div>
    </div>
  );
};

export default ExecutiveCommitteeMembers;
