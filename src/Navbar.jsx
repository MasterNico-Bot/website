import { Link } from 'react-router-dom';
import { FontAwesome } from './FontAwesome';

export function Navbar() {
	return (
		<nav className="navbar">
			<div className="container">
				<Link className="brand" to="/">
					<img
						alt="masternico"
						width="100px"
						src="https://cdn.discordapp.com/avatars/928357222617055372/4c0d2d97be9b3048f0b26cf0e45a42fb.png?size=256"
						className="logo"
					/>
				</Link>
				<div className="pages">
					<ul>
						<li>
							<Link to="/commands">
								<FontAwesome icon="fas fa-command" />
								<span>Comandos</span>
							</Link>
						</li>
						<li>
							<Link to="/partners">
								<FontAwesome icon="fa-solid fa-handshake-simple" />
								<span>Socios</span>
							</Link>
						</li>
						<li>
							<a href="https://discord.gg/FNsC4cDnTj">
								<FontAwesome icon="fab fa-discord" />
								<span>Discord</span>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
