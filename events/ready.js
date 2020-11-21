const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;


module.exports = client => {
  console.log(`${client.user.username} ismi ile giriş yapıldı!`);
  client.user.setStatus("online");
  
    var oyun = [
   `${prefix}yardım | ${client.guilds.size} sunucudan ` + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ` kullanıcıya hizmet veriyoruz!`,
    'w!yardım ile komutları öğrenebilirsiniz',
    'Yeni komutlar yakında gelecektir!',
    'Bot kodlanmaya 09.11.2020 tarihinde başlanmıştır'  

    ];
  
    setInterval(function() {

        var random = Math.floor(Math.random()*(oyun.length-0+1)+0);

        client.user.setGame(oyun[random], );
        }, 2 * 9000);
};
