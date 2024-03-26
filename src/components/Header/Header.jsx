import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import chorechecktitle from "../../images/cc_title.svg";
import default_profile_icon from "../../images/default_profile_icon.svg";
// import { CurrentUserContext } from "../../contexts/CurrentUserContext";
// import { AuthContext } from "../../contexts/AuthContext.js";
const Header = ({ handleClick }) => {
  // const { currentUser } = useContext(CurrentUserContext);
  // const { isLoggedIn } = useContext(AuthContext);

  // const username = currentUser.name;

  // const isAvatarSet = Boolean(currentUser.avatar);

  // const loggedInHeader = (
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
  // const loggedOutHeader = (
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
  return (
    <header className="header">
      <div>
        <Link to="/">
          <img
            src={chorechecktitle}
            alt="Chore Check Title"
            className="header__title"
          />
        </Link>
      </div>
      <div className="header__nav">
        {/* {isLoggedIn ? loggedInHeader : loggedOutHeader} */}
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
    </header>
  );
};
export default Header;
