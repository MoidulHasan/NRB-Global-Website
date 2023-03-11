import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import EventDetailsCard from "../../../component/Events/EventsDetails/EventDetailsCard";
import useDataContexts from "../../../hooks/useDataContexts";

const EventDetailSingle = () => {
  const { id } = useParams();
  // console.log(id);

  const url = process.env.REACT_APP_BACKEND_URL;

  const [cardDetailsInfo, setCardDetailsInfo] = useState([]);

  useEffect(() => {
    fetch(`${url}/events/${id}`)
      .then((res) => res.json())
      .then((data) => setCardDetailsInfo(data?.data?.event));
  }, []);

  console.log(cardDetailsInfo);

  const { nrbEvents } = useDataContexts();
  // console.log("nrbEvents", nrbEvents);

  const singleEvent = nrbEvents?.find((event) => event.id === id);

  // console.log("Event-matched", singleEvent);

  return (
    <div>
      <EventDetailsCard singleEvent={cardDetailsInfo} />
    </div>
  );
};

export default EventDetailSingle;
