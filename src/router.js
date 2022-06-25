import { BrowserRouter, Route } from 'react-router-dom';
import { ExtendedRoutes } from './Router/Routes';

import { Navbar } from './Navbar';
import App from './App';
import { Command } from './pages/Command';
import { Policy } from './pages/Policy';
import { Terms } from './pages/Terms';
import { Partners } from './pages/Partner';

export function Router() {
	return (
		<BrowserRouter>
			<Navbar />
			<ExtendedRoutes>
				<Route path="/" element={<App />} />
				<Route path="/commands" element={<Command />} />
				<Route path="/policy" element={<Policy />} />
				<Route path="/terms" element={<Terms />} />
				<Route path="/partners" element={<Partners />} />
			</ExtendedRoutes>
		</BrowserRouter>
	);
}
