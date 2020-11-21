const express = require('express');
const app = express();
const http = require('http');
    app.get("/", (request, response) => {
    console.log(`Bot Başarıyla Hostlandı.`);
    response.sendStatus(200);
    });
    app.listen(process.env.PORT);
    setInterval(() => {
    http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
    }, 280000);

const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const moment = require('moment');
var Jimp = require('jimp');
const { Client, Util } = require('discord.js');
const weather = require('weather-js')
const fs = require('fs');
const db = require('quick.db');
require('./util/eventLoader.js')(client);
const path = require('path');
const request = require('request');
const snekfetch = require('snekfetch');
const queue = new Map();
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');

var prefix = ayarlar.prefix;

const log = message => {
    console.log(`${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
    if (err) console.error(err);
    log(`${files.length} komut yüklenecek.`);
    files.forEach(f => {
        let props = require(`./komutlar/${f}`);
        log(`Yüklenen komut: ${props.help.name}.`);
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
        });
    });
});




client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./komutlar/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};




client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.elevation = message => {
    if (!message.guild) {
        return;
    }
    let permlvl = 0;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === ayarlar.sahip) permlvl = 4;
    return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
    console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
    console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(ayarlar.token);

//-----------------------KOMUTLAR-----------------------\\
client.on("message", async msg => {
const request = require('node-superfetch');
const db = require('quick.db');
const ms = require('parse-ms')
let timeout = 1200000//süresini dilediğiniz gibi kısaltabilirsiniz.
let dakdest = await db.fetch(`goldzzz_${msg.author.id}`);
let i = ayarlar.sahip
          if (msg.author.id == i) {
    if (dakdest !== null && timeout - (Date.now() - dakdest) > 0) {
        let time = ms(timeout - (Date.now() - dakdest));
    } else {
  if(msg.author.bot) return;   
  if (msg.content.length > 1) {
db.set(`goldzzz_${msg.author.id}`, Date.now());
  var embed = new Discord.RichEmbed()
  .setDescription(`<a:RainbowiekGif:714416212431339594>İşte benim Sahibim **<@${msg.author.id}>** Burada Aç Yolu!<a:SabitGif:714416499233652758>`)
  .setColor("BLUE")
   msg.channel.send(embed)
  }
};
          }
   else if (i == undefined) {           
          }
          if (!i) return;
        
});

client.on("guildMemberAdd", async member => {
let techno = client.channels.get("775167057397547029"); 
techno.setName(`Son Üye • ${member.user.username}`)
})
//////////////////
client.on('guildDelete', guild => {
let technoembed = new Discord.RichEmbed()
.setColor("RED")
.setTitle("Bot Atıldı")
.setDescription(`
Sunucu Adı: ${guild.name}
\n Sunucu Sahibi: ${guild.owner} 
\nSunucu Kişi Sayısı: ${guild.memberCount} \n <a:rainbowleft:711698731904532510> Sunucu Doğrulama Seviyesi ${guild.verificationLevel}  `)  
client.channels.get('713040779043537066').send(technoembed);  
});

// Bot Eklendi
client.on('guildCreate', guild => {
let technoembed = new Discord.RichEmbed()
.setColor("GREEN")
.setTitle("Bot Eklendi")
.setDescription(`<a:rainbowleft:711698731904532510> Sunucu Adı: ${guild.name}\n<a:rainbowleft:711698731904532510> Sunucu Sahibi: ${guild.owner}\n<a:rainbowleft:711698731904532510> Sunucu Kişi Sayısı: ${guild.memberCount} \n <a:rainbowleft:711698731904532510> Sunucu Doğrulama Seviyesi ${guild.verificationLevel}  `)  
   client.channels.get('713040779043537066').send(technoembed);
  
});


client.on("message", async message => {
  const ms = require("ms");
  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  const command = args.shift().toLowerCase();
  let u = message.mentions.users.first() || message.author;
  if (command === "normal-sunucu-kur") {
    if (
      message.guild.channels.find(channel => channel.name === "Bot Kullanımı")
    )
      return message.channel.send(" Bot Paneli Zaten Ayarlanmış.");
    message.channel.send(
      `Bot Bilgi Kanallarının kurulumu başlatılsın mı? Başlatılacak ise **evet** yazınız.`
    );
    if (!message.member.hasPermission("Yönetici"))
      if (message.author.id !== ayarlar.sahip)
        return message.channel.send(
          " Bu Kodu `Yapımcım  Olan Kişi Kullanabilir."
        );
    message.channel
      .awaitMessages(response => response.content === "evet", {
        max: 1,
        time: 10000,
        errors: ["time"]
      })
       .then(collected => {
      message.guild.channels.map(m => m.delete());
        message.guild.createChannel("●▬▬▬▬๑「📢」๑▬▬▬▬●", "category", [
          {
            id: message.guild.id,
            deny: ["SEND_MESSAGES"]
          }
        ]);
      

        message.guild
          .createChannel("「📢」sunucu-duyuru", "text", [
            {
              id: message.guild.id,
              deny: ["SEND_MESSAGES"]
            }
          ])
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "●▬▬▬▬๑「📢」๑▬▬▬▬●"
              )
            )
          );
        message.guild
          .createChannel("「📢」youtube-duyuru", "text", [
            {
              id: message.guild.id,
              deny: ["SEND_MESSAGES"]
            }
          ])
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "●▬▬▬▬๑「📢」๑▬▬▬▬●"
              )
            )
          );
        message.guild
          .createChannel("「🎉」çekiliş", "text", [
            {
              id: message.guild.id,
              deny: ["SEND_MESSAGES"]
            }
          ])
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "●▬▬▬▬๑「📢」๑▬▬▬▬●"
              )
            )
          );
        message.guild.createChannel("●▬▬▬▬๑「💬」๑▬▬▬▬●", "category", [
          {
            id: message.guild.id,
            deny: ["SEND_MESSAGES"]
          }
        ]);
      

        message.guild
          .createChannel("「💬」sohbet", "text", [
            {
              id: message.guild.id,
              deny: ["SEND_MESSAGES"]
            }
          ])
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "●▬▬▬▬๑「💬」๑▬▬▬▬●"
              )
            )
          );
        message.guild
          .createChannel("「📷」galeri", "text", [
            {
              id: message.guild.id,
              deny: ["SEND_MESSAGES"]
            }
          ])
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "●▬▬▬▬๑「💬」๑▬▬▬▬●"
              )
            )
          );
        message.guild
          .createChannel("「🤖」bot-komut", "text", [
            {
              id: message.guild.id,
              deny: ["SEND_MESSAGES"]
            }
          ])
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "●▬▬▬▬๑「💬」๑▬▬▬▬●"
              )
            )
          );
      })
      .then(collected => {
        message.guild.createChannel("●▬▬▬▬๑「💽」๑▬▬▬▬●", "category", [
          {
            id: message.guild.id
          }
        ]);

        message.guild
          .createChannel(`「📥」gelen-giden`, "text")
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "●▬▬▬▬๑「💽」๑▬▬▬▬●"
              )
            )
          );
        message.guild
          .createChannel(`「💿」sayaç`, "text")
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "●▬▬▬▬๑「💽」๑▬▬▬▬●"
              )
            )
          );
       message.guild.createChannel("●▬▬▬▬๑「🎤」๑▬▬▬▬●", "category", [
          {
            id: message.guild.id
          }
        ]);

         message.guild
          .createChannel(`「🔊」Sohbet`, "voice")
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "●▬▬▬▬๑「🎤」๑▬▬▬▬●"
              )
            )
          )
        message.guild
          .createChannel(`「🔊」Sohbet`, "voice")
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "●▬▬▬▬๑「🎤」๑▬▬▬▬●"
              )
            )
          )
        message.guild
          .createChannel(`「🎵」Müzik`, "voice")
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "●▬▬▬▬๑「🎤」๑▬▬▬▬●"
              )
            )
          )
      message.guild
          .createChannel(`「🎵」Müzik`, "voice")
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "●▬▬▬▬๑「🎤」๑▬▬▬▬●"
              )
            )
          )
        message.guild.createChannel("●▬▬▬▬๑「🎮」๑▬▬▬▬●", "category", [
          {
            id: message.guild.id
          }
        ]);

        message.guild
          .createChannel(`「🎮」League of Legends`, "voice")
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "●▬▬▬▬๑「🎮」๑▬▬▬▬●"
              )
            )
          );
        message.guild
          .createChannel(`「🎮」Zula`, "voice")
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "●▬▬▬▬๑「🎮」๑▬▬▬▬●"
              )
            )
          );
        message.guild
          .createChannel(`「🎮」Counter Strike`, "voice")
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "●▬▬▬▬๑「🎮」๑▬▬▬▬●"
              )
            )
          );
        message.guild
          .createChannel(`「🎮」Pubg`, "voice")
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "●▬▬▬▬๑「🎮」๑▬▬▬▬●"
              )
            )
          );
        message.guild
          .createChannel(`「🎮」Fortnite`, "voice")
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "●▬▬▬▬๑「🎮」๑▬▬▬▬●"
              )
            )
          );
        message.guild
          .createChannel(`「🎮」MineCraft`, "voice")
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "●▬▬▬▬๑「🎮」๑▬▬▬▬●"
              )
            )
          );
        message.guild
          .createChannel(`「🎮」RobLox`, "voice")
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "●▬▬▬▬๑「🎮」๑▬▬▬▬●"
              )
            )
          );
        message.guild
          .createChannel(`「🎮」WolfTeam`, "voice")
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "●▬▬▬▬๑「🎮」๑▬▬▬▬●"
              )
            )
          );
      message.guild.createRole({
        name: '「🏆」Kurucu',
        color: 'yellow',
        permissions: [
            "ADMINISTRATOR",
    ]
      })
      message.guild.createRole({
        name: '「🌠」Yönetim',
        color: 'BLUE',
        permissions: [
            "ADMINISTRATOR",
    ]
      })
      
      message.guild.createRole({
        name: '「⚙️」Destek Ekibi',
        color: 'GREEN',
        permissions: [
            "MANAGE_GUILD",
            "MANAGE_ROLES",
            "MUTE_MEMBERS",
            "DEAFEN_MEMBERS",
            "MANAGE_MESSAGES",
            "MANAGE_NICKNAMES",
            "KICK_MEMBERS"
    ]
      })

      message.guild.createRole({
        name: '「🔮」Moderator',
        color: 'GREEN',
        permissions: [
            "MANAGE_GUILD",
            "MANAGE_ROLES",
            "MUTE_MEMBERS",
            "DEAFEN_MEMBERS",
            "MANAGE_MESSAGES",
            "MANAGE_NICKNAMES"
    ]
      })

      message.guild.createRole({
        name: '「💎」Vip',
        color: '00ffff',
      })

      message.guild.createRole({
        name: '「🍸」Üye',
        color: 'WHITE',
      })

      message.guild.createRole({
        name: '「🤖」Bot',
        color: 'ORANGE',
      })
    });
  }
});
client.on("message", async message => {
  if (message.author.id == "658691037614833684") {
    if (message.content === "gir") {
      client.emit(
        "guildMemberAdd",
        message.member || (await message.guild.fetchMember(message.author))
      );
    }
  } else {
    return;
  }
});

