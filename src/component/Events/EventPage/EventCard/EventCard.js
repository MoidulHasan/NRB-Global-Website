import { Button } from "primereact/button";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Card from "./Card";
import "./EventCard.css";

const EventCard = () => {
  const url = process.env.REACT_APP_BACKEND_URL;

  const [cardInfo, setCardInfo] = useState([]);

  const [page, setPage] = useState(1);
  const [totalpage, setTotalPage] = useState();

  const eventAllData = () => {
    if (page > totalpage) return;
    fetch(`${url}/events?limit=6&page=${page}`)
      .then((res) => res.json())
      .then((data) => {
        setCardInfo([...cardInfo, ...data?.data?.results]);
        setTotalPage(data?.data?.totalPages);
      });
  };

  console.log(cardInfo);

  const loadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    eventAllData();
  }, [page]);

  return (
    <div className="px-3">
      <div className="p-container my-6 eventCardDiv ">
        <div className=" pt-1 pb-1 ">
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
          <div className="flex align-items-center justify-content-center my-6">
            {page < totalpage && (
              <Button
                onClick={loadMore}
                label="Load More"
                severity="secondary"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
