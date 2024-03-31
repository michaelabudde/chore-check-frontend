import styled from "styled-components";
import range from "../../../utils.jsx";
const DAYS = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
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

const VGrid = styled.div`
  display: grid;
  grid-template-columns: ${({ first }) => (first ? "auto" : "")} repeat(
      ${({ rows }) => rows},
      1fr
    );
`;
const DayWrapper = styled.span``;

const Calendar = ({ handleClick }) => {
  return (
    <>
      <Wrapper>
        <HGrid first={"30px"} cols={1}>
          <VGrid>
            {DAYS.map((day) => (
              <DayWrapper>
                <p>{day}</p>
              </DayWrapper>
            ))}
          </VGrid>
        </HGrid>
      </Wrapper>
    </>
  );
};
export default Calendar;
