import React from "react";
import { useState } from "react";
import "./SignUp.scss";
// import { AiOutlineUser } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { apppp } from "./firebase";

const auth = getAuth(apppp);
const firestore = getFirestore(apppp);

const SignUp = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");
  const [tehsil, setTehsile] = useState("");
  const [village, setVillage] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValidMobile, setIsValidMobile] = useState(true);
  const [isValidEmail, setIsValidEmail] = useState(true);

  const navigate = useNavigate();

  const handleMobileChange = (e) => {
    const inputMobile = e.target.value;
    setPhone(inputMobile);
    const mobilePattern = /^[0-9]{10}$/; // Change this pattern according to your needs
    setIsValidMobile(mobilePattern.test(inputMobile));
  };

  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    setIsValidEmail(emailPattern.test(inputEmail));
  };

  const SignUpSubmitHandler = async (e) => {
    e.preventDefault();

    if (!isValidMobile) {
      alert("Please enter a valid 10-digit mobile number");
      setPhone("");

      return;
    }
    if (!isValidEmail) {
      alert("Please enter a valid email ");

      setEmail("");

      return;
    }

    try {
      await createUserWithEmailAndPassword(
        auth,
        email,
        password,
        location,
        phone
      ).then((response) => alert("your account is created"));
    } catch (error) {
      if (error) {
        console.log(error);
        alert("somethimg wrong,please try again");
        setName("");
        setLocation("");
        setState("");
        setDistrict("");
        setTehsile("");
        setVillage("");
        setPhone("");
        setEmail("");
        setPassword("");
        return;
      }
    }
    setName("");
    setLocation("");
    setState("");
    setDistrict("");
    setTehsile("");
    setVillage("");
    setPhone("");
    setEmail("");
    setPassword("");
    navigate("/Login");
  };

  return (
    <div className="container-fluid signUp  ">
      <div className=" row  d-flex justify-content-center align-items-center py-4 p-sm-5 ">
        <div className="col-11 col-sm-9 col-md-6 col-lg-4 border rounded border-secondary  shadow  bg-light p-3 p-sm-1 ">
          <h3 className="text-center ">Signup</h3>
          <form
            autoComplete="off"
            className="form-group"
            onSubmit={SignUpSubmitHandler}
          >
            <div className="row d-flex justify-content-center align-items-center">
              <div className="col-11 col-sm-9">
                <label className="labels" htmlFor="Name">
                  {" "}
                  Name
                </label>
                <input
                  type="text"
                  className="form-control form-input"
                  id="Name"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="row  d-flex justify-content-center align-items-center">
              <div className="col-11 col-sm-9">
                <label className="labels" htmlFor="Location">
                  Location
                </label>
                <input
                  type="text"
                  className="form-control form-input"
                  id="Location"
                  placeholder="Enter your Location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="row  d-flex justify-content-center align-items-center ">
              <div className="col-11 col-sm-9">
                <label className="labels" htmlFor="state">
                  state
                </label>
                <input
                  type="text"
                  className="form-control form-input"
                  id="state"
                  placeholder="Enter your state"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="row  d-flex justify-content-center align-items-center ">
              <div className="col-11 col-sm-9">
                <label className="labels" htmlFor="district">
                  district
                </label>
                <input
                  type="text"
                  className="form-control form-input"
                  id="district"
                  placeholder="Enter your district"
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="row  d-flex justify-content-center align-items-center">
              <div className="col-11 col-sm-9">
                <label className="labels" htmlFor="tehsil">
                  tehsil
                </label>
                <input
                  type="text"
                  className="form-control form-input"
                  id="tehsil"
                  placeholder="Enter your tehsil"
                  value={tehsil}
                  onChange={(e) => setTehsile(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="row  d-flex justify-content-center align-items-center">
              <div className="col-11 col-sm-9">
                <label className="labels " htmlFor="village">
                  village
                </label>
                <input
                  type="text"
                  className="form-control form-input"
                  id="village"
                  placeholder="Enter your village"
                  value={village}
                  onChange={(e) => setVillage(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="row  d-flex justify-content-center align-items-center">
              <div className="col-11 col-sm-9">
                <label className="labels" htmlFor="Phone">
                  Phone No.
                </label>
                <input
                  type="number"
                  className="form-control form-input"
                  id="Phone"
                  placeholder="Enter your Phone No."
                  value={phone}
                  onChange={handleMobileChange}
                  required
                />
              </div>
            </div>
            <div className="row  d-flex justify-content-center align-items-center ">
              <div className="col-11 col-sm-9">
                <label className="labels" htmlFor="Email">
                  Email
                </label>
                <input
                  type="emai"
                  className="form-control form-input"
                  id="Email"
                  placeholder="Enter your Email"
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
              </div>
            </div>
            <div className="row  d-flex justify-content-center align-items-center">
              <div className="col-11 col-sm-9 ">
                <label className="labels" htmlFor="Password">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control form-input"
                  id="Password"
                  placeholder="Enter your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="row  d-flex justify-content-center align-items-center mt-2   ">
              <div className="col-11 col-sm-9  submitSignUp  ">
                <button type="submit" className="btn-primary ">
                  SignUp
                </button>
              </div>
            </div>

            <div className="row  d-flex justify-content-center align-items-center">
              <div className="col-11   ">
                <p className="login-para text-center">
                  Already have an account?
                  <a className="login-link" href="/login">
                    LogIn!
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

export default SignUp;
