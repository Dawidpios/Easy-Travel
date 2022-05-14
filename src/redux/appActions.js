export const LOG_IN = 'LOG_IN'
export const LOG_OUT = 'LOG_OUT'
export const PICK_FIRST_PLACE = 'PICK_FIRST_PLACE'
export const PICK_SECOND_PLACE = 'PICK_SECOND_PLACE'
export const GET_DISTANCE = 'GET_DISTANCE'

const logIn = ({ ...user }) => ({
	type: LOG_IN,
	payload: {
		...user,
	},
})

const logOut = () => ({
	type: LOG_OUT,
})

const pickFirstPlace = () => ({
	type: PICK_FIRST_PLACE,
	payload: {
		lat: null,
		lng: null,
	},
})

const pickSecondPlace = () => ({
	type: PICK_SECOND_PLACE,
	payload: {
		lat: null,
		lng: null,
	},
})

const getDistance = () => ({
	type: GET_DISTANCE,
	payload: {
		distance: null,
	},
})
