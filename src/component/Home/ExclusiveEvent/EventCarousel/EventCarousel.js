import React, { useState, useEffect } from 'react';
import { Carousel } from 'primereact/carousel';
import { Button } from 'primereact/button';
import { ProductService } from './ProductService';
import './EventCarousel.css';
import img1 from '../../../../assets/image/Blue Teal Yellow Hopeful Community Facebook Cover.png';

const EventCarousel = () => {
  const [products, setProducts] = useState([]);
  const responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 3,
    },
    {
      breakpoint: '600px',
      numVisible: 2,
      numScroll: 2,
    },
    {
      breakpoint: '480px',
      numVisible: 1,
      numScroll: 1,
    },
  ];

  const productService = new ProductService();

  useEffect(() => {
    productService
      .getProductsSmall()
      .then((data) => setProducts(data.slice(0, 9)));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const productTemplate = (product) => {
    return (
      <div className='eventCard mx-2 border-round-xl'>
        <div className='eventImgDiv'>
          <img src={img1} alt='' className='imgCard' />
        </div>
        <div className='eventDetail flex align-items-center justify-content-between p-2'>
          <div className=''>
            <h4 className='my-1 ml-2'> Event Name</h4>
            <p className='my-1 flex align-items-center'>
              <span class='material-icons-sharp'>person</span>{' '}
              <span className='ml-1'>NRB Blobal</span>
            </p>
            <p className='my-1 flex align-items-center'>
              <span class='material-icons-sharp'>event</span>{' '}
              <span className='orangeTextOrg ml-2'>Sep 20,2022 </span>
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className='carousel-demo'>
      <div className='card'>
        <Carousel
          value={products}
          numVisible={3}
          numScroll={1}
          responsiveOptions={responsiveOptions}
          className='custom-carousel'
          circular
          autoplayInterval={3000}
          itemTemplate={productTemplate}
        />
      </div>
    </div>
  );
};

export default EventCarousel;
