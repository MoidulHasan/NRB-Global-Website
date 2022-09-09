import React, { createContext, useState } from "react";
import useBlog from "../hooks/useBlog";
import useEvent from "../hooks/useEvent";
import useNrbMembers from "../hooks/useNrbMembers";
import useServices from "../hooks/useServices";

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
  const { nrbBlogs } = useBlog();
  const { nrbEvents } = useEvent();

  const data = {
    hoverMenu,
    setHoverMenu,
    nrbMembers,
    nrbServices,
    nrbBlogs,
    nrbEvents,
  };

  return <ContextApi.Provider value={data}>{children}</ContextApi.Provider>;
};

export default ContextProvider;
