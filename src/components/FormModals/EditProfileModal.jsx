import { useEffect } from "react";
import ModalWithForm from "./ModalWithForm";
// import { useEffect, useContext } from "react";
// import { useFormAndValidation } from "../../hooks/useFormAndValidation";
// import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import "./ModalWithForm.css";
const EditProfileModal = ({ onClose, handleProfileUpdate, isLoading }) => {
  // removed isopen
  //   const { values, handleChange, errors, resetForm } = useFormAndValidation();
  //   const { currentUser } = useContext(CurrentUserContext);

  const formInfo = {
    title: "Edit Profile",
    name: "editProfile",
    buttonText: "Submit",
  };

  const extraButton = [
    {
      text: "Cancel",
      onClick: () => {
        onClose();
      },
      type: "button",
      disabled: false,
    },
  ];

  //make api call
  //get results
  //set iconlist using setIconList

  //   function onSubmit(e) {
  //     e.preventDefault();
  //     handleProfileUpdate(values);
  //   }

  //   useEffect(() => {
  //     // removed isOpen
  //     if (currentUser) {
  //       resetForm(
  //         {
  //           name: currentUser.name || "",
  //           avatar: currentUser.avatar || "",
  //         },
  //         {},
  //         true
  //       );
  //     }
  //   }, [currentUser, resetForm]);
  // removed isOpen
  return (
    <ModalWithForm
      formInfo={formInfo}
      onClose={onClose}
      //   onSubmit={onSubmit}
      extraButton={extraButton}
      isLoading={isLoading}
    >
      <label className="modal-form__label" htmlFor="name">
        Name
      </label>
      <input
        className="modal-form__input"
        type="text"
        id="name"
        name="name"
        placeholder={"Name"}
        minLength="1"
        maxLength="30"
        // onChange={handleChange}
        // value={values.name}
      />
      <span className="modal-form__error" id="name-error">
        {/* {errors.name || ""} */}
      </span>
      <label className="modal-form__label" htmlFor="link">
        Profile Picture URL
      </label>

      {dataLoaded && (
        <select
          className="modal-form__select"
          id="icon"
          name="icon"
          onChange={handleChange}
          value={values.icon || ""}
        >
          <option value="">Select an icon</option>
          {icons.map((icon) => (
            <option key={icon.id} value={icon.id}>
              {icon.name}
            </option>
          ))}
        </select>
      )}
    </ModalWithForm>
  );
};

export default EditProfileModal;
