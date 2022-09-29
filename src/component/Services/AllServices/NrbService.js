import React from 'react';
import { Link } from 'react-router-dom';
import './NrbService.css';

const NrbService = ({ singleService }) => {
  return (
    <div className='col-12 md:col-3 singleServiceContainer'>
      <div className='flex justify-content-center flex-column serviceContent'>
        <div className='imgServiceContainer'>
          <img src={singleService.image} alt='' className='imgService' />
        </div>
        <Link to='/allservices' className='toLinkText'>
          <h2 className='text-2xl textPrimeService mt-2'>
            {singleService.name}
          </h2>
        </Link>
        <Link to={`/allservices/${singleService.id}`} className='toLinkText'>
          <p className=' ml-4 md:ml-8 textPrimeService flex align-items-center'>
            <span class='material-icons-sharp mr-2'>info</span>See Details
          </p>
        </Link>
      </div>
    </div>
  );
};

export default NrbService;
