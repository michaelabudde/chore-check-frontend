import styled from "styled-components";
import { useState } from "react";
import { areDatesSame, addDateBy, getSunday } from "../../../utils.jsx";
import "./Calendar.css";
const DAYS = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
// create a chores const that will generate chores from db.json until backend set up.
const CHORES = ["chore", "chore", "chore", "chore", "chore", "chore", "chore"];
const Wrapper = styled.div`
  width: 90%;
  border: 1px solid;
  border-radius: 30px;
  margin: 15px;
`;
const HGrid = styled.div`
  display: grid;
  grid-template-columns: ${({ first }) => (first ? "auto" : "")} repeat(
      ${({ cols }) => cols},
      1fr
    );
`;

const DayWrapper = styled.span`
  background: ${({ isToday }) => (isToday ? "#F1FDE6" : "")};
`;
const ChoreWrapper = styled.span`
  border-top: 1px solid #000;
  border-left: 1px solid #000;
  &:first-child {
    border-left: none; /* Remove border-left for the first column in each row */
  }
`;
const FlexBox = styled.div`
  display: flex;
  justify-content: space-around;
  font-size: 1.2rem;
  margin-top: 20px;
  background: #f1fde6;

  button {
    font-size: 1.2rem;
    display: flex;
    align-items: center;
  }
`;

const Calendar = ({ handleClick }) => {
  const [sundayDate, setSundayDate] = useState(getSunday());
  const nextWeek = () => setSundayDate(addDateBy(sundayDate, 7));
  const prevWeek = () => setSundayDate(addDateBy(sundayDate, -7));
  return (
    <>
      <Wrapper className="calendar">
        <HGrid cols={7}>
          {DAYS.map((day) => (
            <DayWrapper>
              <p>{day}</p>
            </DayWrapper>
          ))}
        </HGrid>
        <HGrid cols={7}>
          {DAYS.map((day) => (
            <DayWrapper>
              <p>{day}</p>
            </DayWrapper>
          ))}
        </HGrid>
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
