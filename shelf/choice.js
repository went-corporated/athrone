const { SlashCommandBuilder } = require('@discordjs/builders');
const { CommandInteraction } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('choice')
        .setDescription('Faites votre choix !')
        .addStringOption(option =>
            option.setName('choice')
            .setDescription('Faites votre choix !')
            .setRequired(true)
            .addChoice('Je l\'adore !', '1')
            .addChoice('Ca va.', '2')
            .addChoice('Je le déteste !', '3')),
    /**
     * 
     * @param {CommandInteraction} interaction 
     */
    async execute(interaction) {
        const choice = interaction.options.getString('choice');

        await interaction.reply(choice);
    }
}