import React from "react";
import { Button } from "primereact/button";
import { Link } from "react-router-dom";
import "./EventCard.css";

const Card = (props) => {
  const { id, title, overview, coverImage } = props.cardsinfo;

  const newDescription = overview.slice(0, 201);

  const nullImg = "https://i.ibb.co/jMLdXJH/nrb-image.png";

  return (
    <div className="sm:col-12 md:col-6 lg:col-4 xl:col-4 pb-3">
      <Link to={`/events/${id}`} className="no-underline">
        <div className="eventImgCard ">
          <img
            src={coverImage ?? nullImg}
            alt="event_image"
            className="w-full"
          />
        </div>
        <div className="eventCardDetails">
          <span className="block text-xl font-bold  pb-4 ">{title}</span>
          <span className="block text-justify">{newDescription}</span>
          <div className="pt-5">
            <div className="text-right">
              <Link to={`/events/${id}`} className="no-underline">
                <Button
                  label="Read More"
                  icon="pi pi-arrow-right"
                  className="p-button-sm pt-1 pb-1 p-button-secondary"
                  iconPos="right"
                />
              </Link>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
