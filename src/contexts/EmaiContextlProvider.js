import React, { createContext, useState } from "react";
import Cookies from "js-cookie";

export const EmailContext = createContext();

const EmailContextProvider = ({ children }) => {
  const [openModalState, setOpenModelState] = useState(false);
  const [userEmailState, setUserEmailState] = useState("");
  const [showEmailErrorState, setShowEmailErrorState] = useState(false);

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

  const checkForEmailHandler = (e) => {
    function emailIsValid(text) {
      return /\S+@\S+\.\S+/.test(text);
    }
    if (!emailIsValid(userEmailState)) {
      setShowEmailErrorState(true);
    }
  };

  const removeErrorMessageHandler = (e) => {
    setShowEmailErrorState(false);
  };

  return (
    <EmailContext.Provider
      value={{
        openModalState,
        userEmailState,
        showEmailErrorState,
        openModalHandler,
        closeModalHandler,
        userEmailHandler,
        checkForEmailHandler,
        removeErrorMessageHandler,
      }}
    >
      {children}
    </EmailContext.Provider>
  );
};

export default EmailContextProvider;
