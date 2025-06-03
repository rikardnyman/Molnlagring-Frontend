import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Bookings from './pages/Bookings';
import Events from './pages/Events';
import Voucher from './pages/Voucher';
import EventDetails from './pages/EventDetails';
import About from './pages/About';
import Policy from './pages/Policy';
import Terms from './pages/Terms';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Header from './components/Header/Header';
import Footer from './components/Footer';

function App() {
	return (
		<BrowserRouter>
			<ScrollToTop />
			<Header />
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/events" element={<Events />} />
					<Route path="/bookings" element={<Bookings />} />
					<Route path="/bookings/e-voucher" element={<Voucher />} />
					<Route path="/events/event-details/:id" element={<EventDetails />} />
					<Route path="/about" element={<About />} />
					<Route path="/policy" element={<Policy />} />
					<Route path="/terms" element={<Terms />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</main>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
