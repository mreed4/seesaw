/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */

import { createContext, useState } from "react";
import { allParks } from "./../data/parks";

export const ParkContext = createContext();

export const ParkProvider = ({ children }) => {
  const [parks, setParks] = useState(allParks);

  return <ParkContext.Provider value={{ parks, setParks }}>{children}</ParkContext.Provider>;
};
