import React from 'react';
import { useEffect, useState } from 'react';
import Blog from './Blog';
import blog from '../../../assets/image/about/BLOG.jpg';

import './BlogPage.css';
import { Paginator } from 'primereact/paginator';

const BlogPage = () => {
  const [blogInfo, setBlogInfo] = useState([]);
  const url = process.env.REACT_APP_BACKEND_URL;
  useEffect(() => {
    fetch(`${url}/blogs`)
      .then((res) => res.json())
      .then((data) => setBlogInfo(data?.data?.results));
  }, []);
  return (
    <div className='p-container mb-4'>
      <div className='pt-5 pb-3 px-4'>
        <div className=''>
          <img src={blog} alt='' className='w-full blogPageImg' />
        </div>
        <div className=''>
          <h1 className='text-center text-6xl font-bold text-cyan-900 blogPageTitle'>
            Our All Blogs
          </h1>
        </div>
        <div className='grid'>
          {blogInfo.map((blogsinfo) => (
            <Blog key={blogsinfo._id} blogsinfo={blogsinfo}></Blog>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;

// const BlogPage = () => {
//   const url = process.env.REACT_APP_BACKEND_URL;

//   const [blogInfo, setBlogInfo] = useState([]);
//   const [page, setPage] = useState(1);

//   useEffect(() => {
//     fetch(`${url}/public/blogs?page=${page}`)
//       .then((res) => res.json())
//       .then((data) => setBlogInfo(data?.data));
//   }, [page]);

//   const blogsToShare = blogInfo?.results?.filter(
//     (blogs) => blogs.status === "Published"
//   );

//   const [basicFirst, setBasicFirst] = useState(0);
//   const [basicRows, setBasicRows] = useState(10);

//   const onPageChange = (event) => {
//     setPage(event.page + 1);
//     setBasicFirst(event.first);
//     setBasicRows(event.rows);
//   };
//   return (
//     <div className="p-container">
//       <div className="py-4">
//         <div className="grid">
//           <img src={blog} alt="" className="w-full blogPageImg" />
//         </div>
//         <div className="">
//           <div className="">
//             <h1 className="text-center text-6xl font-bold text-cyan-900 blogPageTitle">
//               Our All Blogs
//             </h1>
//           </div>
//           <div className="grid">
//             {blogsToShare?.map((blogsinfo) => (
//               <Blog key={blogsinfo.id} blogsinfo={blogsinfo} page={page}></Blog>
//             ))}
//           </div>
//           <Paginator
//             totalRecords={blogInfo?.totalResults}
//             onPageChange={onPageChange}
//             first={basicFirst}
//             rows={basicRows}
//             rowsPerPageOptions={blogInfo?.limit}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };
