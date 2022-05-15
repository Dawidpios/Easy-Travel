import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { LOG_OUT } from '../redux/appActions'
import UserLogOut from './User/UserLogOut'
import logoMenu from '../images/logoMenu.svg'

import styles from '../styles/componentsStyle/Nav.module.css'
const NavBar = () => {
	const [isUserLogged, setIsUserLogged] = useState()
	const data = localStorage.getItem('user')
	const state = useSelector((state) =>
		data ? JSON.parse(data).logged : state.LogInOrOut
	)
	const dispatch = useDispatch()
	const logOut = () => {
		setIsUserLogged(false)
		dispatch({ type: LOG_OUT, payload: false })
	}
	useEffect(() => {
		if (JSON.parse(data)?.logged) {
			setIsUserLogged(true)
			console.log(state)
		} else {
			setIsUserLogged(false)
			console.log(state)
		}
	}, [state, data])
	return (
		<div className={styles.nav}>
			<img src={logoMenu} alt="logo menu"></img>
			<ul className={styles.nav__ul}>
				<li className={styles.nav__ul__li}>
					<Link className={styles.nav__ul__li} to="/">
						Home Page
					</Link>
				</li>
				<li className={styles.nav__ul__li}>
					<Link className={styles.nav__ul__li} to="/offer">
						Our offer
					</Link>
				</li>
				<li className={styles.nav__ul__li}>
					<Link className={styles.nav__ul__li} to="/booking">
						Booking
					</Link>
				</li>
				<li className={styles.nav__ul__li}>
					<Link className={styles.nav__ul__li} to="/exchange">
						Currency Exchange
					</Link>
				</li>
			</ul>
			{isUserLogged ? (
				<p>
					<Link className={styles.nav__ul__li} to="/userProfile">
						Profil użytkownika
					</Link>
					<UserLogOut logOut={logOut}></UserLogOut>
				</p>
			) : (
				<ul className={styles.nav__ul_login}>
					<li className={styles.nav__ul__li__login}>
						<Link className={styles.nav__ul__li} to="/signup">
							Sign Up
						</Link>
					</li>
					<li className={styles.nav__ul__li__login}>
						<Link className={styles.nav__ul__li} to="/login">
							Log In
						</Link>
					</li>
				</ul>
			)}
		</div>
	)
}

export default NavBar
