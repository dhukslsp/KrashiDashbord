import React  from "react";
import "./Styles/RecentUpdate.css"
import battery from "../../Images/image 1.png"
import temp from "../../Images/image 8.png"
import humidity from "../../Images/image 4.png"
import soilMoisture from "../../Images/image 1.png"
import soilTemp from "../../Images/image 5.png"
import lightIn from "../../Images/image 2.png"
import ph from "../../Images/image 3.png"
import ec from "../../Images/image 7.png"


export default function RecentUpdates() {


    return (
        <div style = {{display:"inline"}}>
        <div className="recent-update">
            <div >
                <h1 className="recent-update-text">Recent Updates</h1>
            </div>
            <div className="recent-update-cards">
                <div className="recent-update-lowercards">
                    <div className="cards">
                        <div className="card-image">
                            <img src={battery} alt=""></img>
                        </div>
                        <div className="card-text">
                            <div className="card-text-inner1"><h2 className="card-text1">100%</h2></div>
                            <div className="card-text-inner2"><h6 className="card-text2">Battery</h6></div>
                        </div>
                    </div>
                    <div className="cards">
                        <div className="card-image">
                            <img src={temp} alt=""></img>
                        </div>
                        <div className="card-text">
                            <div className="card-text-inner1"><h1 className="card-text1">30°</h1></div>
                            <div className="card-text-inner2"><h6 className="card-text2">Amb. Temperature</h6></div>
                        </div>
                    </div>
                    <div className="cards">
                        <div className="card-image">
                            <img src={humidity} alt="" ></img>
                        </div>
                        <div className="card-text">
                            <div className="card-text-inner1"><h1 className="card-text1">51 </h1></div>
                            <div className="card-text-inner2"><h6 className="card-text2">Amb. Humidity</h6></div>
                        </div>
                    </div>
                    <div className="cards">
                        <div className="card-image">
                            <img src={soilMoisture} alt=""></img>
                        </div>
                        <div className="card-text">
                            <div className="card-text-inner1"><h1 className="card-text1">29 </h1></div>
                            <div className="card-text-inner2"><h6 className="card-text2">Soil Moisture</h6></div>
                        </div>
                    </div>
                    <div className="cards">
                        <div className="card-image">
                            <img src={soilTemp} alt=""></img>
                        </div>
                        <div className="card-text">
                            <div className="card-text-inner1"><h1 className="card-text1">30°</h1></div>
                            <div className="card-text-inner2"><h6 className="card-text2">Soil Temperature</h6></div>
                        </div>
                    </div>
                    <div className="cards">
                        <div className="card-image">
                            <img src={lightIn} alt=""></img>
                        </div>
                        <div className="card-text">
                            <div className="card-text-inner1"><h1 className="card-text1">65%</h1></div>
                            <div className="card-text-inner2"><h6 className="card-text2">Light Intensity</h6></div>
                        </div>
                    </div>
                    <div className="cards">
                        <div className="card-image">
                            <img src={ph} alt="" ></img>
                        </div>
                        <div className="card-text">
                            <div className="card-text-inner1"><h1 className="card-text1">NA</h1></div>
                            <div className="card-text-inner2"><h6 className="card-text2">pH</h6></div>
                        </div>
                    </div>
                    <div className="cards">
                        <div className="card-image">
                            <img src={ec} alt=""></img>
                        </div> 
                        <div className="card-text">
                            <div className="card-text-inner1"><h1 className="card-text1">NA</h1></div>
                            <div className="card-text-inner2"><h6 className="card-text2">EC</h6></div>
                        </div>
                    </div>
                </div>
                {/* <div className="cards">

                </div>
                <div className="cards">

                </div>
                <div className="cards">

                </div>
                <div className="cards">

                </div> */}
            </div>
        </div>
        </div>
    )
}