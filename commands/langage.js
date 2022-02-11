const { SlashCommandBuilder } = require('@discordjs/builders');
const { CommandInteraction, MessageActionRow, MessageButton, MessageSelectMenu, User } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('sondage')
        .setDescription('Choisi ton langage de programmation favoris'),
    /**
     * 
     * @param {CommandInteraction} interaction 
     */
    async execute(interaction) {
        const row = new MessageActionRow()
            .addComponents(new MessageSelectMenu()
                .setCustomId('select-language')
                .setPlaceholder('Sélectionne ton langage favoris')
                .addOptions([
                    {
                        label: 'C#',
                        description: 'Développeur .NET',
                        value: 'C#'
                    },
                    {
                        label: 'Python',
                        description: 'Développeur Python',
                        value: 'Python'
                    },
                    {
                        label: 'Dart',
                        description: 'Développeur Dart',
                        value: 'Dart'
                    },
                    {
                        label: 'JavaScript',
                        description: 'Développeur WEB',
                        value: 'JavaScript'
                    }
                ])
            );
        return interaction.reply({content: 'Quel est ton langage de programmation préféré ?', components: [row] });
    }
}