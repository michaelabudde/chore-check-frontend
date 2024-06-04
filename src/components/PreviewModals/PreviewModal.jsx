import "./PreviewModal.css";
import Modal from "../Modals/Modal";

import React, { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.jsx";
import "./ItemModal.css";

const PreviewModal = ({ selectedCard, onClose, onDeleteItem }) => {
  const { currentUser } = useContext(CurrentUserContext);
  const handleCardDelete = () => {
    onDeleteItem(selectedCard._id);
  };
  // Checking if the current user is the owner of the current clothing item
  const itemDeleteButton = `item-modal__delete-button ${
    isOwn ? "item-modal__delete-button" : "item-modal__delete-button_hidden"
  }`;
  return (
    <Modal>
      <div className="item-modal">
        <div className="item-modal__overlay" onClick={onClose} />

        <div className="item-modal__container">
          <button
            type="button"
            onClick={onClose}
            className="item-modal__close-button-white"
          ></button>
          <img
            src={selectedCard.imageUrl}
            className="item-modal__image-preview"
            alt={selectedCard.name}
          ></img>
          <div className="item-modal__footer">
            <p className="item-modal__item-name">{selectedCard.name}</p>
            <button
              type="button"
              className={itemDeleteButton}
              onClick={handleCardDelete}
            >
              Delete Item
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};
export default PreviewModal;
