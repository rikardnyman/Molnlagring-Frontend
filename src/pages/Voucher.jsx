import React from 'react';

function Voucher() {
	return (
		<div className="container">
			<div className="card" style={{ justifySelf: 'center', backgroundColor: 'var(--grey-20)', padding: '1rem' }}>
				<div className="ticket">
					<div className="ticket-header">
						<div className="event-info">
							<h3>Rhythm & Beats Music Festival</h3>
							<p>DJ Nova, The Rockerz, ElectroBeats, Harmony Crew</p>
						</div>
					</div>

					<div className="ticket-body">
						<div className="ticket-grid">
							<div>
								<p className="label">Name</p>
								<p>Jackson Moore</p>
							</div>
							<div>
								<p className="label">Invoice ID</p>
								<p>INV202945</p>
							</div>
							<div>
								<p className="label">Ticket Category</p>
								<p>Platinum</p>
							</div>
							<div>
								<p className="label">Seat Number</p>
								<p>B12</p>
							</div>
						</div>
						<div className="ticket-meta">
							<p>
								Gate <strong>3</strong>
							</p>
							<hr />
							<p>
								<strong>Location:</strong> Sunset Park, Los Angeles, CA
							</p>
							<p>
								<strong>Date:</strong> April 20, 2029
							</p>
							<p>
								<strong>Time:</strong> 12:00 PM - 11:00 PM
							</p>
						</div>
					</div>

					<div className="ticket-footer">
						<p className="title-18 bold" style={{ marginBottom: '2rem' }}>
							Scan to Enter
						</p>
						<img src="/assets/Barcode.svg" alt="barcode" className="barcode" />
						<p className="note">
							Thank you for your purchase! Enjoy the festival and experience the rhythm like never before.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Voucher;
