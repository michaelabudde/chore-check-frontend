import List from "./List";
import MemberCard from "../Cards/MemberCard"; // Import ChoreCard component
// import userMemberArray from "./userMemberArray"; // Import userChoresArray if defined
// hard coded
const userMemberArray = [
  {
    id: 1,
    member: "James",
    avatar: "👤",
  },
  {
    id: 2,
    member: "Jas",
    avatar: "👤",
  },
  {
    id: 3,
    member: "Queen",
    avatar: "👤",
  },
  {
    id: 4,
    member: "Jas",
    avatar: "👤",
  },
];
// pretext shows if no cards have been added

// empty list
// completed list:
const MemberList = ({ handleClick }) => {
  return (
    <List>
      <ul className="list">
        {userMemberArray.map((member) => (
          <MemberCard
            key={member.id}
            member={member}
            onCardClick={handleClick}
          />
        ))}
      </ul>
    </List>
  );
};
export default MemberList;
