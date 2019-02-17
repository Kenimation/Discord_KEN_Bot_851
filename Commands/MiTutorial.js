const Discord = require("discord.js");
const config = require("../config");

module.exports.run = async (bot, msg, arguments) => {

        const mitutorialembed = new Discord.RichEmbed()
        .setAuthor("Kenimation", msg.guild.iconURL)
        .setColor("RANDOM")
        .setTitle("Mine-imator tutorial")
        .setDescription("There is a tutorial link. I hope it may help you")
        .setURL("https://www.youtube.com/playlist?list=PLSpwFMmNl1Ct2eBYCi4dQZdKPyFD_Cll3")
        .setThumbnail(msg.author.avatarURL)
        .setImage("https://pbs.twimg.com/profile_images/1009649556554842112/oygsE5Kj_400x400.jpg")
        .addField("❓Question", "`/animation` Ask information of animations.")
        .setFooter("Thanks for asking. Any asking are welcome.")
        .setTimestamp(Date.now())
msg.member.send(mitutorialembed)

}
module.exports.config = {
    command: "mitutorial"
}