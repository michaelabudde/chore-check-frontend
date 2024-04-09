// Header.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Navigation from "../Navigation/Navigation";
import chorechecktitle from "../../images/greenCCtitle.svg";

const Header = ({ isOpen, openModal, toggleDropdown }) => {
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
      <Navigation
        openModal={openModal}
        isOpen={isOpen}
        toggleDropdown={toggleDropdown}
      />
    </header>
  );
};

export default Header;
