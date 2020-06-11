const { Router } = require('express');
const router = Router();

router.post('/bot/callback', async (req, res) => {
    try {
        const { name, number } = req.body;
        console.log({ имя: name, номер: number });
    } catch (e) {
        res.status(500).json({ message: 'Something go wrong' });
    }
});

router.get('/bot/callback', async (req, res) => {
    try {
        res.status(200).json({ status: res.statusCode });
        res.end();
    } catch (e) {
        res.status(500).json({ message: 'Something go wrong' });
    }
});

module.exports = router;