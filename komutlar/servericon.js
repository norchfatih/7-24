const Discord = require('discord.js');


exports.run = function(client, message) {
    
    const embed = new Discord.RichEmbed()
        .setDescription("**SUNUCU ICONU**")
        .setImage(message.guild.iconURL)

    message.channel.send(embed);

};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ['servericon'], 
  permLevel: 0 
};

exports.help = {
  name: 'servericon', 
  description: 'serverın simgesini gösterir', 
  usage: 'servericon' 
};
