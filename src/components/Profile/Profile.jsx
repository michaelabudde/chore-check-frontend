import "./Profile.css";
const Profile = ({ handleClick }) => {
  return (
    <div className="profile">
      <h2> Your Chore List</h2>
      <div className="profile__list"></div>
      <h2> Your Household Members</h2>
      <div className="profile__list"></div>
    </div>
  );
};
export default Profile;
