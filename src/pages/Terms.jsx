import '../styles/policy.css';
import { Footer } from '../Footer';
import { Button } from '@nextui-org/react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export function Terms() {
	return (
		<div className="Policy">
			<h1>Términos y Condiciones</h1>
			<div className="body">
				<Helmet>
					<title>Términos y Condiciones - Master Nico</title>
					<meta
						name="description"
						content="Aquí encontrarás los términos y condiciones de Master Nico."
					/>
				</Helmet>
				<h3>Introducción</h3>
				<ul>
					<li>
						¡Primero ante todo muchas gracias por dar la oportunidad a Master Nico en tu servidor!
					</li>
					<li>Al utilizar el bot o al entrar a la pagina web aceptas la Política de Privacidad.</li>
					<li>Si no estas de acuerdo puedes abandonar el sitio web.</li>
				</ul>
				<br />
				<h3>Datos de Usuario / Servidor</h3>
				<ul>
					<li>
						Master Nico almacena unicamente los datos de un servidor en el que se ejecuto el comando
						backup.
					</li>
					<li>Ninguno de los datos guardados son vendidos ni prestados a nadie.</li>
					<li>
						Los datos solo son necesarios para el uso de los 4 comandos de backup que existen, si no
						compartes esos datos son imposibles que sean publicos.
					</li>
					<li>Al ser tu informacion tu puedes decidir si quieres que sea guardada.</li>
					<li>
						Tienes todo el permiso de acceder a los datos del servidor siempre y cuando verifiquemos
						que eres el propietario del servidor.
					</li>
				</ul>
			</div>
			<br />
			<Button color="warning" flat as="span">
				<Link className="link" to="/policy">
					Política de Privacidad
				</Link>
			</Button>
			<Footer />
		</div>
	);
}
