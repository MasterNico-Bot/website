/**
 * @typedef {object} partner
 * @prop {string} name
 * @prop {string} description
 * @prop {string} logo
 * @prop {string} banner
 * @prop {string} background
 * @prop {string} domain
 * @prop {{ label: string; url: string; icon?: string; }[]} buttons
 */
/**
 * @type {partner[]}
 */
const partners = [
	{
		name: 'Zeew.dev',
		description:
			'Un startup de educación online, donde puedes relacionarte con los amantes de la programación y el arte. Donde puedes aprender en grupo, concer nuevas personas e incluso encontrar personas con las cual crear un nuevo proyecto.',
		logo: 'https://avatars.githubusercontent.com/u/89824559?s=200&v=4',
		banner:
			'https://cdn.discordapp.com/attachments/912170601962147891/987879974725890058/zeew-square.png',
		domain: 'zeew.dev',
		buttons: [
			{
				label: 'Sitio web',
				url: 'https://zeew.dev'
			}
		]
	},
	{
		name: 'Sophia Bot',
		url: 'https://invite.sophiabot.com',
		description:
			'Sophia, un bot multifunción la cual es verificado contando con más de 850 servidores actualmente, dentro de sus categorías más importante destaca la moderación y diversión.\nNo lo dudes más y añádela.',
		logo: 'https://cdn.discordapp.com/avatars/864930156857786388/1c3c28cc48f949b3e538cb7317cdb6fc.png?size=4096',
		banner:
			'https://cdn.discordapp.com/attachments/912170601962147891/987902991430471720/fondo2.jpg',
		domain: 'sophia-bot.com',
		buttons: [
			{
				label: 'Sitio web',
				url: 'https://invite.sophia-bot.com'
			},
			{
				label: 'Discord',
				url: 'https://discord.gg/8PSwGHhZM8',
				icon: 'fab fa-discord'
			}
		]
	},
	{
		name: 'drgatoxd',
		description:
			'Un programador que hace bots de Discord y páginas web con React.\n\nSkills:\n- React\n- Node.js\n- Discord.js\n- MongoDB\n- Sass\n- Heroku\n- TypeScript\n- Git',
		logo: 'https://drgato.ml/images/avatar.jpg',
		domain: 'drgato.ml',
		buttons: [
			{
				label: 'Sitio web',
				url: 'https://drgato.ml'
			},
			{
				label: 'GitHub',
				url: 'https://github.com/drgatoxd',
				icon: 'fab fa-github'
			}
		]
	}
];

export { partners };
