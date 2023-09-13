const router = require('express').Router();
const { User, Post, Comment } = require('../../models');

// CREATE new user
router.post('/', async (req, res) => {
    try {
        const dbUserData = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,

        });

        req.session.save(() => {
            req.session.loggedIn = true;
            req.session.userId = dbUserData.id;

            res.status(200).json(dbUserData);
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Login
router.post('/login', async (req, res) => {
    try {
        const dbUserData = await User.findOne({
            where: {
                username: req.body.username,
            },
        });

        if (!dbUserData) {
            res
                .status(400)
                .json({ message: 'Email address not found!' });
            return;
        }

        const validPassword = await dbUserData.checkPassword(req.body.password);

        if (!validPassword) {
            res
                .status(400)
                .json({ message: 'Incorrect password. Please try again!' });
            return;
        }

        req.session.save(() => {
            req.session.loggedIn = true;
            req.session.userId = dbUserData.id;
            console.log(req.session.cookie);

            res
                .status(200)
                .json({ user: dbUserData, message: 'You are now logged in!' });
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Logout
router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});


// Create Post

router.post('/userpost', async (req, res) => {
    try {

        const userPost = await Post.create({
            post_title: req.body.post_title,
            description: req.body.description,
            // user_id:
        })

    } catch {
        console.log(err);
        res.status(500).json(err);
    }
});


// Create comment

router.post('/usercomment', async (req, res) => {
    try {

        const userPost = await Comment.create({
            description: req.body.description,
            // user_id:
            // post_id:
        })

    } catch {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;