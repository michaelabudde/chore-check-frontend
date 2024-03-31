import styled from "styled-components";
import range from "../../../utils.jsx";
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

const DayWrapper = styled.span``;
const ChoreWrapper = styled.span`
  border-top: 1px solid #000;
  border-right: 1px solid #000;
  &:not(:nth-child(7n)) {
    border-right: none; /* Remove border-right for the last column in each row */
  }
`;

const Calendar = ({ handleClick }) => {
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
          {CHORES.map((chores) => (
            <ChoreWrapper>
              <p>{chores}</p>
            </ChoreWrapper>
          ))}
        </HGrid>
      </Wrapper>
    </>
  );
};
export default Calendar;
