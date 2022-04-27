import React from 'react';
import { Link } from "react-router-dom"
import logoMenu from "../images/logoMenu.svg"

import styles from "../styles/componentsStyle/Nav.module.css"
const NavBar = () => {
    return (
    <div className={styles.nav}>
        <img src={logoMenu} alt="logo menu"></img>
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
    </ul>
    <ul className={styles.nav__ul_login}>
        <li className={styles.nav__ul__li__login}>
            <Link className={styles.nav__ul__li} to="/signup">Sign Up</Link>
        </li>
        <li className={styles.nav__ul__li__login}>
            <Link className={styles.nav__ul__li} to="/signup">Log In</Link>
        </li>
        </ul>
    </div>
    )
}
 
export default NavBar;