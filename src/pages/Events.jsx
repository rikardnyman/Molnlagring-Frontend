import React, { useEffect, useState } from 'react';
import CardEvent from '../components/Card/CardEvent';
import events from '../data/events';

function Events() {
	const [events, setEvents] = useState([]);

	const getEvents = async () => {
		const res = await fetch(`https://eventservice-hghxg5bed8gdfebg.swedencentral-01.azurewebsites.net/api/events`);

		if (res.ok) {
			const response = await res.json();
			setEvents(response.result);
		}
	};

	useEffect(() => {
		getEvents();
	}, []);

	return (
		<div className="container">
			<div className="page">
				<div className="card">
					{events.map((event) => (
						<CardEvent
							key={event.id}
							id={event.id}
							image={event.image}
							title={event.title}
							location={event.location}
							date={event.eventDate}
							price={event.price}
							description={event.description}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
export default Events;
