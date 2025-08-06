import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import CardEvent from '../components/Card/CardEvent';

function EventDetails() {
	const { id } = useParams();
	const [event, setEvent] = useState({});

	const getEvents = async () => {
		const res = await fetch(
			`https://eventservice-hghxg5bed8gdfebg.swedencentral-01.azurewebsites.net/api/events/${id}`
		);
		if (res.ok) {
			const response = await res.json();
			setEvent(response.result);
		}
	};
	useEffect(() => {
		getEvents();
	}, []);

	return (
		<div className="container">
			<div className="page">
				<div className="card">
					<CardEvent
						id={event.id}
						image={event.image}
						title={event.title}
						location={event.location}
						date={event.eventDate}
						price={event.price}
						description={event.description}
					/>
				</div>
				<div className="card">
					<Link to={`/events/booking/${id}`}>Book Event</Link>
				</div>
			</div>
		</div>
	);
}

export default EventDetails;
