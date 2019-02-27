
const Discord = require('discord.js');
const client = new Discord.Client();

const Handler = require('ezcmdsrewrite');
new Handler({
    client: client,
    owner: 'ownerID',
    cmdDir: `${__dirname}/commands`,
    evtDir: `${__dirname}/events`
});

client.login('token')