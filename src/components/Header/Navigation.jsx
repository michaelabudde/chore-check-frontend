import "./Header.css";
// import { CurrentUserContext } from "../../contexts/CurrentUserContext";
// import { AuthContext } from "../../contexts/AuthContext.js";
import default_profile_icon from "../../images/default_profile_icon.svg";

const Navigation = ({ handleClick }) => {
  // const { currentUser } = useContext(CurrentUserContext);
  // const { isSignedIn } = useContext(AuthContext);

  // const username = currentUser.name;

  // const isAvatarSet = Boolean(currentUser.avatar);

  //
  // const signedOutHeader = (
  //   <>
  //     <button
  //       className="header__nav_button"
  //       onClick={() => handleClick("signup")}
  //     >
  //       Sign Up
  //     </button>
  //     <button
  //       className="header__nav_button"
  //       onClick={() => handleClick("login")}
  //     >
  //       Log In
  //     </button>
  //   </>
  // );
  // const signedInHeader = (
  //   <nav className="header__nav">
  //       <div className="header__nav_link">
  //         <Link className="header__nav_username" to="/profile">
  //           {username}
  //         </Link>
  //         <Link to="/profile">
  //           {currentUser.avatar ? (
  //             <span className="header__nav_user ">
  //               {/* I may not need a span here */}
  //               <img
  //                 className="header__nav_user_avatar"
  //                 src={currentUser.avatar}
  //                 alt="user avatar"
  //               />
  //             </span>
  //           ) : (
  //             <span className="header__nav_user">
  //               <img
  //                 className="header__nav_user_avatar"
  //                 src={default_profile_icon} // default avatar
  //                 alt="default user avatar"
  //               />
  //             </span>
  //           )}
  //         </Link>
  //       </div>
  //   </nav>
  // );

  return (
    <div className="header__nav">
      {/* {isSignedIn ? signedInHeader : signedOutHeader} */}
      <>
        <button
          className="header__nav_button"
          onClick={() => handleClick("signup")}
        >
          Sign Up
        </button>
        <button
          className="header__nav_button"
          onClick={() => handleClick("login")}
        >
          Log In
        </button>
      </>
    </div>
  );
};
export default Navigation;
