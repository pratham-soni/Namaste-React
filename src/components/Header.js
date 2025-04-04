import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  let [buttonText, setButtonText] = useState("Login");
  const onlineStatus = useOnlineStatus();

  // console.log("Header Rendered");
  return (
    <div className="flex justify-between bg-pink-100 shadow-lg m-2">
      <div className="logo-container m-5 p-5 bg-red-300">
        <img className="w-30" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex m-5 p-5 py-5">
          <li className="px-3 hover:text-gray-500 cursor-pointer">
            Active: {onlineStatus ? "✅" : "🔴"}
          </li>
          <li className="px-3 hover:text-gray-500">
            <Link to="/" className="nav-item">
              Home
            </Link>
          </li>
          <li className="px-3 hover:text-gray-500">
            <Link to="/about" className="nav-item">
              About Us
            </Link>
          </li>
          <li className="px-3 hover:text-gray-500">
            <Link to="/contact" className="nav-item">
              Contact Us
            </Link>
          </li>
          <li className="px-3 hover:text-gray-500">
            <Link to="/grocery" className="nav-item">
              Grocery
            </Link>
          </li>
          <li className="px-3 hover:text-gray-500">
            <Link to="/" className="nav-item">
              Cart
            </Link>
          </li>

          <button
            className="login-btn hover:text-gray-500 px-3"
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
