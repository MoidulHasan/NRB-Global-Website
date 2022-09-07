import { Carousel } from 'primereact/carousel';
import React, { useEffect, useState } from 'react';
import { ProgramService } from './YCProgramService';
import './YCProgramStyle.css';
const YCProgramSlide = () => {
    const [programs, setPrograms] = useState([]);
    const responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 1,
            numScroll: 1,
        },
        {
            breakpoint: '600px',
            numVisible: 1,
            numScroll: 1,
        },
        {
            breakpoint: '480px',
            numVisible: 1,
            numScroll: 1,
        },
    ];

    const programService = new ProgramService();
    useEffect(() => {
        // programService.getPrograms().then((data) => setPrograms(data.slice(0, 4)));
        programService.getPrograms().then((data) => setPrograms(data));

    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const programTemplate = (program) => {
        return (
            <div className='ycprogram-slide'>
                <div className='ycprogram-slide-img'>
                    <img src={program.image} alt='program pic' />
                </div>
                <div className='ycprogram-slide-details'>
                    <h2 className='text-l md:text-5xl my-1 font-bold ycprogram-slide-title'>
                        {program.name}
                    </h2>
                    <span className='ycprogram-slide-description text-gray-700 text-xl hidden md:block'>
                        {program.description}
                    </span>
                </div>
            </div>
        );
    };

    return (
        <div className='carousel-demo'>
            <div className='card'>
                <Carousel
                    value={programs}
                    numVisible={1}
                    numScroll={1}
                    responsiveOptions={responsiveOptions}
                    className='custom-carousel'
                    circular
                    autoplayInterval={3000}
                    itemTemplate={programTemplate}
                />
            </div>
        </div>
    );
};

export default YCProgramSlide;
