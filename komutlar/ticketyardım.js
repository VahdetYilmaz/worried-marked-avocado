const Discord = require('discord.js');
const data = require('quick.db')

exports.run = async (client, message, args) => {
const ayarlar = require('../ayarlar.json');
  
if(!args[0]) {
  
const embed = new Discord.RichEmbed()
.setColor('GREEN')
.addField(`Yardım Menüsü`, `\`${ayarlar.prefix}yardım komutlar\` - Komutlar hakkında bilgi verir.`)

message.channel.send(embed)  }

if(args[0] === 'komutlar') {
  
const embed = new Discord.RichEmbed()
.setColor('GREEN')
.setDescription(`() = Tercih.
[] = Gerekli.`)
.addField(`==================================
Ticket Commands
==================================

\`${ayarlar.prefix}ekle [Etiket] (kanal)\``, `*Açıklama: Ticket a başka birisini/rolü eklersiniz.
Ekstra kullanım: Bulunmuyor.*`)

.addField(`\`${ayarlar.prefix}sil [Etiket] (kanal)\``, `*Açıklama: Ticket a ekli birisini/rolü silersiniz.
Ekstra kullanım: $kaldır*`)

.addField(`\`${ayarlar.prefix}kapat [Etiket] (kanal)\``, `*Açıklama: Ticket ı kapatırsınız.
Ekstra kullanım: Bulunmuyor.*`)

.addField(`\`${ayarlar.prefix}aç [Etiket] (kanal)\``, `*Açıklama: Ticket ı açarsınız.
Ekstra kullanım: Bulunmuyor.*`)

.addField(`\`${ayarlar.prefix}bilet-sil \``, `*Açıklama: Ticket ı silersiniz.
Ekstra kullanım: Bulunmuyor.*`)

.addField(`\`${ayarlar.prefix}ping [gönder])\``, `*Açıklama: Botun pingini gösterir.
Ekstra kullanım: Bulunmuyor.*`)

.addField(`\`${ayarlar.prefix}ticket-kanal [ayarla/sıfırla] (kanal)\``, `*Açıklama: Ticket mesajının kanalını ayarlarsınız.
Ekstra kullanım: Bulunmuyor.*`)

.addField(`\`${ayarlar.prefix}ticket [gönder])\``, `*Açıklama: Ticket mesajını yollar.
Ekstra kullanım: Bulunmuyor.*`)
message.channel.send(embed)  }  

  
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'ticket-yardım'
};