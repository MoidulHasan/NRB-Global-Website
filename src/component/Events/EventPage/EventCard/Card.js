import React from "react";
import "./EventCard.css";

const Card = (props) => {
  const { name, description, img, button } = props.cardsinfo;
  return (
    <div className="sm:col-12 md:col-6 lg:col-4 xl:col-4 pb-4 ">
      <div className="eventImgCard">
        <img src={img} alt="event_image" className="w-full" />
      </div>
      <div className="eventCardDetails">
        <span className="block text-xl font-bold  pb-4 ">{name}</span>
        <span className="block ">{description}</span>
        <div className="pt-6">
          <div className="  text-right">
            <button type="button" className="eventButton">
              {button}
              <i className="pi pi-arrow-right  pl-2 py-1 text-center"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
