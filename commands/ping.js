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
        await interaction.reply('Pong');

        const message = await interaction.fetchReply();

        return interaction.editReply(`Message took ${message.createdTimestamp - interaction.createdTimestamp}ms to going byphlllohythe.\nYour ping is about ${interaction.client.ws.ping}ms.`);
    }
}