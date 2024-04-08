import React, { useEffect } from "react";
import ModalWithForm from "./ModalWithForm";
import "./ModalWithForm.css";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";
const AddChoreModal = ({ onClose, onAddChore, response, isLoading }) => {
  // isopen removed
  const { values, handleChange, errors, resetForm } = useFormAndValidation();
  const formInfo = {
    title: "New Chore",
    name: "addChore",
    buttonText: "Add chore",
  };
  function onSubmit(e) {
    e.preventDefault();
    const newChore = { ...values };
    onAddChore(newChore);
  }

  useEffect(() => {
    resetForm();
  }, [resetForm]);

  return (
    <ModalWithForm
      onClose={onClose}
      onSubmit={onSubmit}
      formInfo={formInfo}
      isLoading={isLoading}
    >
      <div>
        <div className="modal-form__label-container">
          <label className="modal-form__label" htmlFor="nameInput">
            Name
          </label>
          <span className="modal-form__error">{errors.name || " "}</span>
        </div>
        <input
          type="text"
          id="nameInput"
          name="name"
          className="modal-form__input modal__input_type_card-name"
          placeholder="Name"
          required
          minLength="1"
          maxLength="30"
          value={values.name || ""}
          onChange={handleChange}
        />

        <div className="modal-form__label-container">
          <label className="modal-form__label" htmlFor="imageUrlInput">
            Image
          </label>
          <span className="modal-form__error">{errors.imageUrl || ""} </span>
        </div>
        <input
          type="url"
          id="imageUrlInput"
          name="imageUrl"
          className="modal-form__input modal__input_type_url"
          placeholder="Image URL"
          value={values.imageUrl || ""}
          onChange={handleChange}
          required
        />
      </div>
    </ModalWithForm>
  );
};
export default AddChoreModal;
