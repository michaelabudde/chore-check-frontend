import React, { useContext, useEffect, useState, useRef } from "react";
import useEsc from "../../hooks/useEsc";
// import useClickOutside from "../../hooks/useClickOutside";
// import { ResponseContext } from "../../contexts/ResponseContext.jsx";

import Modal from "../Modals/Modal";
import "./ModalWithForm.css";
// import { iconData } from "../../../../chore-check-backend/iconApi";

const ModalWithForm = ({
  children,
  onClose,
  onSubmit,
  isLoading,
  formInfo,
  isOpen,
  isSignedIn,
}) => {
  const modalRef = useRef(null);

  useEsc(onClose);
  // useClickOutside(modalRef, onClose);
  // const { response } = useContext(ResponseContext);

  return (
    <Modal formInfo={formInfo} isOpen={isOpen} onClose={onClose}>
      <div ref={modalRef}>
        <h1 className="modal-form__title">{formInfo?.title}</h1>
        <div className="modal-form__label-container">
          <label className="modal-form__label"></label>
          <span className="modal-form__error modal__server-error">
            {/* {response || ""} */}
          </span>
        </div>

        <form
          onSubmit={onSubmit}
          className="modal-form__inputs-container"
          name={`${formInfo?.name}-form`}
        >
          {children}

          <div className="modal-form__button-wrapper">
            <button
              type="submit"
              className="modal-form__submit-button"
              onClick={onSubmit}
            >
              {isLoading ? "Saving..." : formInfo?.buttonText}
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default ModalWithForm;
