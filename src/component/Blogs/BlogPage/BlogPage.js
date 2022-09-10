import React from "react";
import { useEffect, useState } from "react";
import { Button } from "primereact/button";
import Blog from "./Blog";
import blog from "../../../assets/image/about/Blog Banner.gif";
import "./BlogPage.css";

const BlogPage = () => {
  const [blogInfo, setBlogInfo] = useState([]);
  useEffect(() => {
    fetch("blogFile.json")
      .then((res) => res.json())
      .then((data) => setBlogInfo(data));
  }, []);
  return (
    <div className="pb-3">
      <div className="">
        <img src={blog} alt="" className="w-full blogPageImg" />
      </div>
      <div className="p-container">
        <div className="">
          <h1 className="text-center text-6xl font-bold text-cyan-900 blogPageTitle">
            Our All Blogs
          </h1>
        </div>
        <div className="grid px-4">
          {blogInfo.map((blogsinfo) => (
            <Blog key={blogsinfo.id} blogsinfo={blogsinfo}></Blog>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
