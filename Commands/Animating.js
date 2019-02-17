const Discord = require("discord.js");
const config = require("../config");

module.exports.run = async (bot, msg, arguments) => {

        
        msg.delete();

        const animatingembed = new Discord.RichEmbed()
        .setAuthor("Kenimation", msg.guild.iconURL)
        .setColor("RANDOM")
        .setTitle("🛠Animating Program")
        .setDescription("There is some recommended animation software.")
        .setThumbnail(msg.author.avatarURL)
        .addField("Mine-imator", "Mine-imator is a free animating program. It's good for newbies and Minecarft animations. \n`/mcanimating` Mine-imator download link here. \n`/mitutorial` I will send you a Mine-imator tutorial link.")
        .addField("Blender", "Blender is a free and professional 3D animating software. You can animate Minecraft animation by Blender as well. \n`/blender` Blender Offical link here.")
        .addField("Cinema 4D", "Cinema 4D is a professional 3D graphics software. It allows any variant to create a seamless workflow with After Effects. It is a useful software for graphic design. \n`/cinema4d` Cinema 4D Offical link here.")
        .addField("Animate CC", "Animate CC is an Adobe product. It's cheap software for 2D animation and good for newbies. \n`/adobe` Adobe Offical link here.")
        .addField("❓Question", "`/animation` Ask information of animations.")
        .setFooter("Thanks for asking. Any asking are welcome.")
        .setTimestamp(Date.now())
        msg.member.send(animatingembed)

    }

module.exports.config = {
    command: "animating"
}