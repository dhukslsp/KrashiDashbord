import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { apppp } from "./firebase";

import { getAuth, onAuthStateChanged } from "firebase/auth";
const auth = getAuth(apppp);

const Navbar = ({ name }) => {
  const [pupup, setPopup] = useState(false);
  const [userName, setUuserName] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const email = user;
        setUuserName(email.auth.currentUser.email);
      }
    });
  }, []);
  const contact = () => {

    navigate("/Contact");


  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("uid");
    window.location.reload();
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="logoText">Carbon Credit</div>
      <ul className="nav-links">
        <li>
          <Link to="/">
            <AiOutlineHome />
          </Link>
        </li>

        <li>
          <Link to="/ContactUs">Contact Us</Link>
        </li>
        <li className="user" onClick={() => setPopup(!pupup)}>
          <FaUserCircle />
        </li>
      </ul>

      {pupup ? (
        <div className="userPopup">
          <p>{userName}</p>
          <button className="View" onClick={contact}>
            contact
          </button>
          <button className="logout" onClick={logout}>
            logout
          </button>
        </div>
      ) : null}
    </nav>
  );
};

export default Navbar;
