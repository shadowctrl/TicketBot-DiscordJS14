const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const fs = require('fs');
require('dotenv').config();

module.exports = (client) => {
    client.commandHandler = async () => {
        const commandFolders = fs.readdirSync('./src/commands');
        // Loop through command folders
        for (const folder of commandFolders) {
            const commandFiles = fs
                .readdirSync(`./src/commands/${folder}`)
                .filter((file) => file.endsWith('.js'));

            const { commands, commandArray } = client;

            // Loop through command files
            for (const file of commandFiles) {
                const command = require(`../../commands/${folder}/${file}`);

                // Add the command to the command collection and array

                commands.set(command.data.name, command);
                commandArray.push(command.data.toJSON());
                console.log(`COMMANDS LOADED: ${command.data.name}`)
            }
        }

        const rest = new REST({ version: 9 }).setToken(process.env.token);

        try {
            console.log('\x1b[34m%s\x1b[0m', 'SLASH: Started refreshing application commands');

            await rest.put(

                Routes.applicationCommands(process.env.CLIENT_ID),
                {
                    body: client.commandArray
                },

                Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
                {
                    body: client.commandArray
                });

            console.log('\x1b[32m%s\x1b[0m', 'SLASH: Successfully refreshed application commands');
        } catch (error) {
            console.log(error);
            console.log('\x1b[31m%s\x1b[0m', "WARNING: Your set Client / Guild ID seems to be invalid.");
        }

    };

}