import React from "react";
import CardSlider from "../../../component/Events/EventPage/CardSlider/CardSlider";
import EventCard from "../../../component/Events/EventPage/EventCard/EventCard";

const EventPage = () => {
  return (
    <div className="text-info">
      <CardSlider />
      <EventCard />
    </div>
  );
};

export default EventPage;
