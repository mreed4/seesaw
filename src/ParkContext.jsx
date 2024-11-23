import { createContext, useContext } from "react";
import { useParkLogic } from "./useParkLogic";
import parks from "./data";

const ParkContext = createContext();

export const ParkProvider = ({ children }) => {
  const parkData = useParkLogic(parks);

  return <ParkContext.Provider value={parkData}>{children}</ParkContext.Provider>;
};

export const useParkContext = () => {
  return useContext(ParkContext);
};
