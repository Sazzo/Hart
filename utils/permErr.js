const Discord = require('discord.js')
const config = require('../config.json')
// Permissão: OwnerID
module.exports.ownerperm = (message) => {
	const embed = new Discord.RichEmbed()
    .setTitle("HART - Sem permissão")
    .setTimestamp()
    .setColor(0x00AE86)
    .setDescription("Apenas o dono do bot pode usar este comando.")
    .addField("Permissão requerida:",
    			"ID do Dono")
    message.channel.send({embed});
}
