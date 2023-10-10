import React, { useState, useEffect } from "react";
import "./Styles/Location.scss";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

import { CategoryScale } from "chart.js";
Chart.register(CategoryScale);

const Location = () => {
  // const data= {
  //     labels: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"],
  //     datasets: [
  //         {
  //             label: "2022 ",
  //             // data: [],
  //             data: [32, 20, 18, 32, 32, 20, 18, 32, 32, 20, 11, 9],
  //             backgroundColor: "rgba(158, 232, 86, 1)",
  //         },
  //     ],
  // }

  const [chartData, setChartData] = useState({
    labels: ["0", "1", "2", "3", "4", "5", "6", "7"],
    datasets: [
      {
        label: "2022 ",
        // data: [],
        data: [32, 20, 18, 32, 32, 20, 18, 32],
        backgroundColor: "rgba(158, 232, 86, 1)",
      },
    ],
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://sigfox-4a13d-default-rtdb.firebaseio.com/WiFi_Devices/AE01/Logs.json",
        { method: "get" }
      );

      const data = await response.json();
      const dataSet = [];

      for (const key in data) {
        // console.log(data);
        dataSet.push(data[key].H);
      }

      // setChartData((prev) => {
      //   const newState = { ...prev };

      //   newState.datasets[0].data = dataSet;

      //   // console.log(newState);
      //   return newState;
      // });
      setChartData({
        labels: ["0", "1", "2", "3", "4", "5", "6", "7"],
        datasets: [
          {
            label: "2022 ",
            data: dataSet,
            backgroundColor: "rgba(158, 232, 86, 1)",
          },
        ],
      });
    };

    // const fetchData= async()=> {
    //     const url = 'https://sigfox-4a13d-default-rtdb.firebaseio.com/WiFi_Devices/AE01/Logs.json'

    //   await fetch(url).then((data)=> {
    //       console.log("Api data", data)
    //       const res = data.json();
    //       return res
    //   }).then((res) => {
    //       console.log("ressss", res)

    //       const dataSet = [];
    //       for (const key in res) {
    //         // console.log(data);
    //         dataSet.push(res[key].H);
    //       }
    //      setChartData({
    //         labels: ["0", "1", "2", "3", "4", "5", "6", "7"],
    //         datasets: [
    //             {
    //                 label: "2022 ",
    //                 data: dataSet,
    //                 backgroundColor: "rgba(158, 232, 86, 1)",
    //             },
    //         ],
    //        })
    //   }).catch(e => {
    //          console.log("error", e)
    //      })
    //  }

    fetchData();
  }, []);

  const option1 = {
    plugins: {
      legend: {
        display: false,
      },
    },
    title: {
      display: true,
      text: "bar chart",
    },
    scales: {
      y: [
        {
          ticks: {
            min: 0,
            max: 60,
          },
        },
      ],
    },
  };

  return (
    <div className="DeviceUpdates">
      <div className="upper-head">
        <h1 className="main-head">Device Updates</h1>
      </div>

      <div className="both-overview">
        <div className="tChart">
          <div className="headSection">
            <div>
              <h2 className="Overview">Overview</h2>
            </div>
            <div className="btns">
              <button className="btn">week</button>
              <button className="btn">month</button>
              <button className="btn">year</button>
            </div>
          </div>
          <div className="main-chart">
            <div>
              <div className="chart1">
                <Bar
                  style={{
                    width: "765px",
                    height: "350px",
                    marginLeft: "-40px",
                  }}
                  data={chartData}
                  options={option1}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="tChart">
          <div className="headSection">
            <div>
              <h2 className="Overview">Overview</h2>
            </div>
            <div className="btns">
              <button className="btn">week</button>
              <button className="btn">month</button>
              <button className="btn">year</button>
            </div>
          </div>
          <div className="main-chart">
            <div>
              <div className="chart1">
                <Bar
                  style={{
                    width: "765px",
                    height: "350px",
                    marginLeft: "-40px",
                  }}
                  data={chartData}
                  options={option1}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
