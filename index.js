const TelegramBot = require('node-telegram-bot-api');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

const urlencodedParser = bodyParser.json();

app.use(cors());

app.post('/api/callback', urlencodedParser, async (req, res) => {
    try {
        res.status(200).json({ status: res.statusCode })
        const { name, number } = req.body;
        console.log({ name: name, number: number });
        console.log({ headers: req.headers });
    } catch (e) {
        res.status(500).json({ error: 'Something go wrong' });
    }
});

app.get('/api/callback', async (req, res) => {
    try {
        res.status(200).json({ status: res.statusCode });
        res.end();
    } catch (e) {
        res.status(500).json({ error: 'Something go wrong' });
    }
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});