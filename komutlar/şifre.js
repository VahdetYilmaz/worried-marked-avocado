const Discord = require('discord.js');
const generator = require('generate-password');


exports.run = function(client, message, args) {
    var uzunluk = args.slice(0).join(' ');

    if (!uzunluk) return message.reply('Bir uzunluk belirt. **Doğru Kullanım**: w!şifre <uzunluk>')



    var password = generator.generate({
        length: uzunluk,
        numbers: true,
    })
  const premium = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle("Şifreniz")
    .setDescription(password)
    .setFooter(`${client.user.username}`, client.user.avatarURL);
      message.author.sendEmbed(premium);
};  

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'şifre', 
  description: 'Rastgele bir şifre oluşturur.',
  usage: 'şifre <uzunluk>'
};
