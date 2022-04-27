import React, {useState, useEffect} from 'react';
import {Routes, Route } from "react-router-dom"

import Home from "../pages/Home"
import TransportOffer from "../pages/TransportOffer"
import Booking from "../pages/Booking"
import ExchangeOffice from "../pages/ExchangeOffice"
import RegisterForm from "../pages/RegisterForm/RegisterForm"



const Main = () => {

	const [users, setUsers] = useState(()=> {
	const date = localStorage.getItem("registeredUsers")
	return date ? JSON.parse(date) : []
})

	useEffect(()=>{
		fetch("https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=55.42159&longitude=-22.0837&localityLanguage=pl")
		.then(response=>response.json())
		.then(response=>console.log(response))
	},[])
	
	useEffect(()=>{
		localStorage.setItem("registeredUsers", JSON.stringify(users))

		console.log(users)
	}, [users])

    return ( 
        	<Routes>
				  <Route path="/" element={<Home/>}/>
				  <Route path="offer" element={<TransportOffer/>}/>
				  <Route path="booking" element={<Booking/>}/>
				  <Route path="exchange" element={<ExchangeOffice/>}/>
				  <Route path="signup" element={<RegisterForm setUsers={setUsers}/>}/>
			</Routes>
     );
}
 
export default Main;