import { combineReducers } from 'redux'
import { userLogReducer } from './reducers/logReducer'
import { pickPlaceReducer } from './reducers/pickPlaceReducer'

export const reducers = combineReducers({
	LogInOrOut: userLogReducer,
	pickPlace: pickPlaceReducer,
})
