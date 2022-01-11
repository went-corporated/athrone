const { SlashCommandBuilder } = require('@discordjs/builders');
const { CommandInteraction, MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('youtube')
        .setDescription('Donne le lien de ma chaîne ytb'),
    /**
     * 
     * @param {CommandInteraction} interaction 
     */
    async execute(interaction) {
        const row = new MessageActionRow()
            .addComponents(new MessageButton()
                .setLabel('Youtube')
                .setStyle('LINK')
                .setURL('https://stage3.abeille.com/chat')
            );
        await interaction.reply({content: 'Clique sur btn for discover ytb channel', components: [row] });
    }
}