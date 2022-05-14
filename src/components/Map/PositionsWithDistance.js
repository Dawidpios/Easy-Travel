import React, { useState, useEffect } from 'react'
import { Marker, Popup, useMapEvents } from 'react-leaflet'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { GET_DISTANCE, PICK_FIRST_PLACE } from '../../redux/appActions'

export function PositionsWithDistance() {
	const dispatch = useDispatch()
	const state = useSelector((state) => state.pickPlace)
	const [position, setPosition] = useState(null)
	const [secondPosition, setSecondPosition] = useState(null)
	const [distance, setDistance] = useState(null)

	const map = useMapEvents({
		click(e) {
			const coordinate = e.latlng

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
			}
		},
	})
	useEffect(() => {
		if (secondPosition !== null) {
			setDistance(map.distance(position, secondPosition).toFixed(0) / 1000)
			dispatch({
				type: GET_DISTANCE,
				payload: {
					...state,
					distance: distance,
				},
			})
		}
		console.log(state)
	}, [map, position, secondPosition, dispatch, distance, state])

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
