const express = require('express');
const router = express.Router();
const path = require('path');

router.use(express.static(path.join(__dirname, './../client/build')));

router.get('/', (req, res, next) => {
    res.status(200);
    res.sendRender(path.join(__dirname, './../client/build', 'index.html'));
    res.end();
});

module.exports = router;