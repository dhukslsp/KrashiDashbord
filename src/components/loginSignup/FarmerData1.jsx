import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import "./FarmerData.scss";
// import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

import {
  getFirestore,
  collection,
  getDocs,
  updateDoc,
  doc,
} from "firebase/firestore";
import { apppp } from "./firebase";
const firestore = getFirestore(apppp);

const FarmerData1 = () => {
  const navigate = useNavigate();
  const userId = localStorage.getItem("uid");
  const [editFarmerName, setEditFarmerName] = useState();
  const [editAddress, setEditAddress] = useState();
  const [editPhoneNumber, setEditPhoneNumber] = useState();

  const [ediitLandHolding, setEditLandHolding] = useState();
  const [editThisSeason, setEditThisSeason] = useState();
  const [editPreviousSeason, setEditPreviousSeason] = useState();

  const [editAadharPanCard, setEditAadharPanCard] = useState();
  const [editIsCropBeforeSowing, setEditIsCropBeforeSowing] = useState();
  const [editIsCoverCropping, setEditIsCoverCropping] = useState();

  const [editIsIntercropping, setEditIsIntercropping] = useState();
  const [editIsBioFertilizers, setEditIsBioFertilizers] = useState();
  const [editIsAgroforestry, setEditIsAgroforestry] = useState();
  const [id, setId] = useState();
  const [updateForm, setUpdateForm] = useState(false);

  const [isValidMobile, setIsValidMobile] = useState(true);
  const [isValidAdhar, setIsValidAdhar] = useState(true);


  const handleMobileNo = (e) => {
      const inputMobile = e.target.value;
      setEditPhoneNumber(inputMobile);
      const mobilePattern = /^[0-9]{10}$/; 
      setIsValidMobile(mobilePattern.test(inputMobile));
    };

    const handleAdharNo = (e) => {
      const inputAdhar = e.target.value;
      setEditAadharPanCard(inputAdhar);
      const adharPattern = /^[0-9]{12}$/;
      setIsValidAdhar(adharPattern.test(inputAdhar));
    };

  //access all data from fire store
  const collectionRef = collection(
    firestore,
    `FarmerOnBoardinng/${userId}/Farmer_reg`
  );
  const [fromDbVal, setfromDbVal] = useState([]);
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
    const listdata = async () => {
      const dbVal = await getDocs(collectionRef);
      setfromDbVal(dbVal.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      console.log("fromDbVal", fromDbVal);
    };
    listdata();
  }, []);

  const HandleEditVal = async (
    id,
    farmerName,
    address,
    phoneNumber,
    aadharPanCard,
    landHolding,
    previousSeason,
    thisSeason,
    isAgroforestry,
    isBioFertilizers,
    isCoverCropping,
    isCropBeforeSowing,
    isIntercropping
  ) => {
    console.log(
      id,
      farmerName,
      address,
      phoneNumber,
      aadharPanCard,
      landHolding,
      previousSeason,
      thisSeason,
      isAgroforestry,
      isBioFertilizers,
      isCoverCropping,
      isCropBeforeSowing,
      isIntercropping
    );
    setEditFarmerName(farmerName);
    setEditAddress(address);
    setEditPhoneNumber(phoneNumber);
    setEditAadharPanCard(aadharPanCard);
    setEditLandHolding(landHolding);
    setEditPreviousSeason(previousSeason);
    setEditThisSeason(thisSeason);

    setEditIsCropBeforeSowing(isCropBeforeSowing);
    setEditIsCoverCropping(isCoverCropping);
    setEditIsIntercropping(isIntercropping);
    setEditIsBioFertilizers(isBioFertilizers);
    setEditIsAgroforestry(isAgroforestry);
    setId(id);
    setUpdateForm(true);
  };

  const editAndSave =  () => {
    if (!isValidMobile) {
      alert("Please enter valid 10-digit mobile number");
      setEditPhoneNumber("");

      return;
    }
    if (!isValidAdhar) {
      alert("Please enter valid AadharNumber ");

      setEditAadharPanCard("");

      return;
    }
    const updateData =  doc(
      firestore,
      `FarmerOnBoardinng/${userId}/Farmer_reg`,
      id
    );


    try {
      const snpshot =  updateDoc(updateData, {
        farmerName: editFarmerName,
        address: editAddress,
        phoneNumber: editPhoneNumber,
        landHolding: ediitLandHolding,
        thisSeason: editThisSeason,
        previousSeason: editPreviousSeason,
        aadharPanCard: editAadharPanCard,
        isCropBeforeSowing: editIsCropBeforeSowing,
        isCoverCropping: editIsCoverCropping,
        isIntercropping: editIsIntercropping,
        isBioFertilizers: editIsBioFertilizers,
        isAgroforestry: editIsAgroforestry,
      });

      alert("thank for update");
      console.log(snpshot);
    } catch (err) {
      console.log(err);
      alert("something going wrong");
    }
    navigate("/");
    window.location.reload();

  };

  return (
    <div className="farmerData mt-4">
      {/*  <Navbar  name={userName} />    */}
      <div className="container-fluid mt-5 ">
        <div className="table-responsive">
          <table className="table table-dark table-hover table-bordered tbl">
            <thead>
              <tr>
                <th>Sr.No.</th>
                <th>FarmerName</th>
                <th>phoneNumber</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {fromDbVal.map((data, index) => (
                <tr key={index + 1}>
                  <td>{index + 1}</td>
                  <td>{data.farmerName}</td>
                  <td>{data.phoneNumber}</td>
                  <td>
                    <button
                      onClick={() =>
                        HandleEditVal(
                          data.id,
                          data.farmerName,
                          data.address,
                          data.phoneNumber,
                          data.aadharPanCard,
                          data.landHolding,
                          data.previousSeason,
                          data.thisSeason,
                          data.isAgroforestry,
                          data.isBioFertilizers,
                          data.isCoverCropping,
                          data.isCropBeforeSowing,
                          data.isIntercropping
                        )
                      }
                      className="btn btn-primary"
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {updateForm && (
        <div className="editForm  pt-5 p-sm-3 regist">
          <div className="container-fluid     ">
            <div className=" row  d-flex justify-content-center align-items-center  ">
              <div className="col-11 col-sm-8 col-md-7 col-lg-5 border rounded border-secondary p-2 shadow  bg-light ">
                <h4 className="text-center ">Farmers On Boardinng</h4>
                <form autoComplete="off" className="form-group">
                  <div className="row ">
                    <div className="col-10 offset-1">
                      <label className="labels-1" htmlFor="farmerName">
                        Farmer Name
                      </label>
                      <input
                        type="text"
                        className="form-control form-inputs "
                        id="farmerName"
                        placeholder="Enter your farmer Name"
                        value={editFarmerName}
                        onChange={(e) => setEditFarmerName(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="row ">
                    <div className="col-10 offset-1">
                      <label className="labels-1" htmlFor="address">
                        Address
                      </label>
                      <input
                        type="text"
                        className="form-control form-inputs"
                        id="address"
                        placeholder="Enter your address"
                        value={editAddress}
                        onChange={(e) => setEditAddress(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="row ">
                    <div className="col-10 offset-1">
                      <label className="labels-1" htmlFor="phoneNumber">
                        phone Number
                      </label>
                      <input
                        type="number"
                        className="form-control form-inputs"
                        id="phoneNumber"
                        placeholder="Enter your Phone Number"
                        value={editPhoneNumber}
                        onChange={handleMobileNo}
                        required
                      />
                    </div>
                  </div>

                  <div className="row ">
                    <div className="col-10 offset-1">
                      <label className="labels-1" htmlFor="landHolding">
                        Total Land Holding(in Acres )
                      </label>
                      <input
                        type="number"
                        className="form-control form-inputs"
                        id="landHolding"
                        placeholder="Enter your land Holding"
                        value={ediitLandHolding}
                        onChange={(e) => setEditLandHolding(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="row ">
                    <div className="col-10 offset-1">
                      <label className="labels-1" htmlFor="thisSeason">
                        Crop Sowing this season
                      </label>
                      <input
                        type="text"
                        className="form-control form-inputs"
                        id="thisSeason"
                        placeholder="Enter Crop Sowing this season"
                        value={editThisSeason}
                        onChange={(e) => setEditThisSeason(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="row ">
                    <div className="col-10 offset-1">
                      <label className="labels-1 " htmlFor="previousSeason">
                        Crop Sowing previous season
                      </label>
                      <input
                        type="text"
                        className="form-control form-inputs"
                        id="previousSeason"
                        placeholder="Enter Crop Sowing previous season"
                        value={editPreviousSeason}
                        onChange={(e) => setEditPreviousSeason(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="row ">
                    <div className="col-10 offset-1">
                      <label className="labels-1" htmlFor="aadharPanCard">
                        Aadhar Card Number
                      </label>
                      <input
                        type="number"
                        className="form-control form-inputs"
                        id="aadharPanCard"
                        placeholder="Enter your Aadhar Number."
                        value={editAadharPanCard}
                        onChange={handleAdharNo}
                        required
                      />
                    </div>
                  </div>

                  <div className="row ">
                    <div className="col-10 offset-1">
                      <div>
                        <span>Farming Practices</span>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input form-input1"
                          type="checkbox"
                          id="flexCheckDefault1"
                          checked={editIsCropBeforeSowing}
                          onChange={(e) =>
                            setEditIsCropBeforeSowing(!editIsCropBeforeSowing)
                          }
                        />
                        <label
                          className="form-check-label labels-1"
                          htmlFor="flexCheckDefault1"
                        >
                          N<sub>2</sub>(Nitrogen) Fixation crop before sowing of
                          any crop
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input form-input1"
                          type="checkbox"
                          id="flexCheckChecked2"
                          checked={editIsCoverCropping}
                          onChange={(e) =>
                            setEditIsCoverCropping(!editIsCoverCropping)
                          }
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
                          checked={editIsIntercropping}
                          onChange={(e) =>
                            setEditIsIntercropping(!editIsIntercropping)
                          }
                          id="flexCheckDefault3"
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
                          id="flexCheckDefault4"
                          checked={editIsBioFertilizers}
                          onChange={(e) =>
                            setEditIsBioFertilizers(!editIsBioFertilizers)
                          }
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
                          checked={editIsAgroforestry}
                          onChange={(e) =>
                            setEditIsAgroforestry(!editIsAgroforestry)
                          }
                          id="flexCheckDefault5"
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

                  <div className="row mb-2   ">
                    <div className="col-8 offset-2  submitOnBoardinng  ">
                      <button
                        onClick={editAndSave}
                        className="btn-FarmerOnBoardinng "
                      >
                        Update
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FarmerData1;