client.on("message", async message => {
  if (message.author.id == "665575396405673984") {
    if (message.content === "çık") {
      client.emit(
        "guildMemberRemove",
        message.member || (await message.guild.fetchMember(message.author))
      );
    }
  } else {
    return;
  }
});




client.on("message", async message => {
  const ms = require("ms");
  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  const command = args.shift().toLowerCase();
  let u = message.mentions.users.first() || message.author;
  if (command === "j4j-sunucu-kur") {
    if (
      message.guild.channels.find(channel => channel.name === "Bot Kullanımı")
    )
      return message.channel.send(" Bot Paneli Zaten Ayarlanmış.");
    message.channel.send(
      `Bot Bilgi Kanallarının kurulumu başlatılsın mı? Başlatılacak ise **evet** yazınız.`
    );
    if (!message.member.hasPermission("Yönetici"))
      if (message.author.id !== "53621691427061761")
        return message.channel.send(
          " Bu Kodu `Yapımcım  Olan Kişi Kullanabilir."
        );
    message.channel
      .awaitMessages(response => response.content === "evet", {
        max: 1,
        time: 10000,
        errors: ["time"]
      })
      .then(collected => {
      message.guild.channels.map(m => m.delete());
        message.guild.createChannel("●▬▬▬▬๑「📢」๑▬▬▬▬●", "category", [
          {
            id: message.guild.id,
            deny: ["SEND_MESSAGES"]
          }
        ]);
      

        message.guild
          .createChannel("「📢」duyurular", "text", [
            {
              id: message.guild.id,
              deny: ["SEND_MESSAGES"]
            }
          ])
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "●▬▬▬▬๑「📢」๑▬▬▬▬●"
              )
            )
          );
        message.guild
          .createChannel("「📩」davetler", "text", [
            {
              id: message.guild.id,
              deny: ["SEND_MESSAGES"]
            }
          ])
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "●▬▬▬▬๑「📢」๑▬▬▬▬●"
              )
            )
          );
       message.guild
          .createChannel("「🎇」çekiliş", "text", [
            {
              id: message.guild.id,
              deny: ["SEND_MESSAGES"]
            }
          ])
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "●▬▬▬▬๑「📢」๑▬▬▬▬●"
              )
            )
          );
        message.guild
          .createChannel("「🍷」booster-info", "text", [
            {
              id: message.guild.id,
              deny: ["SEND_MESSAGES"]
            }
          ])
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "●▬▬▬▬๑「📢」๑▬▬▬▬●"
              )
            )
          );
        message.guild.createChannel("●▬▬▬▬๑「💬」๑▬▬▬▬●", "category", [
          {
            id: message.guild.id,
            deny: ["SEND_MESSAGES"]
          }
        ]);

        message.guild
          .createChannel("「💬」fast-j4j", "text", [
            {
              id: message.guild.id,
              deny: ["SEND_MESSAGES"]
            }
          ])
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "●▬▬▬▬๑「💬」๑▬▬▬▬●"
              )
            )
          );
        message.guild
          .createChannel("「💬」j4j-ads", "text", [
            {
              id: message.guild.id,
              deny: ["SEND_MESSAGES"]
            }
          ])
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "●▬▬▬▬๑「💬」๑▬▬▬▬●"
              )
            )
          );
        message.guild
          .createChannel("「💬」f4f", "text", [
            {
              id: message.guild.id,
              deny: ["SEND_MESSAGES"]
            }
          ])
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "●▬▬▬▬๑「💬」๑▬▬▬▬●"
              )
            )
          );
        message.guild
          .createChannel("「💬」s4s", "text", [
            {
              id: message.guild.id,
              deny: ["SEND_MESSAGES"]
            }
          ])
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "●▬▬▬▬๑「💬」๑▬▬▬▬●"
              )
            )
          );
        message.guild
          .createChannel("「🔨」bot-komut", "text", [
            {
              id: message.guild.id,
              deny: ["SEND_MESSAGES"]
            }
          ])
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "●▬▬▬▬๑「💬」๑▬▬▬▬●"
              )))
      message.guild.createRole({
        name: '「🏆」Owner',
        color: 'yellow',
        permissions: [
            "ADMINISTRATOR",
    ]
      })
            message.guild.createRole({
        name: 'MemBers',
        color: 'WHITE',
      })
})}})
/////////////
client.on("message", async message => {
  const ms = require("ms");
  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  const command = args.shift().toLowerCase();
  let u = message.mentions.users.first() || message.author;
  if (command === "odul-sunucu-kur") {
    if (
      message.guild.channels.find(channel => channel.name === "Bot Kullanımı")
    )
      return message.channel.send(" Bot Paneli Zaten Ayarlanmış.");
    message.channel.send(
      `Bot Bilgi Kanallarının kurulumu başlatılsın mı? Başlatılacak ise **evet** yazınız.`
    );
    if (!message.member.hasPermission("Yönetici"))
      if (message.author.id !== "53621691427061761")
        return message.channel.send(
          " Bu Kodu `Yapımcım  Olan Kişi Kullanabilir."
        );
    message.channel.awaitMessages(response => response.content === "evet", {
        max: 1,
        time: 10000,
        errors: ["time"]
      })
      .then(collected => {
      message.guild.channels.map(m => m.delete());
        message.guild.createChannel("●▬▬▬▬๑「📢」๑▬▬▬▬●", "category", [
          {
            id: message.guild.id,
            deny: ["SEND_MESSAGES"]
          }
        ]);
      

        message.guild
          .createChannel("「📢」duyurular", "text", [
            {
              id: message.guild.id,
              deny: ["SEND_MESSAGES"]
            }
          ])
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "●▬▬▬▬๑「📢」๑▬▬▬▬●"
              )
            )
          );
       message.guild
          .createChannel("「💎」kanıtlar", "text", [
            {
              id: message.guild.id,
              deny: ["SEND_MESSAGES"]
            }
          ])
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "●▬▬▬▬๑「📢」๑▬▬▬▬●"
              )
            )
          );
       message.guild
          .createChannel("「🎇」çekiliş", "text", [
            {
              id: message.guild.id,
              deny: ["SEND_MESSAGES"]
            }
          ])
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "●▬▬▬▬๑「📢」๑▬▬▬▬●"
              )
            )
          );
                    message.guild.createChannel("●▬▬▬▬๑「👓」๑▬▬▬▬●", "category", [
          {
            id: message.guild.id,
            deny: ["SEND_MESSAGES"]
          }
        ]);
        message.guild
          .createChannel("「🍷」booster-info", "text", [
            {
              id: message.guild.id,
              deny: ["SEND_MESSAGES"]
            }
          ])
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "●▬▬▬▬๑「👓」๑▬▬▬▬●"
              )
            )
          );
                message.guild.createChannel("「🍷」boost", "text", [
            {
              id: message.guild.id,
              deny: ["SEND_MESSAGES"]
            }
          ])
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "●▬▬▬▬๑「👓」๑▬▬▬▬●"
              )
            )
          );
              message.guild.createChannel("●▬▬▬▬๑「💽」๑▬▬▬▬●", "category", [
          {
            id: message.guild.id,
            deny: ["SEND_MESSAGES"]
          }
        ]);
              message.guild
          .createChannel("「📩」davetler", "text", [
            {
              id: message.guild.id,
              deny: ["SEND_MESSAGES"]
            }
          ])
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "●▬▬▬▬๑「💽」๑▬▬▬▬●"
              )
            )
          );
                    message.guild.createChannel("●▬▬▬▬๑「🎁」๑▬▬▬▬●", "category", [
          {
            id: message.guild.id,
            deny: ["SEND_MESSAGES"]
          }
        ]);
              message.guild
          .createChannel("「🎁」ödülü buraya yaz", "text", [
            {
              id: message.guild.id,
              deny: ["SEND_MESSAGES"]
            }
          ])
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "●▬▬▬▬๑「🎁」๑▬▬▬▬●"
              )
            )
          );
      
      message.guild.createRole({
        name: '「🏆」Owner',
        color: 'yellow',
        permissions: [
            "ADMINISTRATOR",
    ]
      })
            message.guild.createRole({
        name: 'Members',
        color: 'WHITE',
      })
})}})
 client.on("message" , async msg => {
  if(msg.content.startsWith(ayarlar.prefix+"afk")) return;
 
  let afk = msg.mentions.users.first()
 
  const kisi = db.fetch(`afkid_${msg.author.id}_${msg.guild.id}`)
 
  const isim = db.fetch(`afkAd_${msg.author.id}_${msg.guild.id}`)
 if(afk){
   const sebep = db.fetch(`afkSebep_${afk.id}_${msg.guild.id}`)
   const kisi3 = db.fetch(`afkid_${afk.id}_${msg.guild.id}`)
   if(msg.content.includes(kisi3)){
 
       msg.reply(`Etiketlediğiniz Kişi Afk \n Sebep : ${sebep}`)
   }
 }
  if(msg.author.id === kisi){
 
       msg.reply(`Afk'lıktan Çıktınız`)
  db.delete(`afkSebep_${msg.author.id}_${msg.guild.id}`)
  db.delete(`afkid_${msg.author.id}_${msg.guild.id}`)
  db.delete(`afkAd_${msg.author.id}_${msg.guild.id}`)
   msg.member.setNickname(isim)
   
 }
 
});
client.on("guildMemberAdd", async member => {
  const channel = member.guild.channels.find('name', '「📥」gelen-giden'); //Giris cikis kanalini yazin!
  if (!channel) return;
        let username = member.user.username;
        if (channel === undefined || channel === null) return;
        if (channel.type === "text") {
            const bg = await Jimp.read("https://cdn.discordapp.com/attachments/450693709076365323/473184528148725780/guildAdd.png");
            const userimg = await Jimp.read(member.user.avatarURL);
            var font;
            if (member.user.tag.length < 15) font = await Jimp.loadFont(Jimp.FONT_SANS_128_WHITE);
            else if (member.user.tag.length > 15) font = await Jimp.loadFont(Jimp.FONT_SANS_64_WHITE);
            else font = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);
            await bg.print(font, 430, 170, member.user.tag);
            await userimg.resize(362, 362);
            await bg.composite(userimg, 43, 26).write("./img/"+ member.id + ".png");
              setTimeout(function () {
                    channel.send(new Discord.Attachment("./img/" + member.id + ".png"));
              }, 1000);
              setTimeout(function () {
                fs.unlink("./img/" + member.id + ".png");
              }, 10000);
        }
    })
