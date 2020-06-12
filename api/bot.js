const express = require('express');
const fetch = require('node-fetch');

const router = express.Router();
const access_token = process.env.access_token;
const group_id = proces.env.group_id;

router.get('/bot/callback', (req, res, next) => {
    res.status(200).json({ Status: res.statusCode });
    res.end();
});

router.post('/bot/callback', (req, res, next) => {
    res.status(200).json({ Status: res.statusCode });
    const { name, number } = req.body;
    const message = `Имя: ${name} Номер: ${number}`;
    fetch(`https://api.telegram.org/bot${access_token}/senMessage?chat_id=${group_id}&text=${message}`);
    res.end();
});

module.exports = router;