const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('info')
        .setDescription('Affiche des informations.')
        .addSubcommand(subcommand =>
            subcommand
                .setName('user')
                .setDescription('Affiche des informations sur un utilisateur.'))
        .addSubcommand(subcommand =>
            subcommand
                .setName('server')
                .setDescription('Affiche des informations sur le serveur.')),
    async execute(interaction) {
        await interaction.reply('Utilisez `/info user` pour obtenir des informations sur un utilisateur ou `/info server` pour obtenir des informations sur le serveur.');
    },
    async user(interaction) {
        const user = interaction.options.getUser('user') || interaction.user;
        const joinDate = interaction.guild.members.cache.get(user.id).joinedAt;
        await interaction.reply(`Nom de l'utilisateur : ${user.username}\nDate d'arrivée sur le serveur : ${joinDate}`);
    },
    async server(interaction) {
        const guild = interaction.guild;
        await interaction.reply(`Nom du serveur : ${guild.name}\nNombre de membres : ${guild.memberCount}`);
    },
};
