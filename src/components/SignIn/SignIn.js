import React, { useState } from 'react'
import { supabase } from '../supaBaseClient/supaBaseClient'
import { useDispatch } from 'react-redux'
import { LOG_IN } from '../../redux/appActions'
import { Link } from 'react-router-dom'
import style from '../../styles/componentsStyle/LogIn.module.css'

const SignIn = () => {
	const dispatch = useDispatch()

	const [login, setLogin] = useState('')
	const [password, setPassword] = useState('')

	function handleLogin(e) {
		setLogin(e.target.value)
	}
	function handlePassword(e) {
		setPassword(e.target.value)
	}

	async function handleLogIn(e) {
		e.preventDefault()
		const { user, session, error } = await supabase.auth.signIn({
			email: login,
			password: password,
		})

		let { data: profiles } = await supabase
			.from('USERS')
			.select('*')
			.eq('id', user.id)

		dispatch({ type: LOG_IN, payload: profiles })
	}

	return (
		<>
			<form className={style.form}>
				<label>Login:</label>
				<input type="text" onChange={handleLogin} value={login}></input>
				<label>Hasło</label>
				<input type="text" onChange={handlePassword} value={password}></input>
				<button onClick={handleLogIn}>
					<Link to="/">Zaloguj</Link>
				</button>
			</form>
		</>
	)
}

export default SignIn
