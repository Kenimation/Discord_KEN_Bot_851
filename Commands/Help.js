const Discord = require("discord.js");
const config = require("../config");

module.exports.run = async (bot, msg, arguments) => {

            msg.delete();
    
            async function purge() {

                if (!msg.member.roles.find("name", "Moderator")) {

                    const helpembed = new Discord.RichEmbed()
                .setAuthor("Kenimation", msg.guild.iconURL)
                .setColor("RANDOM")
                .setTitle("KEN-Bot Helps")
                .setDescription("KEN-Bot 1.0 \n</> for ProcessCommand.")
                .setThumbnail(msg.author.avatarURL)
                .addField("🛠Useful Commands", "`/Help` For command and stuff. \n`/role` to check roles. \n`/report` + `[Name]` + `[Reason]` To report someone. \n`/level` to check your level.")
                .addField("❓Question Commands", "`/Animation` Ask information of animations. \n`/music` How to listen music in the server. \n`/sharescreen` How to sharescreen in the server.")
                .addField("🎉Funny Commands", "`/ping` Pong! \n`/miss` or `[Name]` You can miss someone. \n`/come` Notice people that `KEN` is joined discord. \n`/love` to give a love")
                .setFooter("Thanks for reading. Any suggestions are welcome.")
                .setTimestamp(Date.now())
                msg.member.send(helpembed)
                    
                    return;
                } else {

                    const Moderatorembed = new Discord.RichEmbed()
            .setAuthor("Kenimation", msg.guild.iconURL)
            .setColor("RANDOM")
            .setTitle("KEN-Bot Moderator Helps")
            .setDescription("KEN-Bot 1.0 \n</> for ProcessCommand. <//> for ModeratorCommand.")
            .setThumbnail(msg.author.avatarURL)
            .addField("👤Moderator", "`//Ban` + `[Name]` to ban member. \n`//kick` + `[Name]` to kick member. \n`//fuckoff` + `[Name]` to fuck member. \n`//embed` to post a server embed. \n`//MsgClear` to clear message. \n`//mute` + `s/m/d` + `Reason` to mute message. \n`//serverinfo` send a server information.")
            .addField("🛠Useful Commands", "`/Help` For command and stuff. \n`/role` to check roles. \n`/report` + [Name] + [Reason] To report someone. \n`/level` to check your level.")
            .addField("❓Question Commands", "`/Animation` Ask information of animations. \n`/music` How to listen music in the server. \n`/sharescreen` How to sharescreen in the server.")
            .addField("🎉Funny Commands", "`/ping` Pong! \n`/miss` or [Name] You can miss someone. \n`/come` Notice people that `KEN` is joined discord. \n`/love` to give a love")
            .setFooter(`Thanks for reading. Any suggestions are welcome.`)
            .setTimestamp(Date.now())

            msg.member.send(Moderatorembed)

                }

        }

        purge();
        
}
module.exports.config = {
    command: "help"
}