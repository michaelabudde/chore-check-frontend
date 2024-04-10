import React from "react";
import useEsc from "../../hooks/useEsc";
// import "../ConfirmationModals/ConfirmationModal.css";
// import "../ModalWithForm/ModalWithForm.css";
import ModalWithForm from "../FormModals/ModalWithForm";

const ConfirmSignout = ({ handleSignout, isLoading, isOpen, onClose }) => {
  useEsc(onClose);
  return (
    <ModalWithForm
      // onSubmit={onSubmit}
      isLoading={isLoading}
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className="confirmation-modal__container">
        <h2 className="confirmation-modal__query">
          Are you sure you want to sign out?
        </h2>
        <button
          type="button"
          className="confirmation-modal__delete"
          onClick={() => {
            handleSignout();
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
      </div>
    </ModalWithForm>
  );
};

export default ConfirmSignout;
