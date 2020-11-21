const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
const fs = require("fs");
exports.run = (client, message, params, args) => {
  var Random = [
    `Walker Wayne DAVET`,
 
  ];
let id = ayarlar.id
  var pre = Math.floor(Math.random() * Random.length);
 
      const ozelmesajkontrol = new Discord.RichEmbed()
      .setColor(0x00ae86)
      .setTimestamp()
      .setAuthor(message.author.username, message.author.avatarURL)
      .setDescription("Dm`ni Kontrol Edermisin ?:postbox:");
    message.channel.sendEmbed(ozelmesajkontrol);
  
  const premium = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle("Walker Wayne Davet")
    .setDescription(`[Davet Linkim](https://discord.com/oauth2/authorize?client_id=$756966543275065475&scope=bot&permissions=8)`)
    .setFooter(`${client.user.username}`, client.user.avatarURL);
  return message.author.sendEmbed(premium);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori: "Kullanıcı"
};

exports.help = {
  name: "davet",
  description: "Pre Al",
  usage: "Minecraft Premium Alırsınoz",
  kategori: "Kullanıcı"
};