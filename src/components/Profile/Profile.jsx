import "./Profile.css";
import ChoreList from "../Lists/ChoreList";
import MemberList from "../Lists/MemberList";
import ProfileCard from "../Cards/ProfileCard";

const Profile = ({ openModal }) => {
  return (
    <div className="profile">
      <div className="sidebar">
        <ProfileCard />
      </div>
      <div className="profile-content">
        <div className="profile__heading">
          <h2> Your Chore List</h2>
          <button
            className="profile__button"
            onClick={() => handleClick("addChore")}
          >
            Add a Chore
          </button>
        </div>
        <div className="profile__list">
          <ChoreList />
        </div>
        <div className="profile__heading">
          <h2> Your Household Members</h2>
          <button
            className="profile__button"
            onClick={() => handleClick("addMember")}
          >
            Add a Member
          </button>
        </div>
        <div className="profile__list">
          <MemberList />
        </div>
      </div>
    </div>
  );
};
export default Profile;
