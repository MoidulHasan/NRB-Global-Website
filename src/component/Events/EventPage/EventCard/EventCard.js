import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Card from "./Card";
import "./EventCard.css";

const EventCard = () => {
  const [cardInfo, setCardInfo] = useState([]);
  useEffect(() => {
    fetch("/EventCard.json")
      .then((res) => res.json())
      .then((data) => setCardInfo(data));
  }, []);
  return (
    <div className="px-3">
      <div className="p-container my-6 eventCardDiv ">
        <div className=" pt-1 pb-3 ">
          <div className="">
            <h1 className="text-center text-5xl font-bold  py-3 event-title">
              Our All Events
            </h1>
          </div>
          <div className="grid">
            {cardInfo.map((cardsinfo) => (
              <Card key={cardsinfo.id} cardsinfo={cardsinfo}></Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
