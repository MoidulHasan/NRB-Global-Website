import React from "react";
import { useEffect, useState } from "react";
import Blog from "./Blog";
import blog from "../../../assets/image/about/BLOG.jpg";
import "./BlogPage.css";
import { Button } from "primereact/button";

const BlogPage = () => {
  const url = process.env.REACT_APP_BACKEND_URL;

  const [blogInfo, setBlogInfo] = useState([]);

  const [page, setPage] = useState(1);
  const [totalpage, setTotalPage] = useState();

  const blogAllData = () => {
    if (page > totalpage) return;
    fetch(`${url}/blogs?limit=6&page=${page}`)
      .then((res) => res.json())
      .then((data) => {
        setBlogInfo([...blogInfo, ...data?.data?.results]);
        setTotalPage(data?.data?.totalPages);
      });
  };

  const loadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    blogAllData();
  }, [page]);

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
        <div className="flex align-items-center justify-content-center my-6">
          {page < totalpage && (
            <Button onClick={loadMore} label="Load More" severity="secondary" />
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
