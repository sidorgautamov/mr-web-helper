const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.port;

app.use(bodyParser.json());

app.use('/api', require('./routes/bot.js'));

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});