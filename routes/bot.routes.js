const TelegramBot = require('node-telegram-bot-api');
const { Router } = require('express');
const router = Router();

const ACCESS_TOKEN = process.env.access_token;
const GROUP_ID = process.env.group_id;
const bot = new TelegramBot(ACCESS_TOKEN);
bot.setWebHook(URL);

router.post('/callback', async (req, res) => {
    try {
        res.status(200);
        res.send('this is response');
        res.end();
    } catch (e) {
        res.status(500).json({ message: 'Something go wrong' });
    }
});

module.exports = router;