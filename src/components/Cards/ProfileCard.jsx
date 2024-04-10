import { React, useContext } from "react";
import styled from "styled-components";
import default_profile_icon from "../../images/greendefaultprofile.png";

// import { CurrentUserContext } from "../../contexts/CurrentUserContext.jsx";
// import { AuthContext } from "../../contexts/AuthContext.jsx";
const Card = styled.div`
  // border: 2px solid #9fbd84;
  background: #d3dbf4;
  border-radius: 30px;
  padding-top: 30px;
  padding-bottom: 10px;
  width: 30vw;
  display: flex;
  flex-direction: column;
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
const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  max-height: 32px;
  text-overflow: ellipsis;
  max-width: 100%;
`;
const Button = styled.button`
  padding: 16px;
  border-radius: 30px;
  margin-bottom: 30px;
  background: #e0f1d0;
`;
// import curent user from backend
// const username = currentUser ? currentUser.name : "Terrence Tegegne";
const username = "Dana Adisa";
const housename = "The Adisa House";
const ProfileCard = ({ item, onCardClick, openModal }) => {
  // const { currentUser } = useContext(CurrentUserContext);
  // const { isLoggedIn } = useContext(AuthContext);

  return (
    <Card>
      <Row>
        <MemberAvatar>
          <img
            className="nav_avatar"
            src={default_profile_icon} // default avatar
            alt="default user avatar"
          />
        </MemberAvatar>
        <h2>{username}</h2>
      </Row>
      <p>{housename}</p>
      <Button onClick={() => openModal("editProfile")}>Edit Profile</Button>
    </Card>
  );
};
export default ProfileCard;
