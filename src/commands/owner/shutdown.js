const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('shutdown')
        .setDescription('Shuts down the bot'),

    async execute(interaction, client) {
        //Command Log
        const commandName = "SHUTDOWN";
        const logEmbed = new EmbedBuilder()
        .setColor("#00FF00")
        .addFields(
            { name: "Command", value: `${commandName}`},
            { name: "User", value: `<@!${interaction.user.id}>`},
            { name: "Channel"}
        )
        client.channels.cache.get(client.config.LOGS.CHANNEL_ID).send({ embeds: [logEmbed]});
    
        //Command Code
        try {
            if (interaction.user.id != client.config.OWNER_ID) {
                return interaction.reply({ content: "This command is for developers", ephemeral: true });
            }
            interaction.reply({ content: "Shutting down bot Now!" }).then((m) => {
                client.destroy();
            });

        } catch(err) {
            //Error Log
            const errTag = client.config.LOGS.TAG;
            const errEmbed = new EmbedBuilder()
            .setTitle(client.config.LOGS.MESSAGE)
            .setDescription(`${err}`)
            .addFields(
                { name: "Commands", value: `${commandName}`},
                { name: "User", value: `<@!${interaction.user.id}>`},
                { name: "Channel", value: `<#${interaction.channel.id}>`}
            )
            client.channels.cache.get(client.config.LOGS.CHANNEL_ID).send({ content: `${errTag}`, embeds: [errEmbed] });
        }
    }
}