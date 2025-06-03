import { Link, useLocation } from 'react-router-dom';

function Footer() {
	const location = useLocation();

	return (
		<div className="container">
			<footer>
				<div className="footer-mobile">
					<p className="title-12.semibold" style={{ color: 'var(--grey-70)' }}>
						Copyright &copy; 2025 Peterdraw
					</p>
					<nav>
						<span className="footer-links">
							<Link to="/policy" className="link-no-underline">
								<p className="title-12" style={{ color: 'var(--grey-50)' }}>
									Privacy Policy
								</p>
							</Link>
							<Link to="/terms" className="link-no-underline">
								<p className="title-12" style={{ color: 'var(--grey-50)' }}>
									Terms and conditions
								</p>
							</Link>
							<Link to="/contact" className="link-no-underline">
								<p className="title-12" style={{ color: 'var(--grey-50)' }}>
									Contact
								</p>
							</Link>
						</span>
					</nav>
					<div className="social-media">
						<div>
							<a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
								<img src="/assets/FacebookLogo.svg" alt="Link to our Facebook page" />
							</a>
						</div>
						<div>
							<a href="https://x.com/" target="_blank" rel="noopener noreferrer">
								<img src="/assets/XLogo.svg" alt="Link to our Twitter page" />
							</a>
						</div>
						<div>
							<a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
								<img src="/assets/InstagramLogo.svg" alt="Link to our Instagram page" />
							</a>
						</div>
						<div>
							<a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
								<img src="/assets/YoutubeLogo.svg" alt="Link to our Youtube page" />
							</a>
						</div>
						<div>
							<a href="https://se.linkedin.com/" target="_blank" rel="noopener noreferrer">
								<img src="/assets/LinkedinLogo.svg" alt="Link to our Linked in page" />
							</a>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}

export default Footer;
