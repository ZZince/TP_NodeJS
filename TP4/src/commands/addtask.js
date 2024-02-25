const fs = require('fs');
const path = require('path');
const { SlashCommandBuilder } = require('discord.js');

const getTodoListPath = (userId) => {
    const todolistDir = path.join(__dirname, '..', '../todolist');
    if (!fs.existsSync(todolistDir)) {
        fs.mkdirSync(todolistDir);
    }
    return path.join(todolistDir, `${userId}.json`);
};

module.exports = {
    data: new SlashCommandBuilder()
        .setName('addtask')
        .setDescription('Ajoute une tâche à la todolist de l\'utilisateur.')
        .addStringOption(option =>
            option.setName('task')
                .setDescription('La tâche à ajouter')
                .setRequired(true)),
    async execute(interaction) {
        const userId = interaction.user.id;
        const task = interaction.options.getString('task');

        const todoListPath = getTodoListPath(userId);

        try {
            let todoList = [];
            if (fs.existsSync(todoListPath)) {
                todoList = JSON.parse(fs.readFileSync(todoListPath, 'utf-8'));
            }

            todoList.push({ task, completed: false });

            fs.writeFileSync(todoListPath, JSON.stringify(todoList, null, 4));

            await interaction.reply(`Tâche "${task}" ajoutée à votre todolist.`);
        } catch (error) {
            console.error('Erreur lors de l\'ajout de la tâche à la todolist :', error);
            await interaction.reply('Une erreur est survenue lors de l\'ajout de la tâche à votre todolist.');
        }
    },
};
