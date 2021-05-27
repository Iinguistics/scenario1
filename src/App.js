import React from "react";
import EmailModal from "./emailModal/EmailModal";
import EmailContextProvider from "./contexts/EmaiContextlProvider";

const App = () => {
  return (
    <>
      <EmailContextProvider>
        <header className="page-header">
          <div className="logo">
            Berry
            <div className="logo__sub">by Jenny</div>
          </div>
        </header>
        <main className="content-area">
          <h1>Content Area</h1>
        </main>
        <EmailModal />
        <div className="email-modal"></div>
      </EmailContextProvider>
    </>
  );
};

export default App;
