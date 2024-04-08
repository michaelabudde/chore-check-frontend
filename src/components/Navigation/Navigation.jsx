import React, { useContext, useState, useRef } from "react";
import useEsc from "../../hooks/useEsc";
import useClickOutside from "../../hooks/useClickOutside";
import "./Navigation.css";

// import { CurrentUserContext } from "../../contexts/CurrentUserContext";
// import { AuthContext } from "../../contexts/AuthContext.js";
import default_profile_icon from "../../images/greendefaultprofile.png";
function DropdownItem(props) {
  return (
    <li className="nav_dropdown_item">
      <a>{props.text}</a>
    </li>
  );
}

const Navigation = ({ isOpen, openModal, toggleMenu }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null); // Ref for dropdown menu container

  useClickOutside(dropdownRef, () => setOpen(false)); // Use the custom hook

  const handleToggleMenu = () => {
    setOpen(!open);
    // toggleMenu(); // Toggle the main menu in App.js
  };
  useEsc(handleToggleMenu);
  const handleItemClick = () => {
    setOpen(false);
    openModal();
  };
  // const [open, setOpen] = useState(false);

  // const handleNavBar = () => {
  //   setOpen(!open);
  //   toggleMenu(); // Toggle the main menu in App.js
  // };
  // const { currentUser } = useContext(CurrentUserContext);
  // const { isSignedIn } = useContext(AuthContext);

  // const username = currentUser.name;

  // const isAvatarSet = Boolean(currentUser.avatar);

  // const signedOutHeader = (
  //   <>
  //     <button
  //       className="nav_button"
  //       onClick={() => openModal("signup")}
  //     >
  //       Sign Up
  //     </button>
  //     <button
  //       className="nav_button"
  //       onClick={() => openModal("login")}
  //     >
  //       Log In
  //     </button>
  //   </>
  // );
  // const signedInHeader = (
  //   <nav className="nav">
  //     <div className="nav_container">
  //       <div>
  //         {currentUser.avatar ? (
  //           <img
  //             className="nav_avatar"
  //             src={currentUser.avatar}
  //             alt="user avatar"
  //           />
  //         ) : (
  //           <img
  //             className="nav_avatar"
  //             src={default_profile_icon} // default avatar
  //             alt="default user avatar"
  //           />
  //         )}
  //       </div>
  //       <div className="nav_dropdown">
  //         <div className="nav_username">
  //           {username ? username : "User Name"}
  //         </div>
  //         <DropdownItem text={"My Profile"} to="/profile" />
  //         <DropdownItem text={"Edit Profile"} to="/profile" />
  //         <DropdownItem text={"Log Out"} to="/profile" />
  //       </div>
  //     </div>
  //   </nav>
  // );

  return (
    <nav className="nav">
      {/* {isSignedIn ? signedInHeader : signedOutHeader} */}
      {/* Signed out header */}
      {/* <>
        <button
          className="nav_button"
          onClick={() => openModal("signup")}
        >
          Sign Up
        </button>
        <button
          className="nav_button"
          onClick={() => openModal("login")}
        >
          Log In
        </button>
      </>
    </div> */}
      {/*Signed In Header*/}
      <div className="nav_signedin">
        <div className="nav_container">
          <div className="nav_trigger" onClick={handleToggleMenu}>
            <img
              className="nav_avatar"
              src={default_profile_icon} // default avatar
              alt="default user avatar"
            />
          </div>

          <div
            ref={dropdownRef}
            className={`nav_dropdown ${open || isOpen ? "active" : "inactive"}`}
          >
            <div className="nav__overlay" onClick={handleToggleMenu} />
            <ul>
              <h2 className="nav_username">User Name</h2>
              <DropdownItem
                text={"My Profile"}
                to="/profile"
                onClick={() => handleItemClick("")}
              />
              <DropdownItem
                text={"Edit Profile"}
                to="/profile"
                onClick={() => handleItemClick("")}
              />
              <DropdownItem
                text={"Log Out"}
                onClick={() => handleItemClick("")}
              />
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navigation;
