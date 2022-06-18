import { Button } from '@nextui-org/react';
import { Link } from 'react-router-dom';

export function Footer() {
	return (
		<footer>
			<h2>¡Lleva tu servidor al siguiente nivel!</h2>
			<p>+250 servidores confían en Master Nico.</p>
			<Button color="warning">¡Invítame ahora!</Button>

			<br />

			<div className="credits">
				<p>&copy; 2022 Master Nico</p>
				<Link to="/terms">Términos</Link>
				<Link to="/policy">Política de Privacidad</Link>
				<a href="https://github.com/MasterNico-Bot">GitHub</a>
			</div>
		</footer>
	);
}
