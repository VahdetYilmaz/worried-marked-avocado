const Discord = require('discord.js');
const ayarlar = require('./ayarlar.json');
const bot = new Discord.Client()
const express = require('express');
const app = express();
const http = require('http');
const scarew = new Discord.ShardingManager('./bot.js', { // Buraya botunuzun ana dosyasını yazın sizde değişik görünebilir.(main.js index.js bot.js vs)
    totalShards: 'auto',
    token: "Botunuzun tokeni"// Buraya botunuzun tokenini yapıştırın
});

scarew.spawn(); 

scarew.on('launch', shard => {
  console.log(`**${shard.id}** ID shard started.`)
});

setTimeout(() => {
    scarew.broadcastEval("process.exit()");
}, 21600000);