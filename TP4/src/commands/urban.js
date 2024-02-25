const { SlashCommandBuilder } = require('discord.js');
const axios = require('axios');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('urban')
        .setDescription('Recherche un terme sur Urban Dictionary.')
        .addStringOption(option =>
            option.setName('terme')
                .setDescription('Le terme à rechercher')
                .setRequired(true)),
    async execute(interaction) {
        const term = interaction.options.getString('terme');
        const url = `https://api.urbandictionary.com/v0/define?term=${encodeURIComponent(term)}`;

        try {
            const response = await axios.get(url);
            if (!response.data.list || response.data.list.length === 0) {
                await interaction.reply(`Aucune définition trouvée pour le terme "${term}".`);
            } else {
                const definition = response.data.list[0].definition;
                await interaction.reply(`**${term}** : ${definition}`);
            }
        } catch (error) {
            console.error('Erreur lors de la recherche sur Urban Dictionary :', error);
            await interaction.reply('Une erreur est survenue lors de la recherche sur Urban Dictionary.');
        }
    },
};
