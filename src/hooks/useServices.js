import { useState, useEffect } from 'react';

const useServices = () => {
  const [nrbServices, setNrbServices] = useState([]);

  useEffect(() => {
    fetch('services.json')
      .then((res) => res.json())
      .then((data) => setNrbServices(data));
  }, []);
  return { nrbServices, setNrbServices };
};

export default useServices;
