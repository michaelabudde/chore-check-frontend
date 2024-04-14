import styled from "styled-components";

import { addDays, format, isToday } from "date-fns";

const DateWrapper = styled.div`
position: "sticky",
        top: 1,
        display: "grid",
        grid-template-columns: ${({ first }) =>
          first ? "auto" : ""} repeat(7, 1fr),
        boxShadow: "0 8px 16px #CBE1B7",
        background: "white",
        zIndex: 10,
        alignContent: "center",
        // gridColumn: "span 2",
        borderTop: "2px solid #9fbd84",
        @media screen and (max-width: 640px) {
          display: grid;
          grid-template-rows: ${({ first }) =>
            first ? "auto" : ""} repeat(7, 1fr);
          grid-template-columns: unset; /* Remove the column layout */
        }
`;
function DayGrid({ firstDayOfWeek }) {
  return (
    <div style={{}}>
      {Array.from({ length: 7 }).map((_, weekday) => {
        const currentDate = addDays(new Date(firstDayOfWeek), weekday); // Create a new Date object for each day
        const formattedDate = format(currentDate, "MM/dd/yy");
        const isCurrentDay = isToday(currentDate);

        return (
          <h4
            key={weekday}
            style={{
              margin: 0,
              zIndex: 10,
              height: "100%",
              textAlign: "center",
              gridColumn: `${weekday + 1}`, // Adjust column placement
              background: isCurrentDay ? "#FFF0D8" : "inherit", // Apply yellow background if it's the current day
            }}
          >
            {formattedDate}
          </h4>
        );
      })}
    </div>
  );
}

export default DayGrid;
