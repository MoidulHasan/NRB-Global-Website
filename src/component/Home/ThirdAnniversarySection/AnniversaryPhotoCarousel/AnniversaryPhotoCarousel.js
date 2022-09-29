import React, { useEffect, useState } from 'react';
import { Carousel } from 'primereact/carousel';

const AnniversaryPhotoCarousel = () => {
  const [anniversaryImages, setAnniversaryImages] = useState([]);
  console.log(anniversaryImages);

  const responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 4,
      numScroll: 4,
    },
    {
      breakpoint: '960px',
      numVisible: 2,
      numScroll: 2,
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 2,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1,
    },
  ];

  useEffect(() => {
    fetch('anniversaryPhoto.json')
      .then((res) => res.json())
      .then((data) => setAnniversaryImages(data));
  }, []);

  const anniversaryImgTemplate = (image) => {
    console.log(image, 'item form template');
    return (
      <div className='card anniversaryCarouselCard'>
        <div className='anniversaryImgDiv'>
          <img
            className='anniversaryImg'
            src={image?.itemImageSrc}
            onError={(e) =>
              (e.target.src =
                'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')
            }
            alt={image.alt}
            // style={{ width: '350px', display: 'block', height: '400px' }}
          />
        </div>
      </div>
    );
  };

  return (
    <div className='carousel-demo mb-2'>
      <div className='card'>
        <Carousel
          value={anniversaryImages}
          numVisible={4}
          numScroll={3}
          responsiveOptions={responsiveOptions}
          className='custom-carousel'
          circular
          autoplayInterval={3000}
          itemTemplate={anniversaryImgTemplate}
        />
      </div>
    </div>
  );
};

export default AnniversaryPhotoCarousel;
