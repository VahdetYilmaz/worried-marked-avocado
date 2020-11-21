const Discord = require('discord.js');
const data = require('quick.db')
const ms = require('ms')

exports.run = async (client, message, args) => {
  
  function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
}

    function destructMS(milli) {
        if (isNaN(milli) || milli < 0) {
          return null;
        }
      
        var d, h, m, s;
        s = Math.floor(milli / 1000);
        m = Math.floor(s / 60);
        s = s % 60;
        h = Math.floor(m / 60);
        m = m % 60;
        d = Math.floor(h / 24);
        h = h % 24;
        var yazi;
        if (d !== 0) yazi = `${d} gün`;
        if (h !== 0 && yazi) yazi = yazi + `, ${h} saat`;
        if (h !== 0 && !yazi) yazi = `${h} saat`;
        if (m !== 0 && yazi) yazi = yazi + `, ${m} dakika`;
        if (m !== 0 && !yazi) yazi = `${m} dakika`;
        if (s !== 0 && yazi) yazi = yazi + `, ${s} saniye`;
        if (s !== 0 && !yazi) yazi = `${s} saniye`;
        if (yazi) return yazi;
        if (!yazi) return `1 saniye`;
      };
  
  let ödül = []
  let kanal = []
  let zaman = []
  
if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(`Gerekli yetkiye sahip değilsin.`)
if(!args[0]) return message.channel.send(`<a:RainbowiekGif:714416212431339594> | Bir argüman girmelisin: v!çekiliş başlat/tekrar | <a:RainbowiekGif:714416212431339594>`)
let arg = ['başlat', 'tekrar']
if(!arg.includes(args[0])) return message.channel.send(`**Sadece v!çekiliş başlat/tekrar kullanabilirsin.**`)
  
if(args[0] === 'başlat') {
try {
  
const filter = m => m.author.id == message.author.id;
     
message.channel.send(`<a:RainbowiekGif:714416212431339594> **| Önce bir ödül yazmalısın. |** <a:RainbowiekGif:714416212431339594>`).then(() => {
  
message.channel.awaitMessages(filter, { maxMatches: 1, time: 60000, errors: ['time'] }).then(collected => {
message.channel.send(`<a:RainbowiekGif:714416212431339594> **| Ödül:** *${collected.first().content}*`).then(() => ödül.push(collected.first().content))
message.delete()

message.channel.send(`<a:RainbowiekGif:714416212431339594> **| Çekiliş hangi kanalda yapılacak? | <a:RainbowiekGif:714416212431339594>**`).then(() => {
message.channel.awaitMessages(filter, { maxMatches: 1, time: 60000, errors: ['time'] }).then(collected => {
let as = collected.first().content.replace('<#', '').replace('>', '')
let ch = message.guild.channels.get(as)
if(!ch) return message.channel.send(`<a:ReddetmekGif:714416254206607410> **| Etiketlediğin kanalı bulamadım, işlem iptal edildi.**`)
message.delete()
message.channel.send(`<a:RainbowiekGif:714416212431339594> **| Kanal:** ${ch}`).then(() => kanal.push(ch.id))
  
message.channel.send(`<a:RainbowiekGif:714416212431339594> **|** *Çekiliş süresi ne kadar?* **(1s/1m/1h/1d/1w)**`).then(() => {
message.channel.awaitMessages(filter, { maxMatches: 1, time: 60000, errors: ['time'] }).then(collected => {
let az = collected.first().content;

message.channel.send(`Süre: ${az}`).then(() => zaman.push(collected.first().content)).then(()=> {
  const sure = zaman.slice(0).join(' ')
    const bitecegizamanms = Date.now() + ms(sure.replace(' dakika', 'm').replace(' saat', 'h').replace(' saniye', 's').replace(' gün', 'd').replace(' hafta', 'w'))

  
    const embed = new Discord.RichEmbed()
  .setAuthor(client.user.username, client.user.avatarURL)
  .setTimestamp()
  .setFooter(`Çekiliş Sistemi`)
  .setDescription(`<a:RainbowiekGif:714416212431339594> **| Ödül**: ${ödül.slice(0).join(' ')}

*Başlatan:* **${message.author.username}**
*Zaman:* **${sure}**

Katılmak için 🎉 tepkisine tıklayın.`)
  .setTitle(`Bir çekiliş başladı!`)
message.guild.channels.get(kanal[0]).send(embed).then(async c => {
message.delete()
data.delete(`çk.${c.id}`)
data.delete(`ödü.${c.id}`)
data.delete(`ma.${c.id}`)
c.react('🎉').then(async reaction => {
const interval = setInterval(async function(){
const kalanzaman = bitecegizamanms - Date.now()   

if (kalanzaman <= 0) {
clearInterval(interval)
const kişiler = reaction.users
await sleep(50)
const embed = new Discord.RichEmbed()
  .setAuthor(client.user.username, client.user.avatarURL)
  .setTimestamp()
  .setFooter(`Çekiliş Sistemi`)
  .setDescription(`<a:RainbowiekGif:714416212431339594> **| Ödül**: ${ödül.slice(0).join(' ')}

*Başlatan:* **${message.author.username}**`)
.setTimestamp(bitecegizamanms)
  .setTitle(`Çekiliş bitti!`)
c.edit(embed)

let asd = c.reactions.get(`🎉`).users.random()
message.guild.channels.get(kanal[0]).send(`*Tebrikler, ${asd}! Bizden **${ödül[0]}** kazandın.*
*Ödülünü alabilmek için:* **${message.author.tag}** *kişisine ulaş.*`)
data.set(`çk.${c.id}`, 'vahdetlol')
data.set(`ma.${c.id}`, message.author)
data.set(`ödü.${c.id}`, ödül.slice(0).join(' '))
} else {
const kalanzamanyazi = destructMS(kalanzaman)
embed.setDescription(`**Ödül**: ${ödül.slice(0).join(' ')}

*Başlatan:* **${message.author.username}**
*Kalan zaman:* **${kalanzamanyazi}**

Katılmak için 🎉 tepkisine tıklayın.`)
c.edit(embed)
                }
}, 5000)
  
})

})








})
}).catch(collected => { message.channel.send(`<a:ReddetmekGif:714416254206607410> **| Çekiliş süresi girmediğin için iptal edildi.**`); });
})
}).catch(collected => { message.channel.send(`<a:ReddetmekGif:714416254206607410> **| Çekiliş kanalı girmediğin için iptal edildi.**`); });
})
}).catch(collected => { message.channel.send(`<a:ReddetmekGif:714416254206607410> **| Çekiliş ödülü girmediğin için iptal edildi.**`); });
})

  
} catch(err) { return; }    
}
  
