import React from "react";
import { Button } from "primereact/button";
import "./BlogPage.css";
import { Link } from "react-router-dom";

const Blog = (props) => {
  const { id, title, auther, date, like, description, img } = props.blogsinfo;
  // const newDescription = description;
  const newDescription = description.slice(0, 201);
  // console.log("new-description :-", newDescription);

  return (
    <div className="col-12 md:col-6 lg:col-4 xl:col-4 pb-5">
      <div className="BlogImgContainer">
        <img src={img} alt="" className="w-full" />
      </div>
      <div className="blogPageDetails">
        <div className="flex justify-content-between">
          <div className="flex align-items-center">
            <i
              className="pi pi-user font-bold mr-2 text-orange-600"
              style={{ fontSize: "1.2em" }}
            ></i>
            <span className="font-semibold" style={{ fontSize: "1.2em" }}>
              {auther}
            </span>
          </div>
          <div className="flex align-items-center">
            <i
              className="pi pi-calendar-plus font-bold mr-2 text-orange-600"
              style={{ fontSize: "1.2em" }}
            ></i>
            <span className="font-semibold" style={{ fontSize: "1.2em" }}>
              {date}
            </span>
          </div>
        </div>
        <span className="block text-xl font-bold mb-1 pb-3 pt-4 ">{title}</span>
        <span className="block text-l text-gray-700 text-justify">
          {newDescription}
        </span>
        <div className="flex justify-content-between">
          <div className="mt-4 flex align-items-center">
            <i
              className="pi pi-heart mr-2 mt-1 font-bold text-orange-600"
              style={{ fontSize: "1.4em" }}
            ></i>
            <span className="font-normal" style={{ fontSize: "1.4em" }}>
              {like}
            </span>
          </div>
          <div className="mt-4 flex align-items-center">
            <Link to={`/blogs/${id}`} className="no-underline">
              <Button
                label="Read More"
                icon="pi pi-arrow-right"
                className="p-button-sm pt-1 pb-1 p-button-secondary"
                iconPos="right"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
