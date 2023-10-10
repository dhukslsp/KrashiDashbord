import React from "react";
import MainContent from "./MainContent"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
    const navigate = useNavigate();
  
    useEffect(() => {
        if (!localStorage.getItem("token")) {
            navigate("/login");
          }
    }, []);
    return (
        <div className="Dashboard">
            <MainContent />
        </div>

    )
}