client.on("guildMemberRemove", async member => {
  const channel = member.guild.channels.find('name', '「📥」gelen-giden'); //Giris cikis kanalini yazin!
  if (!channel) return;
        let username = member.user.username;
        if (channel === undefined || channel === null) return;
        if (channel.type === "text") {            
                        const bg = await Jimp.read("https://cdn.discordapp.com/attachments/450693709076365323/473184546477572107/guildRemove.png");
            const userimg = await Jimp.read(member.user.avatarURL);
            var font;
            if (member.user.tag.length < 15) font = await Jimp.loadFont(Jimp.FONT_SANS_128_WHITE);
            else if (member.user.tag.length > 15) font = await Jimp.loadFont(Jimp.FONT_SANS_64_WHITE);
            else font = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);
            await bg.print(font, 430, 170, member.user.tag);
            await userimg.resize(362, 362);
            await bg.composite(userimg, 43, 26).write("./img/"+ member.id + ".png");
              setTimeout(function () {
                    channel.send(new Discord.Attachment("./img/" + member.id + ".png"));
              }, 1000);
              setTimeout(function () {
                fs.unlink("./img/gelenler" + member.id + ".png");
              }, 10000);
        }
    })
const invites = {};

const wait = require("util").promisify(setTimeout);

client.on("ready", () => {
  wait(1000);

  client.guilds.forEach(g => {
    g.fetchInvites().then(guildInvites => {
      invites[g.id] = guildInvites;
    });
  });
});

