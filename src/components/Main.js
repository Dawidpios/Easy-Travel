import React from 'react';
import {Routes, Route } from "react-router-dom"

import Home from "../pages/Home"
import TransportOffer from "../pages/TransportOffer"
import Booking from "../pages/Booking"
import ExchangeOffice from "../pages/ExchangeOffice"
import RegisterForm from "../pages/RegisterForm"

const Main = () => {
    return ( 
        	<Routes>
				  <Route path="/" element={<Home/>}/>
				  <Route path="offer" element={<TransportOffer/>}/>
				  <Route path="booking" element={<Booking/>}/>
				  <Route path="exchange" element={<ExchangeOffice/>}/>
				  <Route path="signup" element={<RegisterForm/>}/>
			</Routes>
     );
}
 
export default Main;