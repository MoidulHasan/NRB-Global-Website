import React, { createContext, useState } from 'react';

export const ContextApi = createContext();

const ContextProvider = ({ children }) => {
  /*
     *** hooks will be imprted here like:
     const {members} = useMembers();
     then members will be in data.
    */
  const [hoverMenu, setHoverMenu] = useState(false);

  const data = { hoverMenu, setHoverMenu };

  return <ContextApi.Provider value={data}>{children}</ContextApi.Provider>;
};

export default ContextProvider;
