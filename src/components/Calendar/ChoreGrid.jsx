import styled from "styled-components";
import { useState, useEffect } from "react";
import { addDays, isToday } from "date-fns";

const CompletedChoreWrapper = styled.div`
  padding: 8px;
  margin: 4px;
`;

const CompletedChoreContent = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px;
  background-color: #9fbd84;
  border-radius: 8px;
  height: 120px;
  max-width: 100%;
  overflow: hidden;
`;

const CompletedChoreName = styled.p`
  margin-right: 8px;
  font-size: 15px;
  text-overflow: ellipsis;
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
  font-size: 15px;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: left;
  display: flex;
  flex-wrap: nowrap;
  max-width: 100%;
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
`;

function ChoreGrid({ firstDayOfWeek }) {
  const [completedChores, setCompletedChores] = useState([]);

  // Simulated data, you'll replace this with your actual data fetching logic
  const getCompletedChoresFromDatabase = () => {
    // Fetch completed chores from your database
    // For now, I simulate some completed chores
    return [
      { id: 1, name: "Clean Kitchen", icon: "🧹", dateCompleted: "2024-04-03" },
      {
        id: 2,
        name: "Vacuum Living Room Vacuum Living Room",
        icon: "🧹",
        dateCompleted: "2024-04-02",
      },
      {
        id: 3,
        name: "Vacuum bedroom",
        icon: "🧹",
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
              background: isCurrentDay ? "#FFF0D8" : "inherit", // Apply yellow background if it's the current day
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
                    <CompletedChoreIcon>{chore.icon}</CompletedChoreIcon>
                    <CompletedChoreName>{chore.name}</CompletedChoreName>
                    <CompletedChoreMember>{chore.member}</CompletedChoreMember>
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
