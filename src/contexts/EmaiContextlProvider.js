import React, { createContext, useState } from "react";
import Cookies from "js-cookie";

export const EmailContext = createContext();

const EmailContextProvider = ({ children }) => {
  const [openModalState, setOpenModelState] = useState(false);
  const [userEmailState, setUserEmailState] = useState("");
  const [showEmailErrorState, setShowEmailErrorState] = useState(false);
  const [formCompletedState, setFormCompletedState] = useState(false);

  const openModalHandler = () => {
    Cookies.set("modalOpenedBefore", true, { expires: 7 });
    setOpenModelState(true);
  };

  const closeModalHandler = () => {
    setOpenModelState(false);
    window.location.reload();
  };

  const userEmailHandler = (e) => {
    setUserEmailState(e.target.value);
  };

  const checkForEmailHandler = () => {
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

  const submittedFormHandler = (e) => {
    e.preventDefault();
    if (showEmailErrorState === false && userEmailState.length > 5) {
      setFormCompletedState(true);
    }
    setTimeout(() => {
      closeModalHandler();
    }, 3000);
  };

  return (
    <EmailContext.Provider
      value={{
        openModalState,
        userEmailState,
        showEmailErrorState,
        formCompletedState,
        openModalHandler,
        closeModalHandler,
        userEmailHandler,
        checkForEmailHandler,
        removeErrorMessageHandler,
        submittedFormHandler,
      }}
    >
      {children}
    </EmailContext.Provider>
  );
};

export default EmailContextProvider;
