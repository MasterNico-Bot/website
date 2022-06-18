import '../styles/policy.css';
import { Footer } from '../Footer';
import { Button } from '@nextui-org/react';
import { Link } from 'react-router-dom';

export function Policy() {
	return (
		<div className="Policy">
			<h1>Política de Privacidad de Master Nico</h1>
			<p>
				El equipo de Master Nico entiende lo importante que es la privacidad de sus usuarios, es algo que se respeta y
				se toma enserio.
				<br />A continuación, te invitamos a que leas en detalle y aprendas más acerca de nuestra política de
				privacidad.
			</p>
			<div className="body">
				<h3>Master Nico recolecta por tiempo indefinido la siguiente información:</h3>
				<ol>
					<li>
						Métricas anónimas:
						<ul>
							<li>Mensajes recibidos por segundo.</li>
							<li>Comandos ejecutados por minuto.</li>
							<li>Peticiones hechas a la API de Discord.</li>
						</ul>
					</li>
					<li>Respaldos nocturnos de la base de datos que contiene por ejemplo el comando backup.</li>
					<li>Registros internos para combatir el spam (uso excesivo de comandos).</li>
				</ol>
				<br />
				<h3>Información que Master Nico no recolecta:</h3>
				<ol>
					<li>Cualquier cosa que no esté incluida en los puntos de arriba.</li>
					<li>
						Contenido de los mensajes (son obtenidos directamente de la API de Discord para mover el mensaje a
						destacados).
					</li>
					<li>Información que no es utilizada por el bot.</li>
				</ol>
				<i>* El bot lee los mensajes de los usuarios de Discord con fines de funcionamiento y moderativos.</i>
				<br />
				<br />
				Puedes solicitar la eliminación de tus backups y toda la información asociada. Para ello puedes acudir al
				servidor de soporte donde eliminaremos toda tu informacion del bot.
			</div>
			<br />

			<Button color="warning" flat as="span" auto>
				<Link className="link" to="/terms">
					Términos y Condiciones
				</Link>
			</Button>
			<Footer />
		</div>
	);
}
