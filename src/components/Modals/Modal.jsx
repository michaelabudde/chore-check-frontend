import "./Modal.css";
import React, { useCallback, useState, useRef, useEffect } from "react";
import useEscape from "../../hooks/useEsc";
import useClickOutside from "../../hooks/useClickOutside";

const Modal = ({ children, onSubmit, isLoading, formInfo }) => {
  const [activeModal, setActiveModal] = useState(null);
  const modalRef = useRef(null);
  const handleCloseModal = useCallback(() => {
    setActiveModal(null);
  }, []);
  useEscape(handleCloseModal);

  useClickOutside(modalRef, handleCloseModal);
  // const handleOpenModal = useCallback((modalName) => {
  //   setActiveModal(modalName);
  // }, []);
  return (
    <div className="modal">
      <div className="modal__container" ref={modalRef}>
        <div className="modal__overlay" onClick={handleCloseModal} />
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
