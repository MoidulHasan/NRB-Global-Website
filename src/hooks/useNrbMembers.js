import { useEffect, useState } from 'react';

const useNrbMembers = () => {
  const url = process.env.REACT_APP_BACKEND_URL;

  const [nrbMembers, setNrbMember] = useState([]);
  const [nrbMemberPage, setMemberPage] = useState(1);
  const [totalNrbpage, setTotalMemberPage] = useState();
  const memberData = () => {
    if (totalNrbpage === nrbMemberPage) return;
    fetch(`${url}/public/members?limit=10&page=${nrbMemberPage}`)
      .then((res) => res.json())
      .then((data) => {
        setNrbMember([...nrbMembers, ...data?.data?.results]);
        setTotalMemberPage(data?.data?.totalPages);
      });
  };
  const loadMoreNrbMember = () => {
    setMemberPage(nrbMemberPage + 1);
  };
  useEffect(() => {
    memberData();
  }, [nrbMemberPage]);

  const generalMembers = nrbMembers?.filter(
    (member) => member.memberCategory === 'generalMember'
  );
  console.log(generalMembers, 'geeneraaal');
  const youngCongressMembers = nrbMembers?.filter(
    (member) => member.memberCategory === 'youngcongressMember'
  );

  console.log(nrbMembers, 'nrb members');

  return {
    nrbMembers,
    setNrbMember,
    generalMembers,
    youngCongressMembers,
    loadMoreNrbMember,
    totalNrbpage,
    nrbMemberPage,
  };
};

export default useNrbMembers;
