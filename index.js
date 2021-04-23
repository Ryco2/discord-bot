const Discord = require('discord.js'),
     client = new Discord.Client({
         fetchAllMembers: true
     }),
     config = require('./config.json')
     fs = require('fs')

    client.login(process.env.token)

client.on('ready', () => {
    client.user.setActivity('By_Ryco#8075|V.1.0', {type: 'PLAYING'})
})