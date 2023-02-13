import { useEffect, useState } from 'react';

const useNrbMembers = () => {
  const [nrbMembers, setNrbMembers] = useState([]);
  //console.log(nrbMembers);

  const url = 'http://localhost:3005';
  useEffect(() => {
    fetch(`${url}/v1/public/members`)
      .then((res) => res.json())
      .then((data) => setNrbMembers(data.data));
  }, []);
  return { nrbMembers, setNrbMembers };
};

export default useNrbMembers;
