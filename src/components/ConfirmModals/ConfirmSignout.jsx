import React from "react";
import useEsc from "../../hooks/useEsc";
import "../ConfirmationModals/ConfirmationModal.css";
import "../ModalWithForm/ModalWithForm.css";

const ConfirmSignout = ({ onClose, handleLogout, isLoading }) => {
  useEsc(onClose);
  return (
    <div className="modal-form ">
      <div className="modal-form__overlay" onClick={onClose}></div>
      <div className="confirmation-modal__container">
        <h2 className="confirmation-modal__query">
          Are you sure you want to sign out?
        </h2>
        <button
          type="button"
          className="confirmation-modal__delete"
          onClick={() => {
            handleLogout();
          }}
        >
          {isLoading ? "Signing out..." : "Sign Out"}
        </button>
        <button
          type="button"
          className="confirmation-modal__cancel"
          onClick={onClose}
        >
          Cancel
        </button>
        <button
          className="modal-form__close-button"
          type="button"
          onClick={onClose}
        ></button>
      </div>
    </div>
  );
};

export default ConfirmSignout;
