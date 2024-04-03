import "./Profile.css";
import ChoreList from "../Lists/ChoreList";
import MemberList from "../Lists/MemberList";
import ProfileCard from "../Cards/ProfileCard";

const Profile = ({ handleClick }) => {
  return (
    <div className="profile">
      <div>
        <ProfileCard />
      </div>
      <h2> Your Chore List</h2>

      <div className="profile__list">
        <ChoreList />
      </div>
      <h2> Your Household Members</h2>

      <div className="profile__list">
        <MemberList />
      </div>
    </div>
  );
};
export default Profile;
