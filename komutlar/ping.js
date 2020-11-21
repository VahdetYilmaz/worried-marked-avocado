const Discord = require('discord.js');
module.exports.run = async (client, msg, args) => {
    let Ottoman = new Discord.RichEmbed()
        .setColor("RED")
        .setDescription(`Uzayla Bağlantı Kuruluyor...`)
        .setTimestamp()
    const message = msg
    const m = await msg.channel.send(Ottoman);
    let EGGaming = new Discord.RichEmbed()
        .setColor("#00ff5f")
        .addField(`Mesaj Gecikme Süresi`, `${m.createdTimestamp - msg.createdTimestamp}:ms: `, true)
        .addField(`Bot Gecikme Süresi`, `${Math.round(client.ping)}:ms: `, true)
        .setAuthor(client.user.username, client.user.avatarURL)
    m.edit({ EGGaming });
}
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["ping"],
  permLevel: 0
};

module.exports.help = {
  name: 'ping',
  description: '',
  usage: 'ping'
};