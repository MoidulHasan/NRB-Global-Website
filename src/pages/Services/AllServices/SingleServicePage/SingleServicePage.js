import React from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SingleServiceOtherDetails from '../../../../component/Services/AllServices/SingleServicePage/SingleServiceOtherDetails/SingleServiceOtherDetails';
import SingleServiceTestimonial from '../../../../component/Services/AllServices/SingleServicePage/SingleServiceTestimonial/SingleServiceTestimonial';
import useDataContexts from '../../../../hooks/useDataContexts';

const SingleServicePage = () => {
  const { id } = useParams();
  console.log(typeof id);

  const { nrbServices } = useDataContexts();

  console.log(nrbServices, 'nrbServices');
  const singleService = nrbServices?.find((service) => service.id === id);
  console.log(singleService, 'matchedService');
  return (
    <div>
      {singleService && (
        <>
          <section className='serviceHeader'>
            <SingleServiceTestimonial singleService={singleService} />
          </section>
          <section className='SingleServicedetails'>
            <SingleServiceOtherDetails singleService={singleService} />
          </section>
        </>
      )}
    </div>
  );
};

export default SingleServicePage;
