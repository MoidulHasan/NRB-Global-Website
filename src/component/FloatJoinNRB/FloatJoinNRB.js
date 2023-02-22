import React from 'react';
import { Link } from 'react-router-dom';
import './FloatJoinNRB.css';

const FloatJoinNRB = () => {
  return (
    <div className='flex align-items-center justify-content-center pt-7 pb-5'>
      <Link to='/gmRegistration' className='linkDecoration floatButtonLink'>
        <span>Join NRB Global</span>
        <div class='liquid'></div>
      </Link>
    </div>
  );
};

export default FloatJoinNRB;
