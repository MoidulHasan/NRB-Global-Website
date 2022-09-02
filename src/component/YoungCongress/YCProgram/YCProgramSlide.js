import React, { useEffect, useState } from 'react';
import { Galleria } from 'primereact/galleria';
import { ProgramService } from './YCProgramService';
import './YCProgramStyle.css'
const YCProgramSlide = () => {
    const [images, setImages] = useState(null);
    const galleriaService = new ProgramService();

    const responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 5,
        },
        {
            breakpoint: '768px',
            numVisible: 3,
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
                className='ycps-img'
                src={item.itemImageSrc}
                onError={(e) =>
                (e.target.src =
                    'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')
                }
                alt={item.alt}
                style={{ width: '100%', display: 'block', height: '88vh' }}
            />
        );
    };

    const thumbnailTemplate = (item) => {
        return (
            <img

                src={item.thumbnailImageSrc}
                onError={(e) =>
                (e.target.src =
                    'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')
                }
                alt={item.alt}
                style={{ display: 'block', height: '100px' }}
            />
        );
    };

    return (
        <div>
            <div className='card' style={{ maxHeight: '75vh' }}>
                <Galleria
                    value={images}
                    responsiveOptions={responsiveOptions}
                    numVisible={5}
                    item={itemTemplate}
                    showItemNavigators
                    showItemNavigatorsOnHover
                    showIndicators
                    showThumbnails={false}
                    //   thumbnail={thumbnailTemplate}
                    circular
                    autoPlay
                    transitionInterval={2000}
                />
            </div>
        </div>
    );
};

export default YCProgramSlide;