if(args[0] === 'tekrar') {
let channel = message.mentions.channels.first()
if(!args[1]) return message.channel.send(`<a:RainbowiekGif:714416212431339594> | Çekilişin yapıldığı kanalı etiketle. | <a:RainbowiekGif:714416212431339594>`)
if(!channel) return message.channel.send(`<a:ReddetmekGif:714416254206607410> **| Etiktlediğin kanalı bulamıyorum.**`)

let mesaj = args[2]
if(!mesaj) return message.channel.send(`<a:ReddetmekGif:714416254206607410> **| Bir mesaj ID'si girmeyi unuttun.**`)
if(isNaN(mesaj)) return message.channel.send(`<a:ReddetmekGif:714416254206607410> **| Bir mesaj ID'si girmelisin.**`)

let asd = channel.fetchMessage(mesaj).then(async msg => {
const ads = await data.fetch(`çk.${msg.id}`)
const ödü = await data.fetch(`ödü.${msg.id}`)
const ma = await data.fetch(`ma.${msg.id}`)
if(!ads) return message.channel.send(`<a:ReddetmekGif:714416254206607410> **| Hala bitmemiş olan veya çekiliş mesajı olmayan bir mesajın ID'sini girdin.**`)
let asdd = msg.reactions.get(`🎉`).users.random()
let arc = msg.reactions.get(`🎉`);
if(!arc) return message.channel.send(`<a:ReddetmekGif:714416254206607410> **| Bu mesaja kimse tepki vermemiş. | <a:ReddetmekGif:714416254206607410> **`)
channel.send(`*Tebrikler, ${asdd}! Bizden **${ödü}** kazandın.*
*Ödülünü alabilmek için: **${client.users.get(ma)}** kişisine ulaş.*`)
})}
  
  
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'çekiliş'
};