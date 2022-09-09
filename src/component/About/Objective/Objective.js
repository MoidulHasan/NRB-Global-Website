import React from "react";
import "./Objective.css";
import objective from "../../../assets/image/about/objective.png";

const Objective = () => {
  return (
    <div class="p-container p-container-sm  mt-4 mb-4 surface-300 nrbObjectiveDiv">
      <div className="grid">
        <div className="sm:col-12 md:col-12 lg:col-6 xl:col-6 lg:mt-8 xl:mt-8">
          <img
            src={objective}
            alt="objective_Image"
            className="sm:h-25rem md:h-25rem lg:h-25rem xl:h-28rem w-full objectiveImg"
          />
        </div>
        <div class="sm:col-12 md:col-12 lg:col-6 xl:col-6  lg:mt-7 xl:mt-7 px-4">
          <h1
            className="text-5xl font-bold line-height-3  objectibe-title"
            style={{ color: "#195283" }}
          >
            Our Objective
          </h1>

          <div className="">
            <div className="flex objective-value">
              <i className="pi pi-check-circle pt-1 mt-3 objectiveIcon"></i>
              <p className=" pl-4">
                {" "}
                Food for hungry community,wants to be poverty free Bangladesh.{" "}
              </p>
            </div>
            <div className="flex objective-value">
              <i className="pi pi-check-circle pt-1 mt-3 objectiveIcon"></i>
              <p className=" px-4">
                Helping the students of the country to study abroad with proper
                funding and to get funding.
              </p>
            </div>
            <div className="flex objective-value">
              <i className="pi pi-check-circle pt-1 mt-3 objectiveIcon"></i>
              <p className=" px-4">
                To help students develop latent talents by organizing various
                national and international competitions.
              </p>
            </div>
            <div className="flex objective-value">
              <i className=" pi pi-check-circle pt-1 mt-3 objectiveIcon"></i>
              <p className=" px-4">
                Building relationship of students of the country with
                significant expatriates in their own field.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Objective;
