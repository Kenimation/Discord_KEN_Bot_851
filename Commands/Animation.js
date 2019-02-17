const Discord = require("discord.js");
const config = require("../config");

module.exports.run = async (bot, msg, arguments) => {


        msg.delete();

        const animationembed = new Discord.RichEmbed()
        .setAuthor("Kenimation", msg.guild.iconURL)
        .setColor("RANDOM")
        .setTitle("What Topic")
        .setThumbnail(msg.author.avatarURL)
        .addField("Minecraft", "`/mcanimating` I will suggest a animating software to you.")
        .addField("Animating", "`/animating` I will suggest some animating softwares to you.")
        .addField("Tutorial", "`/tutorial` You can find different type of animation tutorial.")
        .setFooter("Thanks for asking. Any asking are welcome.")
        .setTimestamp(Date.now())
        msg.member.send(animationembed)

    }


module.exports.config = {
    command: "Animation"
}