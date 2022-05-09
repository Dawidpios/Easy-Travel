export const LOG_IN = 'LOG_IN'
export const LOG_OUT = 'LOG_OUT'

const logIn = ({ ...user }) => ({
	type: LOG_IN,
	payload: {
		...user,
	},
})

const logOut = () => ({
	type: LOG_OUT,
})
