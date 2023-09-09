const router = require('express').Router();

// Route to render homepage 
router.get('/', async (req, res) => {
    try {
        res.render('homepage', { loggedIn: req.session.loggedIn });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

// Route to render dashboard 
router.get('/dashboard', async (req, res) => {
    try {
        if (req.session.loggedIn) {
            res.render('dashboard', { loggedIn: req.session.loggedIn });
            return;
        }
        res.redirect('/login');

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

// Route to render login
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/'); // change here for relocation
      return;
    }
    res.render('login');
  });

module.exports = router;   