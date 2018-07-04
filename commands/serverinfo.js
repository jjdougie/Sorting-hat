const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
        let sicon = message.guild.iconURL;
        let serverembed = new Discord.RichEmbed()
        .setDescription("Sever Information")
        .setColor("#CD853F")
        .setThumbnail(sicon)
        .addField("Server Name", message.guild.name)
        .addField("Sort Server", "Harry Potter roleplay and socialising server.")
        .addField("Created On", message.guild.createdAt)
        .addField("You Joined", message.member.joinedAt)
        .addField("Total Members", message.guild.memberCount);

        return message.channel.send(serverembed).then(msg => {msg.delete(10000)});
}

module.exports.help = {
    name: "serverinfo"
}
