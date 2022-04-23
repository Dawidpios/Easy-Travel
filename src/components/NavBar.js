import React from 'react';
import { Link } from "react-router-dom"

import styles from "../styles/componentsStyle/Nav.module.css"
const NavBar = () => {
    return (
    <div className={styles.nav}>
        <ul className={styles.nav__ul}>
        <li className={styles.nav__ul__li}>
            <Link className={styles.nav__ul__li} to="/">Home Page</Link>
        </li>
        <li className={styles.nav__ul__li}>
            <Link className={styles.nav__ul__li}  to="/offer">Our offer</Link>
        </li>
        <li className={styles.nav__ul__li}>
            <Link className={styles.nav__ul__li} to="/booking">Booking</Link>
        </li>
        <li className={styles.nav__ul__li}>
            <Link className={styles.nav__ul__li} to="/exchange">Currency Exchange</Link>
        </li>
        <li className={styles.nav__ul__li}>
            <Link className={styles.nav__ul__li} to="/signup">Sign Up</Link>
        </li>
    </ul>
    </div>
    )
}
 
export default NavBar;