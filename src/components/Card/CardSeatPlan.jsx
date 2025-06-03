import { useNavigate } from 'react-router-dom';

function CardSeatPlan() {
	return (
		<div className="card card-seat-plan">
			<div className="card-header">
				<h6>Seat Plan</h6>
			</div>
			<div className="card-body">
				<img
					src="/assets/SeatPlan.svg"
					alt="Seat plan"
					style={{
						display: 'block',
						margin: '2rem auto',
						maxWidth: '100%',
						height: 'auto',
					}}
				/>
				<div className="seating-wrapper">
					<div className="seating-column">
						<div className="seating-type">
							<section>
								<img src="/assets/DiamondCategory.svg" alt="" />
								<div>Diamond</div>
								<span>$120</span>
							</section>
							<p>(Seating)</p>
						</div>

						<div className="seating-type">
							<section>
								<img src="/assets/PlatinumCategory.svg" alt="" />
								<div>Platinum</div>
								<span>$100</span>
							</section>
							<p>(Seating)</p>
						</div>

						<div className="seating-type">
							<section>
								<img src="/assets/GoldCategory.svg" alt="" />
								<div>Gold</div>
								<span>$85</span>
							</section>
							<p>(Seating)</p>
						</div>

						<div className="seating-type">
							<section>
								<img src="/assets/SilverCategory.svg" alt="" />
								<div>Silver</div>
								<span>$70</span>
							</section>
							<p>(Seating)</p>
						</div>
					</div>

					<div className="seating-column">
						<div className="seating-type">
							<section>
								<img src="/assets/BronzeCategory.svg" alt="" />
								<div>Bronze</div>
								<span>$60</span>
							</section>
							<p>(Seating)</p>
						</div>

						<div className="seating-type">
							<section>
								<img src="/assets/GeneralCategory.svg" alt="" />
								<div>General Admission</div>
								<span>$50</span>
							</section>
							<p>(Standing)</p>
						</div>

						<div className="seating-type">
							<section>
								<img src="/assets/BackstageCategory.svg" alt="" />
								<div>Backstage Access</div>
								<span>$200</span>
							</section>
							<p>(Standing)</p>
						</div>

						<div className="seating-type">
							<section>
								<img src="/assets/VipCategory.svg" alt="" />
								<div>VIP Lounge</div>
								<span>$150</span>
							</section>
							<p>(Seating)</p>
						</div>
					</div>
				</div>
			</div>

			<hr className="divider" />

			<div className="title-12 semibold" style={{ color: 'var(--secondary-100)' }}>
				Notes
			</div>

			<ul className="notes">
				<li className="note">Seating categories include reserved seating with an unobstructed stage view.</li>
				<li className="note">Standing categories include access to open floor areas near the stage.</li>
			</ul>

			<div className="title-12 semibold" style={{ color: 'var(--secondary-100)' }}>
				Ticket Category Benefits
			</div>

			<div className="card-footer">
				<div className="card">
					<div className="benefits-wrapper">
						<div className="benefits">
							<div className="benefit">
								<h6 className="title-12 semibold">VIP Lounge</h6>
								<section className="perks">
									<div className="perk">
										<img src="/assets/CheckCircle.svg" alt="" />
										<p>Premium seating</p>
									</div>
								</section>
							</div>

							<div className="benefit">
								<h6 className="title-12 semibold"></h6>
								<section className="perks">
									<div className="perk">
										<img src="/assets/CheckCircle.svg" alt="" />
										<p>Complimentary drinks</p>
									</div>
								</section>
							</div>

							<div className="benefit">
								<h6 className="title-12 semibold"></h6>
								<section className="perks">
									<div className="perk">
										<img src="/assets/CheckCircle.svg" alt="" />
										<p>Fast-track entry</p>
									</div>
								</section>
							</div>

							<span>$150</span>
						</div>

						<div className="benefits">
							<div className="benefit">
								<h6 className="title-12 semibold">Backstage Access</h6>
								<section className="perks">
									<div className="perk">
										<img src="/assets/CheckCircle.svg" alt="" />
										<p>Standing access to the backstage area</p>
									</div>
								</section>
							</div>

							<div className="benefit">
								<h6 className="title-12 semibold"></h6>
								<section className="perks">
									<div className="perk">
										<img src="/assets/CheckCircle.svg" alt="" />
										<p>Artist meet-and-greet</p>
									</div>
								</section>
							</div>

							<div className="benefit">
								<h6 className="title-12 semibold"></h6>
								<section className="perks">
									<div className="perk">
										<img src="/assets/CheckCircle.svg" alt="" />
										<p>Exclusive merchandise</p>
									</div>
								</section>
							</div>

							<span>$200</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CardSeatPlan;
