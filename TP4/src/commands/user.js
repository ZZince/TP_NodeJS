const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('user')
        .setDescription('Affiche des informations sur l\'utilisateur.'),
    async execute(interaction) {
        const user = interaction.user;
        const joinDate = interaction.guild.members.cache.get(user.id).joinedAt;
        await interaction.reply(`Nom de l'utilisateur : ${user.username}\nDate d'arrivée sur le serveur : ${joinDate}`);
    },
};
