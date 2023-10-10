import React from "react";
import "./FourDigitCode.scss";

const FourDigitCode = () => {
  return (
    <div className="container-fluid EnterNumber ">
      <div className=" row  mt-4  ">
        <div className="col-sm-6 offset-sm-3 col-md-6 offset-md-3 col-lg-4 offset-lg-4  EnterNumberbox p-4 mt-4">
          <h4 className="text-center mt-2">Enter Four Digits Code</h4>

          <div className="row">
            <div className="col-8 offset-2 mt-5">
              <label htmlFor="FourDigits">
                Enter 4 Digits Code that you received in your Phone number
              </label>
              <div className="row FourDigits">
                <div className="col-3">
                  <input
                    type="text"
                    className="form-control mt-3"
                    id="FourDigits"
                  
                    required
                  />
                
                </div>
                <div className="col-3">
                <input
                  type="text"
                  className="form-control mt-3"
                  id="FourDigits"
                
                  required
                />
              
              </div>
              <div className="col-3">
              <input
                type="text"
                className="form-control mt-3"
                id="FourDigits"
          
                required
              />
            
            </div>
            <div className="col-3">
            <input
              type="text"
              className="form-control mt-3"
              id="FourDigits"
         
              required
            />
          
          </div>
              </div>
            </div>

            <div className="row mt-4   ">
              <div className="col-8 offset-2 mb-2 EnterNumberSubmit  ">
                <button type="submit" className="btn-primary ">
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourDigitCode;
