import React, { createContext, useState } from 'react';


export const AppContext = createContext(null);


export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null); 

  const login = (userData) => {
    setUser(userData); 
  };

  const logout = () => {
    setUser(null); 
  };

  
  const contextValue = {
    user,
    setUser, 
    login,
    logout,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};
