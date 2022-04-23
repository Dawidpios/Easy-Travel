import React from "react"
// import { BrowserRouter as Router } from "react-router-dom"
import { BrowserRouter } from "react-router-dom"
import AppProvider from "../context/AppContext";

import NavBar from "./NavBar"
import Main from "./Main"
import Footer from "./Footer"

import styles from "../styles/componentsStyle/App.module.css"

const App = () => {

	return (
		
      <AppProvider>
			<BrowserRouter>
				<NavBar></NavBar>
				<Main></Main>
				<Footer></Footer>
			</BrowserRouter>
      </AppProvider>
		
	)
}

export default App

