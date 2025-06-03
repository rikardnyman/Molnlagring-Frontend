import { useLocation } from 'react-router-dom';
import handleButtonClick from '../Button/buttonHandler';

function getTitle(pathname) {
	if (pathname === '/events') return 'Events';
	if (/^\/events\/event-details\/\d+/.test(pathname)) return 'Event Details';
	if (pathname === '/bookings/e-voucher') return 'E-Voucher';
	if (pathname === '/bookings') return 'Bookings';
	if (pathname === '/') return 'Home';
	if (pathname === '/policy') return 'Privacy Policy';
	return 'Page';
}

function Header() {
	const location = useLocation();
	const pageTitle = getTitle(location.pathname);

	return (
		<header className="header">
			<div className="container">
				<aside className="sidebar">
					<div className="logo-desktop">
						<img src="/assets/VentixeLogo.svg" alt="Ventixe Logo" />
					</div>
				</aside>
				<div className="topbar-mobile">
					<nav className="nav-row">
						<a href="/">
							<img src="/assets/VentixeLogo.svg" alt="Ventixe Logo" />
						</a>
						<h6 className="title-16 medium" style={{ color: 'var(--secondary)' }}>
							{pageTitle}
						</h6>
						<button onClick={handleButtonClick} data-action="toggle-dropdown">
							<i className="fa-solid fa-bars"></i>
						</button>
					</nav>

					<div id="myDropdown" className="dropdown-menu">
						<div className="dropdown-container">
							<section>
								<a href="/bookings">Bookings</a>
							</section>
							<section>
								<a href="/events">Events</a>
							</section>
							<section>
								<a href="/logout">Log out</a>
							</section>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}

export default Header;
