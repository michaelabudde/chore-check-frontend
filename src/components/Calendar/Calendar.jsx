import styled from "styled-components";
import "./Calendar.css";
import { useState, useEffect } from "react";
import { addDays, format, isToday } from "date-fns";
import { areDatesSame, addDateBy, getMonday } from "../../utils/utils.jsx";
import DateGrid from "./DateGrid.jsx";
import ChoreGrid from "./ChoreGrid.jsx";
import chevron_left from "../../images/chevron_left_icon.svg";
import chevron_right from "../../images/chevron_right_icon.svg";
const DAYS = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];
// create a chores const that will generate chores from db.json until backend set up.
const Wrapper = styled.div`
  border: 2px solid #9fbd84;
  border-radius: 30px;
`;
const InnerWrapper = styled.div`
  @media screen and (max-width: 640px) {
    display: flex;
    flex-direction: row;
  }
`;
const WeekWrapper = styled.div`
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;
  overflow: hidden;
  width: 100%;
  display: grid;
  grid-template-columns: ${({ first }) => (first ? "auto" : "")} repeat(7, 1fr);
  @media screen and (max-width: 640px) {
    display: grid;
    grid-template-rows: ${({ first }) => (first ? "auto" : "")} repeat(7, 1fr);
    grid-template-columns: unset; /* Remove the column layout */
  }
`;
const DayWrapper = styled.span`
  background: ${({ isToday }) => (isToday ? "#FFF7E9" : "")};
  display: block;
  width: 100%; /* Set the width to 100% */
  border-left: 2px solid #9fbd84;
  &:first-child {
    border-left: none; /* Remove border-left for the first column */
  }
  @media screen and (max-width: 640px) {
    border-left: none;
    border-top: 2px solid #9fbd84;
    &:first-child {
      border-top: none; /* Remove border-top for first row */
    }
  }
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
    border: 2px solid #9fbd84;
    border-radius: 20px;
    padding: 2px 8px;
    margin: 0;
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
        <InnerWrapper>
          <WeekWrapper cols={7}>
            {DAYS.map((day) => {
              const isDayToday = isToday(
                addDateBy(mondayDate, DAYS.indexOf(day))
              );

              return (
                <DayWrapper key={day} isToday={isDayToday}>
                  <p className="day">{day}</p>
                </DayWrapper>
              );
            })}
          </WeekWrapper>

          <DateGrid firstDayOfWeek={firstDayOfWeek} />

          <ChoreGrid firstDayOfWeek={firstDayOfWeek} />
        </InnerWrapper>
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
