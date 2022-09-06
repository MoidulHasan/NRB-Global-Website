import React from "react";
import { Divider } from "primereact/divider";

const EventDetailsCard = (props) => {
  const { title, subject, description, img } = props.cardsDetailsInfo;

  return (
    <div className="pt-4">
      <div className="m-5">
        <img src={img} alt="" className=" w-full eventDetailsImg" />
      </div>
      <div className=" pb-6 mx-5  nrbEventDetails">
        <div className="">
          <span
            className="flex pt-4 text-center text-5xl sm:font-normal md:font-semibold lg:font-bold xl:font-bold nrbEventTitle"
            style={{ color: "#195283" }}
          >
            {title}
          </span>
          <span
            className="flex text-2xl font-normal"
            style={{ color: "#F4AA0B" }}
          >
            {subject}
          </span>
          <Divider />
        </div>
        <div className=" pt-2 ">
          <p className="px-6 text-3xl font-bold eventOverView">
            Event Overview:
          </p>
          <p className="pt-3 eventDetailsText">{description}</p>
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
  );
};

export default EventDetailsCard;
