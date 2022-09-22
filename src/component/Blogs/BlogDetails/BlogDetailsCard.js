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
                className="pi pi-calendar-plus font-bold mr-2 text-orange-500"
                style={{ fontSize: "1.2em" }}
              ></i>
              <span className="font-semibold">
                {singleBlog.singleBlog.date}
              </span>
            </div>
            <div className="flex align-items-center mr-5">
              <i
                className="pi pi-eye font-bold mr-2 text-orange-500"
                style={{ fontSize: "1.2em" }}
              ></i>
              <span className="font-semibold">
                {singleBlog.singleBlog.view}
              </span>
            </div>
            <div className="flex align-items-center mr-5">
              <i
                className="pi pi-clock font-bold mr-2 text-orange-500"
                style={{ fontSize: "1.2em" }}
              ></i>
              <span className="font-semibold">
                {singleBlog.singleBlog.read}
              </span>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <p className="text-lg md:text-2xl lg:text-5xl font-bold text ml-2 md:ml-5 blogDetailsTitle">
            {singleBlog.singleBlog.title}
          </p>
          <div className="flex align-items-center  ml-2 md:ml-5 mr-5">
            <i className="pi pi-user font-bold mr-3 blogUserIcon"></i>
            <span className="text-md md:text-3xl font-bold text-orange-500">
              By {singleBlog.singleBlog.auther}
            </span>
          </div>

          <Divider style={{ color: "#ff0000" }} />
          <p className="px-2 md:px-5 lg:px-5 xl:px-5 text-xl md:text-3xl lg:text-3xl xl:text-3xl font-bold blogOverview">
            Blog Overview:
          </p>
          <p className="px-2 md:px-5 lg:px-5 xl:px-5 text-justify blogDetailsContent">
            {singleBlog.singleBlog.description}
          </p>
        </div>
        <Divider style={{ color: "#ff0000" }} />

        <div className="text-left md:text-right">
          <span className="text-xl font-bold text-orange-500 mr-2">
            Share:{" "}
          </span>
          <a href="https://www.facebook.com/NRBGlobal20">
            <i className="pi pi-facebook mr-3  text-blue-900 socialMediaIocn"></i>
          </a>
          <a href="https://www.linkedin.com/company/young-cogress-nrb-global/">
            <i className="pi pi-linkedin mr-3  text-orange-600 socialMediaIocn"></i>
          </a>
          <a href="#">
            <i className="pi pi-whatsapp mr-3 lg text-green-600 socialMediaIocn"></i>
          </a>
          <a href="#">
            <i className="pi pi-twitter mr-2 md:mr-4  text-cyan-600 socialMediaIocn"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsCard;
