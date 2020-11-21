const Discord = require('discord.js');
exports.run = async (client, message, args) => {
 let icon = message.guild.iconURL;
       let dateformat = require('dateformat');
    let region = {
      "brazil": "Brezilya",
"eu-central": "Orta Avrupa",
      "Singapur": "Singapur",
      "london": "Londra",
      "rusya": "Rusya",
      "japonya": "Japonya",
      "hongkong": "Hongkong",
      "sydney": "Sidney",
      "us-central": "ABD Merkez",
      "us-east": "ABD Doğu",
      "us-south": "ABD Güney",
      "us-west": "ABD Batı",
      "eu-west": "Batı Avrupa",
      "europe": "Avrupa"
    }
    
   
    let member = message.guild.members;
    let offline = member.filter(m => m.user.presence.status === "offline").size,
        online = member.filter(m => m.user.presence.status === "online").size,
        idle = member.filter(m => m.user.presence.status === "idle").size,
        dnd = member.filter(m => m.user.presence.status === "dnd").size,
        robot = member.filter(m => m.user.bot).size,
        total = message.guild.memberCount;
    
   
    let channels = message.guild.channels;
    let text = channels.filter(r => r.type === "text").size,
        vc = channels.filter(r => r.type === "voice").size,
        category = channels.filter(r => r.type === "category").size,
        totalchan = channels.size;
    
  
    let location = region[message.guild.region];
    

    let x = Date.now() - message.guild.createdAt;
    let h = Math.floor(x / 86400000)
    let created = dateformat(message.guild.createdAt); 
    
    const embed = new Discord.RichEmbed()
    .setColor(0x7289DA)
    .setTimestamp(new Date())
    .setThumbnail(icon)
    .setAuthor(message.guild.name, icon)
    .setDescription(`**ID:** ${message.guild.id}`)
    .addField("Sunucu bölgesi", location)
    .addField("Oluşturulma tarihi", `${created} \nYani **${h}** gün önce kurulmuş.`)
    .addField("Sunucu sahibi", `**${message.guild.owner.user.tag}** \n\`${message.guild.owner.user.id}\``)
    .addField(`Üyeler [${total}]`, `Çevrimiçi: ${online} \nBoşta: ${idle} \nRahatsız etmeyin: ${dnd} \nÇevrımdışı: ${offline} \nBotlar: ${robot}`)
    .addField(`Kanallar [${totalchan}]`, `Yazı: ${text} \nSesli: ${vc} \nKategori: ${category}`)
    message.channel.send(embed);
  
}



exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sb"],
  permLevel: 0
};

exports.help = {
  name: 'sunucubilgi',
  description: '',
  usage: ''
};