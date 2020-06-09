const TelegramBot = require('node-telegram-bot-api');
const express = require('express');
const config = require('config');

const app = express();
const PORT = config.get('port') || 3000;
const ACCESS_TOKEN = config.get('access_token');
const URL = config.get('url');
const GROUP_ID = config.get('group_id');
const bot = new TelegramBot(ACCESS_TOKEN);
bot.setWebHook(URL);

app.use('/', require('./routes/bot.routes'))

async function startServer() {
    try {
        app.listen(PORT, () => {
            console.log(`Listening on port ${PORT}`);
        });
        bot.sendMessage(GROUP_ID, 'Mssg f/ VSCode');
    } catch (e) {
        console.log(`Server Error: ${e}`);
        process.exit(1);
    }
}

startServer();