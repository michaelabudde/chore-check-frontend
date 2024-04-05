import styled from "styled-components";
const ListWrapper = styled.div`
  border: 2px solid #9fbd84;
  border-radius: 30px;
  padding-top: 10px;
  padding-bottom: 10px;
  max-width: 90vw;
  display: flex;
  flex-direction: row;
  gap: 24px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  gap: 24px;
  position: relative;
`;
const List = ({ children }) => {
  return <ListWrapper>{children}</ListWrapper>;
};
export default List;
