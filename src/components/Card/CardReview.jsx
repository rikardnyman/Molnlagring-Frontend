import './Card.css';

export default function CardReview({ reviewer, date, rating, comment, title, category }) {
	return (
		<div className="card card-review">
			<div className="card-review-header">
				<strong>{reviewer}</strong> <span>{date}</span>
				<div className="rating">⭐ {rating}</div>
			</div>
			<p>{comment}</p>
			<div className="card-review-footer">
				<div className="card-preview">
					<div className="image-placeholder" />
					<div className="card-info">
						<span>{title}</span>
						<span className="category">{category}</span>
					</div>
					<span className="chevron">➜</span>
				</div>
			</div>
		</div>
	);
}
