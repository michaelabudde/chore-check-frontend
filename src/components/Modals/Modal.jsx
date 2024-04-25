import "./Modal.css";
import React, { useCallback, useState, useRef, useEffect } from "react";
import useEsc from "../../hooks/useEsc";
// import useClickOutside from "../../hooks/useClickOutside";

const Modal = ({
  children,
  isOpen,
  onClose,
  onSubmit,
  isLoading,
  formInfo,
}) => {
  const modalRef = useRef(null);
  useEsc(onClose);
  // useClickOutside(modalRef, onClose);
  return (
    <div className="modal">
      <div className="modal__overlay" onClick={onClose} />
      <div className="modal__container" ref={modalRef}>
        <button
          type="button"
          onClick={onClose}
          className="modal__close-button"
        />
        {children}
      </div>
    </div>
  );
};
export default Modal;

// const [activeModal, setActiveModal] = useState(null);

// const handleCloseModal = useCallback(() => {
//   isOpen(null);
// }, []);
// useEsc(handleCloseModal);

// useClickOutside(modalRef, handleCloseModal);
// const handleOpenModal = useCallback((modalName) => {
//   setActiveModal(modalName);
// }, []);
