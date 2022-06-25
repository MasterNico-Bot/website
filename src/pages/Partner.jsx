import { Card, Text, Grid, Button } from '@nextui-org/react';
import { FontAwesome } from '../FontAwesome';
import { partners } from '../partners';
import { Footer } from '../Footer';
import { useState } from 'react';
import { Helmet } from 'react-helmet';

import '../styles/partners.css';

export function Partners() {
	return (
		<div className="Partners">
			<Helmet>
				<title>Socios - Master Nico</title>
				<meta
					name="description"
					content="Dale un vistazo a las organizaciones que apoyan a Master Nico."
				/>
			</Helmet>
			<h1>Socios</h1>
			<p>Estas organizaciones contribuyen al desarrollo de Master Nico.</p>
			<div className="card-container">
				{partners.map((partner, index) => (
					<Card
						css={{
							p: '$6',
							mw: '400px',
							background: 'rgb(28, 29, 35)',
							backgroundSize: 'cover',
							backgroundPosition: 'center',
							backgroundRepeat: 'no-repeat'
						}}
						variant="bordered"
						isPressable
						key={index}
					>
						<Card.Header>
							<img alt={partner.name} src={partner.logo} width="34px" height="34px" />
							<Grid.Container css={{ pl: '$6' }}>
								<Grid xs={12}>
									<Text h4 css={{ lineHeight: '$xs' }}>
										{partner.name}
									</Text>
								</Grid>
								<Grid xs={12}>
									<Text css={{ color: '$accents8' }}>{partner.domain}</Text>
								</Grid>
							</Grid.Container>
						</Card.Header>

						<Card.Body>
							<Text>
								{partner.description.split('\n').map(str => (
									<>
										{str}
										<br />
									</>
								))}
							</Text>
						</Card.Body>
						{partner.banner?.length > 0 && <Card.Image src={partner.banner} />}

						<Card.Footer css={{ flexWrap: 'wrap', gap: '10px' }}>
							{partner.buttons.map((data, index) => (
								<Button
									key={`${index}`}
									color="warning"
									flat
									as="a"
									href={data.url}
									target="_blank"
									css={{ marginRight: '10px' }}
									auto
								>
									{(!!data.icon && <FontAwesome icon={data.icon} />) || (
										<FontAwesome icon="fas fa-external-link-alt" />
									)}
									{data.label}
								</Button>
							))}
						</Card.Footer>
					</Card>
				))}
				<PartnerReqs />
			</div>
			<Footer />
		</div>
	);
}

function PartnerReqs() {
	const [servers, setServers] = useState(false);

	return (
		<Card
			css={{
				p: '$6',
				mw: '400px',
				background: 'rgb(28, 29, 35)'
			}}
			variant="bordered"
			isPressable
			key="uwuwuwuw"
		>
			<Card.Header>
				<img
					alt="MASTER NICO"
					src="https://cdn.discordapp.com/avatars/928357222617055372/4c0d2d97be9b3048f0b26cf0e45a42fb.png?size=256"
					width="34px"
					height="34px"
				/>
				<Grid.Container css={{ pl: '$6' }}>
					<Grid xs={12}>
						<Text h4 css={{ lineHeight: '$xs' }}>
							¿Quieres ser socio?
						</Text>
					</Grid>
					<Grid xs={12}>
						<Text css={{ color: '$accents8' }}>Master Nico</Text>
					</Grid>
				</Grid.Container>
			</Card.Header>

			<Card.Body>
				<Text h4>Requisitos para {servers ? 'servidores' : 'bots'}</Text>
				{servers ? <ServerReqs /> : <BotReqs />}
			</Card.Body>

			<Card.Footer css={{ flexWrap: 'wrap', gap: '10px' }}>
				<Button
					color="warning"
					flat
					css={{ marginRight: '10px' }}
					onPress={() => setServers(!servers)}
					auto
				>
					Ver para {servers ? 'bots' : 'servidores'}
				</Button>
				<Button color="warning" flat as="a" href="https://discord.gg/FNsC4cDnTj" auto>
					<FontAwesome icon="fab fa-discord" />
					Discord
				</Button>
			</Card.Footer>
		</Card>
	);
}

function BotReqs() {
	return (
		<ol>
			<li>Tener un bot verificado.</li>
			<li>Que el bot este en más de 120 servidores.</li>
			<li>Tener un servidor de soporte con más de 100 miembros.</li>
			<li>Tener 1 representante en el servidor de Master Nico.</li>
			<li>El anuncio se hará con el ping: @Anuncios.</li>
			<li>
				Ser respetuosos y estar a las órdenes de nosotros, al igual nosotros haremos lo mismo.
			</li>
		</ol>
	);
}
function ServerReqs() {
	return (
		<ol>
			<li>Tener minimo 200 usuarios en tu servidor.</li>
			<li>
				Dedicarnos un canal o compartir un canal con nuestras noticias del canal #「📢」noticias
			</li>
			<li>Tener un representante en el servidor.</li>
			<li>Tener minimo un proyecto dedicado al servidor o al representante.</li>
		</ol>
	);
}
