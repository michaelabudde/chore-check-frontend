import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import chorechecktitle from "../../images/greenCCtitle.svg";
import Navigation from "../Navigation/Navigation";
const Header = ({ handleClick, handleNavBar }) => {
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
      <Navigation handleNavBar={handleNavBar} />
    </header>
  );
};
export default Header;
