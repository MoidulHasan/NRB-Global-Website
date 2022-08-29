import React from 'react';
import PhotoCarousel from '../../component/Home/PhotoCarousel/PhotoCarousel';

const Home = () => {
  return (
    <div>
      {/* carousel section  */}
      <section>
        <PhotoCarousel />
      </section>
      <section className='p-container'>
        <h2>Kuddus MIya </h2>
        <h5>We all are here </h5>
      </section>
    </div>
  );
};

export default Home;
