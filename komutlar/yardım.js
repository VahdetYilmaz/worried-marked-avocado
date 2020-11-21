const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

let botid = (ayarlar.id) //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        .setAuthor(`${client.user.username} `, client.user.avatarURL)
        .setColor('0x36393E')
        .setTitle(`${client.user.username} - Komutlar`)
        .setDescription(`
<a:rainbowleft:711698731904532510> **${ayarlar.prefix}yetkili** Yetkili Komutları.
<a:rainbowleft:711698731904532510> **${ayarlar.prefix}kullanıcı** Kullanıcıya Komutları.
<a:rainbowleft:711698731904532510>  **${ayarlar.prefix}eğlence** Eğlence Komutları.
<a:rainbowleft:711698731904532510>  **${ayarlar.prefix}müzik** Müzik Komutları.
<a:rainbowleft:711698731904532510> **${ayarlar.prefix}oyun**  Oyun Komutları Gösterir.
<a:rainbowleft:711698731904532510> **${ayarlar.prefix}seviyeyardım**  Seviye Komutları Gösterir.\n`)  
        .setThumbnail(client.user.avatarURL)
        .addField(`» Linkler`, `[Bot Davet Linki](https://www.vahdetlol.gq/walkerwayne) **|** [Destek Sunucusu](https://www.vahdetlol.gq/vahdetlol) **|** [Bota Oy ver]() **|** [Web Sitesi](https://www.vahdetlol.ml/) **|** [Youtube Kanalı](https://www.vahdetlol.gq/VahdetLol)`)
        .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.avatarURL)
        .setImage("")  //https://i.hizliresim.com/SCUndG.gif
    return message.channel.sendEmbed(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['help'],
  permLevel: 0,
};

exports.help = {
  name: 'yardım',
  description: '',
  usage: ''
};