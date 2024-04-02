import styled from "styled-components";
const Wrapper = styled.div`
  border: 2px solid #9fbd84;
  border-radius: 30px;
`;
// pretext shows if no cards have been added
const MemberList = ({ handleClick }) => {
  return (
    <Wrapper>
      <p className="list__pretext">Members will show up here...</p>
    </Wrapper>
  );
};
export default MemberList;
