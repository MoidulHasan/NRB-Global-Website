import React from 'react';
import AtAGlance from '../../component/Home/AtAGlance/AtAGlance';
import ExclusiveEvent from '../../component/Home/ExclusiveEvent/ExclusiveEvent';
import MembersInOrganizations from '../../component/Home/MembersInOrganizations/MembersInOrganizations';
import PhotoCarousel from '../../component/Home/PhotoCarousel/PhotoCarousel';
import TopBanner from '../../component/Home/TopBanner/TopBanner';
import WhyJoinNRB from '../../component/Home/WhyJoinNRB/WhyJoinNRB';

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
      <section>
        <MembersInOrganizations />
      </section>
      <section>
        <ExclusiveEvent />
      </section>
      <section>
        <WhyJoinNRB />
      </section>
    </div>
  );
};

export default Home;
