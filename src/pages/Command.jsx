import '../styles/commands.css';
import { Collapse, Table } from '@nextui-org/react';
import { commands } from '../commands';
import { Footer } from '../Footer';
import { Helmet } from 'react-helmet';

export function Command() {
	return (
		<div className="Commands">
			<Helmet>
				<title>Comandos - Master Nico</title>
				<meta name="description" content="Lorem ipsum dolor sit amet" />
			</Helmet>
			<h1>Comandos de Master Nico ⚡</h1>
			<p>
				Master Nico tiene actualmente{' '}
				{commands.reduce((prev, curr) => prev + curr.commands.length, 0)} comandos.
			</p>
			<Collapse.Group className="categorias" shadow>
				{commands.map(group => (
					<Collapse key={group.name} title={group.name} subtitle={group.description}>
						{group.link && (
							<span>
								{group.link.prev} <a href={group.link.url}>{group.link.url}</a>
							</span>
						)}
						{group.warn && <p className="warn">⚠️ {group.warn}</p>}
						<Table aria-label={`Tabla de comandos de ${group.name}`}>
							<Table.Header>
								<Table.Column>Nombre</Table.Column>
								<Table.Column>Descripción</Table.Column>
							</Table.Header>
							<Table.Body>
								{group.commands.map((cmd, index) => (
									<Table.Row key={index}>
										<Table.Cell>
											<code>{cmd.name}</code>
										</Table.Cell>
										<Table.Cell>{cmd.description}</Table.Cell>
									</Table.Row>
								))}
							</Table.Body>
						</Table>
					</Collapse>
				))}
			</Collapse.Group>
			<Footer />
		</div>
	);
}
