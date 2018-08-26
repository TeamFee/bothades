const discord = require('discord.js');

const ClientDiscord = new discord.Client();
const PREFIX = "$";

ClientDiscord.on("Ready", () => {
console.log ("Pret a travailler")
});


ClientDiscord.login("process.env.TOKEN");

ClientDiscord.on('guildMemberAdd', member => {
member.createDM().then(channel => {
    return channel.send("Bienvenue sur le discord");
});
});