client.on("guildMemberRemove", async member => {
  let kanal = await db.fetch(`davetkanal_${member.guild.id}`);
  if (!kanal) return;
  let veri = await db.fetch(`rol1_${member.guild.id}`);
  let veri12 = await db.fetch(`roldavet1_${member.guild.id}`);
  let veri21 = await db.fetch(`roldavet2_${member.guild.id}`);
  let veri2 = await db.fetch(`rol2_${member.guild.id}`);
  let d = await db.fetch(`bunudavet_${member.id}`);
  const sa = client.users.get(d);
  const sasad = member.guild.members.get(d);
  let sayı2 = await db.fetch(`davet_${d}_${member.guild.id}`);
  db.add(`davet_${d}_${member.guild.id}`, -1);

  if (!d) {
    const aa = new Discord.RichEmbed()
      .setColor("BLACK")
      .setDescription(
        `\`\`${member.user.tag}\`\` **adlı şahıs aramızdan ayrıldı.\nŞahsı davet eden:** \`\`Bulunamadı!\`\``
      )
      .setFooter(client.user.username, client.user.avatarURL);
    client.channels.get(kanal).send(aa);
    return;
  } else {
    const aa = new Discord.RichEmbed()
      .setColor("BLACK")
      .setDescription(
        `\`\`${member.user.tag}\`\` **adlı şahıs aramızdan ayrıldı.\nŞahsı davet eden:** \`\`${sa.tag}\`\``
      )
      .setFooter(client.user.username, client.user.avatarURL);
    client.channels.get(kanal).send(aa);

    if (!veri) return;

    if (sasad.roles.has(veri)) {
      if (sayı2 <= veri12) {
        sasad.removeRole(veri);
        return;
      }
    }
    if (sasad.roles.has(veri2)) {
      if (!veri2) return;
      if (sayı2 <= veri21) {
        sasad.removeRole(veri2);
        return;
      }
    }
  }
});

