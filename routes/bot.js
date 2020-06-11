const TelegramBot = require('node-telegram-bot-api');
const { Router } = require('express');
const cors = require('cors');
const router = Router();

const URL = process.env.url;
const ACCESS_TOKEN = process.env.access_token;
const GROUP_ID = process.env.group_id;

const bot = new TelegramBot(ACCESS_TOKEN);
bot.setWebHook(URL);

router.use(cors());

router.post('/bot/callback', async (req, res, next) => {
    try {
        res.status(200).json({ status: res.statusCode })
        const { name, number } = req.body;
        console.log({ name: name, number: number });
        bot.sendMessage(GROUP_ID, `Имя: ${name} Номер: ${number}`);
    } catch (e) {
        res.status(500).json({ error: e.message });
        
    }
});

router.get('/bot/callback', async (req, res, next) => {
    try {
        res.status(200).json(`WebHook URL - ${URL}`);
        res.end();
        next();
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

module.exports = router;