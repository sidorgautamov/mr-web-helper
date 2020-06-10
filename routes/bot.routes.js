const { Router } = require('express');
const router = Router();

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