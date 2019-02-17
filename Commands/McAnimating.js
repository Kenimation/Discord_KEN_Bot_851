const Discord = require("discord.js");
const config = require("../config");

module.exports.run = async (bot, msg, arguments) => {

        const mcanimatingembed = new Discord.RichEmbed()
        .setAuthor("Kenimation", msg.guild.iconURL)
        .setColor("RANDOM")
        .setTitle("Mine-imator Animating Program")
        .setDescription("You can try Mine-imator if you want animating Minecraft Animation")
        .setURL("https://www.mineimator.com/")
        .setThumbnail(msg.author.avatarURL)
        .setImage("https://pbs.twimg.com/profile_images/925452401754230791/Ov06AdeL_400x400.jpg")
        .addField("How to use?", "`/mitutorial` I will send you a Mine-imator tutorial link")
        .addField("❓Question", "`/animation` Ask information of animations.")
        .setFooter("Thanks for asking. Any asking are welcome.")
        .setTimestamp(Date.now())
msg.member.send(mcanimatingembed)


}
module.exports.config = {
    command: "mcmnimating"
}