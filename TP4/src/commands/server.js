const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('server')
        .setDescription('Affiche des informations sur le serveur.'),
    async execute(interaction) {
        const guild = interaction.guild;
        await interaction.reply(`Nom du serveur : ${guild.name}\nNombre de membres : ${guild.memberCount}`);
    },
};
