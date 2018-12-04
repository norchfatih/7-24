const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = async (client, message) => {
  const davet = new Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor("» " + client.user.username + ' | Davet Linkleri')
.setDescription(`[Botu Sunucuna Eklemek İçin Tıkla!](https://discordapp.com/oauth2/authorize?client_id=497746969888817162&scope=bot&permissions=8) \n[Botun Destek Sunucusuna Gelmek İçin Tıkla](https://discord.gg/SHcF63x)`)
message.channel.send(davet)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['linkler'],
  permLevel: `Yetki gerekmiyor.`
};

exports.help = {
  name: 'davet',
  category: 'bot',
  description: 'Botun davet linklerini gösterir.',
  usage: 'dr!davet'
};