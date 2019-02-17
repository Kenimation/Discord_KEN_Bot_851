const Discord = require("discord.js");
const config = require("../config");
let xp = require("../xp.json");

module.exports.run = async (bot, msg, arguments) => {

      msg.delete();

  if(!xp[msg.author.id]){
   xp[msg.author.id] = {
     xp: 0,
     level: 1
  };
}

let curxp = xp[msg.author.id].xp;
  let curlvl = xp[msg.author.id].level;
  let nxtLvlXp = curlvl * 300;
  let difference = nxtLvlXp - curxp;

if (curlvl === 5) {

  let GPEmbed = new Discord.RichEmbed()
  .setAuthor(msg.author.username)
  .setColor("RANDOM")
  .addField("Level", curlvl, true)
  .addField("XP", curxp, true)
  .addField("New Role GG You're General Public", "You can talk in voice channel")
  .setFooter(`${difference} XP til level up`, msg.author.displayAvatarURL);

  msg.channel.send(GPEmbed).then(msg => {msg.delete(5000)});

} else if (curlvl === 6 && 7 && 8 && 9) {

  let GPrEmbed = new Discord.RichEmbed()
  .setAuthor(msg.author.username)
  .setColor("RANDOM")
  .addField("Level", curlvl, true)
  .addField("XP", curxp, true)
  .addField("You're General Public", "You can talk in voice channel")
  .setFooter(`${difference} XP til level up`, msg.author.displayAvatarURL);

  msg.channel.send(GPrEmbed).then(msg => {msg.delete(5000)});

} else if (curlvl === 10) {
  
  let AUEmbed = new Discord.RichEmbed()
  .setAuthor(msg.author.username)
  .setColor("RANDOM")
  .addField("Level", curlvl, true)
  .addField("XP", curxp, true)
  .addField("New Role GG You're Active User", "You can change command prefix. \nChange Nickname.")
  .setFooter(`${difference} XP til level up`, msg.author.displayAvatarURL);

  msg.channel.send(AUEmbed).then(msg => {msg.delete(5000)});

} else if (curlvl === 11 && 12 && 13 && 14 && 15 && 16 && 17 && 18 && 19) {
  
  let AUrEmbed = new Discord.RichEmbed()
  .setAuthor(msg.author.username)
  .setColor("RANDOM")
  .addField("Level", curlvl, true)
  .addField("XP", curxp, true)
  .addField("You're Active User", "You can change command prefix. \nChange Nickname.")
  .setFooter(`${difference} XP til level up`, msg.author.displayAvatarURL);

  msg.channel.send(AUrEmbed).then(msg => {msg.delete(5000)});

} else if (curlvl === 20) {
  
  let FansEmbed = new Discord.RichEmbed()
  .setAuthor(msg.author.username)
  .setColor("RANDOM")
  .addField("Level", curlvl, true)
  .addField("XP", curxp, true)
  .addField("New Role GG You're Kenimation's fans", "You can go 'nsfw' channel.")
  .setFooter(`${difference} XP til level up`, msg.author.displayAvatarURL);

  msg.channel.send(FansEmbed).then(msg => {msg.delete(5000)});

} else if (curlvl > 20) {
  
  let FansEmbed = new Discord.RichEmbed()
  .setAuthor(msg.author.username)
  .setColor("RANDOM")
  .addField("Level", curlvl, true)
  .addField("XP", curxp, true)
  .addField("You're Kenimation's fans", "You can go 'nsfw' channel.")
  .setFooter(`${difference} XP til level up`, msg.author.displayAvatarURL);

  msg.channel.send(FansEmbed).then(msg => {msg.delete(5000)});

} else {

  let lvlEmbed = new Discord.RichEmbed()
  .setAuthor(msg.author.username)
  .setColor("RANDOM")
  .addField("Level", curlvl, true)
  .addField("XP", curxp, true)
  .setFooter(`${difference} XP til level up`, msg.author.displayAvatarURL);

  msg.channel.send(lvlEmbed).then(msg => {msg.delete(5000)});

}
}



module.exports.help = {
  name: "level"
}
