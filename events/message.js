 // Database
module.exports = async (client, message, err, user) => {
 const config = require('../config.json')

    
      // Vai ignorar todos os bots.
  if (message.author.bot) return;

  // Vai ignorar todo prefixo que não está setado na config
  if (message.content.indexOf(config.prefix) !== 0) return;


  // Uma pequena defenição de comandos com argumentos
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  // Pega a data dos comandos
  const cmd = client.commands.get(command);

  // Se o comando não exist, vai sair em silencio
  if (!cmd) return message.channel.send("Este comando não existe.");

  // E finalmente vai rodar o comando!
  cmd.run(client, message, args);

    };
  