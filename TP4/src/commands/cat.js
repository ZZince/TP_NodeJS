const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('cat')
        .setDescription('Affiche une image aléatoire.'),
    async execute(interaction) {
        try {
            const fetch = await import('node-fetch');

            const seed = Math.floor(Math.random() * 1000);
            const h = Math.floor(Math.random() * 500) + 100;
            const w = Math.floor(Math.random() * 500) + 100;

            const imageUrl = `https://picsum.photos/seed/${seed}/${h}/${w}`;

            const response = await fetch.default(imageUrl);

            if (!response.ok) {
                throw new Error('Failed to fetch image');
            }

            await interaction.reply({ files: [imageUrl] });
        } catch (error) {
            console.error(error);
            await interaction.reply('Une erreur est survenue lors de la récupération de l\'image aléatoire.');
        }
    },
};
