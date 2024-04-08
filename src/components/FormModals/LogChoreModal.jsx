// modal to add completed chore to calendar
// generate names of chores and members user has added in drop down menus
import React, { useState } from "react";
import ModalWithForm from "./ModalWithForm";
import "./ModalWithForm.css";
import { fetchedChores, fetchedMembers } from "../../utils/constants.jsx";

const LogChoreModal = ({ chores, members, onLogChore, addItem, setArray }) => {
  const formInfo = {
    title: "Log Chore",
    name: "logChore",
    buttonText: "Log Chore",
  };
  const [selectedChore, setSelectedChore] = useState("");
  const [selectedMember, setSelectedMember] = useState("");
  // const token = "your_token_here"; // Assuming you have a token
  // const newItem = { name: "New Item" }; // Example new item

  const handleChoreChange = (e) => {
    setSelectedChore(e.target.value);
  };

  const handleMemberChange = (e) => {
    setSelectedMember(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedChore && selectedMember) {
      onLogChore(selectedChore, selectedMember);
      setSelectedChore("");
      setSelectedMember("");
    }
  };
  // onLogChore(token, newItem, addItem, setArray);

  return (
    <ModalWithForm formInfo={formInfo} modalName="logChore">
      <form onSubmit={handleSubmit} class="modal-form__inputs-container">
        <div className="modal-form__label-container">
          <label className="modal-form__label">
            Select Chore:
            <select value={selectedChore} onChange={handleChoreChange}>
              <option className="modal-form__option" value="">
                Select Chore
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
                Select Member
              </option>
              {fetchedMembers.map((member) => (
                <option key={member.id} value={member.id}>
                  {member.name}
                </option>
              ))}
            </select>
          </label>
        </div>
      </form>
    </ModalWithForm>
  );
};

export default LogChoreModal;
