import "./Profile.css";
import ChoreList from "../Lists/ChoreList";
import MemberList from "../Lists/MemberList";
const Profile = ({ handleClick }) => {
  return (
    <div className="profile">
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
