import styled from "styled-components";
import "./Calendar.css";
import { addDays, format, isToday } from "date-fns";

function DateGrid({ firstDayOfWeek }) {
  return (
    <div className="date-wrapper">
      {/* <DateWrapper> */}
      {Array.from({ length: 7 }).map((_, weekday) => {
        const currentDate = addDays(new Date(firstDayOfWeek), weekday); // Create a new Date object for each day
        const formattedDate = format(currentDate, "MM/dd/yy");
        const isCurrentDay = isToday(currentDate);

        return (
          <div
            className="date"
            key={weekday}
            style={{ background: isCurrentDay ? "#FFF0D8" : "inherit" }}
          >
            <h4
              // key={weekday}
              style={{
                margin: "0",
                lineHeight: "40px",
                // zIndex: 10,
                height: "100%",
                textAlign: "center",
                // gridColumn: `${weekday + 1}`, // Adjust column placement
                // background: isCurrentDay ? "#FFF0D8" : "inherit", // Apply yellow background if it's the current day
              }}
            >
              {formattedDate}
            </h4>
          </div>
        );
      })}
      {/* </DateWrapper> */}
    </div>
  );
}

export default DateGrid;
