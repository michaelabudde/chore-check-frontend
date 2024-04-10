import "./ModalWithForm.css";
import ModalWithForm from "./ModalWithForm";
import "./ModalWithForm.css";
import { useEffect } from "react";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";

const SignupModal = ({
  onClose,
  handleSignUp,
  openModal,
  signupError,
  isLoading,
  isOpen,
}) => {
  // isOpen removed
  const { values, handleChange, errors, resetForm } = useFormAndValidation();

  const formInfo = {
    title: "Sign up",
    name: "sign-up",
    buttonText: "Next",
  };

  function onSubmit(e) {
    e.preventDefault();
    handleSignUp(values);
  }

  useEffect(() => {
    resetForm();
  }, [resetForm]);
  // isOpen removed
  return (
    <ModalWithForm
      formInfo={formInfo}
      onClose={onClose}
      modalName="sign-up"
      onSubmit={onSubmit}
      isLoading={isLoading}
      isOpen={isOpen}
    >
      <div className="modal-form__label-container">
        <label className="modal-form__label" htmlFor="email">
          Email*
        </label>
        <span className="modal-form__error" id="name-error">
          {errors.email || signupError || ""}
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
          Password*
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
      <div className="modal-form__label-container">
        <label className="modal-form__label" htmlFor="name">
          Name*
        </label>
        <span className="modal-form__error" id="name-error">
          {errors.name || ""}
        </span>
      </div>
      <input
        className="modal-form__input"
        type="text"
        id="member"
        name="member"
        placeholder="Name"
        minLength="1"
        maxLength="30"
        required
        onChange={handleChange}
        value={values.member || ""}
      />
      <div className="modal-form__label-container">
        <label className="modal-form__label" htmlFor="house">
          Household Name
        </label>
        <span className="modal-form__error" id="house-error">
          {errors.name || ""}
        </span>
      </div>
      <input
        className="modal-form__input"
        type="text"
        id="house"
        name="house"
        placeholder="Household Name (Optional)"
        minLength="1"
        maxLength="30"
        required
        onChange={handleChange}
        value={values.house || ""}
      />
      <div className="modal-form__label-container">
        <label className="modal-form__label" htmlFor="link">
          Select Profile Icon
        </label>
        <span className="modal-form__error" id="link-error">
          {errors.avatar || ""}
        </span>
      </div>
      <input
        className="modal-form__input"
        id="link"
        name="avatar"
        placeholder="Image Link"
        type="url"
        onChange={handleChange}
        value={values.avatar || ""}
      />
    </ModalWithForm>
  );
};

export default SignupModal;
