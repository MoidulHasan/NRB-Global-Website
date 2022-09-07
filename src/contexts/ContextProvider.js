import React, { createContext, useState } from 'react';
import useNrbMembers from '../hooks/useNrbMembers';
import useServices from '../hooks/useServices';

export const ContextApi = createContext();

const ContextProvider = ({ children }) => {
  /*
     *** hooks will be imprted here like:
     const {members} = useMembers();
     then members will be in data.
    */
  const [hoverMenu, setHoverMenu] = useState(false);
  const { nrbMembers } = useNrbMembers();
  const { nrbServices } = useServices();

  const data = { hoverMenu, setHoverMenu, nrbMembers, nrbServices };

  return <ContextApi.Provider value={data}>{children}</ContextApi.Provider>;
};

export default ContextProvider;
