import React from 'react';
import './Intro.css';
import aboutInrtoImg from '../../../assets/image/aboutIntroPeople.png';
import flagGif from '../../../assets/image/About Cover Cutted.gif';

const Intro = () => {
  return (
    <div className=''>
      <div className='p-container my-3'>
        <img
          src={flagGif}
          alt='intro_Image'
          className=' h-16rem md:h-25rem lg:h-30rem xl:h-30rem w-full aboutPageMainImage'
        />
      </div>
      <div className='p-container'>
        <div className=' nrbAboutIntro py-2 '>
          <div className='flex align-items-center justify-content-center'>
            <h4 className='font-bold text-4xl md:text-5xl my-4 nrbIntro-title inline-block'>
              Who are we?
            </h4>
          </div>
          <div className='aboutPageNRBInformation'>
            <div className='grid'>
              <div className='col-12 md:col-6 px-4'>
                <div>
                  <h4 className='font-bold my-4 text-3xl lg:text-5xl text-blue-900'>
                    NRB GLobal
                  </h4>
                  <p className='text-base md-text-xl text-blue-900 font-bold aboutNRBInfoDetail'>
                    NRB Global (Non-Resident Bangladeshi – Global) is a
                    non-political organization of Bangladeshis living abroad.
                    This is the first organization to a unit about 15 Million
                    Bangladeshis all over the world. NRB Global is the bridge
                    between Bangladesh and Bangladeshis living abroad.
                  </p>
                </div>
              </div>
              <div className='col-12 md:col-6 px-4 md:px-0 aboutImgColumn'>
                <div className='aboutIntroFirstImg flex justify-content-end'>
                  <img src={aboutInrtoImg} alt='about intro of company' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
