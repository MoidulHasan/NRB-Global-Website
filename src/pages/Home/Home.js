import React from 'react';
import AtAGlance from '../../component/Home/AtAGlance/AtAGlance';
import CommunityReviews from '../../component/Home/CommunityReviews/CommunityReviews';
import ExclusiveEvent from '../../component/Home/ExclusiveEvent/ExclusiveEvent';
import FeaturedMembers from '../../component/Home/FeaturedMembers/FeaturedMembers';
import MembersInOrganizations from '../../component/Home/MembersInOrganizations/MembersInOrganizations';
import PhotoCarousel from '../../component/Home/PhotoCarousel/PhotoCarousel';
import TopBanner from '../../component/Home/TopBanner/TopBanner';
import TopServices from '../../component/Home/TopServices/TopServices';
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
      <section>
        <CommunityReviews />
      </section>
      <section>
        <FeaturedMembers />
      </section>
      <section>
        <TopServices />
      </section>
    </div>
  );
};

export default Home;
