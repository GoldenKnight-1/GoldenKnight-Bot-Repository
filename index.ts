import DiscordJS, { CommandInteractionOptionResolver, Intents } from 'discord.js'
import dotenv from 'dotenv'
dotenv.config()

const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
})

client.on('ready', () => {
  console.log('The Bot Is Online!')

  const guildId = '976377603386671104'
  const guild = client.guilds.cache.get(guildId)
  let commands

  if (guild) {
      commands = guild.commands
   } else {
          commands = client.application?.commands
      }

      commands?.create({
          name: 'ping',
          description: 'Replies With Pong!',
      })
      
      })

      client.login(process.env.TOKEN)