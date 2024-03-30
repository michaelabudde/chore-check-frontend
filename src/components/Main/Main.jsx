import "./Main.css";
import cleaning_1 from "../../images/cleaning_1.png";
import cleaning_2 from "../../images/cleaning_2.png";
import author_image from "../../images/profilegreenmb.png";
import Calendar from "../Calendar/Calendar";
const Main = ({ handleClick }) => {
  //   const signedOutMain = (
  //    {/* move main_catch and main_how here*/}
  //   <div className="main__catch">
  //     <h1>Need Some Help Managing Chores?</h1>
  //     <h2>Digitally track chores in any household.</h2>
  //     <button className="main__button">Sign up here</button>
  //     <img src={cleaning_1} alt="cleaning image" className="main__image" />
  //     <p>Family homes and Co-ops can be hard to manage.</p>
  //     <h2>Chore Check is an easy solution to tracking chores</h2>
  //   </div>
  //   <div className="main__how">
  //     <h1>How it works</h1>
  //     <p>
  //       Users can create a chore list and add their household members. Then
  //       when a chore is completed it is signed in a calendar like this.
  //     </p>
  //     {/* calendar placeholder*/}
  //     <img src={cleaning_2} alt="cleaning image" className="main__image" />
  //   </div>
  //   <div className="main__about">
  //     <div className="main__about_image">
  //       <img
  //         src={author_image}
  //         alt="author image"
  //         className="main__about_image"
  //       />
  //     </div>
  //   );
  // const signedInMain = (
  //   <div className="main">
  //     <div className="main__calendar"></div>
  //     <h2> Your Chore List</h2>
  //     <div className="main__list"></div>
  //     <h2> Your Household Members</h2>
  //     <div className="main__list"></div>
  //     <img src={cleaning_2} alt="cleaning image" className="main__image" />
  //   </div>
  // );

  return (
    // {/* {isSignedIn ? signedInMain : signedOutMain} */}

    // <main className="main">
    //   <div className="main__catch">
    //     <h1>Need Some Help Managing Chores?</h1>
    //     <h2>Digitally track chores in any household.</h2>
    //     <button className="main__button">Sign up here</button>
    //     <img src={cleaning_1} alt="cleaning image" className="main__image" />
    //     <p>Family homes and Co-ops can be hard to manage.</p>
    //     <h2>Chore Check is an easy solution to tracking chores</h2>
    //   </div>
    //   <div className="main__how">
    //     <h1>How it works</h1>
    //     <p>
    //       Users can create a chore list and add their household members. Then
    //       when a chore is completed it is signed in a calendar like this.
    //     </p>
    //     {/* calendar placeholder*/}
    //     <img src={cleaning_2} alt="cleaning image" className="main__image" />
    //   </div>

    <main className="main">
      <div>
        <h1>Your Completed Chores This Week</h1>
        <p>Click the calendar to log a chore</p>
        <div className="main__calendar">
          <Calendar></Calendar>
        </div>
        <h2> Your Chore List</h2>
        <button>Add a Chore</button>
        <div className="main__list"></div>
        <h2> Your Household Members</h2>
        <button>Add a Member</button>
        <div className="main__list"></div>
        <img src={cleaning_2} alt="cleaning image" className="main__image" />
      </div>
      {/* always return about section */}
      <div className="main__about">
        <div className="main__about_image">
          <img
            src={author_image}
            alt="author image"
            className="main__about_image"
          />
        </div>
        <div className="main__about_text">
          <h1> About the author</h1>
          <p>
            I am Michaela Budde. I am a full-stack software engineer, graduating
            from TripleTen Software Engineer program. I am passionate about
            community building and justice for people and the environment. I
            hope to use my technological skills towards positive solutions.{" "}
          </p>
          <p>
            {" "}
            Chore Check was created as a solution to a common area of conflict
            in households. By having a digital tracker it is easier to ensure
            fairness among members of the house.
          </p>
        </div>
      </div>
    </main>
  );
};
export default Main;
