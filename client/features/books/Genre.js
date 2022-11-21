import React from "react";
import { Link } from 'react-router-dom';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2'

ChartJS.register(ArcElement,Tooltip,Legend)

export const data = {
    labels: ['Fantasy', 'Adventure', 'Romance', 'Contemporary', 'Dystopian', 'Horror','Thriller','Mystery','Science Fiction','Memoir','Travel','Art'],
    datasets: [
      {
        label: '# read',
        data: [12, 19, 3, 5, 2, 3,16,15,3,6,7,11],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(33, 112, 112, 0.45)',
          'rgba(33, 35, 112, 0.45)',
          'rgba(33, 35, 32, 0.45)',
          'rgba(255, 31, 139, 0.45)',
          'rgba(173, 101, 0, 0.67)',
          'rgba(0, 160, 0, 0.67)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(33, 112, 112, 0.45)',
          'rgba(33, 35, 112, 0.45)',
          'rgba(33, 35, 32, 0.45)',
          'rgba(255, 31, 139, 0.45)',
          'rgba(173, 101, 0, 0.67)',
          'rgba(0, 160, 0, 0.67)'
        ],
        borderWidth: 1,
      },
    ],
  };

const Genre = () => {
    return(
        <div>
            <div className="banner">
            <nav className="navbar">
                <Link to="/stats" className='navLink'>Books Read This Year</Link>
                <Link to="/genres" className='navLink'>Genres</Link>
                <Link to="/ratings" className='navLink'>Ratings</Link>
            </nav>
            </div>
            <Pie data={data}/>
            <h2>Form here</h2>
        </div>
    )

}

export default Genre