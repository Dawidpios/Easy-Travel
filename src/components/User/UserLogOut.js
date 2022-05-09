import React from 'react'
import { Link } from 'react-router-dom'
import Button from "../Button"

const UserLogOut = ({logOut}) => {


	return (
		<>
			<button onClick={logOut}>
				<Link to="/">Wyloguj</Link>
			</button>
		</>
	)
}

export default UserLogOut
