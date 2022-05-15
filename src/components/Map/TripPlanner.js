import React, { useState, useEffect } from 'react'

const TripPlanner = ({ firstPlace, secondPlace, distance }) => {
	const [transport, setTransport] = useState()
	const [otherOpportunity, setOtherOpportunity] = useState()

	useEffect(() => {
		if (distance < 5) {
			setTransport('Walk or Bike')
			setOtherOpportunity('Car')
		}
		if (distance > 5) {
			setTransport('Car')
		}
		if (distance > 100) {
			setTransport('Train')
			setOtherOpportunity('Car')
		}
		if (distance > 700) {
			setOtherOpportunity()
			setTransport('Plane')
			if (firstPlace?.continent !== secondPlace?.continent) {
				setOtherOpportunity('Ship')
			}
		}
	}, [distance, firstPlace, secondPlace, transport])

	return (
		<>
			<section>
				<div>
					<p>
						Trasa z {firstPlace?.locality} do {secondPlace?.locality} <br />(
						{firstPlace?.name}-{secondPlace?.name})
					</p>
					<p>Odległość {distance} km</p>
				</div>
				<div>
					<p>Best form of transport for this trip : {transport} </p>
					{otherOpportunity && <p>You can also pick : {otherOpportunity}</p>}
					<p></p>
				</div>
			</section>
		</>
	)
}

export default TripPlanner
