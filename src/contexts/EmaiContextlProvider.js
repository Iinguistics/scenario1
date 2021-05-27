import React, { createContext, useState } from "react";

export const EmailContext = createContext();

const EmailContextProvider = ({ children }) => {
  const [newState, setNewState] = useState({
    openModal: false,
  });

  // const addBook = (title, id) => {
  //   setBooks([...books, { title, id }]);
  // };

  return (
    <EmailContext.Provider value={{ newState: newState }}>
      {children}
    </EmailContext.Provider>
  );
};

export default EmailContextProvider;
