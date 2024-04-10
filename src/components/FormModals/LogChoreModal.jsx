// modal to add completed chore to calendar
// generate names of chores and members user has added in drop down menus
import React, { useState } from "react";
import ModalWithForm from "./ModalWithForm";
import "./ModalWithForm.css";
import { fetchedChores, fetchedMembers } from "../../utils/constants.jsx";

const LogChoreModal = ({ onLogChore, addItem, setArray, isOpen, onClose }) => {
  const formInfo = {
    title: "Log Chore",
    name: "logChore",
    buttonText: "Log Chore",
  };
  const [selectedChore, setSelectedChore] = useState("");
  const [selectedMember, setSelectedMember] = useState("");

  const handleChoreChange = (e) => {
    setSelectedChore(e.target.value);
  };

  const handleMemberChange = (e) => {
    setSelectedMember(e.target.value);
  };
  return (
    <ModalWithForm
      formInfo={formInfo}
      modalName="logChore"
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className="modal-form__inputs-container">
        <div className="modal-form__label-container">
          <label className="modal-form__label">
            Select Completed Chore:
            <select value={selectedChore} onChange={handleChoreChange}>
              <option className="modal-form__option" value="">
                Chore
              </option>
              {fetchedChores.map((chore) => (
                <option key={chore.id} value={chore.id}>
                  {chore.name}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div className="modal-form__label-container">
          <label className="modal-form__label">
            Select Member:
            <select value={selectedMember} onChange={handleMemberChange}>
              <option className="modal-form__option" value="">
                Member
              </option>
              {fetchedMembers.map((member) => (
                <option key={member.id} value={member.id}>
                  {member.name}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div className="modal-form__label-container">
          <label className="modal-form__label">
            Enter Date Completed:
            <select value={selectedMember} onChange={handleMemberChange}>
              <option className="modal-form__option" value="">
                Date
              </option>
              {fetchedMembers.map((member) => (
                <option key={member.id} value={member.id}>
                  {member.name}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>
    </ModalWithForm>
  );
};

export default LogChoreModal;

// const token = "your_token_here"; // Assuming you have a token
// const newItem = { name: "New Item" }; // Example new item

// onLogChore(token, newItem, addItem, setArray);

// const handleSubmit = (e) => {
//   e.preventDefault();
//   if (selectedChore && selectedMember) {
//     onLogChore(selectedChore, selectedMember);
//     setSelectedChore("");
//     setSelectedMember("");
//   }
// };
