const express = require('express');

const app = express();
const PORT = process.env.port;
const URL = process.env.url;

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