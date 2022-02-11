const { SlashCommandBuilder } = require('@discordjs/builders');
const { CommandInteraction } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Test the bot connection status.'),
    /**
     * 
     * @param {CommandInteraction} interaction 
     */
    async execute(interaction) {
        await interaction.reply(`@${message.author.id}`);

        // const message = await interaction.fetchReply();
        // return interaction.reply(`@${targetMember.user.id}`);
    }
}