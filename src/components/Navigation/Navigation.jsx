import React, { useContext, useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import useEsc from "../../hooks/useEsc";
import useClickOutside from "../../hooks/useClickOutside";
import "./Navigation.css";

// import { CurrentUserContext } from "../../contexts/CurrentUserContext";
// import { AuthContext } from "../../contexts/AuthContext.js";
import default_profile_icon from "../../images/greendefaultprofile.png";

const Navigation = ({ isOpen, openModal, toggleDropdown, onClose }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null); // Ref for dropdown menu container

  const closeDropdown = () => {
    setOpen(false);
  };

  function DropdownItem(props) {
    const handleClick = () => {
      props.onClick(); // Call the onClick function passed from parent (openModal)
      props.closeDropdown(); // Call the function to close the dropdown
    };

    return (
      <li className="nav_dropdown_item" onClick={handleClick}>
        {props.to ? (
          <Link to={props.to}>{props.text}</Link>
        ) : (
          <span>{props.text}</span>
        )}
      </li>
    );
  }

  useClickOutside(dropdownRef, () => isOpen && toggleDropdown());
  // useEsc(handleToggleMenu);
  useEsc(() => isOpen && toggleDropdown());

  // useEffect(() => {
  //   if (!isOpen) {
  //     toggleDropdown(); // Close dropdown if it's open initially
  //   }
  // }, [isOpen, toggleDropdown]);
  // const handleItemClick = () => {
  //   toggleDropdown();
  //   openModal();
  // };

  return (
    <nav className="nav">
      <div className="nav_signedin">
        <div className="nav_container">
          <div className="nav_trigger" onClick={toggleDropdown}>
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
            <ul>
              <h2 className="nav_username">Dana Adisa</h2>
              <DropdownItem
                closeDropdown={closeDropdown}
                text={"My Profile"}
                to="/profile"
                onClick={closeDropdown}
              />
              <DropdownItem
                closeDropdown={closeDropdown}
                text={"Sign Out"}
                onClick={() => {
                  openModal("signout");
                  closeDropdown(); // Close the dropdown after opening the modal
                }}
              />
            </ul>
          </div>
        </div>
      </div>
      ;
    </nav>
  );
};
export default Navigation;
// Signed out Header:
//  <div>
// <button className="nav_button" onClick={() => openModal("signup")}>
//   Sign Up
// </button>
// <button className="nav_button" onClick={() => openModal("signin")}>
//   Log In
// </button>
// </div>
{
  /*Signed In Header*/
}
{
  /* <div className="nav_signedin">
  <div className="nav_container">
    <div className="nav_trigger" onClick={toggleDropdown}>
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
      <div className="nav__overlay" onClick={toggleDropdown} />
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
        <DropdownItem text={"sign Out"} onClick={() => handleItemClick("")} />
      </ul>
    </div>
  </div>
</div>; */
}

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
//       sign In
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
//         <DropdownItem text={"sign Out"} to="/profile" />
//       </div>
//     </div>
//   </nav>
// );

{
  /* {isSignedIn ? signedInHeader : signedOutHeader} */
}
{
  /* Signed out header */
}

// const handleToggleMenu = () => {
//   setOpen(!open);
//   // toggleMenu(); // Toggle the main menu in App.js
// };
// useClickOutside(dropdownRef, () => setOpen(false)); // Use the custom hook

// const handleNavBar = () => {
//   setOpen(!open);
//   toggleMenu(); // Toggle the main menu in App.js
// };
// const { currentUser } = useContext(CurrentUserContext);
// const { isSignedIn } = useContext(AuthContext);

// const username = currentUser.name;

// const isAvatarSet = Boolean(currentUser.avatar);

// useEffect(() => {
//   if (!isOpen) {
//     toggleDropdown(); // Close dropdown if it's open initially
//   }
// }, [isOpen, toggleDropdown]);

// for later;
// add edit profile to dropdown
{
  /* <DropdownItem
text={"Edit Profile"}
to="/profile"
onClick={() => handleItemClick("")}
/> */
}
