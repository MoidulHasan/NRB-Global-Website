import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import BlogDetailsCard from '../../../component/Blogs/BlogDetails/BlogDetailsCard';
import BlogPage from '../../../component/Blogs/BlogPage/BlogPage';
import useDataContexts from '../../../hooks/useDataContexts';

const BlogDetailSingle = () => {
  const { id } = useParams();

  const url = process.env.REACT_APP_BACKEND_URL;
  // console.log(id);

  const [blogInfo, setBlogInfo] = useState([]);

  useEffect(() => {
    fetch(`${url}/public/blogs/`)
      .then((res) => res.json())
      .then((data) => setBlogInfo(data?.data?.results));
  }, []);

  //console.log('nrb', blogInfo?.results);

  const singleBlog = blogInfo?.filter((blog) => blog.id === id);
  //console.log('Blog-matched', singleBlog);

  return (
    <div>
      <BlogDetailsCard singleBlog={singleBlog} />
    </div>
  );
};

export default BlogDetailSingle;
