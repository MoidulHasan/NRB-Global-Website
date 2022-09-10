import React from "react";
import founder from "../../../assets/image/about/founder1.jpg";
import "./Founder.css";

const Founder = () => {
  return (
    <div className="p-container">
      <div className=" my-5  nrbFounderDiv">
        <div className="grid py-3">
          <div className="px-4 sm:col-12 md:col-12 lg:col-6 xl:col-6">
            <img src={founder} alt="founder_Image" className="founderImage " />
          </div>
          <div className="sm:col-12 md:col-12 lg:col-6 xl:col-6 px-4">
            <h1 className=" founder-title">Our Founder</h1>
            <p className="pt-2 founder-details">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam, delectus impedit quaerat ipsa debitis corporis vero.
              Voluptatem sit voluptatum beatae dolorum quod blanditiis maiores
              incidunt itaque, eum nam perferendis adipisci! <br /> <br />
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam, delectus impedit quaerat ipsa debitis corporis vero.
              Voluptatem sit voluptatum beatae dolorum quod blanditiis maiores
              incidunt itaque, eum nam perferendis adipisci! <br /> <br />
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores
              autem laudantium, blanditiis aspernatur est eligendi!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Founder;
