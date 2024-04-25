import React, { useContext, useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import useEsc from "../../hooks/useEsc";
import useClickOutside from "../../hooks/useClickOutside";
import "./Navigation.css";

// import { CurrentUserContext } from "../../contexts/CurrentUserContext";
// import { AuthContext } from "../../contexts/AuthContext.js";
import default_profile_icon from "../../images/greendefaultprofile.png";

const Navigation = ({
  isOpen,
  openModal,
  toggleDropdown,
  onClose,
  isSignedIn,
}) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null); // Ref for dropdown menu container

  useClickOutside(dropdownRef, () => isOpen && toggleDropdown());
  useEsc(() => isOpen && toggleDropdown());

  const SignedInNav = () => {
    return (
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
              <Link
                className="nav_dropdown_item"
                text={"My Profile"}
                to="/profile"
                onClick={toggleDropdown}
              >
                My Profile
              </Link>
              <span
                className="nav_dropdown_item"
                text={"Sign Out"}
                onClick={() => {
                  openModal("signout");
                  toggleDropdown(); // Close the dropdown after opening the modal
                }}
              >
                Sign Out
              </span>
            </ul>
          </div>
        </div>
      </div>
    );
  };
  const SignedOutNav = () => {
    return (
      <div className="navSignedOut">
        <div>
          <button className="nav_button" onClick={() => openModal("signup")}>
            Sign Up
          </button>
        </div>
        <div>
          <button className="nav_button" onClick={() => openModal("signin")}>
            Log In
          </button>
        </div>
      </div>
    );
  };
  return (
    <nav className="nav">{isSignedIn ? <SignedInNav /> : <SignedOutNav />}</nav>
  );
};
export default Navigation;
