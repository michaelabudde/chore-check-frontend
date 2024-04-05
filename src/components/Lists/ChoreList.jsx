import List from "./List";
import "./List.css";
import { useState, useEffect } from "react";

import ChoreCard from "../Cards/ChoreCard"; // Import ChoreCard component
// import userChoresArray from "./userChoresArray"; // Import userChoresArray if defined

// pretext shows if no cards have been added
// empty list:
// <p className="list__pretext">Chores will show up here...</p>

// completed list
const ChoreList = ({ handleClick }) => {
  const [userChoresArray, setUserChoresArray] = useState([]);

  useEffect(() => {
    // Simulated data fetching logic
    // Replace this with your actual data fetching logic
    const fetchedChores = [
      {
        id: 1,
        name: "Clean Kitchen",
        icon: "🧽",
      },
      {
        id: 2,
        name: "Laundry",
        icon: "🧺",
      },
      {
        id: 3,
        name: "Sweep Bedroom",
        icon: "🧹",
      },
      {
        id: 4,
        name: "Clean Bathroom",
        icon: "🛁",
      },
    ];

    setUserChoresArray(fetchedChores);
  }, []); // Empty dependency array to run the effect only once

  return (
    <List>
      <ul className="list">
        {userChoresArray.map((chore) => (
          <ChoreCard key={chore.id} chore={chore} onCardClick={handleClick} />
        ))}
      </ul>
    </List>
  );
};
export default ChoreList;
