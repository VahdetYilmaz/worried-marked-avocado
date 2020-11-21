const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

let botid = (ayarlar.id)

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        .setAuthor(`${client.user.username} `, client.user.avatarURL)
        .setColor('0x36393E')
        .setTitle(`${client.user.username} - Komutlar`)
        .setDescription(`
<a:rainbowleft:711698731904532510> **${ayarlar.prefix}ᴏᴛᴏᴛᴀɢ: sᴜɴᴜᴄᴜʏᴀ ɢɪʀᴇɴ ᴋɪsɪʟᴇʀ ɪᴄɪɴ ᴏᴛᴏ ᴛᴀɢ ᴠᴇʀɪʀ. 
<a:rainbowleft:711698731904532510> **${ayarlar.prefix}ᴄɪᴋɪs-ᴍᴇsᴀᴊ-ᴀʏᴀʀʟᴀ: ᴄɪᴋɪs ᴍᴇsᴀᴊɪɴɪ ᴅᴇɢɪsᴛɪʀᴍᴇɴɪᴢɪ sᴀɢʟᴀʀ. 
<a:rainbowleft:711698731904532510> **${ayarlar.prefix}sᴀ-ᴀs: sᴀ-ᴀs ᴀʏᴀʀʟᴀʀ. 
<a:rainbowleft:711698731904532510> **${ayarlar.prefix}sᴀʏᴀᴄ: sᴀʏᴀᴄ <sᴀʏɪ> <#ᴋᴀɴᴀʟ> 
<a:rainbowleft:711698731904532510> **${ayarlar.prefix}ᴏᴛᴏʀᴏʟ: sᴜɴᴜᴄᴜʏᴀ ɢɪʀᴇɴʟᴇʀᴇ ᴠᴇʀɪʟᴇᴄᴇᴋ ᴏʟᴀɴ ᴏᴛᴏʀᴏʟᴜ ᴀʏᴀʀʟᴀʀ. 
<a:rainbowleft:711698731904532510> **${ayarlar.prefix}ᴋᴀᴘᴀᴛᴏᴛᴏʀᴏʟ: ᴏᴛᴏʀᴏʟ ᴋᴀᴘᴀᴛᴍᴀ ɪsᴇ ʏᴀʀᴀʀ. 
<a:rainbowleft:711698731904532510> **${ayarlar.prefix}ᴏʏʟᴀᴍᴀ-ᴋᴀɴᴀʟ: ᴏʏʟᴀᴍᴀ ᴋᴀɴᴀʟɪɴɪ sᴇᴄᴍᴇɴɪᴢᴇ ʏᴀʀᴀʀ. 
<a:rainbowleft:711698731904532510> **${ayarlar.prefix}ᴅᴜʏᴜʀᴜ-ᴋᴀɴᴀʟ-ᴀʏᴀʀʟᴀ: ᴅᴜʏᴜʀᴜ ᴋᴀɴᴀʟɪɴɪ ʙᴇʟɪʀʟᴇʀ.
<a:rainbowleft:711698731904532510> **${ayarlar.prefix}ɢɪʀɪsᴍᴇsᴀᴊ: ɢɪʀɪs ᴍᴇsᴀᴊɪɴɪ ᴀʏᴀʀʟᴀʀ. (ᴋᴜʟʟᴀɴɪᴄɪ ɪsᴍɪɴɪɴ ɢᴇʟᴇᴄᴇɢɪ ʏᴇʀᴇ "-ᴋᴜʟʟᴀɴɪᴄɪ-", sᴜɴᴜᴄᴜ ɪsᴍɪɴɪɴ ɢᴇʟᴇᴄᴇɢɪ ʏᴇʀᴇ "-sᴜɴᴜᴄᴜ-" ʏᴀᴢɪɴɪᴢ. 
<a:rainbowleft:711698731904532510> **${ayarlar.prefix}ᴄɪᴋɪsᴍᴇsᴀᴊ: ᴄɪᴋɪs ᴍᴇsᴀᴊɪɴɪ ᴀʏᴀʀʟᴀʀ. (ᴋᴜʟʟᴀɴɪᴄɪ ɪsᴍɪɴɪɴ ɢᴇʟᴇᴄᴇɢɪ ʏᴇʀᴇ "-ᴋᴜʟʟᴀɴɪᴄɪ-", sᴜɴᴜᴄᴜ ɪsᴍɪɴɪɴ ɢᴇʟᴇᴄᴇɢɪ ʏᴇʀᴇ "-sᴜɴᴜᴄᴜ-" ʏᴀᴢɪɴɪᴢ. 
<a:rainbowleft:711698731904532510> **${ayarlar.prefix}ᴏᴢᴇʟ-ɢᴏʀᴜsᴜʀᴜᴢ-ᴀʏᴀʀʟᴀ: sᴜɴᴜᴄᴜᴅᴀɴ ᴀʏʀɪʟᴀɴ ᴋɪsɪʏᴇ ᴏᴢᴇʟᴅᴇɴ ɢᴏɴᴅᴇʀɪʟᴇᴄᴇᴋ ᴍᴇsᴀᴊɪ ᴀʏᴀʀʟᴀʀ. (ᴋᴜʟʟᴀɴɪᴄɪ ɪsᴍɪɴɪɴ ɢᴇʟᴇᴄᴇɢɪ ʏᴇʀᴇ "-ᴋᴜʟʟᴀɴɪᴄɪ-", sᴜɴᴜᴄᴜ ɪsᴍɪɴɪɴ ɢᴇʟᴇᴄᴇɢɪ ʏᴇʀᴇ "-sᴜɴᴜᴄᴜ-" ʏᴀᴢɪɴɪᴢ. 
<a:rainbowleft:711698731904532510> **${ayarlar.prefix}ᴏᴢᴇʟ-ʜᴏsɢᴇʟᴅɪɴ-ᴀʏᴀʀʟᴀ: sᴜɴᴜᴄᴜʏᴀ ɢɪʀᴇɴ ᴋɪsɪʏᴇ ᴏᴢᴇʟᴅᴇɴ ɢᴏɴᴅᴇʀɪʟᴇᴄᴇᴋ ᴍᴇsᴀᴊɪ ᴀʏᴀʀʟᴀʀ. (ᴋᴜʟʟᴀɴɪᴄɪ ɪsᴍɪɴɪɴ ɢᴇʟᴇᴄᴇɢɪ ʏᴇʀᴇ "-ᴋᴜʟʟᴀɴɪᴄɪ-", sᴜɴᴜᴄᴜ ɪsᴍɪɴɪɴ ɢᴇʟᴇᴄᴇɢɪ ʏᴇʀᴇ "-sᴜɴᴜᴄᴜ-" ʏᴀᴢɪɴɪᴢ. 
<a:rainbowleft:711698731904532510> **${ayarlar.prefix}ᴍᴏᴅ-ʟᴏɢ-ᴀʏᴀʀʟᴀ: ᴍᴏᴅᴇʀᴀsʏᴏɴ ᴋᴀʏɪᴛʟᴀʀɪ ᴋᴀɴᴀʟɪɴɪ ᴀʏᴀʀʟᴀʀ. 
<a:rainbowleft:711698731904532510> **${ayarlar.prefix}hg: ʀᴇsɪᴍʟɪ ʜɢ ᴋᴀɴᴀʟɪɴɪ ʙᴇʟɪʀʟᴇʀ. 
<a:rainbowleft:711698731904532510> **${ayarlar.prefix}ʙᴀɴ: ɪsᴛᴇᴅɪɢɪɴɪᴢ ᴋɪsɪʏɪ ʙᴀɴʟᴀʀ. 
<a:rainbowleft:711698731904532510> **${ayarlar.prefix}ᴅᴜʏᴜʀᴜ: ᴅᴜʏᴜʀᴜ sɪsᴛᴇᴍɪ. 
<a:rainbowleft:711698731904532510> **${ayarlar.prefix}ʟɪɴᴋ-ᴇɴɢᴇʟʟᴇ: ʟɪɴᴋ ᴇɴɢᴇʟʟᴇᴍᴇ sɪsᴛᴇᴍɪɴɪ ᴀᴄɪᴘ ᴋᴀᴘᴀᴛᴍᴀɴɪᴢɪ sᴀɢʟᴀʀ. 
<a:rainbowleft:711698731904532510> **${ayarlar.prefix}sᴜɴᴜᴄᴜ-ᴋᴜʀ: ʙᴜʟᴜɴᴜʟᴀɴ sᴜɴᴜᴄᴜ ɪᴄɪɴ ɢᴇʀᴇᴋʟɪ ᴋᴀɴᴀʟʟᴀʀɪ ᴏʟᴜsᴛᴜʀᴜʀ. 
<a:rainbowleft:711698731904532510> **${ayarlar.prefix}ʟᴏɢ-ᴀʏᴀʀʟᴀ: ʟᴏɢ ᴋᴀɴᴀʟɪ ᴀʏᴀʀʟᴀsɪɴɪᴢ. 
<a:rainbowleft:711698731904532510> **${ayarlar.prefix}ʀᴇᴋʟᴀᴍ-ᴛᴀʀᴀᴍᴀsɪ: ᴋᴜʟʟᴀɴɪᴄɪʟᴀʀɪɴ ᴏʏɴᴜʏᴏʀ ᴍᴇsᴀᴊɪɴᴅᴀᴋɪ ᴠᴇ ᴋᴜʟʟᴀɴɪᴄɪ ᴀᴅʟᴀʀɪɴᴅᴀᴋɪ ʀᴇᴋʟᴀᴍʟᴀʀɪ ᴛᴀʀᴀʀ. 
<a:rainbowleft:711698731904532510> **${ayarlar.prefix}küfür-engel: Küfür Engeli Açarsınız. 
<a:rainbowleft:711698731904532510> **${ayarlar.prefix}güvenlik #kanal: Güvenlik Kanalını Belirlersiniz. 
\n`)  
        .setThumbnail(client.user.avatarURL)
        .addField(`» Linkler`, `[Bot Davet Linki](https://discord.com/oauth2/authorize?client_id=${botid}&scope=bot&permissions=8) **|** [Destek Sunucusu](https://discord.gg/nhQaBqm) **|** [Bota Oy ver]() **|** [Web Sitesi](https://www.vahdetlol.ml/) **|** [Youtube Kanalı](https://is.gd/FzImrL)`)//websiteniz yoksa  **|** [Web Sitesi]() yeri silebilirsiniz
        .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.avatarURL)
        .setImage("https://media.discordapp.net/attachments/739031673018122242/776476488882454528/standard.gif")  //https://i.hizliresim.com/SCUndG.gif
    return message.channel.sendEmbed(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['help'],
  permLevel: 0,
};

exports.help = {
  name: 'yetkili',
  description: '',
  usage: ''
};