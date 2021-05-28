import React, { useContext, useState, useEffect, useRef } from "react";
import { EmailContext } from "../contexts/EmaiContextlProvider";
import Cookies from "js-cookie";
const EmailModal = () => {
  const {
    userEmailState,
    openModalState,
    showEmailErrorState,
    formCompletedState,
    openModalHandler,
    closeModalHandler,
    userEmailHandler,
    checkForEmailHandler,
    removeErrorMessageHandler,
    submittedFormHandler,
  } = useContext(EmailContext);

  const logo = useRef("");
  const modalOpenedBefore = Cookies.get("modalOpenedBefore");

  useEffect(() => {
    // if (!modalOpenedBefore) {
    //   document.body.addEventListener("mouseleave", () => {
    //     openModalHandler();
    //   });
    // }
    document.body.addEventListener("mouseleave", () => {
      openModalHandler();
    });
  }, []);
  //console.log(logo.current.textContent);
  console.log(userEmailState);

  return (
    <section
      className={
        openModalState ? "email-modal  email-modal--visible" : "email-modal"
      }
    >
      <div className="email-modal__close-btn" onClick={closeModalHandler}>
        <i className="fa fa-window-close" />
      </div>
      <div className="email-modal__container">
        <form
          className="email-modal__info"
          onSubmit={(e) => submittedFormHandler(e)}
        >
          <div className="logo" ref={logo}>
            Berry
            <div className="logo__sub">by Jenny</div>
          </div>
          <h2>Don't miss this chance!</h2>
          <p className="email-modal__message">
            Join our amazing community of more than{" "}
            <span className="email-modal__highlight-text">300,000 woman</span>{" "}
            who love fashion and receive{" "}
            <span className="email-modal__highlight-text">
              notifications, discounts, and our award winning newsletter.
            </span>
          </p>
          <div
            className={
              showEmailErrorState
                ? "email-modal__error-message--active"
                : "email-modal__error-message"
            }
          >
            Sorry this is not a valid email
          </div>
          <div className="email-modal__form-group">
            <input
              type="email"
              className="email-modal__input"
              placeholder="youremail@mail.com"
              value={userEmailState}
              onChange={(e) => userEmailHandler(e)}
              onBlur={checkForEmailHandler}
              onFocus={removeErrorMessageHandler}
            />
            <button
              className="email-modal__button"
              onClick={(e) => submittedFormHandler(e)}
            >
              Send
            </button>
          </div>
          <div
            className="email-modal__decline-offer"
            onClick={closeModalHandler}
          >
            Sorry, I'm not interested
          </div>
        </form>
        <div className="email-modal__side-img">
          <img
            src="img/pexels-photo-4462782.jpeg"
            alt="black shoes with yellow background"
          />
        </div>
        <div
          className={
            formCompletedState
              ? "email-thank email-thank--success"
              : "email-thank"
          }
        >
          <div className="email-thank__title">Thank You</div>
          <p className="email-thank__message">
            check your email we sent you some instructions... by the way welcome
            to the community!
          </p>
        </div>
      </div>
    </section>
  );
};

export default EmailModal;
