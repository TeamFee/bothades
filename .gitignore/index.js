const discord = require('discord.js');

const ClientDiscord = new discord.Client();
const PREFIX = "$";

ClientDiscord.on("Ready", () => {
console.log ("Pret a travailler")
});


ClientDiscord.login("NDgyODE1MjUxMzMxNjc4MjA5.DmKZ1w.9w-KkNlV5-sStFDVmDHoqr2Nxjs");

ClientDiscord.on('guildMemberAdd', member => {
member.createDM().then(channel => {
    return channel.send("Bienvenue sur le discord");
});
});
