const Discord = require("discord.js");
const config = require("../config");

module.exports.run = async (bot, msg, arguments) => {

        msg.delete();

        const cinema4dembed = new Discord.RichEmbed()
        .setAuthor("Kenimation", msg.guild.iconURL)
        .setColor("RANDOM")
        .setTitle("Cinema 4D")
        .setThumbnail(msg.author.avatarURL)
        .setURL("https://www.maxon.net/en/")
        .addField("Cinema 4D Offical", "Cinema 4D is a professional 3D graphics software. It allows any variant to create a seamless workflow with After Effects. It is a useful software for graphic design. \n Offical link here.")
        .setFooter("Thanks for asking. Any asking are welcome.")
        .setTimestamp(Date.now())
        msg.member.send(cinema4dembed)

    }

module.exports.config = {
    command: "cinema4d"
}