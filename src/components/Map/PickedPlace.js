import React, { useState, useEffect } from 'react'
import TripPlanner from './TripPlanner'

const PickedPlace = ({ state }) => {
	const [firstPlace, setFirstPlace] = useState()
	const [secondPlace, setSecondPlace] = useState()

	useEffect(() => {
		const Key = process.env.REACT_APP_POSITION
		const isFirstPlacePicked =
			state.pickPlace.latFirst !== null && state.pickPlace.lngFirst !== null
		const isSecondPlacePicked =
			state.pickPlace.latSecond !== null && state.pickPlace.lngSecond !== null

		if (isFirstPlacePicked) {
			fetch(
				`http://api.positionstack.com/v1/reverse?access_key=${Key}&query=${state.pickPlace.latFirst},${state.pickPlace.lngFirst}`
			)
				.then((response) => response.json())
				.then((response) => setFirstPlace(response.data[0]))
		}

		if (isSecondPlacePicked) {
			fetch(
				`http://api.positionstack.com/v1/reverse?access_key=${Key}&query=${state.pickPlace.latSecond},${state.pickPlace.lngSecond}`
			)
				.then((response) => response.json())
				.then((response) => setSecondPlace(response.data[0]))
		}
	}, [state.pickPlace])

	return (
		<>
			<section>
				<div>
					<h1>{firstPlace?.name}</h1>
					<h2>{firstPlace?.administrative_area}</h2>
					<p>{firstPlace?.country}</p>
					<p>{secondPlace?.continent}</p>
				</div>
				<div>
					<h1>{secondPlace?.name}</h1>
					<h2>{secondPlace?.administrative_area}</h2>
					<p>{secondPlace?.country}</p>
					<p>{secondPlace?.continent}</p>
				</div>
			</section>
			<TripPlanner
				firstPlace={firstPlace}
				secondPlace={secondPlace}
				distance={state.pickPlace.distance}></TripPlanner>
		</>
	)
}

export default PickedPlace
