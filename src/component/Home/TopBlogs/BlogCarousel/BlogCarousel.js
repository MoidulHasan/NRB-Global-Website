import { Carousel } from 'primereact/carousel';
import React, { useEffect, useState } from 'react';
import { BlogService } from './BlogService';
import './BlogCarousel.css';
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

  const blogService = new BlogService();

  useEffect(() => {
    blogService.getBlogs().then((data) => setBlogs(data.slice(0, 6)));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const blogTemplate = (blog) => {
    return (
      // <div className='blogCard'>
      //   <div className='blogImgDiv'>
      //     <img src={blog.image} alt='' className='imgCard' />
      //   </div>
      //   <div className='blogDetail'>
      //     <div className='infoDetails flex align-items-center justify-content-start my-3 font-semibold text-gray-700'>
      //       <span>{blog.date}</span>
      //       <span className='flex align-items-center justify-content-center ml-3'>
      //         <span class='material-icons-sharp'>visibility</span>{' '}
      //         <span className='ml-1'>{blog.view} views</span>
      //       </span>
      //       <span className='flex align-items-center justify-content-center ml-3'>
      //         <span class='material-icons-sharp'>
      //           <span class='material-icons-sharp'>schedule</span>
      //         </span>{' '}
      //         <span className='ml-1'>{blog.time} min read</span>
      //       </span>
      //       <span className='flex align-items-center justify-content-center ml-3'>
      //         <span class='material-icons-sharp'>
      //           <span class='material-icons-sharp'>favorite</span>
      //         </span>{' '}
      //         <span className='ml-1'>{blog.like} likes</span>
      //       </span>
      //     </div>
      //     <div className=''>
      //       <h2 className='text-3xl md:text-5xl my-1 font-bold'>{blog.name}</h2>
      //       <span className='text-gray-700 text-xl blogDescription hidden md:block'>
      //         {blog.description}
      //       </span>
      //     </div>
      //     <div className='authorInfo flex align-items-center justify-content-between mt-3'>
      //       <div className='author mb-2 flex align-items-center justify-content-start'>
      //         <img
      //           src={blog.thumb}
      //           alt='blog author'
      //           height='50px'
      //           width='50px'
      //           className='mr-2 md:mr-3'
      //         />
      //         <span className='font-bold mr-2 md:mr-3'>by {blog.author}</span>
      //         <span className='text-gray-700 mr-2 md:mr-3'>
      //           in {blog.category}
      //         </span>
      //       </div>
      //       <div className='socialLinks mb-2 mb-2 flex align-items-center justify-content-start'>
      //         <span className='font-bold mr-2 md:mr-3'>Share: </span>
      //         <span className='mr-2 md:mr-3'>
      //           <i className='pi pi-facebook '></i>
      //         </span>
      //         <span className='mr-2 md:mr-3'>
      //           <i className='pi pi-instagram '></i>
      //         </span>
      //         <span className='mr-2 md:mr-3'>
      //           <i className='pi pi-twitter '></i>
      //         </span>
      //       </div>
      //     </div>
      //   </div>
      // </div>
      <div className='blogCard'>
        <div className='blogImgDiv'>
          <img src={blog.image} alt='blog pic' />
        </div>
        <div className='blogDetail'>
          <div className='hidden md:flex  align-items-center justify-content-start my-3 font-semibold text-gray-700'>
            <span>{blog.date}</span>
            <span className='flex align-items-center justify-content-center ml-3'>
              <span class='material-icons-sharp'>visibility</span>{' '}
              <span className='ml-1'>{blog.view} views</span>
            </span>
            <span className='flex align-items-center justify-content-center ml-3'>
              <span class='material-icons-sharp'>
                <span class='material-icons-sharp'>schedule</span>
              </span>{' '}
              <span className='ml-1'>{blog.time} min read</span>
            </span>
            <span className='flex align-items-center justify-content-center ml-3'>
              <span class='material-icons-sharp'>
                <span class='material-icons-sharp'>favorite</span>
              </span>{' '}
              <span className='ml-1'>{blog.like} likes</span>
            </span>
          </div>
          <div className=' md:hidden grid my-3 font-semibold text-gray-700'>
            <div className='col-6'>
              <span className=''>{blog.date}</span>
            </div>
            <div className='col-6'>
              <span className='flex align-items-center justify-content-center '>
                <span class='material-icons-sharp'>visibility</span>{' '}
                <span className='ml-1'>{blog.view}</span>
              </span>
            </div>
            <div className='col-6'>
              <span className='flex align-items-center justify-content-center text-xs'>
                <span class='material-icons-sharp'>
                  <span class='material-icons-sharp'>schedule</span>
                </span>{' '}
                <span className='ml-1'>{blog.time} min read</span>
              </span>
            </div>
            <div className='col-6'>
              <span className='flex align-items-center justify-content-center text-xs'>
                <span class='material-icons-sharp'>
                  <span class='material-icons-sharp'>favorite</span>
                </span>{' '}
                <span className='ml-1'>{blog.like} likes</span>
              </span>
            </div>
          </div>
          <h2 className='text-l md:text-5xl my-1 font-bold blogTitle'>
            {blog.name}
          </h2>
          <span className='text-gray-700 text-xl blogDescription hidden md:block'>
            {blog.description}
          </span>
          <div className='hidden md:flex align-items-center justify-content-between mt-3'>
            <div className='author mb-2 flex align-items-center justify-content-start'>
              <img
                src={blog.thumb}
                alt='blog author'
                height='50px'
                width='50px'
                className='mr-2 md:mr-3'
              />
              <span className='font-bold mr-2 md:mr-3'>by {blog.author}</span>
              <span className='text-gray-700 mr-2 md:mr-3'>
                in {blog.category}
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
