const { Router } = require('express');
const router = Router();

router.post('/', async (req, res) => {
    try {
        res.status(200);
    } catch (e) {
        res.status(500).json({ message: 'Something go wrong' });
    }
});

module.exports = router;