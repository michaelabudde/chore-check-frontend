// modal to add completed chore to calendar
// generate names of chores and members user has added in drop down menus
import React, { useState } from "react";

const LogChoreModal = ({ chores, members, onLogChore }) => {
  const [selectedChore, setSelectedChore] = useState("");
  const [selectedMember, setSelectedMember] = useState("");

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

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Select Chore:
        <select value={selectedChore} onChange={handleChoreChange}>
          <option value="">Select Chore</option>
          {chores.map((chore) => (
            <option key={chore.id} value={chore.id}>
              {chore.name}
            </option>
          ))}
        </select>
      </label>
      <label>
        Select Member:
        <select value={selectedMember} onChange={handleMemberChange}>
          <option value="">Select Member</option>
          {members.map((member) => (
            <option key={member.id} value={member.id}>
              {member.name}
            </option>
          ))}
        </select>
      </label>
      <button type="submit">Log Chore</button>
    </form>
  );
};

export default LogChoreModal;
