exports.run = async (client, message, args) => { 
  const Discord = require('discord.js')
	const config = require('../config.json')
	const permErr = require("../utils/permErr.js")
  const request = require('request')

  const botm = message.guild.roles.find(role => role.name === "HARTManager");

    function clean (text) {
        if (typeof(text) === "string")
          return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
        else
            return text;
        }

      if (!message.member.roles.has(botm.id))
    return permErr.ownerperm(message)


    try {
      const code = args.join(" ");
      let evaled = eval(code);
 
      if (typeof evaled !== "string") evaled = require("util").inspect(evaled);
 
      message.channel.send(clean(evaled), {code:"js"});
    } catch (err) {
      message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
};