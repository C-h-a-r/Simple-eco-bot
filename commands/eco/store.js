const Discord = require('discord.js');
const db = require('wio.db');


module.exports = {
  name: "store",
  aliases: ["shop"],
  usage: "store",
  description: "see store",
  run: async (client, message, args) => {

const config = require('../../config.json')

const embed = new Discord.MessageEmbed()
.setTitle("Store")
.addFields(
				{ name: config.item1name, value: config.item1price },

        		{ name: config.item2name, value: config.item2price },

            		{ name: config.item3name, value: config.item3price },


)

message.channel.send(embed)

  }
}