

import { createContext, useContext, useState } from 'react';
import React from 'react'

const UserContext = createContext();
export const UserProvider = ({ children }) => {
    const [userId, setUserId] = useState("");
    const [allData, setAllData] = useState([]);
    const [updateDataa, setUpdateDataa] = useState([]);
    const [farmerNumber, setFarmerNumber] = useState("");
    const [ editData, setEditData] =useState([])
    const [accessDataForEdit, setAccessDataForEdit] = useState({});
    return (
      <UserContext.Provider value={{ userId,setUserId,allData, setAllData,updateDataa, setUpdateDataa ,farmerNumber, setFarmerNumber,editData, setEditData,accessDataForEdit, setAccessDataForEdit}}>
        {children}
      </UserContext.Provider>
    );
}


export const useUserContext = () => useContext(UserContext);
