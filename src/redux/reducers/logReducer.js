import { LOG_IN, LOG_OUT } from '../appActions'

export const userLogReducer = (state = { logged: false }, action) => {
	switch (action.type) {
		case LOG_IN:
			localStorage.setItem(
				'user',
				JSON.stringify({
					logged: true,
					user: action.payload,
				})
			)
			const data = localStorage.getItem('user')

			return (state = data
				? { logged: JSON.parse(data).logged, user: JSON.parse(data).user }
				: [])
		case LOG_OUT:
			localStorage.clear()
			return (state = {
				logged: action.payload,
			})
		default:
			console.warn('Nie ma takiej akcji')
	}
	return state
}
