// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import EventDetailsCard from "./EventDetailsCard";
// import "./EventsDetails.css";

// const EventsDetails = () => {
//   const url = process.env.REACT_APP_BACKEND_URL;

//   let { id } = useParams();

//   const [cardDetailsInfo, setCardDetailsInfo] = useState([]);

//   useEffect(() => {
//     fetch(`${url}/events/${id}`)
//       .then((res) => res.json())
//       .then((data) => setCardDetailsInfo(data?.data?.event));
//   }, []);

//   console.log(cardDetailsInfo);

//   return (
//     <div className="bg-blue-100 text-white-800">
//       {cardDetailsInfo.map((cardsDetailsInfo) => (
//         <EventDetailsCard
//           key={cardsDetailsInfo.id}
//           cardsDetailsInfo={cardsDetailsInfo}
//         ></EventDetailsCard>
//       ))}{" "}
//     </div>
//   );
// };

// export default EventsDetails;
