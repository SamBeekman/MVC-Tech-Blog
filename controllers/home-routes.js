const router = require('express').Router();
const { Post, User } = require('../models');

// Route to render homepage 
router.get('/', async (req, res) => {
    try {
        // Get all projects and JOIN with user data
        const postData = await Post.findAll({
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
            ],

        });

        console.log(postData);

        // Serialize data so the template can read it
        const posts = postData.map((post) => post.get({ plain: true }));
        res.render('homepage', {
            posts,
            loggedIn: req.session.loggedIn
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Route to render dashboard 
router.get('/dashboard', async (req, res) => {
    try {
        if (req.session.loggedIn) {

            const userPosts = await Post.findAll({
                include: [
                    {
                        model: User,
                        // attributes: ['username'],
                        attributes: ['id'],
                    },
                ],
                where:
                {
                    id: req.session.userId
                },
                raw: true,
                nest: true
            });




            res.render('dashboard', { loggedIn: req.session.loggedIn, userPosts });
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
        res.redirect('/');
        return;
    }
    res.render('login');
});

// Route to render single post
router.get('/post/:id', async (req, res) => {
    try {

        const singlePost = await Post.findOne({
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
            ],
            where:
            {
                id: req.params.id
            },
            raw: true,
            nest: true
        });


        res.render('post',
            {
                singlePost,
                loggedIn: req.session.loggedIn
            });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;   