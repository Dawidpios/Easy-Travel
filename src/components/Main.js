import React, { useState, useEffect } from "react"
import { Routes, Route } from "react-router-dom"

import Home from "../pages/Home"
import TransportOffer from "../pages/TransportOffer"
import Booking from "../pages/Booking"
import ExchangeOffice from "../pages/ExchangeOffice"
import SignUp from "./SignUp/SignUp"
import SignIn from "./SignIn/SignIn"
import User from "./User/User"

import styles from "../styles/componentsStyle/main.module.css"






const Main = () => {




	const [users, setUsers] = useState(() => {
		const date = localStorage.getItem("registeredUsers")
		console.log(date)
		if(date === undefined) return []
		else return JSON.parse(date)
		// return date ? JSON.parse(date) : [];
	})

	console.log(users)

	useEffect(() => {
		fetch(
			"https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=55.42159&longitude=-22.0837&localityLanguage=pl"
		)
			.then((response) => response.json())
			.then((response) => console.log(response))
	}, [])

	useEffect(() => {
		localStorage.setItem("registeredUsers", JSON.stringify(users))

	}, [users])

	return (
		<section className={styles.mainContainer}>
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="offer" element={<TransportOffer />} />
			<Route path="booking" element={<Booking />} />
			<Route path="exchange" element={<ExchangeOffice />} />
			<Route path="signup" element={<SignUp setUsers={setUsers} />} />
			<Route path="login" element={<SignIn setUsers={setUsers} />} />
			<Route path="userProfile" element={<User setUsers={setUsers} />} />
		</Routes>
		</section>
	)
}

export default Main
