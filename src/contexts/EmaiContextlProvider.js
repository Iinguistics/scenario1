import React, { createContext, useState } from "react";

export const EmailContext = createContext();

const EmailContextProvider = ({ children }) => {
  const [newState, setNewState] = useState({
    openModal: false,
  });

  const openModalHandler = () => {
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
