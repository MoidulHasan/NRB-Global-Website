import React from 'react';
import { Link } from 'react-router-dom';
import './SingleServiceOtherDetails.css';
const SingleServiceOtherDetails = ({ singleService }) => {
  return (
    <div className='py-4 detailSingleService'>
      <div className='p-container'>
        <h2 className='text-center'>Detail Feature of {singleService?.name}</h2>
        {singleService?.support ? (
          <div className='grid '>
            {singleService?.support?.map((singleSupport, index) => (
              <div className='col-12 md:col-4 ' key={index}>
                <div className='singleServiceDetailColumn py-3 md:py-4 px-3 md:px-4 m-1'>
                  <h3 className='mt-1 mb-3 text-base md:text-xl'>
                    {singleSupport?.featureTitle}
                  </h3>
                  <p className='my-1'>{singleSupport?.desc}</p>
                  <Link to='/contact' className='linkDecoration'>
                    <h2 className='text-blue-900 text-base cursor-pointer d-flex align-items-center justify-content-center'>
                      <span>Contact NRB</span>{' '}
                      <span class='material-icons-sharp'>contact_support</span>
                    </h2>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <>
            {' '}
            <Link to='/contact' className='linkDecoration'>
              <h1 className='text-blue-900 text-bold cursor-pointer text-3xl d-flex align-items-center justify-content-center my-6 text-center'>
                <span>Contact NRB Globals for More Detials</span>{' '}
                <span class='material-icons-sharp'>contact_support</span>
              </h1>
            </Link>{' '}
          </>
        )}
      </div>
    </div>
  );
};

export default SingleServiceOtherDetails;
