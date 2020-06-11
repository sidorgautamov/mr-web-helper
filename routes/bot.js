const TelegramBot = require('node-telegram-bot-api');
const { Router } = require('express');
const router = Router();

const ACCESS_TOKEN = '1096056267:AAE7ug9aPWDsVS-ZfLMvhuh3FmsQ3WV5UqI';
const GROUP_ID = '-465584229';
const URL = 'https://e4c77f7e67c4.ngrok.io/api/callback';
const bot = new TelegramBot(ACCESS_TOKEN);
//bot.setWebHook(URL);

router.post('/callback', async (req, res) => {
    try {
        const { name, number } = req.body;
        console.log({ имя: name, номер: number });
    } catch (e) {
        res.status(500).json({ message: 'Something go wrong' });
    }
});

router.get('/callback', async (req, res) => {
    try {
        res.status(200).json({ status: res.statusCode });
        res.end();
    } catch (e) {
        res.status(500).json({ message: 'Something go wrong' });
    }
});

module.exports = router;