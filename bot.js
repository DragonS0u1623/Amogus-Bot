const { Client, Intents } = require('discord.js')
const fs = require('fs')

require('dotenv').config()

let amogus, ass 
try {
	amogus = fs.readFileSync('amogus.txt', 'utf8').toString()
	ass = fs.readFileSync('ass.txt', 'utf8').toString()
} catch(err) {
	console.error(`Couldn't read the Amogus.txt or ass.txt file to a string.`)
}

const intents = [
    Intents.FLAGS.GUILDS,
	Intents.FLAGS.GUILD_MESSAGES
]

let bot = new Client({ intents: intents })

bot.on('ready', () => console.log(`Logged in as ${bot.user.tag}`))

bot.on('messageCreate', async message => {
	if (message.author.bot) return
	
	if (message.content === 'amogus' || message.content === 'among us') return message.channel.send(amogus)
	if (message.content === 'ass') return message.channel.send(ass)
})

bot.login(process.env.TOKEN)