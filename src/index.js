import React from 'react';
import ReactDOM from 'react-dom/client';
import { NextUIProvider, createTheme } from '@nextui-org/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Navbar } from './Navbar';
import App from './App';
import { Command } from './pages/Command';

import './styles/navbar.css';
import './styles/styles.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<NextUIProvider
				theme={createTheme({
					type: 'dark',
					theme: {
						colors: {
							warning: '#e45233',
							warningLight: '#e4523333',
							warningLightContrast: '#ff7639',
							warningLightHover: '#e4523355',
							code: '#e45233',
							codeLight: '#e4523322'
						}
					}
				})}
			>
				<Navbar />
				<Routes>
					<Route path="/" element={<App />} />
					<Route path="/commands" element={<Command />} />
				</Routes>
			</NextUIProvider>
		</BrowserRouter>
	</React.StrictMode>
);
