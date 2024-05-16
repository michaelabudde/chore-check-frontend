import "./Main.css";
import Calendar from "../Calendar/Calendar";
import ChoreList from "../Lists/ChoreList";
import MemberList from "../Lists/MemberList";
import cleaning_1 from "../../images/cleaning_1.png";
import cleaning_2 from "../../images/cleaning_2.png";
import author_image from "../../images/profilegreenmb.png";
const Main = ({ openModal, isSignedIn }) => {
  const SignedOutMain = () => {
    return (
      <div>
        <div className="main__catch">
          <h1 className="main__title">Need Some Help Managing Chores?</h1>

          <h2 className="main__subtitle">
            Digitally track chores in any household.
          </h2>

          <button className="main__button" onClick={() => openModal("signup")}>
            Sign up here
          </button>

          <img src={cleaning_1} alt="cleaning image" className="main__image" />

          <p className="main__p">
            Family homes and Co-ops can be hard to manage.
          </p>

          <h2 className="main__subtitle">
            Chore Check is an easy solution to tracking chores
          </h2>
        </div>

        <div className="main__how">
          <h1 className="main__title">How it works</h1>

          <p className="main__p">
            Users can create a chore list and add their household members.
          </p>
          <p className="main__p">
            Then when a chore is completed it is signed in a calendar like this.
          </p>
          {/* calendar placeholder*/}
          <img src={cleaning_2} alt="cleaning image" className="main__image" />
        </div>

        <div className="main__about">
          <div className="main__about_image">
            <img
              src={author_image}
              alt="author image"
              className="main__about_image"
            />
          </div>
          <div className="main__about_text">
            <h1 className="main__title"> About the author</h1>
            <p className="main__p">
              I am Michaela Budde. I am a full-stack software engineer,
              graduating from TripleTen Software Engineer program. I am
              passionate about community building and justice for people and the
              environment. I hope to use my technological skills towards
              positive solutions.{" "}
            </p>
            <p className="main__p">
              Chore Check was created as a solution to a common area of conflict
              in households. By having a digital tracker it is easier to ensure
              fairness among members of the house.
            </p>
          </div>
        </div>
      </div>
    );
  };
  const SignedInMain = () => {
    return (
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
    );
  };

  return (
    <main className="main">
      {isSignedIn ? <SignedInMain /> : <SignedOutMain />}
    </main>
  );
};
export default Main;
