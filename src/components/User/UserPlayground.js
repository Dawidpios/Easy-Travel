import React from 'react'
import { useSelector } from 'react-redux'

const UserPlayground = () => {
	const date = localStorage.getItem('user')

	const state = useSelector((state) => (date ? JSON.parse(date) : state))
	const user = state.user[0]
	return (
		<>
			<p>{user.name}</p>
			<p>{user.email}</p>
			<p>{user.number}</p>
		</>
	)
}

export default UserPlayground
