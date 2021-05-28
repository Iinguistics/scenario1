import React, { createContext, useState } from "react";
import Cookies from "js-cookie";

export const EmailContext = createContext();

const EmailContextProvider = ({ children }) => {
  const [newState, setNewState] = useState({
    openModal: false,
  });

  const openModalHandler = () => {
    Cookies.set("modalOpenedBefore", true, { expires: 7 });
    setNewState({ ...newState, openModal: true });
  };

  const closeModalHandler = () => {
    setNewState({ ...newState, openModal: false });
  };

  return (
    <EmailContext.Provider
      value={{
        newState: newState,
        openModalHandler: openModalHandler,
        closeModalHandler: closeModalHandler,
      }}
    >
      {children}
    </EmailContext.Provider>
  );
};

export default EmailContextProvider;
