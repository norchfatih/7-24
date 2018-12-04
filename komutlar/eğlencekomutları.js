const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("**Komutlar**")
  .setTimestamp()
  .setDescription('')
  .setColor('RANDOM')
  .addField("**» Eğlence Komutları**", prefix + `eğlence-komutları`,"dr!korkut","dr!coolresim","dr!8ball","dr!alkış","dr!ateş-et","dr!emojiyazı","dr!espri","dr!hackle","dr!hesapla","dr!inek","dr!kuyumcu","dr!mcödül","dr!pokedex","dr!rastgele-renk","dr!saat","dr!simit","dr!slots","dr!sor","dr!stresçarkı","dr!şifre","dr!tarih","dr!windows","dr!woodie","dr!wwe-gif","dr!yazı-tura")
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
  aliases: ['eğlence-komutları'],
  permLevel: 0
};

exports.help = {
  name: 'eğlencekomutları',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};