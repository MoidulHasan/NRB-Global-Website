import React from 'react';
import AtAGlance from '../../component/Home/AtAGlance/AtAGlance';
import PhotoCarousel from '../../component/Home/PhotoCarousel/PhotoCarousel';
import TopBanner from '../../component/Home/TopBanner/TopBanner';

const Home = () => {
  return (
    <div>
      {/* carousel section  */}
      {/* <section>
        <PhotoCarousel />
      </section> */}
      <section>
        <TopBanner />
      </section>
      <section className='p-container'>
        <AtAGlance />
      </section>
    </div>
  );
};

export default Home;
