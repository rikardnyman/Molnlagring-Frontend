import { useNavigate } from 'react-router-dom';

export default function CardEvent({ id, image, category, title, location, date, price }) {
	const navigate = useNavigate();
	function handleClick() {
		navigate(`/events/event-details/${id}`);
	}
	function formatEventDate(dateString) {
		const optionsDate = { year: 'numeric', month: 'long', day: 'numeric' };
		const optionsTime = { hour: '2-digit', minute: '2-digit', hour12: true };
		const date = new Date(dateString);

		const formattedDate = date.toLocaleDateString('en-US', optionsDate);
		const formattedTime = date.toLocaleTimeString('en-US', optionsTime);

		return `${formattedDate} — ${formattedTime}`;
	}

	return (
		<div className="card card-event" data-action="navigate" data-id={id} onClick={handleClick}>
			<div className="card-header">
				<img src={image} alt="Event image" />
				<div className="category-badge">{category}</div>
			</div>
			<div className="card-body">
				<span className="date">{formatEventDate(date)}</span>

				<span className="title-16 semibold">{title}</span>
				<div className="location">
					<img src="/assets/MapPin.svg" alt="Map pin icon" />
					<p className="title-12">{location}</p>
				</div>
			</div>
			<div className="card-footer">
				<section>
					<img src="/icons/calendar.svg" alt="" />
				</section>
				<section>
					<span className="price">${price}</span>
				</section>
			</div>
		</div>
	);
}
