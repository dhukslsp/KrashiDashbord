
import React, { useEffect } from "react";
import "./Contact.scss";
import { useNavigate } from "react-router-dom";
// import Navbar from "./Navbar";
const Contact = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  },[])
  return (
    <div>
     {  /*  <Navbar  name={userName} />    */}
      <div className="contact"></div>
    </div>
  );
};

export default Contact;
