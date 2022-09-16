import { useEffect, useState } from 'react';

const useCommitteeMembers = () => {
  const [committeeMembers, setCommitteeMembers] = useState([]);
  useEffect(() => {
    fetch('/committeeMembers.json')
      .then((res) => res.json())
      .then((data) => setCommitteeMembers(data));
  }, []);
  return { committeeMembers, setCommitteeMembers };
};

export default useCommitteeMembers;
