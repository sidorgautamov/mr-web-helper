const express = require('express');

const app = express();
const PORT = 5000;
const URL = 'http://localhost';

app.get('/api/callback', (req, res) => {
    res.send(`Status ${res.statusCode}`);
});

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