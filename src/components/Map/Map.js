import React from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import style from './Map.module.css'
import { PositionsWithDistance } from './PositionsWithDistance'
import PickedPlace from './PickedPlace'
import { useSelector } from 'react-redux'

const Map = () => {
	const state = useSelector((state) => state)
	return (
		<>
			<MapContainer
				className={style.mapContainer}
				center={[51.505, -0.09]}
				zoom={13}
				scrollWheelZoom={false}>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<PositionsWithDistance></PositionsWithDistance>
			</MapContainer>

			<section>
				<PickedPlace state={state}></PickedPlace>
			</section>
		</>
	)
}

export default Map
