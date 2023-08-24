const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

// Mount homeRoutes at the root path and apiRoutes under '/api'
router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;