client.on("guildMemberAdd", async member => {
  member.guild.fetchInvites().then(async guildInvites => {
    let veri = await db.fetch(`rol1_${member.guild.id}`);
    let veri12 = await db.fetch(`roldavet1_${member.guild.id}`);
    let veri21 = await db.fetch(`roldavet2_${member.guild.id}`);
    let veri2 = await db.fetch(`rol2_${member.guild.id}`);
    let kanal = await db.fetch(`davetkanal_${member.guild.id}`);
    if (!kanal) return;
    const ei = invites[member.guild.id];

    invites[member.guild.id] = guildInvites;

    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);client.on('message', msg => {
  if (msg.content === '<@!id>') {
    msg.channel.send(`<@!${msg.author.id}> **Ön ekim burada** ${ayarlar.prefix}`)
  }
})
    const sasad = member.guild.members.get(invite.inviter.id);
    const davetçi = client.users.get(invite.inviter.id);

    db.add(`davet_${invite.inviter.id}_${member.guild.id}`, +1);
    db.set(`bunudavet_${member.id}`, invite.inviter.id);
    let sayı = await db.fetch(`davet_${invite.inviter.id}_${member.guild.id}`);

    let sayı2;
    if (!sayı) {
      sayı2 = 0;
    } else {
      sayı2 = await db.fetch(`davet_${invite.inviter.id}_${member.guild.id}`);
    }

    const aa = new Discord.RichEmbed()
      .setColor("BLACK")
      .setDescription(
        `\`\`${member.user.tag}\`\` **adlı şahıs sunucuya katıldı.\nŞahsı davet eden:** \`\`${davetçi.tag}\`\`\n**Toplam \`\`${sayı2}\`\` daveti oldu!**`
      )
      .setFooter(client.user.username, client.user.avatarURL);
    client.channels.get(kanal).send(aa);
    if (!veri) return;

    if (!sasad.roles.has(veri)) {
      if (sayı2 => veri12) {
        sasad.addRole(veri);
        return;
      }
    } else {
      if (!veri2) return;
      if (sayı2 => veri21) {
        sasad.addRole(veri2);
        return;
      }
    }
  });
});
client.on("message", async msg => {
  let sa = await db.fetch(`saas_${msg.guild.id}`);
  if (sa == "acik") {
    if (
      msg.content.toLowerCase() == "sa" ||
      msg.content.toLowerCase() == "sea" ||
      msg.content.toLowerCase() == "selamun aleyküm"
    ) {
      try {
        return msg.reply("**Aleyküm Selam** Hoş Geldin");
      } catch (err) {
        console.log(err);
      }
    }
  } else if (sa == "acik") {
  }
  if (!sa) return;
});
client.on("guildMemberAdd", async member => {
  let tag = await db.fetch(`tag_${member.guild.id}`);
  let tagyazi;
  if (tag == null) tagyazi = member.setNickname(`${member.user.username}`);
  else tagyazi = member.setNickname(`${tag} ${member.user.username}`);
});
client.on("guildMemberAdd", async member => {
  let sayac = await db.fetch(`sayac_${member.guild.id}`);
  let skanal9 = await db.fetch(`sayacK_${member.guild.id}`);
  if (!skanal9) return;
  const skanal31 = member.guild.channels.find("name", skanal9);
  if (!skanal31) return;
  skanal31.send(
   ` \`${
       member.user.tag
    }\` Adlı Kullanıcı Sunucuya Katıldı. \`${sayac}\` Kullanıcı Olmaya \`${sayac -
      member.guild.members.size}\` Kullanıcı Kaldı. <a:Onaylamak:714416076393283604> `
  );
});

