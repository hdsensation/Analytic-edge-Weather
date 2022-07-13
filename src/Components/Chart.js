import React from "react";
import { Contxt } from "./Context";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  callbacks
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Chart() {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Weather Data",
      },
    },
  };

  let val=Contxt()
  let d=val.data
  let labels=[]
  let min=[]
  let max=[]

  d.map(e=>{
   min.push(e.temp.min)
   max.push(e.temp.max)
    const n =new Date(e.dt * 1000).toLocaleString("en-us", {
        weekday: "long"
    });
   labels.push(n)
  })

  console.log(min)


  const data = {
    labels: labels,
    datasets: [
      {
        label: "Low Temprature",
        data: min,
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "High Temprature",
        data: max,
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
  return (
    <>
        <Bar options={options} data={data} />
    </>
  );
}

export default Chart;