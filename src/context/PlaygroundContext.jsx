/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */

import { createContext, useContext } from "react";
import { usePlaygroundLogic } from "../hooks/usePlaygroundLogic";
import { playgrounds } from "../data/data";

const PlaygroundContext = createContext();

export const PlaygroundProvider = ({ children }) => {
  const playgroundData = usePlaygroundLogic(playgrounds);

  return <PlaygroundContext.Provider value={playgroundData}>{children}</PlaygroundContext.Provider>;
};

export const usePlaygroundContext = () => useContext(PlaygroundContext);
