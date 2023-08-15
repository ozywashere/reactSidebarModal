import { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';
const AppContext = createContext();

 const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  


  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        isModalOpen,
        setIsSidebarOpen,
        setIsModalOpen,

      }}
    >
      {children}
    </AppContext.Provider>
  );
};


AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};


export const useGlobalContext = () => useContext(AppContext);



export { AppContext, AppProvider };