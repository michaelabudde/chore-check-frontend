import styled from "styled-components";
import { useState } from "react";
import { addDays, format, isToday } from "date-fns";
import { areDatesSame, addDateBy, getMonday } from "../../utils/utils.jsx";
import DayGrid from "./DayGrid.jsx";
import "./Calendar.css";
const DAYS = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];
// create a chores const that will generate chores from db.json until backend set up.
const CHORES = ["chore", "chore", "chore", "chore", "chore", "chore", "chore"];
const Wrapper = styled.div`
  border: 2px solid #9fbd84;
  border-radius: 30px;
`;
const HGrid = styled.div`
  display: grid;
  grid-template-columns: ${({ first }) => (first ? "auto" : "")} repeat(
      ${({ cols }) => cols},
      1fr
    );
`;

const WeekWrapper = styled.div`
  display: flex;
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;
  overflow: hidden;
  width: 100%;
  display: grid;
  grid-template-columns: ${({ first }) => (first ? "auto" : "")} repeat(
      ${({ cols }) => cols},
      1fr
    );
`;
const DayWrapper = styled.span`
  background: ${({ isToday }) => (isToday ? "#FFF7E9" : "")};
  display: block;
  width: 100%; /* Set the width to 100% */
`;
const ChoreWrapper = styled.span`
  background: ${({ isToday }) => (isToday ? "#FFF0D8" : "")};

  border-top: 2px solid #9fbd84;
  border-left: 2px solid #9fbd84;
  &:first-child {
    border-left: none; /* Remove border-left for the first column in each row */
  }
`;
const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.2rem;
  background: #f1fde6;
  padding: 20px;
  border-bottom-right-radius: 30px;
  border-bottom-left-radius: 30px;
  button {
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    border: 1px solid #9fbd84;
    border-radius: 20px;
  }
`;
function getWeekDay(Date = new Date(), offset = 1) {
  return (Date.getDay() - offset + 7) % 7;
}
const Calendar = ({ handleClick }) => {
  const [mondayDate, setMondayDate] = useState(getMonday());
  const nextWeek = () => setMondayDate(addDateBy(mondayDate, 7));
  const prevWeek = () => setMondayDate(addDateBy(mondayDate, -7));
  const weekOffset = 0;
  const today = addDays(new Date(), weekOffset * 7);
  const firstDayOfWeek = addDays(mondayDate, 0);
  format(new Date(), "d/M");
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

        <HGrid cols={7}>
          {CHORES.map((chores) => (
            <ChoreWrapper>
              <p>{chores}</p>
            </ChoreWrapper>
          ))}
        </HGrid>
        <FlexBox>
          <button onClick={prevWeek}>
            <ion-icon name="chevron-back-outline"></ion-icon>
          </button>
          <button onClick={nextWeek}>
            <ion-icon name="chevron-forward-outline"></ion-icon>
          </button>
        </FlexBox>
      </Wrapper>
    </>
  );
};
export default Calendar;
