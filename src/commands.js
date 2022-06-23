/**
 * @type {{name: string; description: string; warn?: string; link?: {prev: string; url: string}; commands: {name: string; description: string}[]}[]}
 */
const commands = [
	{
		name: '👋 Bienvenidas',
		description: 'Recibe a tus miembros con un mensaje que enviará el bot.',
		commands: [
			{
				name: '/welcome channel',
				description: 'Configurar el canal para las bienvenidas.'
			},
			{
				name: '/welcome variables',
				description: 'Muestra las variables que se pueden usar.'
			},
			{
				name: '/welcome message',
				description: 'Mensaje personalizado con las variables.'
			},
			{
				name: '/welcome card enable',
				description: 'Activar la tarjeta de bienvenida.'
			},
			{
				name: '/welcome embed enable',
				description: 'Activar el mensaje embed.'
			},
			{
				name: '/welcome embed thumbnail',
				description: 'Activar la miniatura del embed.'
			},
			{
				name: '/welcome embed color',
				description: 'Cambiar el color del embed con hex'
			}
		]
	},
	{
		name: '🎭 Roleplay',
		description: 'Comandos para rolear con tus amigos.',
		commands: [
			{
				name: '/angry',
				description: 'Enojarse con alguien.'
			},
			{
				name: '/baka',
				description: 'BAKA.'
			},
			{
				name: '/bite',
				description: 'Morder a alguien.'
			},
			{
				name: '/blush',
				description: 'Sonrojarse.'
			},
			{
				name: '/bored',
				description: 'Me aburrooo.'
			},
			{
				name: '/cry',
				description: 'Llora ;-;'
			},
			{
				name: '/kill',
				description: 'Mata a alguien.'
			},
			{
				name: '/kiss',
				description: 'Besa a alguien.'
			}
		]
	},
	{
		name: '♻️ Backup',
		description: 'Crea una copia de seguridad de tu servidor.',
		commands: [
			{
				name: '/backup create',
				description: 'Crea una copia de seguridad de tu servidor.'
			},
			{
				name: '/backup info',
				description: 'Mira la información de un backup con su ID.'
			},
			{
				name: '/backup load',
				description: 'Carga un backup a su servidor con su ID.'
			},
			{
				name: '/backup delete',
				description: 'Elimina un backup para que nadie la pueda usar.'
			}
		]
	},
	{
		name: '📜 Menú de roles',
		description: 'Configura un menú con roles seleccionables.',
		commands: [
			{
				name: '/agregar-rol',
				description: 'Agrega un rol al panel.'
			},
			{
				name: '/panel-roles',
				description: 'Genera el panel de roles.'
			},
			{
				name: '/remover-rol',
				description: 'Retira un rol del panel.'
			}
		]
	},
	{
		name: '🎫 Tickets',
		description: 'Facilita el soporte a tus usuarios con el sistema de tickets.',
		warn: 'Si olvidaste la ID que pusiste, ¡contacta en el servidor de soporte ahi te ayudaremos!',
		commands: [
			{
				name: '/agregar-opciones-menu',
				description: 'Agregar opciones al menu.'
			},
			{
				name: '/construir',
				description: 'Crear el panel de ticket.'
			},
			{
				name: '/remover',
				description: 'Remover opciones del menu usando la ID.'
			}
		]
	},
	{
		name: '🤫 Confesiones',
		description: 'Permite que los miembros cuenten sus secretos...',
		commands: [
			{
				name: '/canal-confesiones',
				description: 'Configura el canal.'
			},
			{
				name: '/confesion',
				description: 'Confesar un secreto.'
			}
		]
	},
	{
		name: '🎉 Sorteos',
		description: 'Crea sorteos para tus usuarios.',
		commands: [
			{
				name: '/sorteo iniciar',
				description:
					'Configura e inicia un sorteo. Puedes configurar duración, ganadores, premio y canal.'
			},
			{
				name: '/sorteo opciones',
				description: 'Modifica un sorteo: Terminar, Pausar, Reanudar, Reroll, Eliminar.'
			}
		]
	},
	{
		name: '📬 Sugerencias',
		description: 'Permite que los miembros de tu servidor puedan enviar sugerencias.',
		commands: [
			{
				name: '/canal-sugerencias',
				description: 'Configura el canal de sugerencias.'
			},
			{
				name: '/sugerencia',
				description:
					'Enviar una sugerencia con los siguientes parametros: Tipo, Nombre, Funcionabilidad.'
			}
		]
	},
	{
		name: '🪟 Mensaje embed',
		description: 'Genera mensajes embed personalizables',
		link: { prev: 'Genera el JSON aquí:', url: 'https://bycodenico.github.io/embedbuilder/' },
		commands: [
			{
				name: '/embed',
				description: 'Enviar el embed con el codigo JSON cuando acabes de editarlo.'
			}
		]
	},
	{
		name: '⭐ Starboard',
		description: 'Muestra los mensajes más valorados de tu servidor en un canal dedicado.',
		commands: [
			{
				name: '/starboard canal',
				description: 'Configura el canal de starboard.'
			},
			{
				name: '/starboard reset',
				description: 'Resetea el sistema y el canal.'
			}
		]
	},
	{
		name: '⚒️ Moderación',
		description: 'Modera a los miembros de tu servidor con estos comandos.',
		commands: [
			{
				name: '/ban',
				description: 'Banear a un usuario.'
			},
			{
				name: '/clear',
				description: 'Eliminar 1-99 mensajes de un canal.'
			},
			{
				name: '/clone',
				description: 'Clonar un canal.'
			},
			{
				name: '/kick',
				description: 'Expulsar a un usuario.'
			},
			{
				name: '/nuke',
				description: 'Elimina el canal y crea una copia sin mensajes.'
			},
			{
				name: '/encuesta',
				description: 'Llama a votación a tus usuarios.'
			},
			{
				name: '/warn',
				description: 'Advierte a un miembro.'
			},
			{
				name: '/aislar',
				description: 'Aísla a un usuario temporalmente. Tiempo: 10s, 10d, 10m, 10h.'
			}
		]
	},
	{
		name: '🥳 Diversión',
		description: 'Activa a tus miembros con algunos comandos para divertirse.',
		commands: [
			{
				name: '/8ball',
				description: 'Hazle una pregunta al 8ball.'
			},
			{
				name: '/afk',
				description: 'Marca tu estado como ausente.'
			},
			{
				name: '/among-us',
				description: 'Descubre al Impostor. ඞ sus amogus ඞ'
			},
			{
				name: '/banana',
				description: 'Medidor de platanos.'
			},
			{
				name: '/buscaminas',
				description: 'Juega al buscaminas.'
			},
			{
				name: '/calculadora',
				description: 'Inicia una calculadora y haz operaciones rápidas.'
			},
			{
				name: '/chistes',
				description: 'Te contaré un chiste 🤡.'
			},
			{
				name: '/covid-test',
				description: 'Hazte un test de COVID-19. (obviamente es falso)'
			},
			{
				name: '/dados',
				description: 'Tira un dado.'
			},
			{
				name: '/imagen-server',
				description: 'Muestra la imagen del servidor.'
			},
			{
				name: '/perro',
				description: 'Muestra un perro aleatorio.'
			},
			{
				name: '/tic-tac-toe',
				description: 'Juega al 3 en raya.'
			},
			{
				name: '/traductor',
				description: 'Traduce un texto a otro idioma.'
			},
			{
				name: '/wordle',
				description: 'Juega al Wordle.'
			},
			{
				name: '/wanted',
				description: 'Es wasted :xd:'
			}
		]
	},
	{
		name: '📖 Información',
		description: 'Obtén información variada.',
		commands: [
			{
				name: '/avatar',
				description: 'Muestra el avatar de un usuario.'
			},
			{
				name: '/banner',
				description: 'Muestra el banner de un usuario, si lo tiene.'
			},
			{
				name: '/codigo-qr',
				description: 'Genera un código QR.'
			},
			{
				name: '/infobot',
				description: 'Muestra información sobre el bot.'
			},
			{
				name: '/invite',
				description: 'Invita a Master Nico a tu servidor.'
			},
			{
				name: '/ping',
				description: 'Muestra el tiempo de reaccion del bot.'
			},
			{
				name: '/report-bug',
				description: 'Reporta un error en el bot.'
			},
			{
				name: '/say',
				description: 'Hace que el bot diga algo.'
			},
			{
				name: '/serverinfo',
				description: 'Muestra información del servidor.'
			},
			{
				name: '/snipe',
				description: 'Muestra el último mensaje eliminado.'
			},
			{
				name: '/soporte',
				description: 'Obtén un enlace para contactar con el soporte.'
			},
			{
				name: '/userinfo',
				description: 'Muestra información de un usuario.'
			},
			{
				name: '/emoji',
				description: 'Muestra información de un emoji.'
			},
			{
				name: '/emojis',
				description: 'Muestra todos los emojis del servidor.'
			},
			{
				name: '/insignia',
				description: 'Muestra las insignias de un usuario.'
			}
		]
	},
	{
		name: '📸 Canvas',
		description: 'Usa el potente generador de imágenes del bot.',
		commands: [
			{
				name: '/amor',
				description: 'Mide el nivel de compatibilidad entre tú y otra persona.'
			},
			{
				name: '/blurple-old',
				description: 'Genera una imagen de una persona con un color azul.'
			},
			{
				name: '/hornycard',
				description: 'Genera una licencia horny (memes gringos ._.)'
			},
			{
				name: '/logro-mc',
				description: 'Genera un logro de Minecraft personalizado.'
			},
			{
				name: '/pet',
				description: 'Una mano te acaricia. También conocido como pet-pet.'
			},
			{
				name: '/rip',
				description: 'Se murió, F.'
			},
			{
				name: '/soy-admin',
				description: 'Es admin.'
			},
			{
				name: '/trash',
				description: 'Esta persona es basura.'
			}
		]
	},
	{
		name: '🤑 Economía',
		description: 'Crea un sistema capitalista en tu servidor',
		commands: [
			{
				name: '/add-money',
				description: 'Agrega dinero a un usuario.'
			},
			{
				name: '/balance',
				description: 'Muestra el saldo de un usuario.'
			},
			{
				name: '/buy',
				description: 'Compra un objeto de la tienda.'
			},
			{
				name: '/crime',
				description: 'Comete un crimen, hay una posibilidad de ganar dinero.'
			},
			{
				name: '/daily',
				description: 'Vuelve cada día para recibir un monto gratis.'
			},
			{
				name: '/dep',
				description: 'Deposita dinero en tu cuenta.'
			},
			{
				name: '/editar-tienda crear',
				description: 'Crea un objeto para la tienda.'
			},
			{
				name: '/editar-tienda remover',
				description: 'Retira un objeto de la tienda.'
			},
			{
				name: '/inventario',
				description: 'Muestra el inventario de un usuario.'
			},
			{
				name: '/leaderboard',
				description: 'Muestra el top 10 de los usuarios con más dinero.'
			},
			{
				name: '/pescar',
				description: 'Sal a pescar y vende pescados.'
			},
			{
				name: '/remove-money',
				description: 'Elimina dinero de un usuario.'
			},
			{
				name: '/reset-economy',
				description: 'Reinicia la economía de un usuario.'
			},
			{
				name: '/resete-inventario',
				description: 'Reinicia el inventario de un usuario.'
			},
			{
				name: '/rob',
				description: 'Roba dinero a un usuario.'
			},
			{
				name: '/shop',
				description: 'Mira la tienda del servidor.'
			},
			{
				name: '/with',
				description: 'Retira dinero del banco.'
			},
			{
				name: '/work',
				description: 'Trabaja para ganar dinero.'
			},
			{
				name: '/loteria',
				description: 'Juega a la lotería.'
			},
			{
				name: '/galletas',
				description: 'Galletas con dinero. Lo sé, suena raro.'
			}
		]
	},
	{
		name: '🔒 Captcha',
		description: 'Configura el sistema de verificación. Útil para evitar multicuentas bots.',
		commands: [
			{
				name: '/captcha-channel',
				description: 'Configura el canal de captcha. Deja vacío para desactivar.'
			},
			{
				name: '/captcha-rol',
				description: 'Configura el rol de captcha. Solo se puede un rol.'
			}
		]
	},
	{
		name: '🟣 Twitch',
		description: 'Envía una notificación a tus usuarios cuando transmitas en vivo.',
		commands: [
			{
				name: '/twitch subscribe',
				description: 'Suscribirse a un canal de Twitch.'
			},
			{
				name: '/twitch unsubscribe',
				description: 'Desuscribirse de un canal de Twitch.'
			},
			{
				name: '/twitch set-channel',
				description: 'Configura el canal de Twitch o desactiva el sistema.'
			},
			{
				name: '/twitch set-message',
				description: 'Configura el mensaje de Twitch.'
			}
		]
	}
];

export { commands };
