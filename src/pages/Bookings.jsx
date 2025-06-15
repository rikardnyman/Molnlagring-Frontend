import React from 'react';
import CardEvent from '../components/Card/CardEvent';
import events from '../data/events'; 

function Bookings() {
	// Anta att alla events är bokningar – eller filtrera riktiga bokningar senare
	const bookings = events;

	return (
		<div className="container">
			{bookings.length === 0 ? (
				<p>No bookings found</p>
			) : (
				bookings.map((booking) => (
					<CardEvent
						key={booking.id}
						id={booking.id}
						image={booking.image}
						category={booking.category}
						title={booking.title}
						location={booking.location}
						date={booking.date}
						price={booking.price}
					/>
				))
			)}
		</div>
	);
}

export default Bookings;
