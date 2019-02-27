
exports.run = async (client, message, args) => {

    message.channel.send('Hello!');



}

exports.help = {
    name: 'test',
    aliases: ['bob'],
    guildOnly: true,
    botPerms: ['MANAGE_MESSAGES'],
    userPerms: ['ADMINISTRATOR'],
    ownerOnly: true,
    cooldown: 20000
}