import "../Main/Main.css";
import cleaning_2 from "../../images/cleaning_2.png";
import Calendar from "../Calendar/Calendar";
import ChoreList from "../Lists/ChoreList";
import MemberList from "../Lists/MemberList";
const CalendarPage = ({ openModal }) => {
  return (
    <main className="main">
      <div className="main__catch">
        <h1>Your Completed Chores This Week</h1>
        <button className="main__button" onClick={() => openModal("logChore")}>
          Log a Chore
        </button>
        <div className="main__calendar">
          <Calendar />
        </div>
        <h2> Your Chore List</h2>
        <button className="main__button" onClick={() => openModal("addChore")}>
          Add a Chore
        </button>
        <ChoreList />

        <h2> Your Household Members</h2>
        <button className="main__button" onClick={() => openModal("addMember")}>
          Add a Member
        </button>
        <MemberList />

        <img src={cleaning_2} alt="cleaning image" className="main__image" />
      </div>
    </main>
  );
};
export default CalendarPage;
