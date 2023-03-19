import { Carousel } from 'primereact/carousel';
import React, { useEffect, useState } from 'react';
import './BlogCarousel.css';
import thumb from '../../../../assets/image/blogs/5fc9f284bfe27-bpfull.jpg';
import { formateDate } from '../../../../utils/formateDate';
const BlogCarousel = () => {
  const [blogs, setBlogs] = useState([]);
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

  const url = process.env.REACT_APP_BACKEND_URL;

  useEffect(() => {
    fetch(`${url}/public/blogs`)
      .then((res) => res.json())
      .then((data) => setBlogs(data?.data?.results.slice(0, 6)));
  }, []);

  console.log(blogs);

  const blogTemplate = (blog) => {
    const blog_date_string = formateDate(blog?.publishDate);

    const urlImg = process.env.REACT_APP_BACKEND_CORE_URL;

    //console.log(urlImg, blogs);

    const nullImg = 'https://i.ibb.co/JmcNkYW/nrb-image-1.png';

    return (
      <div className='blogCard'>
        <div className='blogImgDiv'>
          <img src={blog?.coverImage ?? nullImg} alt='blog pic' />
        </div>
        <div className='blogDetail'>
          <div className='hidden md:flex  align-items-center justify-content-start my-3 font-semibold text-gray-700'>
            <span>{blog_date_string}</span>
            <span className='flex align-items-center justify-content-center ml-3'>
              <span className='material-icons-sharp'>visibility</span>{' '}
              <span className='ml-1'>{blog.view} views</span>
            </span>
            <span className='flex align-items-center justify-content-center ml-3'>
              <span className='material-icons-sharp'>
                <span className='material-icons-sharp'>schedule</span>
              </span>{' '}
              <span className='ml-1'>{blog.readingTimeInMinute} min read</span>
            </span>
            <span className='flex align-items-center justify-content-center ml-3'>
              <span className='material-icons-sharp'>
                <span className='material-icons-sharp'>favorite</span>
              </span>{' '}
              <span className='ml-1'>{blog.readingTimeInMinute} likes</span>
            </span>
          </div>
          <div className=' md:hidden grid my-3 font-semibold text-gray-700'>
            <div className='col-6'>
              <span className='exclusiveDateField'>{blog_date_string}</span>
            </div>
            <div className='col-6'>
              <span className='flex align-items-center justify-content-center exclusiveVisibilityField'>
                <span className='material-icons-sharp exclusiveVisibilityFieldIcon'>
                  visibility
                </span>{' '}
                <span className='ml-1'>{blog.view}</span>
              </span>
            </div>
            <div className='col-6'>
              <span className='flex align-items-center justify-content-center text-xs scheduleMobile'>
                <span className='material-icons-sharp'>
                  <span className='material-icons-sharp'>schedule</span>
                </span>{' '}
                <span className='ml-1'>
                  {blog.readingTimeInMinute} min read
                </span>
              </span>
            </div>
            <div className='col-6'>
              <span className='flex align-items-center justify-content-center text-xs'>
                <span className='material-icons-sharp'>
                  <span className='material-icons-sharp'>favorite</span>
                </span>{' '}
                <span className='ml-1'>{blog.like} likes</span>
              </span>
            </div>
          </div>
          <h2 className='text-l md:text-5xl my-1 font-bold blogTitle'>
            {blog.title}
          </h2>
          <span className='text-gray-700 text-xl blogDescription hidden md:block'>
            {blog.content.slice(0, 600)} ...
          </span>
          <div className='hidden md:flex align-items-center justify-content-between mt-3'>
            <div className='author mb-2 flex align-items-center justify-content-start'>
              <img
                src={thumb}
                alt='blog author'
                height='50px'
                width='50px'
                className='mr-2 md:mr-3'
              />
              <span className='font-bold mr-2 md:mr-3'>
                by {blog.authorName}
              </span>
              <span className='text-gray-700 mr-2 md:mr-3'>
                in Public Opinion
              </span>
            </div>
            <div className='socialLinks mb-2 mb-2 flex align-items-center justify-content-start'>
              <span className='font-bold mr-2 md:mr-3'>Share: </span>
              <span className='mr-2 md:mr-3'>
                <i className='pi pi-facebook '></i>
              </span>
              <span className='mr-2 md:mr-3'>
                <i className='pi pi-instagram '></i>
              </span>
              <span className='mr-2 md:mr-3'>
                <i className='pi pi-twitter '></i>
              </span>
            </div>
          </div>
          <div className='grid md:hidden mt-3 '>
            <div className='col-12'>
              <div className='author mb-2 flex align-items-center justify-content-start'>
                <img
                  src={blog.thumb}
                  alt='blog author'
                  height='30px'
                  width='30px'
                  className='mr-2 md:mr-3'
                />
                <span className='font-bold mr-2 md:mr-3 text-xs'>
                  by {blog.author}
                </span>
                <span className='text-gray-700 mr-2 md:mr-3 text-xs'>
                  in {blog.category}
                </span>
              </div>
            </div>
            <div className='col-12'>
              <div className='socialLinks mb-2 mb-2 flex align-items-center justify-content-start'>
                <span className='font-bold mr-2 md:mr-3'>Share: </span>
                <span className='mr-2 md:mr-3'>
                  <i className='pi pi-facebook '></i>
                </span>
                <span className='mr-2 md:mr-3'>
                  <i className='pi pi-instagram '></i>
                </span>
                <span className='mr-2 md:mr-3'>
                  <i className='pi pi-twitter '></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className='carousel-demo'>
      <div className='card'>
        <Carousel
          value={blogs}
          numVisible={1}
          numScroll={1}
          responsiveOptions={responsiveOptions}
          className='custom-carousel'
          circular
          autoplayInterval={3000}
          itemTemplate={blogTemplate}
        />
      </div>
    </div>
  );
};

export default BlogCarousel;
