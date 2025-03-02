/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */

import { createContext, useContext, useState } from "react";
import { users } from "../data/data";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userList, setUserList] = useState(users);

  return <UserContext.Provider value={{ userList, setUserList }}>{children}</UserContext.Provider>;
};

export const useUserContext = () => useContext(UserContext);
