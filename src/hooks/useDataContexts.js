import { useContext } from 'react';
import { ContextApi } from '../contexts/ContextProvider';

const useDataContexts = () => {
  return useContext(ContextApi);
};

export default useDataContexts;
