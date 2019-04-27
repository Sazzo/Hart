module.exports = async (client) => {
const config = require("../config.json")
// Database

const playings = [
	`Ajudando o SIEGHART!`,
	"Farmando RAP",
	"HART - 1.0.0",
	"Fui criado por sazz!",
	"Tentando não fazer cagada",
	"Banindo babacas",
	"Divertindo o Discord",
	"Não estou funcionando? Tente usar s!ping",
	"Deseja um café?"

]
console.log(`Estou online senhorito!`);
setInterval(function() {
const playing = Math.floor(Math.random() * (playings.length - 1) + 1);
 client.user.setActivity(playings[playing]);

	}, 10000);



}