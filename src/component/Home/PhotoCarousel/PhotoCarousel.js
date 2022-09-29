import React, { useEffect, useState } from 'react';
import { Galleria } from 'primereact/galleria';
import { PhotoService } from './photoService';
import './PhotoCarousel.css';

const PhotoCarousel = () => {
  const [images, setImages] = useState(null);
  const galleriaService = new PhotoService();

  const responsiveOptions = [
    {
      breakpoint: '1024px',
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
  }, []);

  const itemTemplate = (item) => {
    return (
      <img
        className='topPhotoCarouselImg'
        src={item.itemImageSrc}
        onError={(e) =>
          (e.target.src =
            'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')
        }
        alt={item.alt}
        // style={{ width: '100%', display: 'block', height: '85vh' }}
      />
    );
  };

  // const thumbnailTemplate = (item) => {
  //   return (
  //     <img
  //       src={item.thumbnailImageSrc}
  //       onError={(e) =>
  //         (e.target.src =
  //           'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')
  //       }
  //       alt={item.alt}
  //       style={{ display: 'block', height: '100px' }}
  //     />
  //   );
  // };

  return (
    <div className=' mb-4'>
      <div className='card topPhotoCarouselCard'>
        <Galleria
          value={images}
          responsiveOptions={responsiveOptions}
          numVisible={1}
          item={itemTemplate}
          showItemNavigators
          showItemNavigatorsOnHover
          showIndicators
          showThumbnails={false}
          //   thumbnail={thumbnailTemplate}
          circular
          autoPlay
          transitionInterval={4000}
        />
      </div>
    </div>
  );
};

export default PhotoCarousel;
