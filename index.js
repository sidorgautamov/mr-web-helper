const TelegramBot = require('node-telegram-bot-api');
const express = require('express');

const app = express();
const PORT = process.env.port;
const ACCESS_TOKEN = process.env.access_token;
const GROUP_ID = process.env.group_id;
const URL = process.env.url;
const bot = new TelegramBot(ACCESS_TOKEN);
bot.setWebHook(URL);

app.use('api/', require('./routes/bot.routes'));

async function startServer() {
    try {
        app.listen(PORT, () => {
            console.log(`Listening on port ${PORT}`);
        });
    } catch (e) {
        console.log(`Server Error: ${e}`);
        process.exit(1);
    }
}

startServer();