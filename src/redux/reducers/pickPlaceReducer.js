import { GET_DISTANCE, PICK_FIRST_PLACE, PICK_SECOND_PLACE } from '../appActions'

export const pickPlaceReducer = (
	state = {
		latFirst: null,
		lngFirst: null,
		latSecond: null,
		lngSecond: null,
		distance: null,
	},
	action
) => {
	switch (action.type) {
		case PICK_FIRST_PLACE:
			return (state = { ...state, ...action.payload })
		case PICK_SECOND_PLACE:
			return (state = { ...state, ...action.payload })
		case GET_DISTANCE:
			return (state = { ...state, ...action.payload })
		default:
			console.warn('Nie ma takiej akcji w mapie')
	}
	return state
}
