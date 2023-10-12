import React , {useState , useEffect} from "react";
import "./Styles/Weather.scss"
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
import Weatherpart1 from "./WeatherPart1"
import button1 from "../../Images/Vector2.png"
import button2 from "../../Images/Icon1.png"

export default function Weathers() {

    const [logs, setLogs] = useState([]);
    const [isLogs , setIsLogs] = useState(false);

    useEffect(() => {
      fetchData();
    }, []);

  
    const fetchData = async () => {
      const response = await fetch(
        "https://sigfox-4a13d-default-rtdb.firebaseio.com/WiFi_Devices/AE01/Logs.json"
      );
  
      const data = await response.json();

      const logData = [];
      for (const key in data) {
        logData.push({
          logNumber: key,
          BT: data[key].BT,
          EC: data[key].EC,
          H: data[key].H,
          LI: data[key].LI,
          PH: data[key].PH,
          SM: data[key].SM,
          ST: data[key].ST,
          T: data[key].T,
          iNet: data[key].iNet,
        });
      }
     
      setLogs(prev => {return logData});
      setIsLogs(true);
  
    };

    return (
        <div className="weather">
            <div className="history-data">
                <div className="weather-table-history">
                    <div className="device-history-log">
                        <div>
                            <h3 className="history-letter">  History Logs</h3>
                        </div>
                        <div className="navbuttons">
                            <button className="table-button"><img src={button2} alt=""></img></button>
                            <button className="table-button"><img src={button1} alt=""></img></button>
                        </div>

                    </div>
                    <div className="device-history-table">
                        <div className="container" >
                            <div>
                                <ul className="responsive-table">
                                    <li className="table-header">
                                        <div className="col col-1">S. No.</div>
                                        <div clasName="col col-2">Device names</div>
                                        <div className="col col-3">Last updated</div>
                                        <div className="col col-4">Moisture</div>
                                        <div className="col col-5">pH</div>
                                    </li>

                        {isLogs ?  logs.map( (log , index)=>{
                                        index++;
                                        return (<li className="table-row">
                                        <div className="col col-1" data-label="Job Id">{index}</div>
                                        <div className="col col-2" data-label="Customer Name">{log.logNumber}</div>
                                        <div className="col col-3" data-label="Amount">{log.LI}</div>
                                        <div className="col col-4" data-label="Payment Status">{log.SM}</div>
                                        <div className="col col-5" data-label="Payment Status">{log.PH}</div>
                                    </li>)}) : <h5 style={{textAlign: "center"}}>Loading...</h5> }

                                  

                                    {/* <li className="table-row">
                                        <div className="col col-1" data-label="Job Id">1</div>
                                        <div className="col col-2" data-label="Customer Name">A</div>
                                        <div className="col col-3" data-label="Amount">Last updated</div>
                                        <div className="col col-4" data-label="Payment Status">Moisture</div>
                                        <div className="col col-5" data-label="Payment Status">0</div>
                                    </li>
                                    */}
                                </ul>
                            </div>

                        </div >
                    </div >
                </div>
                <div className="weather-card">
                    <Weatherpart1 />
                </div>

            </div>
            </div>
    )
}