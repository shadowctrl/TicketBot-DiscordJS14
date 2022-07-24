const moment = require('moment');
const tz = require('moment-timezone');

module.exports = {
    name: 'ready',
    once: true,

    async execute(client) {
        console.log('\x1b[36m%s\x1b[0m', `\nBOT: Ready! Logged in as ${client.user.tag}\n`);

        const activities = [
            "Queries 24/7!",
            "EliteX RolePlay ❤️",
            "Ticket.exe",
            "your Tickets and Finding Solutions",
            "Music and Vibing",
            "discord.gg/elitexrp",
            "Grand Theft Auto V",
            "Red Dead Redemption II"
        ];
        console.log('Developed For EliteX Rp <3');

        setInterval(() => {
            const randomIndex = Math.floor(Math.random() * (activities.length - 1) + 1);
            const newActivity = activities[randomIndex];
            client.user.setActivity(newActivity,{ type : "PLAYING"});
        }, 5000);

        const needDatenTime = client.config.DATE.ENABLE;

        /*if (needDatenTime == "true") {
            console.log('\x1b[32m%s\x1b[0m', 'ENABLED DATE Update');
            const TIMEZONE = client.config.DATE.TIMEZONE;
            const FORMAT = client.config.DATE.FORMATDate;
            const CHANNEL_ID = client.config.DATE.CHANNEL_ID;
            const UPDATE_INTERVAL = client.config.DATE.UPDATE_INTERVAL;

            const timeNow = moment().tz(TIMEZONE).format(FORMAT);
            const clockChannel = client.channels.cache.get(CHANNEL_ID);
            clockChannel.edit({ name: `🕒 ${timeNow}` }, 'Clock update').catch(console.error);

            setInterval(() => {
                const timeNowUpdate = moment().tz(TIMEZONE).format(FORMAT);
                clockChannel.edit({ name: `🕒 ${timeNowUpdate}` }, 'Clock update').catch(console.error);
            }, UPDATE_INTERVAL);

        } else if (needDatenTime == "false") {
            console.log('\x1b[32m%s\x1b[0m', 'DISABLED DATE Update');
        } else {
            console.log('\x1b[31m%s\x1b[0m', 'Error Has been occured at Time and Date!');
        }*/
    
    },
};