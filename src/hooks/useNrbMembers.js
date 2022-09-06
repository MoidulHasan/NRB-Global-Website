import { useEffect, useState } from 'react';

const useNrbMembers = () => {
  const [nrbMembers, setNrbMembers] = useState([]);
  useEffect(() => {
    fetch('/nrbMembers.json')
      .then((res) => res.json())
      .then((data) => setNrbMembers(data));
  }, []);
  return { nrbMembers, setNrbMembers };
};

export default useNrbMembers;
