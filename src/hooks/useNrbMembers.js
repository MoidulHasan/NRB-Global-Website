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

  const generalMembers = nrbMembers?.results?.filter(
    (member) => member.memberCategory === 'generalMember'
  );
  const youngCongressMembers = nrbMembers?.results?.filter(
    (member) => member.memberCategory === 'youngcongressMember'
  );
  return { nrbMembers, setNrbMembers, generalMembers, youngCongressMembers };
};

export default useNrbMembers;
