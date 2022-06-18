import { Button } from '@nextui-org/react';
import { FontAwesome } from './FontAwesome';
import { Link } from 'react-router-dom';
import { Footer } from './Footer';

import welcome from './images/welcome.png';
import backup from './images/backup.png';
import roles from './images/roles.png';
import tickets from './images/tickets.png';
import sorteo from './images/sorteo.png';
import economia from './images/economia.png';
import starboard from './images/starboard.png';
import captcha from './images/captcha.png';

function App() {
	return (
		<div className="App">
			<header>
				<div className="container">
					<img
						src="https://cdn.discordapp.com/avatars/928357222617055372/4c0d2d97be9b3048f0b26cf0e45a42fb.png?size=256"
						alt="Master Rico"
						className="logo"
					/>
					<div className="right">
						<h1>Master Nico</h1>
						<p>¡Un bot multi funciones con diversos sistemas para tu servidor!</p>
						<div className="landscape-btns">
							<Button
								href="https://discord.com/oauth2/authorize?client_id=928357222617055372&scope=bot+applications.commands&permissions=8"
								color="warning"
								as="a"
								className="inviteButton"
								auto
							>
								<FontAwesome icon="fas fa-arrow-up-right-from-square" /> Invitar bot
							</Button>
							<Button as="a" href="#welcome" flat color="warning" auto>
								Ver características
							</Button>
							<Button as="span" auto flat color="warning">
								<Link to="/commands">Comandos</Link>
							</Button>
						</div>

						<div className="portrait-btns">
							<Button
								href="https://discord.com/oauth2/authorize?client_id=928357222617055372&scope=bot+applications.commands&permissions=8"
								color="warning"
								as="a"
								className="inviteButton"
							>
								<FontAwesome icon="fas fa-arrow-up-right-from-square" /> Invitar bot
							</Button>
							<Button as="a" href="#welcome" auto light color="warning">
								Ver características
							</Button>
							<Link to="/commands" className="btn-zindex">
								Comandos
							</Link>
						</div>
					</div>
				</div>
			</header>
			<section id="welcome">
				<div className="container">
					<div className="text">
						<h2>Imágenes de bienvenida</h2>
						<p>
							¡Master Nico permite personalizar las bienvenidas!
							<br />
							¡Incluye muchas variables y configuraciones disponibles!
						</p>
						<Button light as="a" href="#backups" auto>
							Ir a backups
						</Button>
					</div>
					<img src={welcome} alt="masternico welcome" width="450px" />
				</div>
			</section>
			<section id="backups">
				<div className="container">
					<div className="text">
						<h2>Copias de seguridad</h2>
						<p>
							¡Master Nico tiene un sistema de backups avanzado!
							<br />
							¡Tiene 4 opciones dentro del sistema que te puede encantar!
						</p>
						<Button light as="a" href="#menu-roles">
							Ir a roles de menú
						</Button>
					</div>
					<img src={backup} alt="masternico backup" width="450px" />
				</div>
			</section>
			<section id="menu-roles">
				<div className="container">
					<div className="text">
						<h2>Menú de roles</h2>
						<p>
							¡Master Nico tiene un sistema de autoroles personalizable!
							<br />
							Puedes crear mensajes infinitos con hasta 25 roles por mensaje
						</p>
						<Button light as="a" href="#tickets">
							Ir a tickets
						</Button>
					</div>
					<img src={roles} alt="masternico reaction-roles" width="450px" />
				</div>
			</section>
			<section id="tickets">
				<div className="container">
					<div className="text">
						<h2>Tickets</h2>
						<p>
							Puedes personalizar tus tickets como quieras!
							<br />
							¡Y puedes poner hasta 25 opciones de tickets!!
						</p>
						<Button light as="a" href="#sorteos">
							Ir a sorteos
						</Button>
					</div>
					<img src={tickets} alt="masternico tickets" width="450px" />
				</div>
			</section>
			<section id="sorteos">
				<div className="container">
					<div className="text">
						<h2>Sorteos</h2>
						<p>
							¡Master Nico tiene un sistema de sorteos increible!
							<br />
							¡Puedes crear sorteos y tienes varias opciones de personalizacion!
						</p>
						<Button light as="a" href="#economia">
							Ir a economia
						</Button>
					</div>
					<img src={sorteo} alt="masternico sorteos" width="450px" />
				</div>
			</section>
			<section id="economia">
				<div className="container">
					<div className="text">
						<h2>Economía</h2>
						<p>
							¡Master Nico tiene un sistema de economia personalizable!
							<br />
							¡Tiene demasiados comandos de economia!
							<br />
							¡Y lo mejor tiene una tienda personalizable y puedes dar roles por item!
						</p>
						<Button light as="a" href="#starboard">
							Ir a starboard
						</Button>
					</div>
					<img src={economia} alt="masternico economia" width="450px" />
				</div>
			</section>
			<section id="starboard">
				<div className="container">
					<div className="text">
						<h2>Starboard</h2>
						<p>
							¡Master Nico tiene un sistema de starboard!
							<br />
							¡Es un sistema simple pero funcional para todo servidor!
						</p>
						<Button light as="a" href="#captcha">
							Ir a captcha
						</Button>
					</div>
					<img src={starboard} alt="masternico starboard" width="450px" />
				</div>
			</section>
			<section id="captcha">
				<div className="container">
					<div className="text">
						<h2>Verificación</h2>
						<p>
							¡Master Nico tiene un sistema de verificacion increible!
							<br />
							¡Puedes configurar el canal y el rol!
							<br />Y si el usuario completa correctamente el captcha le dara el rol!
						</p>
					</div>
					<img src={captcha} alt="masternico captcha" width="450px" />
				</div>
			</section>

			<Footer />
		</div>
	);
}

export default App;
