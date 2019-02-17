const Discord = require("discord.js");
const config = require("../config");

module.exports.run = async (bot, msg, arguments) => {

        
        msg.delete();
        
        const blenderembed = new Discord.RichEmbed()
        .setAuthor("Kenimation", msg.guild.iconURL)
        .setColor("RANDOM")
        .setTitle("Blender")
        .setThumbnail(msg.author.avatarURL)
        .setURL("https://www.blender.org/")
        .addField("Blender Offical", "Blender is a free and professional 3D animating software. You can animate Minecraft animation by Blender as well. \n Offical link here.")
        .setFooter("Thanks for asking. Any asking are welcome.")
        .setTimestamp(Date.now())
        msg.member.send(blenderembed)

    }


module.exports.config = {
    command: "blender"
}