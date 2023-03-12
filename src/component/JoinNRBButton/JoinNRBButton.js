import { Button } from 'primereact/button';
import React from 'react';
import { Link } from 'react-router-dom';
import './JoinNRBButton.css';

const JoinNRBButton = () => {
  return (
    <div className='flex align-items-center justify-content-center'>
      <Link to='/gmRegistration' className='linkDecoration '>
        <button class='custom-btn nrbEachPageButton flex align-items-center justify-content-center'>
          <span className='pt-3'>Join NRB Global Now!!</span>
        </button>
      </Link>
    </div>
  );
};

export default JoinNRBButton;