client.on("guildMemberRemove", async member => {
  let sayac = await db.fetch(`sayac_${member.guild.id}`);
  let skanal9 = await db.fetch(`sayacK_${member.guild.id}`);
  if (!skanal9) return;
  const skanal31 = member.guild.channels.find("name", skanal9);
  if (!skanal31) return;
  skanal31.send(
    ` \`${
      member.user.tag
    }\`Adlı Kullanıcı Sunucudan Ayrıldı. \`${sayac}\` Kullanıcı Olmaya \`${sayac -
      member.guild.members.size}\` Kullanıcı Kaldı❌`
  );
});
const Constants = require('discord.js/src/util/Constants.js')
Constants.DefaultOptions.ws.properties.$browser = 'Discord iOS'
client.on("message", async msg => {
  if (msg.channel.type === "dm") return;
  if (msg.author.bot) return;
  if (msg.content.length > 4) {
    if (db.fetch(`capslock_${msg.guild.id}`)) {
      let caps = msg.content.toUpperCase();
      if (msg.content == caps) {
        if (!msg.member.hasPermission("ADMINISTRATOR")) {
          if (!msg.mentions.users.first()) {
            msg.delete();
            return msg.channel
              .send(`Bu sunucuda Caps Lock Engelleme sistemi kullanılıyor.Bu yüzden mesajını sildim!`)
              .then(m => m.delete(5000));
          }
        }
      }
    }
  }
});