import React from 'react';
import { Link } from "react-router-dom"

const NavBar = () => {
    return (
    
        <ul>
        <li>
            <Link to="/">Home Page</Link>
        </li>
        <li>
            <Link to="/offer">Our offer</Link>
        </li>
        <li>
            <Link to="/booking">Booking</Link>
        </li>
        <li>
            <Link to="/exchange">Currency Exchange</Link>
        </li>
        <li>
            <Link to="/signup">Sign Up</Link>
        </li>
    </ul>
    )
}
 
export default NavBar;