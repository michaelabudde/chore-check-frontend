import { React, useContext } from "react";
import styled from "styled-components";
import default_profile_icon from "../../images/greendefaultprofile.png";

// import { CurrentUserContext } from "../../contexts/CurrentUserContext.jsx";
// import { AuthContext } from "../../contexts/AuthContext.jsx";
const Card = styled.div`
  // border: 2px solid #9fbd84;
  background: #d3dbf4;
  border-radius: 30px;
  padding-top: 10px;
  padding-bottom: 10px;
  width: 90vw;
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
const MemberAvatar = styled.div`
  width: 60px;
  height: 60px;
  text-decoration: none;
  object-fit: cover;
  border-radius: 50%;
  justify-content: center;
  align-content: center;
  align-items: center;
`;
// import curent user from backend
// const username = currentUser ? currentUser.name : "Terrence Tegegne";
const username = "Dana Adisa";
const ProfileCard = ({ item, onCardClick }) => {
  // const { currentUser } = useContext(CurrentUserContext);
  // const { isLoggedIn } = useContext(AuthContext);

  return (
    <Card>
      <MemberAvatar>
        {" "}
        <img
          className="nav_avatar"
          src={default_profile_icon} // default avatar
          alt="default user avatar"
        />
      </MemberAvatar>
      <h2>{username}</h2>
    </Card>
  );
};
export default ProfileCard;
