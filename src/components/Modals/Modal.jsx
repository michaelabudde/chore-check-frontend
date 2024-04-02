import "./Modal.css";

const Modal = {
    return (
        <div className="modal">
        <div className="modal__container">
        <div className="modal__overlay" onClick={onClose} />
        <button
          type="button"
          onClick={onClose}
          className="modal-form__close-button"
        />
        </div>
        </div>
    )
};
export default Modal;
