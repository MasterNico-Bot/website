import { Button } from '@nextui-org/react';
import { Link } from 'react-router-dom';

export function Footer() {
	return (
		<footer>
			<h2>¡Lleva tu servidor al siguiente nivel!</h2>
			<p>+250 servidores confían en Master Nico.</p>
			<Button
				as="a"
				href="https://discord.com/oauth2/authorize?client_id=928357222617055372&scope=bot+applications.commands&permissions=8"
				target="_parent"
				color="warning"
			>
				¡Invítame ahora!
			</Button>

			<br />

			<div className="credits">
				<p>&copy; 2022 Master Nico</p>
				<Link to="/terms">Términos</Link>
				<Link to="/partners">Socios</Link>
				<span
					onClick={() => (window.location.href = 'https://www.youtube.com/watch?v=mCdA4bJAGGk')}
				>
					Premium
				</span>
				<Link to="/policy">Política</Link>
			</div>
		</footer>
	);
}
