import { useParams } from 'react-router-dom';
import CardEvent from '../components/Card/CardEvent';
import CardSeatPlan from '../components/Card/CardSeatPlan';
import events from '../data/events';
import CardPackages from '../components/Card/CardPackages';

function EventDetails() {
	const { id } = useParams();
	const event = events.find((e) => e.id.toString() === id);

	if (!event) {
		return <p>Event not found</p>;
	}

	return (
		<div className="container">
			<div className="page">
				<div className="card">
					<CardEvent
						id={event.id}
						image={event.image}
						category={event.category}
						title={event.title}
						location={event.location}
						date={event.date}
						price={event.price}
						description={event.description}
					/>
				</div>
				<div className="card">
					<CardSeatPlan />
				</div>
        <div className='card'>
          <CardPackages/>
        </div>
			</div>
		</div>
	);
}
export default EventDetails;
