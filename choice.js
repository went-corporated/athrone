const { SlashCommandBuilder } = require('@discordjs/builders');
const { CommandInteraction } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('choice')
        .setDescription('zhou ven tou wotanne toshatey.')
        .addStringOption(option =>
            option.setName('Appréciez-vous le bot Athrone ?')
                .setDescription('Faites votre choix !')
                .setRequired(true)
                .addChoice('Je ladore !', '1')
                .addChoice('Ca va.', '2')
                .addChoice('Je le déteste !', '3')),
    /**
     * 
     * @param {CommandInteraction} interaction 
     */
    async execute(interaction) {
        const choice = interaction.options.getString('choice');

        if (choice === '1') {
            await interaction.reply("Merci.")
        } else if (choice === '2') {
            await interaction.reply("Ah.")
        } else {
            await interaction.reply("Désolé.")
        }
    }
}