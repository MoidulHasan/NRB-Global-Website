import React,{createContext} from 'react';

export const ContextApi = createContext();

const ContextProvider = ({children}) => {
    /*
     *** hooks will be imprted here like:
     const {members} = useMembers();
     then members will be in data.
    */

     const data = {};

     return <ContextApi.Provider value={data}>{children}</ContextApi.Provider>
};

export default ContextProvider;