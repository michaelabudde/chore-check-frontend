import List from "./List";
import "./List.css";
import { useState, useEffect } from "react";

import MemberCard from "../Cards/MemberCard"; // Import MemberCard component
// import userChoresArray from "./userMembersArray"; // Import userChoresArray if defined

// pretext shows if no cards have been added
// empty list:
// <p className="list__pretext">Chores will show up here...</p>

// completed list
const MemberList = ({ handleClick }) => {
  const [userMembersArray, setUserMembersArray] = useState([]);

  useEffect(() => {
    // Simulated data fetching logic
    // Replace this with your actual data fetching logic
    const fetchedMembers = [
      {
        id: 1,
        member: "James",
        avatar: "👤",
      },
      {
        id: 2,
        member: "Jas",
        avatar: "👤",
      },
      {
        id: 3,
        member: "Queen",
        avatar: "👤",
      },
      {
        id: 4,
        member: "Jayden",
        avatar: "👤",
      },
    ];

    setUserMembersArray(fetchedMembers);
  }, []); // Empty dependency array to run the effect only once

  return (
    <List>
      <ul className="list">
        {userMembersArray.map((chore) => (
          <MemberCard key={chore.id} chore={chore} onCardClick={handleClick} />
        ))}
      </ul>
    </List>
  );
};
export default MemberList;
