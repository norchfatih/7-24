const Discord = require('discord.js')

exports.run = (client, message, args) => {
  if (message.author.id != "302778842148241409") return message.channel.send("Bunun için iznin yok");

  let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.channel.send('Birşey Yazmalısınız');

  message.delete();

  console.log(`Duyuru: "${message.author.username}#${message.author.discriminator}" "${mesaj}"`);

      const mesajat = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setDescription('' + mesaj + '')

      client.users.forEach(u => {
u.sendEmbed(mesajat)
})

message.channel.send(`✅ Mesaj başarıyla **` + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + `** kullanıcıya gönderildi.`);

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['dr!duyuru'],
  permLevel: 4
};

exports.help = {
  name: 'duyuru',
  description: 'İstediğiniz şeyi bota duyurtur.',
  usage: 'duyuru'
};
