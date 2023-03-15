import { useState, useEffect } from "react";

const useEvent = () => {
  const [nrbEvents, setNrbEvents] = useState([]);

  useEffect(() => {
    fetch("/EventCard.json")
      .then((res) => res.json())
      .then((data) => setNrbEvents(data));
  }, []);
  return { nrbEvents, setNrbEvents };
};
export default useEvent;
