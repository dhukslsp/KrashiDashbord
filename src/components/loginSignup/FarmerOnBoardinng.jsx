import React from "react";
import { useState,useEffect } from "react";
// import Navbar from "./Navbar";
import "./FarmerOnBoardinng.scss";
// import { useUserContext } from "./UserProvider";
// import axios from "axios";
import { useNavigate } from "react-router-dom";

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { apppp } from "./firebase";


const auth = getAuth(apppp);

const FarmerOnBoardinng = () => {
    const navigate = useNavigate();
    const firestore = getFirestore(apppp);
    const [userName, setUuserName] = useState();

    const [farmerName, setFarmerName] = useState("");
    const [address, setAddress] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [landHolding, setLandHolding] = useState("");
    const [thisSeason, setThisSeason] = useState("");
    const [previousSeason, setPreviousSeason] = useState("");
    const [aadharPanCard, setAadharPanCard] = useState("");

    const [isCropBeforeSowing, setIsCropBeforeSowing] = useState(false);
    const [isCoverCropping, setIsCoverCropping] = useState(false);
    const [isIntercropping, setIsIntercropping] = useState(false);
    const [isBioFertilizers, setIsBioFertilizers] = useState(false);
    const [isAgroforestry, setIsAgroforestry] = useState(false);


    const [isValidMobile, setIsValidMobile] = useState(true);
    const [isValidAdhar, setIsValidAdhar] = useState(true);

    // const { userId } = useUserContext();
    const userId = localStorage.getItem("uid");

    const handleMobileNo = (e) => {
        const inputMobile = e.target.value;
        setPhoneNumber(inputMobile);
        const mobilePattern = /^[0-9]{10}$/; 
        setIsValidMobile(mobilePattern.test(inputMobile));
      };

      const handleAdharNo = (e) => {
        const inputAdhar = e.target.value;
        setAadharPanCard(inputAdhar);
        const adharPattern = /^[0-9]{12}$/;
        setIsValidAdhar(adharPattern.test(inputAdhar));
      };

    
    useEffect(() => {
        if (!localStorage.getItem("token")) {
          navigate("/login");
        }
        // console.log(userId)
    onAuthStateChanged(auth, (user) => {
        if (user) {
          const useremail = user;
          setUuserName(useremail.auth.currentUser.email);
        

        //   console.log(userId)
        }
      });
      }, []);



   
 



    const FarmerOnBoardinngSubmit = async (e) => {
        
        e.preventDefault();
        console.log(userId)

        if (!isValidMobile) {
            alert("Please enter valid 10-digit mobile number");
            setPhoneNumber("");
      
            return;
          }
          if (!isValidAdhar) {
            alert("Please enter valid AadharNumber ");
      
            setAadharPanCard("");
      
            return;
          }
        try {
            await addDoc(
                collection(firestore, `FarmerOnBoardinng/${userId}/Farmer_reg`),
                {
                    farmerName,
                    address,
                    phoneNumber,
                    landHolding,
                    thisSeason,
                    previousSeason,
                    aadharPanCard,
                    isCropBeforeSowing, 
                    isCoverCropping,
                    isIntercropping,
                    isBioFertilizers,
                    isAgroforestry,
                }
            ).then((response) => alert("form submitted"));
        } catch (error) {
            console.error(error.message);
            alert("something wrong, try again")
            setFarmerName("");
            setAddress("");
            setPhoneNumber("");
            setLandHolding("");
            setThisSeason("");
            setPreviousSeason("");
            setAadharPanCard("");
            setIsCropBeforeSowing("");
            setIsCoverCropping("");
            setIsIntercropping("");
            setIsBioFertilizers("");
            setIsAgroforestry("");
            return;
        }
        setFarmerName("");
        setAddress("");
        setPhoneNumber("");
        setLandHolding("");
        setThisSeason("");
        setPreviousSeason("");
        setAadharPanCard("");
        setIsCropBeforeSowing("");
        setIsCoverCropping("");
        setIsIntercropping("");
        setIsBioFertilizers("");
        setIsAgroforestry("");

        // const data = {
        //     farmerName,
        //     address,
        //     phoneNumber,
        //     landHolding,
        //     thisSeason,
        //     previousSeason,
        //     aadharPanCard,
        //     isCropBeforeSowing,
        //     isCoverCropping,
        //     isIntercropping,
        //     isBioFertilizers,
        //     isAgroforestry,
        // };

        // axios
        //     .post(
        //         "https://dcdataapp-default-rtdb.firebaseio.com/farmers.json",
        //         data
        //     )
        //     .then((response) => {
        //         console.log(response);
        //         console.log();
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     });

    };

    return (
        <div className="pt-5 p-sm-5 regist">
            <div className="container-fluid pt-5    ">
                <div className=" row  d-flex justify-content-center align-items-center  ">
                    <div className="col-11 col-sm-8 col-md-7 col-lg-5 border rounded border-secondary p-2 shadow  bg-light ">
                        <h4 className="text-center  ">Farmers On Boardinng</h4>
                        <form
                            autoComplete="off"
                            className="form-group "
                            onSubmit={FarmerOnBoardinngSubmit}
                        >
                            <div className="row d-flex justify-content-center align-items-center">
                                <div className="col-11">
                                    <label className="labels-1" htmlFor="farmerName">
                                        Farmer Name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control form-inputs "
                                        id="farmerName"
                                        placeholder="Enter your farmer Name"
                                        value={farmerName}
                                        onChange={(e) => setFarmerName(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="row d-flex justify-content-center align-items-center ">
                                <div className="col-11">
                                    <label className="labels-1" htmlFor="address">   
                                        Address
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control form-inputs"
                                        id="address"
                                        placeholder="Enter your address"
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="row d-flex justify-content-center align-items-center">
                                <div className="col-11">
                                    <label className="labels-1" htmlFor="phoneNumber">
                                        phone Number
                                    </label>
                                    <input
                                        type="number"
                                        className="form-control form-inputs"
                                        id="phoneNumber"
                                        placeholder="Enter your Phone Number"
                                        value={phoneNumber}
                                        onChange={handleMobileNo}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="row d-flex justify-content-center align-items-center ">
                                <div className="col-11">
                                    <label className="labels-1" htmlFor="landHolding">
                                        Total Land Holdingi(in Acres)
                                    </label>
                                    <input
                                        type="number"
                                        className="form-control form-inputs"
                                        id="landHolding"
                                        placeholder="Enter your land Holding"
                                        value={landHolding}
                                        onChange={(e) => setLandHolding(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="row d-flex justify-content-center align-items-center ">
                                <div className="col-11">
                                    <label className="labels-1" htmlFor="thisSeason">
                                        Crop Sowing this season
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control form-inputs"
                                        id="thisSeason"
                                        placeholder="Enter Crop Sowing this season"
                                        value={thisSeason}
                                        onChange={(e) => setThisSeason(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="row d-flex justify-content-center align-items-center">
                                <div className="col-11">
                                    <label className="labels-1 " htmlFor="previousSeason">
                                        Crop Sowing previous season
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control form-inputs"
                                        id="previousSeason"
                                        placeholder="Enter Crop Sowing previous season"
                                        value={previousSeason}
                                        onChange={(e) => setPreviousSeason(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="row d-flex justify-content-center align-items-center">
                                <div className="col-11">
                                    <label className="labels-1" htmlFor="aadharPanCard">
                                        Aadhar Card Number
                                    </label>
                                    <input
                                        type="number"
                                        className="form-control form-inputs"
                                        id="aadharPanCard"
                                        placeholder="Enter your AdharNo Number."
                                        value={aadharPanCard}
                                        onChange={handleAdharNo}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="row d-flex justify-content-center align-items-center">
                                <div className="col-11">
                                    <div>
                                        <span>Farming Practices</span>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input form-input1"
                                            type="checkbox"
                                            checked={isCropBeforeSowing}
                                            value={isCropBeforeSowing}
                                            
                                            id="flexCheckDefault1"
                                            onChange={(e) => setIsCropBeforeSowing(!isCropBeforeSowing)}
                                        />
                                        <label
                                            className="form-check-label labels-1"
                                            htmlFor="flexCheckDefault1"
                                        >
                                            N<sub>2</sub>(Nitrogen) Fixation crop before sowing of any
                                            crop
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input form-input1"
                                            type="checkbox"
                                            id="flexCheckChecked2"
                                            checked={isCoverCropping}
                                            value={isCoverCropping}
                                            
                                            onChange={(e) => setIsCoverCropping(!isCoverCropping)}
                                        /> 
                                        <label
                                            className="form-check-label labels-1"
                                            htmlFor="flexCheckChecked2"
                                        >
                                            Cover-cropping
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input form-input1"
                                            type="checkbox"
                                            checked={isIntercropping}
                                            value={isIntercropping}
                                           
                                            id="flexCheckDefault3"
                                            onChange={(e) => setIsIntercropping(!isIntercropping)}
                                        />
                                        <label
                                            className="form-check-label labels-1"
                                            htmlFor="flexCheckDefault3"
                                        >
                                            Intercropping
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input form-labels-1"
                                            type="checkbox"
                                            value={isBioFertilizers}
                                            checked={isBioFertilizers}
                                           
                                            
                                            id="flexCheckDefault4"
                                          onChange={(e) => setIsBioFertilizers(!isBioFertilizers)}
                                        />
                                        <label
                                            className="form-check-label labels-1"
                                            htmlFor="flexCheckDefault4"
                                        >
                                            Use of Vermi-compost and other bio-fertilizers
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input form-input1"
                                            type="checkbox"
                                            checked={isAgroforestry}
                                            value={isAgroforestry}
                                            
                                            id="flexCheckDefault5"
                                            onChange={(e) => setIsAgroforestry(!isAgroforestry)}
                                        />
                                        <label
                                            className="form-check-label labels-1"
                                            htmlFor="flexCheckDefault5"
                                        >
                                            Agroforestry (planting in the fields while cropping
                                            farming)
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className="row mt-2 mb-2  ">
                                <div className="col-8 offset-2  submitOnBoardinng  ">
                                    <button type="submit" className="btn-FarmerOnBoardinng ">
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FarmerOnBoardinng;
