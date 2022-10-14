import React from 'react';
import './linechart.css';
import { Line } from 'react-chartjs-2';

const data = {
  labels: ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May','Jun', 'Jul'],
  datasets: [
    {
      label: '',
      data: [null, 25, 58, 38, 55, 95, 70, 60],
      fill: true,
      backgroundColor: 'rgba(230, 92, 106, 0.4)',
      borderColor: 'rgba(255, 99, 132, 0.6)',
      tension: 0.4,
    },
  ],
};

const options = {
  scales: {
    yAxes: {
        ticks: {
          color: "#fff",
          font:{
              size:14,
          }
        },
      },
    xAxes: {
        ticks: {
          color: "#fff",
          font:{
              size:14,
          }
        },
        gridLines: {
            drawOnArea: false,
        }
      },
  },
};

function LineChart() {
    return (
        <div className="line-chart">
            <Line data={data} options={options} />
        </div>
    )
}

export default LineChart
