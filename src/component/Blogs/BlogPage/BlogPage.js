import React from "react";
import { useEffect, useState } from "react";
import Blog from "./Blog";
import blog from "../../../assets/image/about/BLOG.jpg";
import "./BlogPage.css";

const BlogPage = () => {
  const url = process.env.REACT_APP_BACKEND_URL;

  const [blogInfo, setBlogInfo] = useState([]);

  useEffect(() => {
    fetch(`${url}/blogs`)
      .then((res) => res.json())
      .then((data) => setBlogInfo(data?.data?.results));
  }, []);

  return (
    <div className="p-container mb-4">
      <div className="pt-5 pb-3 px-4">
        <div className="">
          <img src={blog} alt="" className="w-full blogPageImg" />
        </div>
        <div className="">
          <h1 className="text-center text-6xl font-bold text-cyan-900 blogPageTitle">
            Our All Blogs
          </h1>
        </div>
        <div className="grid">
          {blogInfo.map((blogsinfo) => (
            <Blog key={blogsinfo._id} blogsinfo={blogsinfo}></Blog>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
