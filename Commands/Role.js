const Discord = require("discord.js");
const config = require("../config");

module.exports.run = async (bot, msg, arguments) => {

            msg.delete();
    
            async function purge() {
    
                const rolembed = new Discord.RichEmbed()
                .setAuthor("Kenimation", msg.guild.iconURL)
                .setColor("RANDOM")
                .setTitle("Role lists")
                .setDescription("Your rank would go up as your levels go up.")
                .setThumbnail(msg.author.avatarURL)
                .addField("Friends", "Friends with Kenimation.")
                .addField("Partner", "Partners/teaming with Kenimation.")
                .addField("SPONSOR", "You can go 'nsfw' channel. \n You can watch animation preview.")
                .addField("Fans (level 20)", "You can go 'nsfw' channel. \n You can watch animation preview.")
                .addField("Pro", "Good at animating.")
                .addField("GIFTED PEOPLE", "People who is very gifted.`(The roles above cannot be unlocked by just levels)`")
                .addField("Active User (level 10)", "You can change command prefix. \n Change Nickname.")
                .addField("General Public (level 5)", "Can talk in voice channel.")
                .setFooter("Thanks for reading. Any suggestions are welcome.")
                .setTimestamp(Date.now())
                msg.member.send(rolembed)
    
                }


        purge();
    }
module.exports.config = {
    command: "role"
}