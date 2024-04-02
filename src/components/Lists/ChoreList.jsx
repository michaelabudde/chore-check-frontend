import styled from "styled-components";
const Wrapper = styled.div`
  // width: 90%;
  border: 2px solid #9fbd84;
  border-radius: 30px;
  // margin: 15px;
`;
// pretext shows if no cards have been added

// empty list
// completed list
const ChoreList = ({ handleClick }) => {
  return (
    <Wrapper>
      <p className="list__pretext">Chores will show up here...</p>
    </Wrapper>
  );
};
export default ChoreList;
