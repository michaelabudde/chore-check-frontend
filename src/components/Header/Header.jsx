import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import chorechecktitle from "../../images/cc_title.svg";
import Navigation from "./Navigation";
const Header = ({ handleClick }) => {
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
      <Navigation />
    </header>
  );
};
export default Header;
