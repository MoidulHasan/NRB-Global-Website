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
              className="pt-2 text-center text-2xl md:text-5xl lg:text-5xl xl:text-5xl sm:font-normal md:font-semibold lg:font-bold xl:font-bold"
              style={{ color: "#195283" }}
            >
              {singleEvent.singleEvent.name}
            </h1>
            <p
              className="text-center  text-lg md:text-3xl lg:text-3xl xl:text-3xl font-normal"
              style={{ color: "#F4AA0B" }}
            >
              {singleEvent.singleEvent.subject}
            </p>
            <Divider />
          </div>
          {/* <div className="border-round-md surface-100 p-4">
            <div className="grid">
              <div className="sm:col-12 md:col-6 lg:col-3 ">
                <div className="">
                  <div className="text-center">
                    <i
                      className="pi pi-clock font-bold block mx-auto"
                      style={{}}
                    ></i>
                  </div>
                  <div className="text-center">
                    <div className="">
                      <span className="text-xl font-bold">Event Time</span>
                    </div>
                    <div className="">
                      <span className="text-xl font-bold">22 Sept, 2021</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sm:col-12 md:col-6 lg:col-3 ">Speaker</div>
              <div className="sm:col-12 md:col-6 lg:col-3 ">Venu</div>
              <div className="sm:col-12 md:col-6 lg:col-3 ">Organized By</div>
            </div>
          </div> */}
          <Divider />

          <div className=" ">
            <p className="px-2 md:px-4 lg:px-6 xl:px-6 text-3xl font-bold eventOverView">
              Event Overview:
            </p>
            <p className="px-2 md:px-4 lg:px-6 xl:px-6 pt-2 eventDetailsText">
              {singleEvent.singleEvent.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetailsCard;
