import React from "react";
import mission from "../../../assets/image/about/mission (2).jpg";
import "./Mission.css";

const Mission = () => {
  return (
    <div className="p-container my-5 mission-div">
      <div className="grid">
        <div className="col-12 md:col-12 lg:col-6 xl:col-6">
          <h1 className="mision-title">Our Mission</h1>
          <p className="mission-details pt-1 text-justify">
            All NRB'S professionals, scientist, academicians, people in
            business, attorneys, journalists, government official, trade
            organizations and community activists will unite and work together
            for the betterment of our beloved Bangladesh regardless of
            individual ideology or political affiliations is the vision of the
            NRB Global Non-resident Bangladeshi.
          </p>
          <div className="">
            <h3 className="">Our values</h3>
            <div className="flex mission-value">
              <i className="pi pi-check-circle pt-1 mt-3 missionIcon"></i>
              <p className="pl-3 valuesContent">
                To serve the NRB across the globe{" "}
              </p>
            </div>
            <div className="flex mission-value">
              <i className="pi pi-check-circle pt-1 mt-3 missionIcon"></i>
              <p className="pl-3">
                To unite successful Bangladeshi under one Global platform to
                share ideas, leverage knowledge, connect with each other, create
                new ventures, create awareness of NRB's issues{" "}
              </p>
            </div>
            <div className="flex mission-value">
              <i className="pi pi-check-circle pt-1 mt-3 missionIcon"></i>
              <p className="pl-3">
                To bridge the gap between NRB and Bangladesh government so that
                Bangladesh can take advantages of her NRB's knowledge and
                expertise for the economic, social, and cultural development of
                Bangladesh.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 md:col-12 lg:col-6 xl:col-6 lg:pt-8 xl:pt-8 lg:mt-5 xl:mt-5">
          <img
            src={mission}
            alt="mission_Image"
            className="missionImg w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Mission;
