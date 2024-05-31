import "./ModalWithForm.css";
import ModalWithForm from "./ModalWithForm";
import "./ModalWithForm.css";
import { useEffect } from "react";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";

const SigninModal = ({
  onClose,
  signIn,
  openModal,
  signinError,
  isLoading,
  isOpen,
  setIsSignedIn,
}) => {
  // removed isOpen
  const { values, handleChange, errors, resetForm } = useFormAndValidation();
  // const signIn = () => {
  //   // Simulate signing in by changing the state
  //   setIsSignedIn(true);
  // };
  const onSubmit = (e) => {
    e.preventDefault();
    signIn();
    onClose();
  };
  // const signOut = () => {
  //   // Simulate signing out by changing the state
  //   setIsSignedIn(false);
  // };
  const formInfo = {
    title: "Sign in",
    name: "signin",
    buttonText: "Sign In",
  };

  // function onSubmit(e) {
  //   e.preventDefault();
  //   handleSignin(values);
  // }

  useEffect(() => {
    resetForm();
  }, [resetForm]);
  // removed isOpen

  return (
    <ModalWithForm
      formInfo={formInfo}
      onSubmit={onSubmit}
      isLoading={isLoading}
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className="modal-form__label-container">
        <label className="modal-form__label" htmlFor="email">
          Email
        </label>
        <span className="modal-form__error" id="name-error">
          {errors.email || signinError || ""}
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
