import styled from "styled-components";
import { React, useContext } from "react";
// import { CurrentUserContext } from "../../contexts/CurrentUserContext.jsx";
// import { AuthContext } from "../../contexts/AuthContext.jsx";
const CardContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: left;
  padding-left: 16px;
  align-items: center;
  width: 80%;
  height: 98px;
  border-radius: 30px;
  gap: 12px;
  background-color: #96aced;
`;
const MemberName = styled.p`
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

const MemberAvatar = styled.div`
  width: 40px;
  height: 40px;
  text-decoration: none;
  object-fit: cover;
  border-radius: 50%;
  justify-content: center;
  align-content: center;
  align-items: center;
`;
const MemberCard = ({ chore, onCardClick }) => {
  const { avatar, member } = chore; // Destructure icon and name from chore props

  return (
    <CardContainer onClick={() => onCardClick("MemberPreview")}>
      <MemberAvatar>{avatar}</MemberAvatar>
      <MemberName>{member}</MemberName>
    </CardContainer>
  );
};
export default MemberCard;
