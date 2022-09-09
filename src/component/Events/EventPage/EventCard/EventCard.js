import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button } from "primereact/button";
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
    <div className=" p-container pt-5 pb-3 ">
      <div className="">
        <h1 className="text-center text-5xl font-bold  pt-4 event-title">
          Our All Events
        </h1>
      </div>
      <div className="grid">
        {cardInfo.map((cardsinfo) => (
          <Card key={cardsinfo.id} cardsinfo={cardsinfo}></Card>
        ))}
      </div>
      <div className="flex justify-content-center mt-2">
        <Button
          label="Find More Events"
          className="p-button-rounded p-button-primary p-button-outlined"
          icon="pi pi-arrow-right"
          iconPos="right"
        />
      </div>
    </div>
  );
};

export default EventCard;
