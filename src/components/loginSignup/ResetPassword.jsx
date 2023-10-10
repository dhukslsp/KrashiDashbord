import React from "react";
import "./ResetPassword.scss";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const navigate = useNavigate();

  const submitReset = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  return (
    <div className="container-fluid EnterNumber ">
      <div className=" row d-flex justify-content-center align-items-center   ">
        <div className="col-10  col-sm-6 col-md-6 col-lg-4  resetbox p-2 ">
          <h4 className="text-center mt-2">Reset Password</h4>

          <form
            autoComplete="off"
            className="form-group "
            onSubmit={submitReset}
          >
            <div className="row d-flex justify-content-center align-items-center">
              <div className="col-10  mt-2">
                <label htmlFor="NewPassword">New Password </label>
                <input
                  type="password"
                  className="form-control mt-1"
                  id="NewPassword"
                  placeholder=" New Password "
                  required
                />
              </div>

              <div className="col-10  mt-1">
                <label htmlFor="ConfirmPassword">Confirm Password</label>
                <input
                  type="password"
                  className="form-control mt-1"
                  id="ConfirmPassword"
                  placeholder=" Confirm Password"
                  required
                />
              </div>
            </div>

            <div className="row d-flex justify-content-center align-items-center mt-4   ">
              <div className="col-8  EnterNumberSubmit  ">
                <button type="submit" className="btn-primary bt2 ">
                  Reset
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
