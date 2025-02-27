import React from 'react';
import './Counter.css';
import CountUp from 'react-countup';
// import 'primeicons/primeicons.css';

const Counter = () => {
  return (
    <div className=' p-container'>
      <div className=' grid counterDiv my-5 '>
        <div className='col-12 sm:col-6 md:col-6 lg:col-4 xl:col-4'>
          <div className=''>
            <p className='counter'>
              <CountUp end={1500} separator=',' enableScrollSpy duration={2} />
              K+
            </p>
            <p className='text-4xl font-bold text-center counterText'>
              Total Member
            </p>
          </div>
        </div>
        <div className='col-12 sm:col-6 md:col-6 lg:col-4 xl:col-4'>
          <div className='counterCol'>
            <p className='counter'>
              <CountUp end={1550} start={1200} enableScrollSpy duration={2} />+
            </p>
            <p className='text-4xl font-bold text-center counterText'>
              Executive Member
            </p>
          </div>
        </div>
        <div className='col-12 sm:col-6 md:col-6 lg:col-4 xl:col-4'>
          <div className='counterCo'>
            <p className='counter'>
              <CountUp end={13} enableScrollSpy duration={2} />
              K+
            </p>
            <p className='text-4xl font-bold text-center counterText'>
              General Member
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
