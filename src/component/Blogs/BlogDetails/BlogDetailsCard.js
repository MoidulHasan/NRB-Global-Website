import React from "react";
import { Divider } from "primereact/divider";
import "./BlogDetailsCard.css";

const BlogDetailsCard = (singleBlog) => {
  // console.log("single-Blog-Find", singleBlog.singleBlog.id);

  return (
    <div className="p-container ">
      <div className="p-4 my-4 blogDetailsPageContainer">
        <div className="">
          <img
            src={singleBlog.singleBlog.img}
            alt="blog_Image"
            className="w-full  blogDetailsImg"
          />
        </div>
        <div className="ml-2 md:ml-5lg:ml-5 xl:ml-5 mt-3">
          <div className="flex ">
            <div className="flex align-items-center mr-5">
              <i
                className="pi pi-calendar-plus font-bold mr-2 text-orange-600"
                style={{ fontSize: "1em" }}
              ></i>
              <span className="font-semibold">
                {singleBlog.singleBlog.date}
              </span>
            </div>
            <div className="flex align-items-center mr-5">
              <i
                className="pi pi-eye font-bold mr-2 text-orange-600"
                style={{ fontSize: "1em" }}
              ></i>
              <span className="font-semibold">
                {singleBlog.singleBlog.view}
              </span>
            </div>
            <div className="flex align-items-center mr-5">
              <i
                className="pi pi-clock font-bold mr-2 text-orange-600"
                style={{ fontSize: "1em" }}
              ></i>
              <span className="font-semibold">
                {singleBlog.singleBlog.read}
              </span>
            </div>
            <div className="flex align-items-center mr-5">
              <i
                className="pi pi-heart-fill font-bold mr-2 text-orange-600"
                style={{ fontSize: "1em" }}
              ></i>
              <span className="font-semibold">
                {singleBlog.singleBlog.like}
              </span>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <p className="font-bold blogDetailsTitle">
            {singleBlog.singleBlog.title}
          </p>
          <p className="text-xl md:text-3xl lg:text-3xl xl:text-3xl font-bold blogOverview">
            Blog Overview:
          </p>
          <p className="text-justify blogDetailsContent">
            {singleBlog.singleBlog.description}
          </p>
        </div>
        <Divider style={{ color: "#ff0000" }} />
        <div className="grid">
          <div className="sm:col-6 md:col-6 lg:col-6 l:col-6 ">
            <div className="flex align-items-center ml-5 mr-5">
              <i className="pi pi-user font-bold mr-3 text-orange-600 blogUserIcon"></i>
              <span className="text-sm lg:text-xl xl:text-xl font-semibold">
                By {singleBlog.singleBlog.auther}
              </span>
            </div>
          </div>
          {/* test  */}
          <div className="sm:col-6 md:col-6 lg:col-6 xl:col-6 text-right">
            <a href="#" className="">
              <i className="pi pi-facebook mr-2 lg:mr-4 text-blue-900 socialMediaIocn"></i>
            </a>
            <a href="#" className="">
              <i className="pi pi-linkedin mr-2 lg:mr-4 text-orange-600 socialMediaIocn"></i>
            </a>
            <a href="#" className="">
              {" "}
              <i className="pi pi-whatsapp mr-2 lg:mr-4 text-green-600 socialMediaIocn"></i>
            </a>
            <a href="#" className="">
              {" "}
              <i className="pi pi-twitter mr-2 lg:mr-6 text-cyan-500 socialMediaIocn"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsCard;
