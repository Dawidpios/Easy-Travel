import React, { useState, useEffect } from 'react'

const PickedPlace = ({ state }) => {
	const [placeOne, setPlaceOne] = useState()
	const [placeTwo, setPlaceTwo] = useState()
	useEffect(() => {}, [state, state.coordnates])
	return <></>
}

export default PickedPlace
