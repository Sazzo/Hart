const Discord = require("discord.js");
const Enmap = require("enmap");
const fs = require("fs");
const client = new Discord.Client();
const config = require("./config.json"); // SAZZ, NÃO DA UPLOAD NO GITHUB COM O TOKEN NISSO
client.config = config;


// Comandos
fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
    console.log(`Sistema: Evento enviado ${eventName}`)
  });
});

client.commands = new Enmap();
// Eventos
fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Sistema: Enviado ${commandName}`);
    client.commands.set(commandName, props);
  });
});

client.on("guildMemberAdd", member => {
console.log('Alguem entrou manito')
member.send(`Olá "${member.user.username}"! Seja bem vindo ao servidor do **SIEGHART**! \n Para você ter acesso ao total conteúdo do servidor, por favor faça os passos que estão em *#como-verificar* \n\n Esperamos que você se divirta em nosso servidor, e não se esqueça de ler as regras! \n\n Com muito carinho, \n A equipe do servidor. `);
});


// login
client.login(config.token)