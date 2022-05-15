import React, { useState } from 'react'
import { supabase } from '../supaBaseClient/supaBaseClient'
import { useDispatch } from 'react-redux'
import { LOG_IN } from '../../redux/appActions'
import { Link } from 'react-router-dom'
import style from './LogIn.module.css'

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
			<div className={style.blur}>
				<form className={style.form__container}>
					<h1 className={style.form__header}>Welcome back!</h1>
					<label className={style.form__label}>Login</label>
					<input
						className={style.form__input}
						type="text"
						onChange={handleLogin}
						value={login}></input>
					<label className={style.form__label}>Password</label>
					<input
						className={style.form__input}
						type="password"
						onChange={handlePassword}
						value={password}></input>
					<button className={style.form__button} onClick={handleLogIn}>
						<Link to="/">Log in</Link>
					</button>
				</form>
			</div>
		</>
	)
}

export default SignIn
