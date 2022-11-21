import React from "react";
import { Link } from 'react-router-dom';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend} from 'chart.js'
import { Bar } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  
const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Books of 2022',
      },
    },
  };
  
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October','November','December'];
  
const data = {
    labels,
    datasets: [
      {
        label: 'Books Read',
        data: [9,13,30,10,6,15,11,2,13,22,5],
        backgroundColor: 'rgba(245, 152, 145, 0.8)',
      },
      {
        label: 'Books Purchased',
        data: [10,22,30,0,20,5,8,9,11,14,16],
        backgroundColor: 'rgba(77, 206, 24, 0.45)',
      },
    ],
  };

const Bars = () => {
    return(
        <div>
            <div className="banner">
            <nav className="navbar">
                <Link to="/stats" className='navLink'>Books Read This Year</Link>
                <Link to="/genres" className='navLink'>Genres</Link>
                <Link to="/ratings" className='navLink'>Ratings</Link>
            </nav>
            </div>
        <Bar options={options} data={data} />
        <h2>Form here</h2>
        </div>
    )
}

export default Bars