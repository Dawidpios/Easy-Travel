import React, { useState, useEffect } from 'react'
import { Marker, Popup, useMapEvents } from 'react-leaflet'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { PICK_FIRST_PLACE } from '../../redux/appActions'

export function PositionsWithDistance() {
	const dispatch = useDispatch()
	const state = useSelector((state) => state.pickPlace)
	const [position, setPosition] = useState(null)
	const [secondPosition, setSecondPosition] = useState(null)
	const [distance, setDistance] = useState(null)

	const map = useMapEvents({
		click(e) {
			const coordinate = e.latlng
			console.log(coordinate)
			if (position === null) {
				dispatch({
					type: PICK_FIRST_PLACE,
					payload: { latFirst: coordinate.lat, lngFirst: coordinate.lng },
				})
				setPosition(coordinate)
			} else {
				dispatch({
					type: PICK_FIRST_PLACE,
					payload: {
						...state,
						latSecond: coordinate.lat,
						lngSecond: coordinate.lng,
					},
				})
				setSecondPosition(coordinate)
				console.log(state)
			}
		},
	})
	useEffect(() => {
		if (secondPosition !== null) {
			console.log(distance)
			setDistance(map.distance(position, secondPosition).toFixed(0) / 1000)
		}
	}, [map, position, secondPosition, distance])

	if (position !== null) {
		if (secondPosition !== null) {
			return (
				<>
					<Marker position={position}>
						<Popup>
							<p>Hello</p>
						</Popup>
					</Marker>
					<Marker position={secondPosition}>
						<Popup></Popup>
					</Marker>
				</>
			)
		} else {
			return (
				<Marker position={position}>
					<Popup>Position</Popup>
				</Marker>
			)
		}
	}
}
