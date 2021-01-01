const Discord = require('discord.js');
const db = require('wio.db');
const ms = require("parse-ms");

module.exports = {
  name: "rob",
  aliases: [],
  usage: "rob",
  description: "rob someone",
  run: async (client, message, args, async) => {



let user = message.mentions.members.first()

 let authormoney = db.fetch(`money_${message.author.id}`)
 let robmoney = db.fetch(`money_${user.id}`)


const embed = new Discord.MessageEmbed()
.setColor("RED")
.setDescription("**You need to mention a member!**")

const embed1 = new Discord.MessageEmbed()
.setColor("RED")
.setDescription(`**The person you tried to rob from dosent have 200+ money!**`)


if(!user) return message.channel.send(embed)



if (robmoney < 200) return message.channel.send(embed1)



let amount = Math.floor(Math.random() * 200) + 1;


const embed2 = new Discord.MessageEmbed()
.setDescription(`**You just robbed someone and earned ${amount}!**`)


db.add(`money_${user.id}`, -amount)
db.add(`money_${message.author.id}`, amount)
message.channel.send(embed2)
  }
}