exports.run = (client, message, args, [mention, ...reason]) => {
	const modRole = message.guild.roles.find(role => role.name === "Moderador");
  const fancyReasons = {
    nsfw: 'Que tal você parar de ser idiota e ver coisas feias? Eu duvido que você chegue na sua mãe e fale: *~Mãe, eu vejo coisas pra maiores de 18 anos!*, provavelmente ela não iria gostar de ouvir isso de sua filho, e pior ainda se você espalha esse tipo de conteúdo pra as pessoas que não o desejam.',
    raid: 'Você gostaria se alguem fosse na sua casa e quebrasse tudo? Provavelmente não, então para que você ir atacar os servidores dos outros? Tem coisa melhor para fazer não? Você deveria ter VERGONHA de destruir as coisas dos outros, e afinal Raid / Ataque é contra os ToS do Discord e seu banimento pode ser breve.',
    idiot: 'Ser idiota e babaca hein, que legal né? Serio cara, sua mãe não te deu educação não? Ficar xingando os outros, ofendendo, isso é legal para você palhaço? Se alguem te chamasse de vagabundo, lixo na sua propiedade você iria gostar? Vai ter maturidade pequeno pedrinho.',
    div: 'Aqui não é empresa de publicidade palhaço! Nunca vai ter uma pessoa no mundo que vai te ajudar em uma coisa floodando, ofendendo, xingando, volta pra escola amigo.',
  }
    if (!modRole)
    return console.log("O cargo de mod não existe.");

	if (!message.member.roles.has(modRole.id))
    return message.reply("Você não tem permissão para usar esse comando!");

	if (message.mentions.members.size === 0)
    return message.reply("Mencione o membro que deseja banir.");
	
	if (!message.guild.me.hasPermission("BAN_MEMBERS"))
    return message.reply("Eu não consigo banir membros, sem ter a permissão necessaria!");

	const banMember = message.mentions.members.first();

  if (!reason == 'nsfw')
    return banMember.ban(reason.join(fancyReasons.nsfw)).then(member => {
      message.reply(`${member.user.username} foi banido com sucesso do servidor!`);
  });

  if (!reason == 'raid')
    return banMember.ban(reason.join(fancyReasons.raid)).then(member => {
      message.reply(`${member.user.username} foi banido com sucesso do servidor!`);
  });

  if (!reason == 'idiot')
    return banMember.ban(reason.join(fancyReasons.idiot)).then(member => {
      message.reply(`${member.user.username} foi banido com sucesso do servidor!`);
  });

  if (!reason == 'div')
    return banMember.ban(reason.join(fancyReasons.div)).then(member => {
      message.reply(`${member.user.username} foi banido com sucesso do servidor!`);
  });

};
	
exports.help = {
  Nome: 'ban',
  ExemploTitle: 'Ele vai banir um usuario',
  Descrição: 'Vai retirar um membro do servidor para sempre!',
  ExemploDesc: 'AVISO: Ele não vai poder voltar, só se você desbanir ele do servidor.',
  Uso: 'ban [membro] [razão]',
  ExemploUso: 'EX: dy!ban @sazz floodou no chat'
};
