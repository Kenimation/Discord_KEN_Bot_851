const Discord = require("discord.js");
const config = require("../config");

module.exports.run = async (bot, msg, arguments) => { 

    msg.delete()
    if (arguments.length > 0) {

        const rUser = msg.guild.member(msg.mentions.users.first() || msg.guild.members.get(arguments[0]));
        if(!rUser) return msg.channel.send("Couldn't find user.")

         const reportembed = new Discord.RichEmbed()
        .setAuthor("KEN-Bot", msg.guild.iconURL)
        .setDescription("New report was sent")
        .setColor("RANDOM")
        .setThumbnail(bot.user.avatarURL)
        .addField("Reported User", `${rUser} with ID: ${rUser.id}`)
        .addField("Reported By", `${msg.author} with ID: ${msg.author.id}`)
        .addField("Reason", `${msg.author}`)
        .setFooter("Report system. \nBy KEN")
        .setTimestamp(Date.now())
        bot.channels.find(x => x.name === 'reports').send(reportembed)

        const tkreportembed = new Discord.RichEmbed()
        .setAuthor("KEN-Bot", msg.guild.iconURL)
        .setColor("RANDOM")
        .setTitle("Your reporting was sent")
        .setDescription("Your reporting was sent. Your reporting will be checked by the moderator. Any news will mail you again.")
        .setThumbnail(bot.user.avatarURL)
        .setFooter("Thanks for any report. \n By KEN")
        .setTimestamp(Date.now())
        msg.member.send(tkreportembed)
    
        return;
    }
}
module.exports.config = {
    command: "report"
}