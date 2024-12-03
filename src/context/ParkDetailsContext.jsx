/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */

import { createContext, useContext } from "react";

const ParkDetailsContext = createContext();

export const ParkDetailsProvider = ({ park, children }) => {
  return <ParkDetailsContext.Provider value={park}>{children}</ParkDetailsContext.Provider>;
};

export const useParkDetails = () => {
  const context = useContext(ParkDetailsContext);
  if (!context) {
    throw new Error("useParkDetails must be used within a ParkDetailsProvider");
  }
  return context;
};
