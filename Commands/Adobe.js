const Discord = require("discord.js");
const config = require("../config");

module.exports.run = async (bot, msg, arguments) => {
    

        msg.delete();

        const adobeembed = new Discord.RichEmbed()
        .setAuthor("Kenimation", msg.guild.iconURL)
        .setColor("RANDOM")
        .setTitle("Adobe")
        .setThumbnail(msg.author.avatarURL)
        .setURL("https://www.adobe.com/")
        .addField("Adobe Offical", "Creative Cloud gives you the world’s best apps and services for video, design, photography and the web. It’s easy to get started with built-in tutorials and templates. Whether you’re a beginner or a pro, you have everything you need to go from dreaming to doing, wherever you’re inspired. \n Offical link here.")
        .setFooter("Thanks for asking. Any asking are welcome.")
        .setTimestamp(Date.now())
        msg.member.send(adobeembed)

    }

module.exports.config = {
    command: "adobe"
}