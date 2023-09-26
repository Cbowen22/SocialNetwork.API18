const router = require('express').router();
const thoughtRte = require('./thoughtRte');
const userRte = require('./userRte');
router.use('/thoughts', thoughtRte);
router.use('/users', userRte);
module.exports = router;