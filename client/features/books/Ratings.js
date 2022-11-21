import React from "react";
import { Link } from 'react-router-dom';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const options = {
    indexAxis: 'y',
    elements:{
        bar:{
            borderWidth: 2,
        },
    },
    responsive: true,
    plugins:{
        legend:{
            position:'right',
        },
        title:{
            display: true,
            text:'Book Ratings'
        }
    }
}

const labels = ['1 star', '2 stars ', '3 stars', '4 stars', '5 stars']

const data = {
    labels,
    datasets:[
        {label: 'Book Rating',
        data: [5,10,40,15,35],
        borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(95, 38, 240, 0.19)',
    }
    ]
}

const Ratings = () => {
    return (
        <div>
            <div className="banner">
                <nav className="navbar">
                    <Link to="/stats" className='navLink'>Books Read This Year</Link>
                    <Link to="/genres" className='navLink'>Genres</Link>
                    <Link to="/ratings" className='navLink'>Ratings</Link>
                </nav>
            </div>
            <Bar options={options} data={data}/>
            <h2>Form here</h2>
        </div>
    )


}

export default Ratings