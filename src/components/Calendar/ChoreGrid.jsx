import styled from "styled-components";
import { useState, useEffect } from "react";
import { addDays, isToday } from "date-fns";
// import avatar from "../../images/greendefaultprofile.png";

const CompletedChoreWrapper = styled.div`
  padding: 8px;
  margin: 4px;
`;

const CompletedChoreContent = styled.div`
  display: flex;
  flex-direction: column; /* Adjusted to column layout */
  gap: 5px; /* Adjusted gap */
  padding: 8px;
  background-color: #9fbd84;
  border-radius: 8px;
  height: auto; /* Adjusted height */
  max-width: 100%;
  overflow: hidden;
`;

const CompletedChoreName = styled.p`
  margin-right: 8px;
  font-size: 20px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  text-align: left;
  display: flex;
  flex-wrap: nowrap;
  max-width: 100%;
`;

const CompletedChoreIcon = styled.div`
  width: 20px;
  height: 20px;
  text-decoration: none;
  object-fit: cover;
  border-radius: 50%;
`;

const CompletedChoreMember = styled.p`
  margin-right: 8px;
  font-size: 20px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  text-align: left;
  display: flex;
  flex-wrap: nowrap;
  max-width: 100%;
`;
const CompletedChoreAvatar = styled.div`
  width: 20px;
  height: 20px;
  text-decoration: none;
  object-fit: cover;
  border-radius: 50%;
`;

const ChoreGridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(
    7,
    calc(100% / 7)
  ); /* Equal width for each column */
  background: white;
`;

const ChoreGridItem = styled.div`
  border-left: 2px solid #9fbd84;
  &:first-child {
    border-left: none; /* Remove border-left for the first column */
  }
  text-overflow: ellipsis;
  max-width: 100%;
`;
const ChoreRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  max-height: 32px;
  text-overflow: ellipsis;
  max-width: 100%;
`;

function ChoreGrid({ firstDayOfWeek }) {
  const [completedChores, setCompletedChores] = useState([]);

  // Simulated data, you'll replace this with your actual data fetching logic
  const getCompletedChoresFromDatabase = () => {
    // Fetch completed chores from your database
    // For now, I simulate some completed chores
    return [
      {
        id: 1,
        name: "Clean Kitchen",
        icon: "🧽",
        member: "James",
        avatar: "👤",
        dateCompleted: "2024-04-03",
      },
      {
        id: 2,
        name: "Sweep Living Room",
        icon: "🧹",
        member: "Jas",
        avatar: "👤",
        dateCompleted: "2024-04-01",
      },
      {
        id: 3,
        name: "Sweep Bedroom",
        icon: "🧹",
        member: "Queen",
        avatar: "👤",
        dateCompleted: "2024-04-04",
      },
      {
        id: 4,
        name: "Clean Bathroom",
        icon: "🛁",
        member: "Jas",
        avatar: "👤",
        dateCompleted: "2024-04-05",
      },
      {
        id: 5,
        name: "Sweep Bedroom",
        icon: "🧹",
        member: "Jayden",
        avatar: "👤",
        dateCompleted: "2024-04-06",
      },
      {
        id: 6,
        name: "Clean Bathroom",
        icon: "🛁",
        member: "Jas",
        avatar: "👤",
        dateCompleted: "2024-04-07",
      },
      {
        id: 7,
        name: "Laundry",
        icon: "🧺",
        member: "Malik",
        avatar: "👤",
        dateCompleted: "2024-04-07",
      },
      {
        id: 8,
        name: "Clean Bathroom",
        icon: "🛁",
        member: "Jas",
        avatar: "👤",
        dateCompleted: "2024-04-02",
      },
      {
        id: 9,
        name: "Laundry",
        icon: "🧺",
        member: "Malik",
        avatar: "👤",
        dateCompleted: "2024-04-02",
      },
    ];
  };

  useEffect(() => {
    // Fetch completed chores when component mounts
    const fetchedChores = getCompletedChoresFromDatabase();
    setCompletedChores(fetchedChores);
  }, []);

  return (
    <ChoreGridWrapper>
      {Array.from({ length: 7 }).map((_, weekday) => {
        const currentDate = addDays(new Date(firstDayOfWeek), weekday); // Create a new Date object for each day
        const isCurrentDay = isToday(currentDate);

        return (
          <ChoreGridItem
            key={weekday}
            style={{
              background: isCurrentDay ? "#FFF7E9" : "inherit", // Apply yellow background if it's the current day
            }}
          >
            {completedChores
              .filter((chore) => {
                const choreDate = new Date(chore.dateCompleted);
                return choreDate.getDay() === weekday;
              })
              .map((chore) => (
                <CompletedChoreWrapper key={chore.id}>
                  <CompletedChoreContent>
                    <ChoreRow>
                      <CompletedChoreIcon>{chore.icon}</CompletedChoreIcon>
                      <CompletedChoreName>{chore.name}</CompletedChoreName>
                    </ChoreRow>
                    <ChoreRow>
                      <CompletedChoreAvatar>
                        {chore.avatar}
                      </CompletedChoreAvatar>
                      <CompletedChoreMember>
                        {chore.member}
                      </CompletedChoreMember>
                    </ChoreRow>
                  </CompletedChoreContent>
                </CompletedChoreWrapper>
              ))}
          </ChoreGridItem>
        );
      })}
    </ChoreGridWrapper>
  );
}

export default ChoreGrid;
