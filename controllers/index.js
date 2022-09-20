const router = require('express').Router();

const apiRoute = require('./api');
const homeRoute = require('./homeRoute');
const dashboardRoute = require('./dashboardRoute.js');

router.use('/', homeRoute);
router.use('/api', apiRoute);
router.use('/dashboard', dashboardRoute);

module.exports = router;
