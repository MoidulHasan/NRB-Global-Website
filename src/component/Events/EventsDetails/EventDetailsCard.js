import React from "react";
import { Divider } from "primereact/divider";
import "./EventDetailsCard.css";

const EventDetailsCard = (singleEvent) => {
  return (
    <div className="p-container">
      <div className="p-4 my-4 eventDetailsDiv">
        <div className="">
          <img
            src={singleEvent.singleEvent.img}
            alt=""
            className=" w-full eventDetailsImg"
          />
        </div>
        <div className="pb-4 ">
          <div className="">
            <h1
              className="pt-2 text-center text-5xl sm:font-normal md:font-semibold lg:font-bold xl:font-bold"
              style={{ color: "#195283" }}
            >
              {singleEvent.singleEvent.name}
            </h1>
            <p
              className="text-center text-2xl font-normal"
              style={{ color: "#F4AA0B" }}
            >
              {singleEvent.singleEvent.subject}
            </p>
            <Divider />
          </div>
          <div className=" ">
            <p className="px-6 text-3xl font-bold eventOverView">
              Event Overview:
            </p>
            <p className="pt-3 eventDetailsText">
              {singleEvent.singleEvent.description}
            </p>
          </div>
        </div>

        {/* <div className=" grid pt-2 ">
          <div className="lg:col-8">
            <p className="px-6 text-3xl font-bold">Event Overview:</p>
            <p className="pt-3 eventDetailsText">{description}</p>
          </div>
          <div className="lg:col-4 surface-300">
            <div className="flex ">
              <i className=" pi pi-check-circle pt-1"></i>
              <p className=" px-4">Speaker</p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default EventDetailsCard;
