const router = require('express').Router();

// Route to render homepage 
router.get('/', async (req, res) => {
    try {
        res.render('dashboard', { loggedIn: req.session.loggedIn });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

module.exports = router;   