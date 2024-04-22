import "./Main.css";
import cleaning_1 from "../../images/cleaning_1.png";
import cleaning_2 from "../../images/cleaning_2.png";
import author_image from "../../images/profilegreenmb.png";

const Main = ({ openModal }) => {
  return (
    <main className="main">
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
          <h1 className="main__title"> About the author</h1>
          <p className="main__p">
            I am Michaela Budde. I am a full-stack software engineer, graduating
            from TripleTen Software Engineer program. I am passionate about
            community building and justice for people and the environment. I
            hope to use my technological skills towards positive solutions.{" "}
          </p>
          <p className="main__p">
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

// {/* {isSignedIn ? signedInMain : signedOutMain} */}
