import { useState, useEffect } from "react";
import SignUp from "./components/loginSignup/SignUp";
import Login from "./components/loginSignup/Login";
import ResetPassword from "./components/loginSignup/ResetPassword";
import Contact from "./components/loginSignup/Contact";
import Dashboard from "./components/Dashboard/Dashboard";
import FarmerData1 from "./components/loginSignup/FarmerData1";
import Navbar from "./components/loginSignup/Navbar";
import EnterNumber from "./components/loginSignup/EnterNumber";


import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [tokenNo, setTokenNo] = useState("");
  useEffect(() => {
    const tocken = localStorage.getItem("token");
    setTokenNo(tocken);
    
  }, []);

  return (
    <div className=" app">
      <BrowserRouter>
        {tokenNo && <Navbar />}
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/ResetPassword" element={<ResetPassword />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/FarmerData1" element={<FarmerData1 />}></Route>
          <Route path="/EnterNumber" element={<EnterNumber />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
