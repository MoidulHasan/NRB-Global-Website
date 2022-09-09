import React from "react";
import founder from "../../../assets/image/about/founder1.jpg";
import "./Founder.css";

const Founder = () => {
  return (
    <div className="p-container mt-5  nrbFounderDiv">
      <div className="grid py-2">
        <div className="sm:col-12 md:col-12 lg:col-6 xl:col-6">
          <img src={founder} alt="mission_Image" className="founderImg " />
        </div>
        <div className="sm:col-12 md:col-12 lg:col-6 xl:col-6">
          <h1 className="pt-3 founder-title">Our Founder</h1>
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
  );
};

export default Founder;
