import "./Modal.css";
import React, { useCallback, useState } from "react";

const Modal = ({ children, onClose, onSubmit, isLoading, formInfo }) => {
  const [activeModal, setActiveModal] = useState(null);
  const handleCloseModal = useCallback(() => {
    setActiveModal(null);
  }, []);
  const handleOpenModal = useCallback((modalName) => {
    setActiveModal(modalName);
  }, []);
  return (
    <div className="modal">
      <div className="modal__container">
        <div className="modal__overlay" onClick={onClose} />
        <button
          type="button"
          onClick={handleCloseModal}
          className="modal__close-button"
        />
        {children}
      </div>
    </div>
  );
};
export default Modal;
