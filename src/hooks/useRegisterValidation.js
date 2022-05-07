import { useState } from "react"

const emailRegEx = /\S+@\S+\.\S+/
const phoneRegEx = /^\d{9}$/

export const useRegisterValidation = (validateValue ) => {
	const [value, setValue]  = useState("")
	const [isTouched, setIsTouched] =  useState(false)
	
	const valueIsValid = validateValue(value)
	const throwError = !valueIsValid && isTouched

	const changeValue = e => {
		setValue(e.target.value)
	}

	const handleIsTouched = e => {
		setIsTouched(true)
	}

	return{
		value: value,
		throwError: throwError,
		changeValue,
		handleIsTouched,


	}
}
