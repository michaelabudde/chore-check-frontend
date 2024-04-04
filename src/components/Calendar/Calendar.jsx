import styled from "styled-components";
import { useState, useEffect } from "react";
import { addDays, format, isToday } from "date-fns";
import { areDatesSame, addDateBy, getMonday } from "../../utils/utils.jsx";
import DayGrid from "./DayGrid.jsx";
import ChoreGrid from "./ChoreGrid.jsx";
import chevron_left from "../../images/chevron_left_icon.svg";
import chevron_right from "../../images/chevron_right_icon.svg";
const DAYS = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];
// create a chores const that will generate chores from db.json until backend set up.
const Wrapper = styled.div`
  border: 2px solid #9fbd84;
  border-radius: 30px;
`;
// const HGrid = styled.div`
//   display: grid;
//   grid-template-columns: ${({ first }) => (first ? "auto" : "")} repeat(
//       ${({ cols }) => cols},
//       1fr
//     );
// `;

const WeekWrapper = styled.div`
  display: flex;
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;
  overflow: hidden;
  width: 100%;
  display: grid;
  // background-color: #f1fde6;
  grid-template-columns: ${({ first }) => (first ? "auto" : "")} repeat(
      ${({ cols }) => cols},
      1fr
    );
`;
const DayWrapper = styled.span`
  background: ${({ isToday }) => (isToday ? "#FFF7E9" : "")};
  display: block;
  width: 100%; /* Set the width to 100% */
  border-left: 2px solid #9fbd84;
  &:first-child {
    border-left: none; /* Remove border-left for the first column */
  }
`;
const ChoreWrapper = styled.span`
  background: ${({ isToday }) => (isToday ? "#FFF7E9" : "")};
  border-top: 2px solid #9fbd84;
  border-left: 2px solid #9fbd84;
  &:first-child {
    border-left: none; /* Remove border-left for the first column in each row */
  }
  // grid-template-columns: ${({ first }) => (first ? "auto" : "")} repeat(
  //     ${({ cols }) => cols},
  //     1fr
  //   );
  z-index: 50;
`;

const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.2rem;
  background: #f1fde6;
  padding: 8px 24px;
  border-bottom-right-radius: 30px;
  border-bottom-left-radius: 30px;
  button {
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    border: 1px solid #9fbd84;
    border-radius: 20px;
    padding: 2px 8px;
  }
`;

const Calendar = () => {
  const [mondayDate, setMondayDate] = useState(getMonday());
  const nextWeek = () => setMondayDate(addDateBy(mondayDate, 7));
  const prevWeek = () => setMondayDate(addDateBy(mondayDate, -7));
  const firstDayOfWeek = addDays(mondayDate, 0);

  return (
    <>
      <Wrapper>
        <WeekWrapper cols={7}>
          {DAYS.map((day) => {
            const isDayToday = isToday(
              addDateBy(mondayDate, DAYS.indexOf(day))
            );

            return (
              <DayWrapper key={day} isToday={isDayToday}>
                <p>{day}</p>
              </DayWrapper>
            );
          })}
        </WeekWrapper>

        <DayGrid firstDayOfWeek={firstDayOfWeek} />

        <ChoreGrid firstDayOfWeek={firstDayOfWeek} />

        <FlexBox>
          <button onClick={prevWeek}>
            <img src={chevron_left} alt="Left Arrow"></img>
          </button>
          <button onClick={nextWeek}>
            <img src={chevron_right} alt="Right Arrow"></img>
          </button>
        </FlexBox>
      </Wrapper>
    </>
  );
};
export default Calendar;
