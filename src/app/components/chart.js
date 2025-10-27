"use client" 
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const options = {
  responsive: true,
  interaction: {
    mode: "index",
    intersect: false
  },
  stacked: false,
  plugins: {
    title: {
      display: true,
      text: "Chart.js Line Chart - Multi Axis"
    }
  },
  scales: {
    y: {
      type: "linear",
      display: true,
      position: "right"
    }
  }
}

const labels = ["January", "February", "March", "April", "May", "June", "July"]

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [5,6,12,5,10,5,8],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      yAxisID: "y"
    },
    {
      label: "Dataset 2",
      data: [11,5,7,5,11,3,1],
      borderColor: "rgba(235, 223, 53, 1)",
      backgroundColor: "rgba(87, 219, 60, 0.5)",
      yAxisID: "y"
    },
    {
      label: "Dataset 3",
      data: [14,1,4,5,15,40,2],
      borderColor: "rgba(37, 202, 15, 1)",
      backgroundColor: "rgba(87, 219, 60, 0.5)",
      yAxisID: "y"
    },
    {
      label: "Dataset 3",
      data: [50,40,20,30,10,20,80],
      borderColor: "rgba(27, 200, 223, 1)",
      backgroundColor: "rgba(87, 219, 60, 0.5)",
      yAxisID: "y"
    }
  ]
}


export default function Chart() {
  return (
    <>
        <div className='lg:w-[60%] w-full h-full bg-surface-a10 text-light-a0 p-2'>
            <Line options={options} data={data} />
            
        </div>
    </>
  )
}