import React, { createContext, useState } from 'react';
import useBlog from '../hooks/useBlog';
import useCommitteeMembers from '../hooks/useCommitteeMembers';
import useCountries from '../hooks/useCountries';
import useEvent from '../hooks/useEvent';
import useNrbMembers from '../hooks/useNrbMembers';
import useServices from '../hooks/useServices';

export const ContextApi = createContext();

const ContextProvider = ({ children }) => {
  /*
     *** hooks will be imported here like:
     const {members} = useMembers();
     then members will be in data.
    */
  const [hoverMenu, setHoverMenu] = useState(false);
  const {
    nrbMembers,
    setNrbMember,
    generalMembers,
    youngCongressMembers,
    totalNrbpage,
    nrbMemberPage,
    loadMoreNrbMember,
  } = useNrbMembers();
  const { nrbServices } = useServices();
  const { nrbBlogs } = useBlog();
  const { nrbEvents } = useEvent();

  const { countries } = useCountries();

  const { committeeMembers } = useCommitteeMembers();

  const data = {
    hoverMenu,
    setHoverMenu,
    nrbMembers,
    nrbServices,
    countries,
    nrbBlogs,
    nrbEvents,
    committeeMembers,
    generalMembers,
    youngCongressMembers,
    loadMoreNrbMember,
    totalNrbpage,
    nrbMemberPage,
  };

  return <ContextApi.Provider value={data}>{children}</ContextApi.Provider>;
};

export default ContextProvider;
