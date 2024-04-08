import List from "./List";
import "./List.css";
import { useState, useEffect } from "react";
import { fetchedMembers } from "../../utils/constants.jsx";

import MemberCard from "../Cards/MemberCard"; // Import MemberCard component
// import userChoresArray from "./userMembersArray"; // Import userChoresArray if defined

// pretext shows if no cards have been added
// empty list:
// <p className="list__pretext">Chores will show up here...</p>

// completed list
const MemberList = ({ openModal }) => {
  const [userMembersArray, setUserMembersArray] = useState([]);

  useEffect(() => {
    // Simulated data fetching logic
    // Replace this with your actual data fetching logic
    fetchedMembers;

    setUserMembersArray(fetchedMembers);
  }, []); // Empty dependency array to run the effect only once

  return (
    <List>
      <ul className="list">
        {userMembersArray.map((chore) => (
          <MemberCard key={chore.id} chore={chore} onCardClick={openModal} />
        ))}
      </ul>
    </List>
  );
};
export default MemberList;
