import React, { useEffect } from "react";
import "./FarmerData.scss";
import Navbar from "./Navbar";
import { useUserContext } from "./UserProvider";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { apppp } from "./firebase";

import { useNavigate } from "react-router-dom";

const firestore = getFirestore(apppp);
const FarmerData = () => {
  const { editData, setEditData } = useUserContext();
  const userId = localStorage.getItem("uid");
  const navigate = useNavigate();

  useEffect(() => {
    const listdata = () => {
      console.log(userId);
      return getDocs(
        collection(firestore, `FarmerOnBoardinng/${userId}/Farmer_reg`)
      );
    };
    console.log("list data", listdata);
    console.log("id is", userId);
    listdata().then((data) => setEditData(data.docs));
    console.log("all data", editData);
  }, [editData,setEditData,userId]);

const editAndSave =()=>{
  navigate("/EditByEditClick");
}




  return (
    <div className="farmerData">
      <Navbar />
      <div className="container-fluid mt-5 ">
        <div className="table-responsive">
          <table className="table table-dark table-hover table-bordered tbl">
            <thead>
              <tr>
                <th>Sr.No.</th>
                <th>FarmerName</th>
                <th>Address</th>
                <th>phoneNumber</th>
                <th>Aadhar/PanCard </th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {editData.map((data, index) => (
                <tr key={index + 1}>
                  <td>{index + 1}</td>
                  <td>{data.data().farmerName}</td>
                  <td>{data.data().address}</td>
                  <td>{data.data().phoneNumber}</td>
                  <td>{data.data().aadharPanCard}</td>
                  <td>
                    <button onClick={editAndSave} className="btn btn-primary">Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FarmerData;
