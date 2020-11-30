import React, { createContext, useEffect, useState } from "react";


export const AppContext = createContext({ container: null, setContainer: (a) => {} });
export const AppProviderProps = { children: null };



// main application provider
export const AppProvider = ({ children }) => {
  const [container, setContainer] = useState(null);

  const loadMap = async () => {
    if (container) {
      const mapping = await import("../config/map");
      mapping.initialize(container);
    }
  };

  useEffect(() => {
    loadMap();
  }, [container]);
  
  const value = {
    container,
    setContainer,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
