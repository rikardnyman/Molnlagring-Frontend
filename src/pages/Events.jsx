import React, { useEffect, useState } from 'react';
import CardEvent from '../components/Card/CardEvent';
import events from '../data/events';
// function Events() {
// 	const [events, setEvents] = useState([]);
// 	useEffect(() => {
// 		async function fetchEvents() {
// 			const response = await fetch('/api/events');
// 			const data = await response.json();
// 			setEvents(data);
// 		}

// 		fetchEvents();
// 	}, []);

function Events() {
	return (
		<div className="container">
			<div className="page">
				<div className="card">
					{events.map((event, index) => (
						<CardEvent
							key={index}
							id={event.id}
							image={event.image}
							category={event.category}
							title={event.title}
							location={event.location}
							date={event.date}
							price={event.price}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
export default Events;
