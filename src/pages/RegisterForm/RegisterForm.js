import React, { useState } from "react"

import styles from "../../styles/componentsStyle/pagesstyle/Signup.module.css"

import { supabase } from "../../components/supaBaseClient/supaBaseClient"

const emailRegEx = /\S+@\S+\.\S+/
const phoneRegEx = /^\d{9}$/

const RegisterForm = () => {
	
	const [validationMessage, setValidationMessage] = useState("")

	const [registerFormUserName, setRegisterUserName] = useState("")
	const [registerFormUserPassword, setRegisterUserPassword] = useState("")
	const [registerFormUserEmail, setRegisterUserEmail] = useState("")
	const [registerFormUserNumber, setRegisterUserNumber] = useState("")

	const [userNameValidateState, setUserNameValidateState] = useState()
	const [userPasswordValidateState, setUserPasswordValidateState] = useState()
	const [userEmailValidateState, setUserEmailValidateState] = useState()
	const [userPhoneValidateState, setUserPhoneValidateState] = useState()

	function validateUserName() {
		const validation =
			registerFormUserName.trim().length >= 5 &&
			registerFormUserName.trim().length <= 15

		if (validation) {
			setUserNameValidateState()
			return true
		} else {
			setValidationMessage("Nazwa użytkownika powinna zawierać od 5 do 15 znaków")
			setUserNameValidateState(styles.invalidValue)
			return false
		}
	}
	function validateUserPassword() {
		const validation =
			registerFormUserPassword.trim().length >= 8 &&
			registerFormUserPassword.trim().length <= 20

		if (validation) {
			setUserPasswordValidateState()
			return true
		} else {
			setValidationMessage("Hasło musi zawierać od 8 do 20 znaków")
			setUserPasswordValidateState(styles.invalidValue)
			return false
		}
	}
	function validateUserEmail() {
		const validation = emailRegEx.test(registerFormUserEmail)

		if (validation) {
			setUserEmailValidateState()
			return true
		} else {
			setValidationMessage("Podany e-mail jest nieprawidłowy")
			setUserEmailValidateState(styles.invalidValue)
			return false
		}
	}
	function validateUserPhone() {
		const validation = phoneRegEx.test(registerFormUserNumber)

		if (validation) {
			setUserPhoneValidateState()
			return true
		} else {
			setValidationMessage("Podany numer telefonu jest nieprawidłowy")
			setUserPhoneValidateState(styles.invalidValue)
			return false
		}
	}
	function handleSubmit(e) {
		e.preventDefault()

		const isValidName = validateUserName()
		const isValidPassword = validateUserPassword()
		const isValidEmail = validateUserEmail()
		const isValidPhoneNumber = validateUserPhone()

		const validateForm = isValidName && isValidPassword && isValidEmail && isValidPhoneNumber

		if (validateForm) {
			setValidationMessage("")

			async function sendUserData() {
				let { user } = await supabase.auth.signUp({
					email: registerFormUserEmail,
					password: registerFormUserPassword,
				})
				const { data, error } = await supabase.from("USERS").insert(
					[
						{
							id: user.id,
							name: registerFormUserName,
							email: registerFormUserEmail,
							number: registerFormUserNumber,
						},
					],
					{ returning: "minimal" }
				)
			}
			sendUserData()
		} else {
			return
		}
	}

	return (
		<form className={styles.form__container} onSubmit={(e) => handleSubmit(e)}>
			{validationMessage && <h1>{validationMessage}</h1>}
			<label className={styles.form__labels}>Nazwa użytkownika</label>
			<input
				onChange={(e) => setRegisterUserName(e.target.value)}
				value={registerFormUserName}
				className={`${styles.form__labels} ${userNameValidateState}`}
				type="text"></input>
			<label className={styles.form__labels}>Hasło</label>
			<input
				onChange={(e) => setRegisterUserPassword(e.target.value)}
				value={registerFormUserPassword}
				className={`${styles.form__labels} ${userPasswordValidateState}`}
				type="password"></input>
			<label className={styles.form__labels}>Adres e-mail:</label>
			<input
				onChange={(e) => setRegisterUserEmail(e.target.value)}
				value={registerFormUserEmail}
				className={`${styles.form__labels} ${userEmailValidateState}`}
				type="email"></input>
			<label className={styles.form__labels}>Numer telefonu:</label>
			<input
				onChange={(e) => setRegisterUserNumber(e.target.value)}
				value={registerFormUserNumber}
				className={`${styles.form__labels} ${userPhoneValidateState}`}
				type="number"></input>
			<button type="submit">Zarejestruj się</button>
		</form>
	)
}

export default RegisterForm
