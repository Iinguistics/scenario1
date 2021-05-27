import React, { useContext, useState, useEffect } from "react";
import { EmailContext } from "../contexts/EmaiContextlProvider";

const EmailModal = () => {
  const { newState } = useContext(EmailContext);
  const { openModalHandler, closeModalHandler } = useContext(EmailContext);
  const openModal = newState.openModal;
  console.log(newState);

  useEffect(() => {
    document.body.addEventListener("mouseleave", () => {
      openModalHandler();
    });
  }, []);

  return (
    <section
      className={
        openModal ? "email-modal  email-modal--visible" : "email-modal"
      }
    >
      <div className="email-modal__close-btn" onClick={closeModalHandler}>
        <i className="fa fa-window-close" />
      </div>
      <div className="email-modal__container">
        <div className="email-modal__info">
          <div className="logo">
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
          <div className="email-modal__error-message">
            Sorry this is not a valid email
          </div>
          <div className="email-modal__form-group">
            <input
              type="email"
              className="email-modal__input"
              placeholder="youremail@mail.com"
            />
            <button className="email-modal__button">Send</button>
          </div>
          <div
            className="email-modal__decline-offer"
            onClick={closeModalHandler}
          >
            Sorry, I'm not interested
          </div>
        </div>
        <div className="email-modal__side-img">
          <img
            src="img/pexels-photo-4462782.jpeg"
            alt="black shoes with yellow background"
          />
        </div>
        <div className="email-thank">
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
