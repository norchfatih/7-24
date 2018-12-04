const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("**Komutlar**")
  .setTimestamp()
  .setDescription('')
  .setColor('RANDOM')
  .addField("**» Eğlence Komutları**", prefix + `eğlence-komutları`)
  .addField("**» Kullanıcı Komutları**", prefix + `kullanıcı-komutları`)
  .addField("**» Yetkili Komutları**", prefix + `yetkili-komutları`)
  .addField("**» Botun Ana Komutları**", prefix + `ana-komutlar`)
  .addField("**» Ayar Komutları**", prefix + `ayar-komutları`)
  .setFooter('Dragon', client.user.avatarURL)
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'help', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};