import "./ModalWithForm.css";
import ModalWithForm from "./ModalWithForm";
import "./ModalWithForm.css";
import { useEffect } from "react";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";

const SigninModal = ({
  onClose,
  handleLogIn,
  openModal,
  loginError,
  isLoading,
  isOpen,
  closeModal,
}) => {
  // removed isOpen
  const { values, handleChange, errors, resetForm } = useFormAndValidation();

  const formInfo = {
    title: "Log in",
    name: "login",
    buttonText: "Log in",
  };

  function onSubmit(e) {
    e.preventDefault();
    handleLogIn(values);
  }

  useEffect(() => {
    resetForm();
  }, [resetForm]);
  // removed isOpen

  return (
    <ModalWithForm
      formInfo={formInfo}
      onClose={onClose}
      onSubmit={onSubmit}
      isLoading={isLoading}
      modalName="login"
      isOpen={isOpen}
      closeModal={closeModal}
    >
      <div className="modal-form__label-container">
        <label className="modal-form__label" htmlFor="email">
          Email
        </label>
        <span className="modal-form__error" id="name-error">
          {errors.email || loginError || ""}
        </span>
      </div>
      <input
        className="modal-form__input"
        type="email"
        id="email"
        name="email"
        placeholder="Email"
        minLength="1"
        maxLength="30"
        required
        onChange={handleChange}
        value={values.email || ""}
      />
      <div className="modal-form__label-container">
        <label className="modal-form__label" htmlFor="password">
          Password
        </label>
        <span className="modal-form__error" id="name-error">
          {errors.password || ""}
        </span>
      </div>
      <input
        className="modal-form__input"
        type="text"
        id="password"
        name="password"
        placeholder="Password"
        minLength="1"
        maxLength="30"
        required
        onChange={handleChange}
        value={values.password || ""}
      />
    </ModalWithForm>
  );
};

export default SigninModal;
