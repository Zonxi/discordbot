const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'help',
    UserPerms: ["ADMINISTRATOR"],
    BotPerms: ["ADMINISTRATOR"],
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args, Discord) => {
        //now lets start the embed!
        // this the embed template
        const embed = new Discord.MessageEmbed()
            .setColor('#ff0000') // Over here we can put the color of the embed => hex code or in caps
            .setTitle('Z bot help commands') // This is the title of the embed
            .setAuthor('Zonxi!', 'https://cdn.discordapp.com/attachments/793657622871408650/875609553616658462/xc2CRkc1.png') // The author comes above the title, so the first part is the text and second is the icon.. let me get a icon url
            .setDescription('help commands') // this is right below the title
            .setThumbnail('https://cdn.discordapp.com/attachments/793657622871408650/875609553616658462/xc2CRkc1.png') // Thumbnail comes next to the title its a image
            .addFields(
                { name: 'Field 1', value: 'hi' }, // There are fields
                { name: 'Field 2', value: 'holla' }, // lets add one more field and remove the \u200b
                //{ name: '\u200B', value: '\u200B' }, // this is optional.. the \u200b is for leaving space under the first field
            )
            .addField('Field 4', 'sup') // now i will show u what the true does
            .addField('Field 5', 'hello') // this is a normal field.. the true is for making it inline.. you can make it false and try it
            .setTimestamp() // this will give the time when the embed was sent
            .setFooter('footer', 'https://cdn.discordapp.com/attachments/793657622871408650/875609553616658462/xc2CRkc1.png'); // right bellow the embed

        message.channel.send({ content: 'All ur help commands', embeds: [embed] }); // make sure to put {embeds: [embed]}
    }
}