const Discord = require("discord.js");
const config = require("../config");

module.exports.run = async (bot, msg, arguments) => {
    if (arguments.length > 0) {
        msg.channel.send("I bet " + arguments + " doesn't miss ya😘")
    } else {
        msg.channel.send("@everyone Hit or Miss 😍😍😍")
}}

module.exports.config = {
    command: "miss"
}