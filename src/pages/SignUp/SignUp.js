import React, { useState } from "react"
import { supabase } from "../../components/supaBaseClient/supaBaseClient"

import style from "../../styles/componentsStyle/LogIn.module.css"
const SignUp = () => {
	const [login, setLogin] = useState("")
	const [password, setPassword] = useState("")

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
			.from("USERS")
			.select("*")
			.eq("id", user.id)
		console.log(user)
		console.log(profiles)
		console.log(error)
	}
	return (
		<>
			<form className={style.form}>
				<label>Login:</label>
				<input type="text" onChange={handleLogin} value={login}></input>
				<label>Hasło</label>
				<input type="text" onChange={handlePassword} value={password}></input>
				<button onClick={handleLogIn}>Zaloguj</button>
			</form>
		</>
	)
}

export default SignUp
