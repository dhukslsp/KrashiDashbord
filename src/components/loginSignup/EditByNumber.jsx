import React from "react";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { useUserContext } from "./UserProvider";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { apppp } from "./firebase";
const firestore = getFirestore(apppp);

const EditByNumber = () => {
  const [farmerName, setFarmerName] = useState("");
  
  const { farmerNumber, setFarmerNumber,accessDataForEdit, setAccessDataForEdit } = useUserContext();
  const navigate = useNavigate();

    //   useEffect(() => {
  //     const listdata = async () => {
  //         let list =[];
  //         try{
  //             const dbVal = await getDocs(collectionRef);
  //             dbVal.forEach((doc)=>{
  //              list.push({id:doc.id, ...doc.data()})
  //             })
  //            console.log(list)
  //         }catch(err){
  //             console.log(err)
  //         }

  //     };
  //     listdata();;
  //   }, []);

  useEffect(() => {

    const getDataByNumber = async (e) => {

      console.log(e);
    
      // e.preventDefault();
      const userId = localStorage.getItem("uid");
      console.log(userId);
      const collectionRef = collection( firestore,`FarmerOnBoardinng/${userId}/Farmer_reg`);
      console.log(collectionRef);
      const q = query(collectionRef, where("phoneNumber", "==", farmerNumber));
      console.log(q);
  
      const snpshot = await getDocs(q);
      snpshot.forEach((data) =>{
        setAccessDataForEdit(data.data())
   
      } );
  
      console.log(accessDataForEdit);
    };

    getDataByNumber();

  }, [accessDataForEdit, setAccessDataForEdit,farmerNumber ]);


const accessData =()=>{
  navigate("/EditForm");
  console.log("check data",accessDataForEdit);
}

  return (
    <div className="main">
      <Navbar />
      <div className="container-fluid EnterNumber ">
        <div className=" row d-flex justify-content-center align-items-center   ">
          <div className="col-11  col-sm-6 col-md-4  EnterNumberbox p-4">
            <h4 className="text-center mt-2">Enter Farmer Name and Number</h4>
            <form
              autoComplete="off"
              className="form-group "

            >
              <div className="row d-flex justify-content-center align-items-center ">
                <div className="col-11   mt-4">
                  <label htmlFor="farmerName">Enter Farmer Name:</label>
                  <input
                    type="text"
                    className="form-control mt-3"
                    id="farmerName"
                    placeholder="Enter farmer Name "
                    value={farmerName}
                    onChange={(e) => setFarmerName(e.target.value)}
                    required
                  />
                </div>

                <div className="col-11 mt-2">
                  <label htmlFor="farmerNumber">Enter Farmer number:</label>
                  <input
                    type="number"
                    className="form-control mt-3"
                    id="farmerNumber"
                    placeholder="Enter your number "
                    value={farmerNumber}
                    onChange={(e) => setFarmerNumber(e.target.value)}
                    required
                  />
                </div>

                <div className="row mt-4   ">
                  <div className="col-8 offset-2 mb-2 EnterNumberSubmit  ">
                    <button onClick={accessData} className="btn-primary ">
                      Continue
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditByNumber;
