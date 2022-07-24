const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        // The name of your Command
        .setName('ping')
        // The description of your Command
        .setDescription('The classic Ping command!'),

    async execute(interaction, client) {
        await interaction.reply({content: `Pong! ${client.ws.ping}ms`})
    }
}