/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */

import { createContext, useState } from "react";

export const ParkContext = createContext();

export const ParkProvider = ({ children }) => {
  const [parks, setParks] = useState([
    { id: 1, name: "Sunny Park", location: "California", city: "Los Angeles" },
    { id: 2, name: "Moonlight Park", location: "New York", city: "Brooklyn" },
    { id: 3, name: "Ocean Breeze Park", location: "Florida", city: "Miami" },
  ]);

  return <ParkContext.Provider value={{ parks, setParks }}>{children}</ParkContext.Provider>;
};
