const Discord = require('discord.js');
const db = require('wio.db');

const ms = require("parse-ms");


module.exports = {
  name: "beg",
  aliases: [],
  usage: "beg",
  description: "beg",
  run: async (client, message, args) => {



let user = message.author;
    let author = await db.fetch(`beg_${user.id}`)

    let timeout = 300000;
    
    if (author !== null && timeout - (Date.now() - author) > 0) {
        let time = ms(timeout - (Date.now() - author));
    
        let timeEmbed = new Discord.MessageEmbed()
        .setColor("RED")
        .setDescription(`**You have already begged recently\n\nTry again in ${time.minutes}m ${time.seconds}s**`);
        message.channel.send(timeEmbed)
      } else {

        let replies = ['begger']

        let result = Math.floor((Math.random() * replies.length));
        let amount = Math.floor(Math.random() * 20) + 1;
        let embed1 = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setDescription(`**You were a ${replies[result]} and earned ${amount} coins**`);
        message.channel.send(embed1)
        
        db.add(`money_${user.id}`, amount)
        db.set(`beg_${user.id}`, Date.now())

      }


  }
}