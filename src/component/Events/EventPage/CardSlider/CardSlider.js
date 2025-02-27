import React, { useState, useEffect } from 'react';
import { PhotoService } from '../CardSlider/CardPhoto';
import { Galleria } from 'primereact/galleria';
import './CardSlider.css';

const CardSlider = () => {
  const [images, setImages] = useState([]);
  const galleriaService = new PhotoService();

  const responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 1,
    },
    {
      breakpoint: '960px',
      numVisible: 1,
    },
    {
      breakpoint: '768px',
      numVisible: 1,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
    },
  ];

  useEffect(() => {
    galleriaService.getImages().then((data) => setImages(data));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const itemTemplate = (item) => {
    return (
      <img
        className='w-full h-18rem sm:h-20rem md:h-25rem lg:h-30rem xl:h-30rem'
        src={item.itemImageSrc}
        onError={(e) =>
          (e.target.src =
            'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')
        }
        alt={item.alt}
        // style={{ width: "100%", display: "block", height: "75vh" }}
      />
    );
  };

  return (
    <div className='card eventCard'>
      <Galleria
        value={images}
        responsiveOptions={responsiveOptions}
        numVisible={1}
        item={itemTemplate}
        showItemNavigators
        showItemNavigatorsOnHover
        showIndicators
        showThumbnails={false}
        circular
        autoPlay
        transitionInterval={4000}
      />
    </div>
  );
};
export default CardSlider;
