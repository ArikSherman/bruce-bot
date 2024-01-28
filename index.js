const { Client, Events, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

const Mike = '375389305532841984';
const Test = '110616575643533312';

client.once(Events.ClientReady, readyClient => {
	console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

client.on('messageCreate', message => {
	if (message.author == client.user) {
		return;
	}

	if (message.author.id === Test) {
		return;
	}

	if (message.author.id === Mike) {
		message.react('😂')
			.then(() => message.react('💀'));
	}
});

client.login(token);