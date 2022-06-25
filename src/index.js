import React from 'react';
import ReactDOM from 'react-dom/client';
import { NextUIProvider, createTheme } from '@nextui-org/react';
import { Router } from './router';

import './styles/navbar.css';
import './styles/styles.css';

const theme = createTheme({
	type: 'dark',
	theme: {
		colors: {
			warning: '#e45233',
			warningLight: '#e4523333',
			warningLightContrast: '#ff7639',
			warningLightHover: '#e4523355',
			code: '#e45233',
			codeLight: '#e4523322',
			link: '#e45233'
		}
	}
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<NextUIProvider theme={theme}>
			<Router />
		</NextUIProvider>
	</React.StrictMode>
);
