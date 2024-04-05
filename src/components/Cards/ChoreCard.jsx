import styled from "styled-components";
import { React, useContext } from "react";
// import { CurrentUserContext } from "../../contexts/CurrentUserContext.jsx";
// import { AuthContext } from "../../contexts/AuthContext.jsx";
const CardContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  width: 400px;
  height: 98px;
  border-radius: 30px;
  gap: 12px;
  background-color: #96aced;
`;
const ChoreName = styled.p`
  margin-right: 8px;
  font-size: 25px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  text-align: left;
  display: flex;
  flex-wrap: nowrap;
  max-width: 100%;
`;

const ChoreIcon = styled.div`
  width: 40px;
  height: 40px;
  text-decoration: none;
  object-fit: cover;
  border-radius: 50%;
  justify-content: center;
  align-content: center;
  align-items: center;
`;
const ChoreCard = ({ chore, onCardClick }) => {
  const { icon, name } = chore; // Destructure icon and name from chore props

  return (
    <CardContainer onClick={() => onCardClick("ChorePreview")}>
      <ChoreIcon>{icon}</ChoreIcon>
      <ChoreName>{name}</ChoreName>
    </CardContainer>
  );
};
export default ChoreCard;
