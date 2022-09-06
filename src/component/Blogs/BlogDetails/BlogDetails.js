import React from "react";
import blogs from "../../../assects/image/Blog Banner1.gif";
import "./BlogDetails.css";

const BlogDetails = () => {
  return (
    <div className="p-container pb-8 m-4 blogDetailsPageContainer">
      <div className="">
        <img src={blogs} alt="blog_Image" className="w-full  blogDetailsImg" />
      </div>
      <div className="ml-3 mt-3">
        <div className="flex ">
          <div className="flex align-items-center mr-5">
            <i
              className="pi pi-calendar-plus font-bold mr-2 text-orange-600"
              style={{ fontSize: "1.2em" }}
            ></i>
            <span className="font-semibold" style={{ fontSize: "1.2em" }}>
              Jan-20,2022
            </span>
          </div>
          <div className="flex align-items-center mr-5">
            <i
              className="pi pi-eye font-bold mr-2 text-orange-600"
              style={{ fontSize: "1.2em" }}
            ></i>
            <span className="font-semibold" style={{ fontSize: "1.2em" }}>
              33 Views
            </span>
          </div>
          <div className="flex align-items-center mr-5">
            <i
              className="pi pi-clock font-bold mr-2 text-orange-600"
              style={{ fontSize: "1.2em" }}
            ></i>
            <span className="font-semibold" style={{ fontSize: "1.2em" }}>
              10 min read
            </span>
          </div>
          <div className="flex align-items-center mr-5">
            <i
              className="pi pi-heart-fill font-bold mr-2 text-orange-600"
              style={{ fontSize: "1.2em" }}
            ></i>
            <span className="font-semibold" style={{ fontSize: "1.2em" }}>
              30 Likes
            </span>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <p className="font-bold blogDetailsTitle">
          Latest Micro Biological basic Workshop for Research
        </p>
        <p className="text-3xl font-bold blogOverview">Blog Overview:</p>
        <p className="text-justify blogDetailsContent">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ad
          inventore atque provident unde iure eos laboriosam sit distinctio
          aspernatur ab veniam similique alias nemo qui, blanditiis dolores.
          Delectus sit eius adipisci quam. Quidem provident dolorem dignissimos
          amet est quisquam consequatur placeat temporibus inventore fugiat
          tenetur, ab veritatis, neque ad reprehenderit esse ut cum officia
          laudantium aliquam! Sed ratione autem molestiae numquam soluta unde
          dolorum. Corrupti alias animi necessitatibus ipsa nesciunt laudantium
          architecto veniam. Porro dolorem labore perspiciatis. Enim obcaecati
          repellat consequatur voluptate repudiandae aliquam aperiam distinctio,
          rem, possimus id natus. Omnis similique quas aperiam consequatur
          minima vel provident fuga doloribus inventore qui eius, sunt harum
          quae possimus repudiandae vitae voluptatibus reprehenderit sequi
          laudantium cum amet odit quos alias. Perferendis quis dolorum aperiam
          vitae quo! Est sint sapiente officia velit voluptatem perspiciatis
          odio, doloribus accusamus eius id tempora quae sunt! Qui numquam a
          dolore minima, culpa dolorum. Maiores laborum molestiae, tenetur ab a
          libero nemo magnam, odit culpa eveniet inventore aut nihil possimus
          autem debitis dolor est quod laboriosam, iste explicabo voluptatibus
          et dolorum! Sed, eos, omnis nemo aliquam non molestias minus nisi
          nobis assumenda ipsum sint maiores, velit provident consequuntur
          tempora est cupiditate. Quidem dolore magni at culpa id!
        </p>
      </div>
    </div>
  );
};

export default BlogDetails;
