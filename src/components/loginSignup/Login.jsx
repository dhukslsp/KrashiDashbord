//react 
import React from "react";
import { useState,useEffect } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

//context api
// import { useUserContext } from "./UserProvider";

//styling
import "./Login.scss";

//firebase
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { apppp } from "./firebase";


const Login = () => {
  const auth = getAuth(apppp);
  const navigate = useNavigate();

  // data from context api
  // const { userId, setUserId } = useUserContext();

  // useStates
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [showAlert, setShowAlert] = useState(false);
  const [error, setError] = useState(false);

  // eye button function
  const [passwordType, setPasswordType] = useState("password");

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/");
    }
  },[])


  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  //email validation

  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    setIsValidEmail(emailPattern.test(inputEmail));
  };

  // submit login form

  const submitForm = async (e) => {
    e.preventDefault();
    if (!isValidEmail) {
      alert("Please enter a valid email address");
      setEmail("");
      setPassword("");
      return;
    }
    await signInWithEmailAndPassword(auth, email, password)
      .then((response) => {
        console.log(response);
        const user = response.user;
        localStorage.setItem("token", user.accessToken);
        localStorage.setItem("uid", user.uid);
        // setUserId(uid);
      
      })
      .then((response) => {
        setShowAlert(true);
        localStorage.getItem("token");
     const user_idd = localStorage.getItem("uid");
     console.log("set user id",user_idd)
   
      })
      .then(() => {
        setTimeout(() => {
          navigate("/");
          window.location.reload();
          
        }, 1000);
      })
      .catch((err) => {
        setError(true);
        console.log(err);
      });
    setEmail("");
    setPassword("");
  };

  return (
    <div className="container-fluid loginBg ">
      {showAlert && (
        <div className="popup">
          <div className="popup-content">
            <h2>LogIn successfull </h2>
            <p className="para1">Welcome to CarbonFarming Family</p>
            <button onClick={() => setShowAlert(false)}>Close</button>
          </div>
        </div>
      )}
      {error && (
        <div className="popup">
          <div className="popup-content">
            <h2>LogIn Unsuccessfull </h2>
            <p className="para1">something wrong, please try again</p>
            <button onClick={() => setError(false)}>Close</button>
          </div>
        </div>
      )}
      <div className=" row  d-flex justify-content-center align-items-center   ">
        <div className="col-11  col-sm-8 col-md-6 col-lg-4 loginBox p-2   ">
          <div className="logo  ">
            <AiOutlineUser />
          </div>
          <h4 className="text-center mt-2">Login</h4>
          <form
            autoComplete="off"
            className="form-group p-3"
            onSubmit={submitForm}
          >
            <div className="row mb-3 mb--sm-0">
              <div className="col-10 offset-1 mb-sm-2">
                <label htmlFor="email"> Email</label>
                <input
                  type="email"
                  className="form-control p-2 outline"
                  id="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
            </div>
            <div className="row mb-2 mb--sm-0 ">
              <div className="col-10 offset-1 mb-sm-2">
                <label htmlFor="password">Password</label>
                <div className="input-group ">
                  <input
                    type={passwordType}
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    name="password"
                    className="form-control p-2 outline"
                    placeholder="Password"
                  />
                  <div className="">
                    <div
                      className=" btn-outline-primary eyeBtn"
                      onClick={togglePassword}
                    >
                      {passwordType === "password" ? (
                        <AiOutlineEyeInvisible />
                      ) : (
                        <AiOutlineEye />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row d-flex justify-content-center align-items-center">
              <div className="col-10 flex-row-reverse">
                <a href="/EnterNumber" className="login-Forgot anchor">
                  Forgot password?
                </a>
              </div>
            </div>

            <div className="row mt-2 pt-3 pt-sm-0  mb-2 mb--sm-0">
              <div className="col-10 offset-1 mb-sm-2 loginSubmit  ">
                <button type="submit" className="btn-primary p-1 ">
                  LogIn
                </button>
              </div>
            </div>
            <div className="row d-flex justify-content-center align-items-center">
              <div className="col-10 mb-sm-2   ">
                <p className="login-para">
                  Don't have an account?
                  <a className="login-link anchor" href="/signup">
                    Sign Up!
                  </a>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
