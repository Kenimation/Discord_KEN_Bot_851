const Discord = require('discord.js');
const config = require("./config.json");
const bot = new Discord.Client();

bot.on('ready', () => {
  console.log(`Connect as ${bot.user.tag}!`)

  bot.channels.find(x => x.name === 'general').send('@KEN I am connecting')
});

bot.on('message', msg => {
  if (msg.content === 'hi') {
    msg.reply('welcome to Kenimation Discord Server.');
  }
  else if (msg.content === 'hi ken') {
    msg.reply('welcome to Kenimation Discord Server.');
  }
  else if (msg.content === 'hello') {
    msg.reply('welcome to Kenimation Discord Server.');
  }
  else if (msg.content === 'hello ken') {
    msg.reply('welcome to Kenimation Discord Server.');
  }
  else if (msg.content === 'KEN Bot are you good') {
    msg.reply('I am not sure about this. My owner is first time coding. He has tried very hard to build me...');
  }
  else if (msg.content === 'Is Ken a boy') {
    msg.reply('Yes, maybe...');
  }
  else if (msg.content === 'Is Ken a trap') {
    msg.reply('Sorry,my owner has not told me that...');
  }
  else if (msg.content === 'Is Ken gay') {
    msg.reply('No one knows in the world...');
  }
  else if (msg.content === 'Is Tommy a boy') {
    msg.reply('No, I am sure');
  }
  else if (msg.content === 'Is Tommy a trap') {
    msg.reply('My owner has told me that he is a trap...');
  }
  else if (msg.content === 'Is Tommy gay') {
    msg.reply('No one knows in the world...');
  }
  else if (msg.content === 'Is Heyson a boy') {
    msg.reply('Go find Hit or Miss?');
  }
  else if (msg.content === 'Is Heyson a trap') {
    msg.reply('No, but he may be gay...');
  }
  else if (msg.content === 'Is Heyson gay') {
    msg.reply('Yes, definitely, absolutely');
  }
  else if (msg.content === 'Where is 3%') {
    msg.reply('No one knows in the world...');
  }
  else if (msg.content === 'Who is 3%') {
    msg.reply('My owner said that he do not know...');
  }
  else if (msg.content === 'Is ken bad at animating') {
    msg.reply('I think he is not well done but he has tried very hard :)');
  }
  else if (msg.content === 'Is Temmie the best girl') {
    msg.reply('Tommy think yes but my owner....');
  }
  else if (msg.content === 'Is Mary the best girl') {
    msg.reply('Yes, definitely, absolutely!');
  }
  else if (msg.content === 'Is Iommy bad at animating') {
    msg.reply('He is good at Cinema 4D and 2D Animation :/');
  }
  else if (msg.content === 'KEN Bot music') {
    msg.reply('You may go Music room click `!help` to use Rythm-Bot');
  }
  else if (msg.content === ':l') {
    msg.reply(':l');
  }
  else if (msg.content === ':3') {
    msg.reply(':3');
  }
  else if (msg.content === '=_=') {
    msg.reply('=_=');
  }
  if (msg.author == bot.user) { // Prevent bot from responding to its own messages
      return
  }

  if (msg.content.startsWith("/")) {
      processCommand(msg)
  }

  if (msg.content.startsWith("?")) {
      questionCommand(msg)
  }
});

function processCommand(msg) {
    let fullCommand = msg.content.substr(1) // Remove the leading exclamation mark
    let splitCommand = fullCommand.split(" ") // Split the message up in to pieces for each space
    let primaryCommand = splitCommand[0] // The first word directly after the exclamation is the command
    let arguments = splitCommand.slice(1) // All other words are arguments/parameters/options for the command

    console.log("Command received: " + primaryCommand)
    console.log("Arguments: " + arguments) // There may not be any arguments

    if (primaryCommand == "help") {
        helpCommand(arguments, msg)
    } else if (primaryCommand == "multiply") {
        multiplyCommand(arguments, msg)
    } else if (primaryCommand == "miss") {
        missCommand(arguments, msg)
    } else if (primaryCommand == "skip") {
        skipCommand(arguments, msg)
    } else if (primaryCommand == "play") {
        playCommand(arguments, msg)
    } else if (primaryCommand == "come") {
        comeCommand(arguments, msg)
    } else {
        msg.channel.send("I don't understand the command. Try `/help` or `Ask Ken`")
    }
}

function questionCommand(msg) {
    let fullCommand = msg.content.substr(1) // Remove the leading exclamation mark
    let splitCommand = fullCommand.split(" ") // Split the message up in to pieces for each space
    let primaryCommand = splitCommand[0] // The first word directly after the exclamation is the command
    let arguments = splitCommand.slice(1) // All other words are arguments/parameters/options for the command

    console.log("Command received: " + primaryCommand)
    console.log("Arguments: " + arguments) // There may not be any arguments

    if (primaryCommand == "animation") {
        animationCommand(arguments, msg)
    } else if (primaryCommand == "sharescreen") {
        sharescreenCommand(arguments, msg)
    } else {
        msg.channel.send("I don't understand the command. Try `/help` or `Ask Ken`")
    }
}




function helpCommand(arguments, msg) {
    if (arguments.length > 0) {
        msg.channel.send("It looks like you might need help with " + arguments)
    } else {
        msg.channel.send("I'm not sure what you need help with. Try `/help [topic]`")
    }
}

function multiplyCommand(arguments, msg) {
    if (arguments.length < 2) {
        msg.channel.send("Not enough values to multiply. Try `/multiply 2 4 10` or `/multiply 5.2 7`")
        return
    }
    let product = 1
    arguments.forEach((value) => {
        product = product * parseFloat(value)
    })
    msg.channel.send("The product of " + arguments + " multiplied together is: " + product.toString())
}

function missCommand(arguments, msg) {
    if (arguments.length > 0) {
        msg.channel.send("I bet " + arguments + " doesn't miss ya")
    } else {
        msg.channel.send("@everyone Hit or Miss")
    }
}
function comeCommand(arguments, msg) {
    if (arguments.length > 0) {
        msg.channel.send(arguments + " ,why not join discord.")
    } else {
        msg.channel.send("@everyone KEN has arrived!!!!!! Everyone join discord.")
    }
}

function sharescreenCommand(arguments, msg) {
    if (arguments.length > 0) {
        msg.channel.send(arguments + "why not watch my sharescreen")
    } else {
        msg.channel.send("If you want sharescreen. You have to get sharescreen code right voice channel first.")
    }
}

function animationCommand(arguments, msg) {
    if (arguments.length > 0) {
        msg.channel.send(arguments + ",can you show me some of animation?")
    } else {
        msg.channel.send("If you want animation. You can go animation text room share animations or talk about animation..")
    }
}

bot.login(config.token);
