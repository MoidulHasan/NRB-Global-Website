import React, { useEffect, useState } from "react";
import EventDetailsCard from "./EventDetailsCard";
import "./EventsDetails.css";

const EventsDetails = () => {
  const [cardDetailsInfo, setCardDetailsInfo] = useState([]);
  useEffect(() => {
    fetch("/eventDetails.json")
      .then((res) => res.json())
      .then((data) => setCardDetailsInfo(data));
  }, []);
  return (
    <div className="bg-blue-100 text-white-800">
      {cardDetailsInfo.map((cardsDetailsInfo) => (
        <EventDetailsCard
          key={cardsDetailsInfo.id}
          cardsDetailsInfo={cardsDetailsInfo}
        ></EventDetailsCard>
      ))}{" "}
    </div>
  );
};

export default EventsDetails;
