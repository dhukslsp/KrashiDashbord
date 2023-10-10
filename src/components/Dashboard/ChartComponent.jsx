import React from 'react'
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
// import DropDownMenu from "./DropDown"
import "./ChartComponent.scss"

import { CategoryScale } from "chart.js";
Chart.register(CategoryScale);

const ChartComponent = () => {

    const data1 = {
        labels: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"],
        datasets: [
            {
                label: "2022 ",
                data: [32, 20, 18, 32, 32, 20, 18, 32, 32, 20, 11, 9],
                backgroundColor: "rgba(158, 232, 86, 1)",
            },
        ],
    };

    const option1 = {
        plugins: {

            legend: {
                display: false
            }
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

    const data2 = {
        labels: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"],
        datasets: [
            {
                label: "2022 ",
                data: [32, 20, 18, 32, 32, 20, 18, 32, 32, 20, 11, 8],
                backgroundColor: "rgba(158, 232, 86, 1)",
            },
        ],

    };

    const option2 = {
        responsive: true,
        plugins: {
            legend: {
                display: true
            }
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
        {/*   <DropDownMenu />  */ }
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
                        <Bar style={{
                            width: '765px',
                            height: '350px',
                            marginLeft: '-40px'

                        }} data={data1} options={option1} />
                    </div>
                </div>
            </div>
        </div>
        <div className="tChart">
            <div className="headSection">
                <div >
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
                        <Bar style={{
                            width: '765px',
                            height: '350px',
                            marginLeft: '-40px'

                        }} data={data2} options={option2} />
                    </div>
                </div>
            </div>
        </div>
    </div>


</div>
  )
}

export default ChartComponent
