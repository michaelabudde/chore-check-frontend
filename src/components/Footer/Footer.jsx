import "./Footer.css";
import { Link } from "react-router-dom";

import chorechecklogo from "../../images/greenCClogo.svg";
const Footer = ({ openModal }) => {
  return (
    <footer className="footer">
      <div className="footer__logo_container">
        <Link to="/">
          <img
            src={chorechecklogo}
            alt="Chore Check logo"
            className="footer__logo"
          />
        </Link>
        <div>Developed by Michaela Budde {new Date().getFullYear()}</div>
      </div>
      <div className="footer__nav_container">
        {/* Add nav buttons for extra (different for signed in vs signed out) */}
      </div>
    </footer>
  );
};
export default Footer;
