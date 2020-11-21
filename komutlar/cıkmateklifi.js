const Discord = require('discord.js');
exports.run = function(client, message, args) {
    let dmkisi = message.mentions.users.first();
    if (!dmkisi) return message.channel.send('**Çıkma Teklif Edeceğin Kişiyi Seçmelisin**');
    let dm = args.slice(1).join(' ');
    const dmat = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTimestamp()
.setThumbnail(client.user.avatarURL)
    .setTitle('Biri Sana Çıkma Teklifi Etti!:heart:')
    .addField('Teklif Eden Kişi :', `-> <@${message.author.id}>`)
    .setFooter('Çıkma Teklifi | Willy')
    dmkisi.sendEmbed(dmat);
    let zaaaa = new Discord.RichEmbed()
    .setColor('#003366')
    .setTimestamp()
    .setTitle('Çıkma Teklifi Ettin :white_check_mark:')
    .setFooter('Çıkma Teklifi | Willy')
    message.channel.sendEmbed(zaaaa);
    
        message.channel.send('Teklif gönderildi Allah mutlu mesut etsin ;)');
    };


exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["çıkmateklifet"],
  permLevel: 0
};

exports.help = {
  name: 'çıkma',
  description: 'Özel komut.',
  usage: 'çıkma-teklifi-et'
};