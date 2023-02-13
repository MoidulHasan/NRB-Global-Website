import React from 'react';
import { useEffect, useState } from 'react';
import Blog from './Blog';
import blog from '../../../assets/image/about/BLOG.jpg';

import './BlogPage.css';
import { Paginator } from 'primereact/paginator';

const BlogPage = () => {
  const url = 'http://localhost:3005/v1';

  const [blogInfo, setBlogInfo] = useState([]);
  const [page, setPage] = useState(1);

  //console.log(blogInfo);
  useEffect(() => {
    fetch(`${url}/public/blogs?page=${page}`)
      .then((res) => res.json())
      .then((data) => setBlogInfo(data?.data));
  }, []);

  const blogsToShare = blogInfo?.results?.filter(
    (blogs) => blogs.status === 'Published'
  );
  console.log(blogsToShare);

  const [basicFirst, setBasicFirst] = useState(0);
  const [basicRows, setBasicRows] = useState(10);

  const onPageChange = (event) => {
    setPage(event.page + 1);
    setBasicFirst(event.first);
    setBasicRows(event.rows);
  };
  return (
    <div className='p-container'>
      <div className='py-4'>
        <div className='grid'>
          <img src={blog} alt='' className='w-full blogPageImg' />
        </div>
        <div className=''>
          <div className=''>
            <h1 className='text-center text-6xl font-bold text-cyan-900 blogPageTitle'>
              Our All Blogs
            </h1>
          </div>
          <div className='grid'>
            {blogsToShare?.map((blogsinfo) => (
              <Blog key={blogsinfo.id} blogsinfo={blogsinfo} page={page}></Blog>
            ))}
          </div>
          <Paginator
            totalRecords={blogInfo?.totalResults}
            onPageChange={onPageChange}
            first={basicFirst}
            rows={basicRows}
            rowsPerPageOptions={blogInfo?.limit}
          />
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
