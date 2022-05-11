import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import TransportOffer from '../pages/TransportOffer'
import Booking from '../pages/Booking'
import ExchangeOffice from '../pages/ExchangeOffice'
import SignUp from './SignUp/SignUp'
import SignIn from './SignIn/SignIn'
import User from './User/User'

import styles from '../styles/componentsStyle/main.module.css'

const Main = () => {
	return (
		<section className={styles.mainContainer}>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="offer" element={<TransportOffer />} />
				<Route path="booking" element={<Booking />} />
				<Route path="exchange" element={<ExchangeOffice />} />
				<Route path="signup" element={<SignUp />} />
				<Route path="login" element={<SignIn />} />
				<Route path="userProfile" element={<User />} />
			</Routes>
		</section>
	)
}

export default Main
