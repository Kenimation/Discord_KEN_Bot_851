const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, msg, arguments) => {

  if(!msg.member.hasPermission("MANAGE_SERVER")) return msg.reply("No no no.");
  if(!arguments[0] || arguments[0 == "help"]) return msg.reply("Usage: !prefix <desired prefix here>");

  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

  prefixes[msg.guild.id] = {
    prefixes: arguments[0]
  };

  fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => {
    if (err) console.log(err)
  });

  let sEmbed = new Discord.RichEmbed()
  .setColor("#FF9900")
  .setTitle("Prefix Set!")
  .setDescription(`Set to ${arguments[0]}`);

  msg.channel.send(sEmbed);

}

module.exports.help = {
  name: "prefix"
}
