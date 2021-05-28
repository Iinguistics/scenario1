import React, { createContext, useState } from "react";
import Cookies from "js-cookie";

export const EmailContext = createContext();

const EmailContextProvider = ({ children }) => {
  const [openModalState, setOpenModelState] = useState(false);
  const [userEmailState, setUserEmailState] = useState("");

  const openModalHandler = () => {
    Cookies.set("modalOpenedBefore", true, { expires: 7 });
    setOpenModelState(true);
  };

  const closeModalHandler = () => {
    setOpenModelState(false);
  };

  const userEmailHandler = (e) => {
    setUserEmailState(e.target.value);
  };

  return (
    <EmailContext.Provider
      value={{
        openModalState,
        userEmailState,
        openModalHandler: openModalHandler,
        closeModalHandler: closeModalHandler,
        userEmailHandler: userEmailHandler,
      }}
    >
      {children}
    </EmailContext.Provider>
  );
};

export default EmailContextProvider;
