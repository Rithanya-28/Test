// // Import necessary modules
// import React from 'react';
// import { Pie } from 'react-chartjs-2';

// // Chart.js registration (needed for Chart.js 3+)
// import {
//   Chart as ChartJS,
//   ArcElement,
//   Tooltip,
//   Legend,
// } from 'chart.js';
// import SideBar from '../SideBar/SideBar';

// ChartJS.register(ArcElement, Tooltip, Legend);

// const Chart = ({ data }) => {
//   // Sample data format: [{ category: 'Food', amount: 200 }, { category: 'Transport', amount: 100 }]
  
//   // Prepare chart data and labels
//   const chartData = {
//     labels: data.map(item => item.category),
//     datasets: [
//       {
//         data: data.map(item => item.amount),
//         backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
//         hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
//       },
//     ],
//   };

//   return (
//     <div>
       
//       <h3>Expense Distribution</h3>
//       <Pie data={chartData} />
//     </div>
//   );
// };

// export default Chart;
// Import necessary modules
import React from 'react';
import { Pie } from 'react-chartjs-2';

// Chart.js registration (needed for Chart.js 3+)
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const Chart = ({ data }) => {
  // Sample data format: [{ category: 'Food', amount: 200 }, { category: 'Transport', amount: 100 }]
  
  // Prepare chart data and labels
  const chartData = {
    labels: data.map(item => item.category),
    datasets: [
      {
        data: data.map(item => item.amount),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
      },
    ],
  };

  // Chart options for customization
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
      },
    },
  };

  return (
    <div style={{ width: '300px', height: '300px', margin: '0 auto' }}>
      <h3 style={{ textAlign: 'center' }}>Expense Distribution</h3>
      <Pie data={chartData} options={chartOptions} />
    </div>
  );
};

export default Chart;
