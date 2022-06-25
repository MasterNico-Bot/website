import { Routes } from 'react-router-dom';

export function ExtendedRoutes({ children }) {
	return (
		<>
			<Routes>{children}</Routes>
		</>
	);
}
