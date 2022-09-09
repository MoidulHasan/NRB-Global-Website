import React from "react";
import { useParams } from "react-router-dom";
import EventDetailsCard from "../../../component/Events/EventsDetails/EventDetailsCard";
import useDataContexts from "../../../hooks/useDataContexts";

const EventDetailSingle = () => {
  const { id } = useParams();
  // console.log(id);

  const { nrbEvents } = useDataContexts();
  // console.log("nrbEvents", nrbEvents);

  const singleEvent = nrbEvents?.find((event) => event.id === id);

  // console.log("Event-matched", singleEvent);

  return (
    <div>
      <EventDetailsCard singleEvent={singleEvent} />
    </div>
  );
};

export default EventDetailSingle;
