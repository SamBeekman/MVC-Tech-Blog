const router = require('express').Router();

//backend
const apiRoutes = require('./api');
router.use('/api', apiRoutes);

//frontend call
const homeRoutes = require('./home-routes');
router.use('/', homeRoutes);

//login page
const loginRoutes = require('./login-routes');
router.use('/login', loginRoutes);

//dashboard page
const dashboardRoutes = require('./dashboard-routes');
router.use('/dashboard', dashboardRoutes);


module.exports = router;
