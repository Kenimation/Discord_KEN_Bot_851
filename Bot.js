const Discord = require('discord.js');
const config = require("./config.json");
const bot = new Discord.Client();
const fs = require('fs');
const xp = require("./xp.json");

bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

    if(err) console.log(err);
    let jsfile = files.filter(f => f.split(".").pop() === "js");
    if(jsfile.length <= 0){
      console.log("Couldn't find commands.");
      return;
    }
  
    jsfile.forEach((f, i) =>{
      let props = require(`./commands/${f}`);
      console.log(`${f} loaded!`);
      bot.commands.set(props.commands, props);
    });
  });

bot.on('ready', () => {
  console.log(`Connect as ${bot.user.tag}!`)

  bot.channels.find(x => x.name === 'bot-testing').send('KEN-Bot is connecting')
});

bot.on('guildMemberAdd', member => {
  let memberavatar = member.user.avatarURL
      let inembed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setTitle(`Welcome to the Kenimation server.`)
      .setThumbnail(memberavatar)
      .setDescription("KEN-Bot 1.0 Helps \n</> for ProcessCommand.")
      .addField('Name:', `${member}`)
      .addField('User ID:', "**[" + `${member.id}` + "]**")
      .addField('Your are the member', `${member.guild.memberCount}`)
      .addField("Name", `<@` + `${member.id}` + `>`, true)
      .addField('Server', `${member.guild.name}`, true )
      .addField("🛠Useful Commands", "`/Help` For command and stuff. \n`/role` to check roles. \n`/report` + [Name] + [Reason] To report someone. \n`/level` to check your level.")
      .addField("❓Question Commands", "`/Animation` Ask information of animations. \n`/music` How to listen music in the server. \n`/sharescreen` How to sharescreen in the server.")
      .addField("🎉Funny Commands", "`/ping` Pong! \n`/miss` or [Name] You can miss someone. \n`/come` Notice people that `KEN` is joined discord. \n`/love` to give a love")
      .setFooter(`Thanks for reading. **${member.guild.name}**`)
      .setTimestamp(Date.now())

      member.send(inembed);

      let inreportembed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setTitle(`${member} just join the server,`)
      .setThumbnail(memberavatar)
      .addField('Name:', `${member}`)
      .addField(`${member} join the Server`, '🎉🎉🎉')
      .addField('The server now as', `${member.guild.memberCount}` + " members")
      .setFooter(`Hello. **${member.guild.name}**`)
      .setTimestamp()

      bot.channels.find(x => x.name === 'join-leave-report').send(inreportembed);
});

bot.on('guildMemberAdd', member => {

  console.log(`${member}`, "has joined" + `${member.guild.name}`)

});

bot.on('guildMemberRemove', member => {
  let memberavatar = member.user.avatarURL
      let outembed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setTitle(`You just left the server, ${member}`)
      .setThumbnail(memberavatar)
      .addField('Name:', `${member}`)
      .addField('Left the Server', '😥😥😥')
      .addField('Bye Bye 😥', 'We will all miss you!')
      .addField('The server now as', `${member.guild.memberCount}` + " members")
      .setFooter(`Goodbye. **${member.guild.name}**`)
      .setTimestamp()

      member.send(outembed);

      let outreportembed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setTitle(`${member} just left the server,`)
      .setThumbnail(memberavatar)
      .addField('Name:', `${member}`)
      .addField(`${member} left the Server`, '😥😥😥')
      .addField('The server now as', `${member.guild.memberCount}` + " members")
      .setFooter(`Goodbye. **${member.guild.name}**`)
      .setTimestamp()

      bot.channels.find(x => x.name === 'join-leave-report').send(outreportembed);
});

bot.on('guildMemberRemove', member => {
  console.log(`${member}` + "has left" + `${member.guild.name}` + "Sending leave message now")
  console.log("Leave Message Sent")
});

bot.on('message', msg => {

    if (msg.author.bot || msg.channel.type !== 'text') return
	if (!msg.content.toLowerCase().startsWith(config.prefix)) return
	const args = msg.content.slice(config.prefix.length).trim().split(/ +/g)
	const cmd = args.shift().toLowerCase()
	try{
        cmdFile = require(`./commands/${cmd}.js`)
		cmdFile.run(bot, msg, args);
    }catch(e){}

    let xpAdd = Math.floor(Math.random() * 7) + 8;
  console.log(xpAdd);

  if(!xp[msg.author.id]){
    xp[msg.author.id] = {
      xp: 0,
      level: 1
    };
  }

  let curxp = xp[msg.author.id].xp;
  let curlvl = xp[msg.author.id].level;
  let nxtLvl = xp[msg.author.id].level * 300;
  xp[msg.author.id].xp =  curxp + xpAdd;
  if(nxtLvl <= xp[msg.author.id].xp){
    xp[msg.author.id].level = curlvl + 1;
    let lvlup = new Discord.RichEmbed()
    .setTitle("GG Level Up!")
    .setColor("RANDOM")
    .addField("New Level", curlvl + 1);

    msg.channel.send(lvlup).then(msg => {msg.delete(5000)});
  }
  fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
    if(err) console.log(err)
  });

  let GP = msg.guild.roles.find(`name`, "General Public");
  if(xp[msg.author.id].level === 5) {

    msg.member.addRole(GP)
    msg.member.removeRole(AU)
    msg.member.removeRole(Fans)

  }

  let AU = msg.guild.roles.find(`name`, "Active User");
  if(xp[msg.author.id].level === 10) {
    
    msg.member.addRole(AU)
    msg.member.removeRole(GP)
    msg.member.removeRole(Fans)

  }

  let Fans = msg.guild.roles.find(`name`, "Fans");
  if(xp[msg.author.id].level === 20) {
    
    msg.member.addRole(Fans)
    msg.member.removeRole(GP)
    msg.member.removeRole(AU)

  }

    if (!msg.guild) return;
    
});

bot.login(config.token);
