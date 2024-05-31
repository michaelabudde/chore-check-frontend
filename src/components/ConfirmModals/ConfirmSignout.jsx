import React from "react";
import useEsc from "../../hooks/useEsc";
// import "../ConfirmationModals/ConfirmationModal.css";
// import "../ModalWithForm/ModalWithForm.css";
// import ModalWithForm from "../FormModals/ModalWithForm";
import ConfirmModal from "./ConfirmModal";

const ConfirmSignout = ({ signOut, isLoading, isOpen, onClose }) => {
  useEsc(onClose);

  return (
    <ConfirmModal
      // onSubmit={onSubmit}
      isLoading={isLoading}
      isOpen={isOpen}
      onClose={onClose}
    >
      <h1 className="confirmation-modal__query">
        Are you sure you want to sign out?
      </h1>
      <button
        type="button"
        className="confirm-modal__button"
        onClick={() => {
          signOut();
          onClose();
        }}
      >
        {isLoading ? "Signing out..." : "Sign Out"}
      </button>
      <button type="button" className="confirm-modal__cancel" onClick={onClose}>
        Cancel
      </button>
    </ConfirmModal>
  );
};

export default ConfirmSignout;
