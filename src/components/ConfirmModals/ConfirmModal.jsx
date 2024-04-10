import React from "react";
import useEsc from "../../hooks/useEsc";
import "./ConfirmModal.css";
import Modal from "../Modals/Modal";
const ConfirmModal = ({
  handleSignout,
  isLoading,
  isOpen,
  onClose,
  children,
}) => {
  useEsc(onClose);
  return (
    <Modal
      // onSubmit={onSubmit}
      isLoading={isLoading}
      isOpen={isOpen}
      onClose={onClose}
      children={children}
    >
      {/* <div className="confirmation-modal__container"> */}
      {children}
      {/* <button
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
      </button> */}
      {/* </div> */}
    </Modal>
  );
};

export default ConfirmModal;
