import styled from "styled-components";

const CompletedChoreContent = styled.div`
  display: flex;
  flex-direction: column; /* Adjusted to column layout */
  gap: 5px; /* Adjusted gap */
  padding: 8px;
  background-color: #9fbd84;
  border-radius: 8px;
  height: auto; /* Adjusted height */
  max-width: 100%;
  overflow: hidden;
`;

const CompletedChoreName = styled.p`
  margin-right: 8px;
  font-size: 20px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  text-align: left;
  display: flex;
  flex-wrap: nowrap;
  max-width: 100%;
`;

const CompletedChoreIcon = styled.div`
  width: 20px;
  height: 20px;
  text-decoration: none;
  object-fit: cover;
  border-radius: 50%;
`;

const CompletedChoreMember = styled.p`
  margin-right: 8px;
  font-size: 20px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  text-align: left;
  display: flex;
  flex-wrap: nowrap;
  max-width: 100%;
`;

const CompletedChoreAvatar = styled.div`
  width: 20px;
  height: 20px;
  text-decoration: none;
  object-fit: cover;
  border-radius: 50%;
`;

const ChoreRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  max-height: 32px;
  text-overflow: ellipsis;
  max-width: 100%;
`;

// Added 'function' keyword and 'chore' prop
const CompletedChore = ({ chore }) => {
  return (
    <CompletedChoreContent key={chore.id}>
      <ChoreRow>
        <CompletedChoreIcon>{chore.icon}</CompletedChoreIcon>
        <CompletedChoreName>{chore.name}</CompletedChoreName>
      </ChoreRow>
      <ChoreRow>
        <CompletedChoreAvatar>{chore.avatar}</CompletedChoreAvatar>
        <CompletedChoreMember>{chore.member}</CompletedChoreMember>
      </ChoreRow>
    </CompletedChoreContent>
  );
};

export default CompletedChore;
