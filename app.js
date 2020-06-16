const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const indexRoutes = require('./routes/index');
const botRoutes = require('./api/bot');

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
    if (req.method === 'OPTIONS') {
        req.header('Access-Control-Allow-Methods', 'GET, POST');
        return res.status(200).json({});
    }
    next();
});

app.use('/', indexRoutes);
app.use('/api', botRoutes);

app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({ error: err.message });
});

module.exports = app;
