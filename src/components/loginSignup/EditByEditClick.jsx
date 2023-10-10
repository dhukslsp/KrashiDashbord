import React from "react";
import { useState } from "react";
import Navbar from "./Navbar";
import "./FarmerOnBoardinng.scss";
import { useUserContext } from "./UserProvider";
// import axios from "axios";

import {
  getFirestore,
  doc,
  updateDoc,
  setDoc,
  collection,
  query,
  where,
} from "firebase/firestore";
import { apppp } from "./firebase";

const firestore = getFirestore(apppp);

const EditByEditClick = () => {
  const { accessDataForEdit } =useUserContext();

  const [editFarmerName, setEditFarmerName] = useState(
    accessDataForEdit.farmerName
  );
  const [editAddress, setEditAddress] = useState(accessDataForEdit.address);
  const [editPhoneNumber, setEditPhoneNumber] = useState(
    accessDataForEdit.phoneNumber
  );
  const [ediitLandHolding, setEditLandHolding] = useState(
    accessDataForEdit.landHolding
  );
  const [editThisSeason, setEditThisSeason] = useState(
    accessDataForEdit.thisSeason
  );
  const [editPreviousSeason, setEditPreviousSeason] = useState(
    accessDataForEdit.previousSeason
  );
  const [editAadharPanCard, setEditAadharPanCard] = useState(
    accessDataForEdit.aadharPanCard
  );

  const [editIsCropBeforeSowing, setEditIsCropBeforeSowing] = useState(
    accessDataForEdit.isCropBeforeSowing
  );
  const [editIsCoverCropping, setEditIsCoverCropping] = useState(
    accessDataForEdit.isCoverCropping
  );
  const [editIsIntercropping, setEditIsIntercropping] = useState(
    accessDataForEdit.isIntercropping
  );
  const [editIsBioFertilizers, seyEditIsBioFertilizers] = useState(
    accessDataForEdit.isBioFertilizers
  );
  const [editIsAgroforestry, setEditIsAgroforestry] = useState(
    accessDataForEdit.isAgroforestry
  );

  const updateData = async () => {
    const userId = localStorage.getItem("uid");
    console.log(userId);
    const docRef = doc(
      firestore,`FarmerOnBoardinng/${userId}/Farmer_reg/m5Qd8bUKkjh5MQdNgsaG`);
    console.log(docRef);

    // const q = query(docRef, where("phoneNumber", "==", farmerNumber));
    // console.log(q);

    const snpshot = await updateDoc(docRef, {
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

    console.log(snpshot);
  };

  return (
    <div>
      <Navbar />
      <div className="container-fluid FarmerOnBoardinng  ">
        <div className=" row  d-flex justify-content-center align-items-center FarmerOnBoardinng-box ">
          <div className="col-12   ">
            <h4 className="text-center ">Farmers On Boardinng</h4>
            <form
              autoComplete="off"
              className="form-group"
              onSubmit={updateData}
            >
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
                    type="text"
                    className="form-control form-inputs"
                    id="phoneNumber"
                    placeholder="Enter your Phone Number"
                    value={editPhoneNumber}
                    onChange={(e) => setEditPhoneNumber(e.target.value)}
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
                    type="text"
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
                    Aadhar/Pan Card Number
                  </label>
                  <input
                    type="text"
                    className="form-control form-inputs"
                    id="aadharPanCard"
                    placeholder="Enter your Phone No."
                    value={editAadharPanCard}
                    onChange={(e) => setEditAadharPanCard(e.target.value)}
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
                      value={editIsCropBeforeSowing}
                      onChange={(e) => setEditIsCropBeforeSowing(true)}
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
                      value={editIsCoverCropping}
                      onChange={(e) => setEditIsCoverCropping(true)}
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
                      value={editIsIntercropping}
                      onChange={(e) => setEditIsIntercropping(true)}
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
                      value={editIsBioFertilizers}
                      onChange={(e) => seyEditIsBioFertilizers(true)}
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
                      value={editIsAgroforestry}
                      onChange={(e) => setEditIsAgroforestry(true)}
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

              <div className="row mt-2   ">
                <div className="col-8 offset-2  submitOnBoardinng  ">
                  <button
                    onClick={updateData}
                    className="btn-FarmerOnBoardinng "
                  >
                    Edit & Save
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

export default EditByEditClick;
