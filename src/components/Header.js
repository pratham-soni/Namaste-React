import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  let [buttonText, setButtonText] = useState("Login");
  const onlineStatus = useOnlineStatus();

  // console.log("Header Rendered");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Active: {onlineStatus ? "✅" : "🔴"}</li>
          <li>
            <Link to="/" className="nav-item">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-item">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" className="nav-item">
              Contact Us
            </Link>
          </li>
          <li>
            <Link to="/grocery" className="nav-item">
              Grocery
            </Link>
          </li>
          <li>
            <Link to="/" className="nav-item">
              Cart
            </Link>
          </li>

          <button
            className="login-btn"
            onClick={() => {
              buttonText === "Login"
                ? setButtonText("Logout")
                : setButtonText("Login");
            }}
          >
            {buttonText}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
