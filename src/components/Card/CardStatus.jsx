import './Card.css';

export default function CardStatus({ image, category, title, location, date, soldPercent, ticketsLeft, price }) {
	return (
		<div className="card card-status">
			<div className="card-header">
				<img src={image} alt={title} />
				<div className="category-badge">{category}</div>
			</div>
			<div className="card-body">
				<span className="title-14 semibold">{title}</span>
				<p>{location}</p>
				<p>{date}</p>
			</div>
			<div className="card-footer">
				<div className="progress-bar">
					<div style={{ width: `${soldPercent}%` }} className="bar-filled" />
				</div>
				<div className="ticket-info">
					<span>{ticketsLeft} Tickets</span>
					<span className="price">${price}</span>
				</div>
			</div>
		</div>
	);
}
