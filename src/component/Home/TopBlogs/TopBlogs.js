import { Button } from 'primereact/button';
import React from 'react';
import { Link } from 'react-router-dom';
import BlogCarousel from './BlogCarousel/BlogCarousel';
import './TopBlogs.css';

const TopBlogs = () => {
  return (
    <div className='p-container mb-4'>
      <div className='BlogSummery  py-5 px-4'>
        <h2 className='my-3 text-3xl md:text-5xl text-center'>
          {' '}
          <span className='orangeTextOrg'>Exclusive Blogs</span> for NRB Global
          Memebers{' '}
        </h2>
        <p className='text-center text-2xl mb-6'>
          Join our NRB GLobal community absolutely free and get access to
          valuable events by industry experts.
        </p>
        {/* carousel section  */}
        <section>
          <BlogCarousel />
        </section>
        <div className='flex justify-content-center mt-3'>
          <Link to='/blogs' className='linkDecoration'>
            <Button
              label='Explore more blogs'
              className='p-button-rounded p-button-help p-button-outlined'
              icon='pi pi-angle-right'
              iconPos='right'
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopBlogs;
