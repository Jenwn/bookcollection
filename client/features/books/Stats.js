import React from "react";
import { Link } from 'react-router-dom';
import { Bars } from '../index'
  
const Stats = () => {
    return(
        <div>
            <div className="banner">
            <nav className="navbar">
                <Link to="/stats" className='navLink'>Books Read This Year</Link>
                <Link to="/genres" className='navLink'>Genres</Link>
                <Link to="/ratings" className='navLink'>Ratings</Link>
            </nav>
            </div>
            <div>
                <Bars/>
            </div>
        </div>
    )

}
export default Stats